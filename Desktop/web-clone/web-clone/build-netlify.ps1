$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$templates = Join-Path $projectRoot "src\main\resources\templates"
$static = Join-Path $projectRoot "src\main\resources\static"
$out = Join-Path $projectRoot "netlify-build"

if (Test-Path $out) {
  Remove-Item -Recurse -Force $out
}
New-Item -ItemType Directory -Path $out | Out-Null

if (Test-Path $templates) {
  Copy-Item -Path (Join-Path $templates "*") -Destination $out -Recurse -Force
}

if (Test-Path $static) {
  Copy-Item -Path (Join-Path $static "*") -Destination $out -Recurse -Force
}

Write-Host "Netlify build created at: $out"
