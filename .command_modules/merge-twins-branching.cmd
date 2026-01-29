@echo off
:: #
:: {File-Name} "merge-twins-branching.ps1"
:: {File-Path} ".command_modules/merge-twins-branching.ps1"
:: {Formatted} ["ps1", ".ps1"]
:: {Archived} ["cmd", ".cmd"], [""]
:: |
:: {Description Script}
:: Merging Branch into Branch. Require two Branches.
:: |
:: {Usage}
:: merge-twins-branching.cmd <BRANCH_MERGING> <BRANCH_MERGED>

:: {Prep} Set Branches
set BRANCH_AS_ING=%~1
set BRANCH_AS_EDD=%~2

:: {Req-1} Required params
if "%BRANCH_AS_ING%"=="" (
    echo [ERROR] Required Branch as merging for other Branch!
    echo Usage: %~nx0 <BRANCH_MERGING> <BRANCH_MERGED>
    exit /b 1
)
if "%BRANCH_AS_EDD%"=="" (
    echo [ERROR] Required Branch as that wanted to be merged!
    echo Usage: %~nx0 <BRANCH_MERGING> <BRANCH_MERGED>
    exit /b 1
)
::
echo [ACTIVATING] Merging "%BRANCH_AS_ING%" into "%BRANCH_AS_EDD%".
::
:: {Req-2} Continue Reset (Y/N)
set /p CONFIRM=Are you sure, to merging? (Y/N):
::
if /I "%CONFIRM%"=="Y" (
    echo Executing...
) else if /I "%CONFIRM%"=="N" (
    echo Cancelled.
    exit /b 0
) else (
    echo Invalid answering. Should be `Y/y`-OR-`N/n`.
    exit /b 1
)

:: {Process} Merging both Branches
git checkout %BRANCH_AS_ING%
git pull origin %BRANCH_AS_ING%
git checkout %BRANCH_AS_EDD%
git merge %BRANCH_AS_ING%
git push origin %BRANCH_AS_EDD%
::
:: {Ending} Done Reseting Branching
echo Done Merge Process.


::-END-::
