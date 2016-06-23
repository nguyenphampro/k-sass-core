@echo off
ECHO Run Update v0.0.1 ...
:: for /f "tokens=* delims=" %%x in (update.log) do echo %%x
if exist 0.0.1.log (
    ECHO 0.0.1 Updated
) else (
	cd..
	npm install gulp 
	cd update 
	rem Saved
	@echo off
	@echo gulp > 0.0.1.log
    ECHO -----------------------------
    ECHO Congrats!
    ECHO v0.0.1 Update Finished
)