# Stop whatever is listening on port 8081.
# Usage: .\stop-8081.ps1

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

if ($pids.Count -eq 0) {
  Write-Host "Port $port is already free." -ForegroundColor Green
  exit 0
}

Write-Host "Stopping listener(s) on port ${port}: $($pids -join ', ')" -ForegroundColor Yellow
foreach ($procId in $pids) {
  $info = Get-ProcessInfo -ProcessId $procId
  if ($info) {
    Write-Host "- PID $($info.PID) ($($info.Name))" -ForegroundColor DarkYellow
    if ($info.CommandLine) { Write-Host "  $($info.CommandLine)" -ForegroundColor DarkGray }
  }

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
  exit 1
}

Write-Host "Port $port is free now." -ForegroundColor Green
