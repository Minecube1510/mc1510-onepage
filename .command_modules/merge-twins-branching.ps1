#@echo off#
#-|-#
# {File-Name} "merge-twins-branching.ps1"
# {File-Path-1} ".command_modules/merge-twins-branching.ps1"
# {File-Path-1} ".command_modules\merge-twins-branching.ps1"
#~{Formatted}~#
# ["ps1", ".ps1"]
#~{Archived}~#
# ["cmd", ".cmd"], [""]
#-|-#
#~{Description Script}~#
# Merging Branch into Branch. Require two Branches.
#-|-#
#~{Usage}~#
# merge-twins-branching.cmd <BRANCH_MERGING> <BRANCH_MERGED>

# {Prep} Set Branches #
param (
    [string]$BRANCH_AS_ING,
    [string]$BRANCH_AS_EDD
)

# {Req-1} Required params #
if (-not $BRANCH_AS_ING -or -not $BRANCH_AS_EDD) {
    Write-Host ""
    Write-Host "[ERROR] Missing Required Branches!"
    Write-Host "Usage: merge-twins-branching.ps1 <BRANCH_MERGING> <BRANCH_MERGED>"
    Write-Host ""
    #
    exit 1
}
#
Write-Host "[ACTIVATING] Merging '$BRANCH_AS_ING' into '$BRANCH_AS_EDD'."
#
# {Req-2} Continue Reset (Yy/Nn) #
$CONFIRM = Read-Host "Are you sure, to merging? (Yy/nN)"
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

# {Process} Merging both Branches #
git checkout $BRANCH_AS_ING
git pull origin $BRANCH_AS_ING
git checkout $BRANCH_AS_EDD
git merge $BRANCH_AS_ING
git push origin $BRANCH_AS_EDD
#
# {Ending} Done Reseting Branching #
Write-Host "Done Merge Process."


#-END-#
