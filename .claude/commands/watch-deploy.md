---
description: 직전 main push의 GitHub Pages 배포 워크플로우를 백그라운드 watch (완료 시 자동 알림)
---

직전 main 브랜치 push의 "Deploy Storybook to GitHub Pages" 워크플로우를 watch하고 완료되면 사용자에게 알려줘.

절차:

1. 가장 최근 run id를 추출:
```bash
gh run list --limit 1 --branch main --workflow "Deploy Storybook to GitHub Pages" --json databaseId --jq '.[0].databaseId'
```

2. 그 run id로 watch를 **`run_in_background: true`** 로 실행:
```bash
gh run watch <RUN_ID> --exit-status
```

3. 완료 알림(`<task-notification>`) 받으면 사용자에게 보고:
- exit code 0 → "✅ 배포 완료 — hard reload 후 확인 부탁"
- 0 외 → "❌ 배포 실패 — `gh run view <RUN_ID> --log-failed`로 원인 확인"

주의:
- 절대 foreground(blocking)로 실행하지 말 것 — 사용자가 다른 작업 못 함
- gh CLI가 인증 안 되어 있으면 안내만 하고 실행 시도 X
- main 외 브랜치라면 사용자에게 어느 브랜치 워크플로우인지 확인
