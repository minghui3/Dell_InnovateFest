@echo off
setlocal

REM Use PowerShell to get the computer name and combine with SQLEXPRESS
REM change SQLEXPRESS01 to SQLEXPRESS if u didnt screw up like me, change either way depending on SQLEXPRESS server being used
REM to run this setup file, type "start run_all"
for /f "usebackq tokens=*" %%a in (`powershell -Command "Write-Output \"$env:COMPUTERNAME\SQLEXPRESS01\""`) do (
    set SERVER_NAME=%%a
)

echo Server Name: %SERVER_NAME%

echo Running annihilateAndReconstructTables.sql
sqlcmd -S %SERVER_NAME% -E -i "annihilateAndReconstructTables.sql"

echo Running createTables.sql
sqlcmd -S %SERVER_NAME% -E -i "createTables.sql"

echo Running addData.sql
sqlcmd -S %SERVER_NAME% -E -i "addData.sql"

echo Running createSQLUser.sql
sqlcmd -S %SERVER_NAME% -E -i "createSQLUser.sql"

echo All scripts executed successfully.

pause