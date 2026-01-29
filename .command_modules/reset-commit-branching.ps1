#@echo off#
#-|-#
# {File-Name} "reset-commit-branching.ps1"
# {File-Path-1} ".command_modules/reset-commit-branching.ps1"
# {File-Path-2} ".command_modules\reset-commit-branching.ps1"
#~{Formatted}~#
# ["ps1", ".ps1"]
#~{Archived}~#
# ["cmd", ".cmd"], [""]
#-|-#
#~{Description Script}~#
# Reset all Commits in Branch.
#-|-#
#~{Usage}~#
# reset-commit-branch.cmd <BRANCH_KINI> "<COMMIT_DESC>"

# {Prep} Set Branch and Commit #
param (
    [string]$BRANCH_KINI,
    [string]$COMMIT_DESC
)

# {Req-1} Required params #
if (-not $BRANCH_KINI -or -not $COMMIT_DESC) {
    Write-Host ""
    Write-Host "[ERROR-DETECT] Required Branch and Commit!"
    Write-Host "Usage: reset-commit-branching.ps1 <BRANCH_KINI> '<COMMIT_DESC>'"
    Write-Host ""
    #
    exit 1
}
#
Write-Host "Targets branch : $BRANCH_KINI"
Write-Host "Commit message : $COMMIT_DESC"
#
# {Req-2} Continue Reset (Yy/Nn) #
$CONFIRM = Read-Host "Are you sure, to reset branch '$BRANCH_KINI'? (Yy/Nn)"
#
switch ($CONFIRM.ToUpper()) {
    "Y" {
        Write-Host "Executing..."
    }
    "N" {
        Write-Host ""
        Write-Host "Cancelled.";
        Write-Host ""
        #
        exit 0
    }
    default {
        Write-Host "Invalid answering. Should be (Y/y) or (N/n)."
        Write-Host ""
        #
        exit 1
    }
}

# {Process} Reseting Branching #
#git branch backup-%BRANCH_KINI% %BRANCH_KINI%
#
git checkout --orphan BRANCH_TUMBAL
git add -A
git commit -m "$COMMIT_DESC"
git branch -D $BRANCH_KINI
git branch -m $BRANCH_KINI
git checkout --orphan BRANCH_BARU
git rm -rf .
git add .
git commit -m "$COMMIT_DESC"
git branch -f $BRANCH_KINI
git checkout $BRANCH_KINI
git push origin $BRANCH_KINI --force
#
# {Ending} Done Reseting Branching #
Write-Host "Done for Reset Branch, $BRANCH_KINI."


#-END-#
