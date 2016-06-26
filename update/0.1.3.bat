@echo off
ECHO Run Update v0.0.1 ...
:: for /f "tokens=* delims=" %%x in (update.log) do echo %%x
if exist 0.0.1.log (
    ECHO 0.0.1 Updated
) else (
	cd..
	@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
	choco install ruby -y
	cd update 
	rem Saved
	@echo off
	@echo chocolatey > 0.0.1.log
    ECHO -----------------------------
    ECHO Congrats!
    ECHO v0.0.1 Update Finished
)