@echo off

set CMD_LINE_ARGS= -h
goto doneSetArgs


:setArgs
if ""%1""=="""" goto doneSetArgs
set CMD_LINE_ARGS=%CMD_LINE_ARGS% %1
shift
goto setArgs
:doneSetArgs


set TMP_CLASSPATH=%CLASSPATH%

set CLASSPATH=%CLASSPATH%;.\classes\;
for %%i in (".\lib\*.jar") do call "./bin/cpappend.bat" %%i
for %%i in (".\lib\*.zip") do call "./bin/cpappend.bat" %%i
set IREPORT_CLASSPATH=%CLASSPATH%
set CLASSPATH=%TMP_CLASSPATH%

java -cp "%IREPORT_CLASSPATH%" it.eng.spagobi.engines.geo.application.GeoEngineCLI %CMD_LINE_ARGS%

pause


