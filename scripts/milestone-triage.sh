#!/usr/bin/env bash
set -euo pipefail

MS=${MS:-"MVP Web Alpha"}
DESC=${DESC:-"Stabiliser apps/web et trier S2S-BACKUP"}

# Issues à traiter (par défaut #3 et #4)
ISSUES=("$@")
if [ ${#ISSUES[@]} -eq 0 ]; then ISSUES=(3 4); fi

# 1) Milestone: get or create
MID=$(gh api repos/:owner/:repo/milestones --paginate \
  --jq '.[] | select(.title=="'"$MS"'").number' | head -n1)
if [[ -z "${MID}" ]]; then
  MID=$(gh api repos/:owner/:repo/milestones -X POST \
    -f title="$MS" -f description="$DESC" -f state=open --jq '.number')
fi
echo "Milestone #$MID ($MS)"

# 2) Labels (idempotent)
gh label create "priority:P1" -c "#ff0000" -d "Priorité 1" 2>/dev/null || true
gh label create "area:web"    -c "#0366d6" -d "Zone: web"  2>/dev/null || true
gh label create "triage"      -c "#fbca04" -d "À trier"    2>/dev/null || true

# 3) Tag + assignee + attach milestone
for I in "${ISSUES[@]}"; do
  gh issue edit "$I" --add-label "priority:P1,area:web,triage" --add-assignee "@me" >/dev/null
  gh api repos/:owner/:repo/issues/"$I" -X PATCH -f milestone="$MID" >/dev/null
done

# 4) Récap
echo "Issues dans \"$MS\" :"
gh issue list --milestone "$MS" --state open \
  --json number,title,labels --jq '.[] | {n:.number,t:.title,labels:[.labels[].name]}'
