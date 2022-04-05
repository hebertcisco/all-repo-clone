const fs = require('fs');
const { join } = require('path');
const pkg = require('../package.json');

const { APP_VERSION, BASE_URL, SHEBANG_PWSH } = require('./constants');

const currentDirectory = __dirname;

const directoryToSave = `${join(currentDirectory, '..', 'lib')}`;

fs.writeFileSync(
  `${directoryToSave}/install.ps1`,
  `${SHEBANG_PWSH}
$ErrorActionPreference = 'Stop'

$AllRepoCloneInstall = $env:ALL_REPO_CLONE_INSTALL
$BinDir = if ($AllRepoCloneInstall) {
  "$AllRepoCloneInstall/bin"
} else {
  "$Home/.all_repo_clone/bin"
}

$AllRepoCloneZip = "$BinDir\all_repo_clone.zip"
$AllRepoCloneExe = "$BinDir\all_repo_clone.exe"

# GitHub requires TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$AllRepoCloneUri = "${BASE_URL}/${pkg.name}@${APP_VERSION}/${pkg.pkg.outputPath}/${pkg.name}.zip"

if (!(Test-Path $BinDir)) {
  New-Item $BinDir -ItemType Directory | Out-Null
}

Invoke-WebRequest $AllRepoCloneUri -OutFile $AllRepoCloneZip -UseBasicParsing

if (Get-Command Expand-Archive -ErrorAction SilentlyContinue) {
  Expand-Archive $AllRepoCloneZip -Destination $BinDir -Force
} else {
  if (Test-Path $AllRepoCloneExe) {
    Remove-Item $AllRepoCloneExe
  }
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  [IO.Compression.ZipFile]::ExtractToDirectory($AllRepoCloneZip, $BinDir)
}

Remove-Item $AllRepoCloneZip

$User = [EnvironmentVariableTarget]::User
$Path = [Environment]::GetEnvironmentVariable('Path', $User)
if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) {
  [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User)
  $Env:Path += ";$BinDir"
}

Write-Output "AllRepoClone was installed successfully to $AllRepoCloneExe"
Write-Output "Run 'all_repo_clone --help' to get started"
  `,
);
