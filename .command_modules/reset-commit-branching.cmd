@echo off
:: #
:: {File-Name} "reset-commit-branching.ps1"
:: {File-Path} ".command_modules/reset-commit-branching.ps1"
:: {Formatted} ["ps1", ".ps1"]
:: {Archived} ["cmd", ".cmd"], [""]
:: |
:: {Description Script}
:: Reset all Commits in Branch.
:: |
:: {Usage}
:: reset-commit-branch.cmd <BRANCH_KINI> "<COMMIT_DESC>"

:: {Prep} Set Branch and Commit
set BRANCH_KINI=%~1
set COMMIT_DESC=%~2

:: {Req-1} Required params
if "%BRANCH_KINI%"=="" (
    echo [ERROR-DETECT] Required Branch Name!
    echo Usage: %~nx0 <BRANCH_KINI> "<COMMIT_DESC>"
    exit /b 1
)
if "%COMMIT_DESC%"=="" (
    echo [ERROR-DETECT] Required Commit Description!
    echo Usage: %~nx0 <BRANCH_KINI> "<COMMIT_DESC>"
    exit /b 1
)
::
echo Targets branch : %BRANCH_KINI%
echo Commit message : %COMMIT_DESC%
::
:: {Req-2} Continue Reset (Y/N)
set /p CONFIRM=Are you sure, to reset branch "%BRANCH_KINI%"? (Y/N): 
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

:: {Process} Reseting Branching
::git branch backup-%BRANCH_KINI% %BRANCH_KINI%

git checkout --orphan BRANCH_TUMBAL
git add -A
git commit -m "%COMMIT_DESC%"
git branch -D %BRANCH_KINI%
git branch -m %BRANCH_KINI%
git checkout --orphan BRANCH_BARU
git rm -rf .
git add .
git commit -m "%COMMIT_DESC%"
git branch -f %BRANCH_KINI%
git checkout %BRANCH_KINI%
git push origin %BRANCH_KINI% --force
::
:: {Ending} Done Reseting Branching
echo Done for Reset Branch, %BRANCH_KINI%.


::-END-::
