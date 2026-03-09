# Run Spring Boot on port 8081 reliably by freeing the port first.
# Usage: .\run-8081.ps1

$ErrorActionPreference = 'Stop'

function Get-ListeningPidsByPort([int]$Port) {
  $pattern = ":$Port\s+.*LISTENING\s+(\d+)"
  $lines = netstat -ano | Select-String -Pattern ":$Port\b"
  $pids = @()

  foreach ($line in $lines) {
    $m = [regex]::Match($line.Line, $pattern)
    if ($m.Success) {
      $pids += [int]$m.Groups[1].Value
    }
  }

  $pids | Select-Object -Unique
}

function Get-ProcessInfo([int]$ProcessId) {
  try {
    $w = Get-CimInstance Win32_Process -Filter "ProcessId=$ProcessId"
    if (-not $w) { return $null }
    return [pscustomobject]@{
      PID         = $ProcessId
      Name        = $w.Name
      CommandLine = $w.CommandLine
    }
  } catch {
    return [pscustomobject]@{
      PID         = $ProcessId
      Name        = $null
      CommandLine = $null
    }
  }
}

$port = 8081
$pids = Get-ListeningPidsByPort -Port $port

if ($pids.Count -gt 0) {
  Write-Host "Port $port is in use by PID(s): $($pids -join ', '). Stopping..." -ForegroundColor Yellow
  foreach ($procId in $pids) {
    $info = Get-ProcessInfo -ProcessId $procId
    if ($info) {
      Write-Host "- PID $($info.PID) ($($info.Name))" -ForegroundColor DarkYellow
      if ($info.CommandLine) {
        Write-Host "  $($info.CommandLine)" -ForegroundColor DarkGray
      }
    }
  }

  foreach ($procId in $pids) {
    try {
      taskkill /PID $procId /T /F | Out-Host
    } catch {
      Write-Host "Failed to kill PID ${procId}: $($_.Exception.Message)" -ForegroundColor Red
    }
  }

  $deadline = (Get-Date).AddSeconds(10)
  while ((Get-ListeningPidsByPort -Port $port).Count -gt 0 -and (Get-Date) -lt $deadline) {
    Start-Sleep -Milliseconds 200
  }

  $still = Get-ListeningPidsByPort -Port $port
  if ($still.Count -gt 0) {
    Write-Host "Port $port is still in use by PID(s): $($still -join ', ')." -ForegroundColor Red
    throw "Cannot free port $port. Close the running terminal (Ctrl+C) or kill the PID(s) above."
  }
} else {
  Write-Host "Port $port is free." -ForegroundColor Green
}

Write-Host "Starting Spring Boot on port $port..." -ForegroundColor Cyan
Set-Location -Path $PSScriptRoot

# Default port is controlled by src/main/resources/application.properties.
.\mvnw spring-boot:run
