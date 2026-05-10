---
name: figma-icon-export
description: Figma Dev Mode MCP에서 Muchon Design System 아이콘을 일괄 export → normalize → viewBox fix → 저장. 노드 ID 또는 매핑표가 주어지면 자동 진행.
when_to_use: 사용자가 "Figma 아이콘 가져와", "노드 X 노드부터 SVG export", "Batch X 진행" 등 아이콘 추가/교체를 요청할 때. 또는 새 무촌 프로젝트에서 아이콘 시스템을 처음 구축할 때.
---

# Figma Icon Export Skill

Muchon Design System Figma 파일에서 아이콘을 가져와 `Icon/svg/{regular,bold,color}/`에 정규화된 SVG로 저장하는 절차.

이 스킬은 다음 경험 116개 SVG 처리(Batch A 30 + B1 22 + B2 24 + B3 22 frame)에서 추출됐다.

---

## 0. 사전 조건

- Figma desktop 앱이 켜져 있고 `Muchon-Design-System` 파일 열려 있음 (Dev Mode MCP가 localhost:3845 서빙)
- 작업 디렉터리: `~/Project/muchon-design-system/`
- Figma 노드 ID는 사용자가 제공하거나, Source URL `https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System?node-id=2861-20421` 의 Icon page 기준

---

## 1. Workflow (7단계)

### Step 1 — Figma metadata 수집

`mcp__figma-dev-mode-mcp-server__get_metadata` 호출로 시작 노드(예 `2861:20421`)의 트리 받기. Frame/Symbol 구조 파악:
- `<frame name="Icon/Foo">` → 출력 파일명 `foo.svg`
- `<frame name="Icon/Foo/Bar">` → 출력 파일명 `foo-bar.svg`
- 안쪽 `<symbol name="Style=Regular">` → `regular/foo.svg`, `Style=Bold` → `bold/foo.svg`
- `Property 1=Default` 단일 → `color/foo.svg`

**중요 발견**: Figma component variant 페어는 **Bold 노드만 호출하면 R+B 양쪽 URL 동시 반환**. 호출 횟수 절반. 단 `image`, `notice`, `cs`, `logout`, `annotation`, `bye` 같은 일부는 R/B 따로 호출 필요 (variant 관계가 다른 듯).

### Step 2 — 매핑표 작성

```
| name        | regular_id     | bold_id       |
|-------------|----------------|---------------|
| arrow-up    | 3386:2233      | 3386:2235     |
...
```

페어/R-only/B-only/Default(=Bold)/Color 5종 분류.

### Step 3 — design_context로 URL 추출

각 매핑 row에 대해 `mcp__figma-dev-mode-mcp-server__get_design_context` 호출. 응답에서 `imgIcon = "http://localhost:3845/assets/{hash}.svg"` 라인의 hash 추출.

**한 메시지에 8~12개씩 병렬 호출**. 더 많이 묶으면 컨텍스트 부담.

### Step 4 — 다운로드 + 정규화 (fetch script)

`Icon/svg/_tmp/fetch.sh` 작성하고 실행:

```bash
#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

norm() {
  sed -E \
    -e 's|preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;"|width="24" height="24"|' \
    -e 's|var\(--fill-0, ?#[0-9a-fA-F]+\)|currentColor|g' \
    -e 's|var\(--stroke-0, ?#[0-9a-fA-F]+\)|currentColor|g' \
    -e 's|var\(--fill-0, ?white\)|white|g' \
    -e 's|var\(--stroke-0, ?white\)|white|g'
}

fetch() {
  curl -sS "http://localhost:3845/assets/$1.svg" | norm > "$2"
  echo "[ok] $2"
}

fetch <hash> regular/<name>.svg
fetch <hash> bold/<name>.svg
...
```

실행 후 `_tmp/` 삭제.

### Step 5 — viewBox 정규화 (24×24 강제)

Figma vector subset은 viewBox가 24×24가 아닐 때가 잦음 (heart 20.25×18, pen 18×18, info 20×20 등). 검출:

```bash
for f in regular/*.svg bold/*.svg; do
  v=$(grep -oE 'viewBox="[^"]+"' "$f" | head -1)
  [[ "$v" != 'viewBox="0 0 24 24"' ]] && echo "$f $v"
done
```

각 outlier에 대해 **inset 좌표를 design_context 응답의 Tailwind 클래스에서 추출**:

| Tailwind class                          | 의미                  | translate 계산                |
|-----------------------------------------|----------------------|------------------------------|
| `inset-[8.33%]`                         | 사방 8.33%            | `(2, 2)` (24×0.0833 ≈ 2)     |
| `left-[12.5%] right-[12.5%] top-1/2`    | 좌우 12.5%, 세로 center| `(3, (24-h)/2)`              |
| `aspect-[20.25/18] left-[7.81%] ...`    | aspect ratio         | width=20.25, height=18 그대로 |
| `p-[2px]`                               | padding 2px          | `(2, 2)`                     |
| `p-[3px]` + `inset-[-N%]` bleed         | padding+bleed        | `(3 - bleed, 3 - bleed)`     |

Edit으로 `<svg ... viewBox="0 0 24 24">` + `<g transform="translate(x y)">...</g>` wrap. 기존 `<g id="Icon">`이 있으면 그 g에 transform 추가.

**관찰된 좌표** (참조용):
- heart regular `(1.8744, 2.99945)` (left 7.81%, top center, 20.25×18)
- pen regular `(3, 3)` (left 12.5%, 18×18)
- bookmark regular `(4.4352, 2)` (left 18.48%, top center, 14.87×20)
- alarm regular `(3.24, 2.4)` (이중 inset)
- info/warning R+B `(2, 2)` (inset 8.33%, 20×20)
- card regular `(2, 2)` (p-[2px], 20×20)
- empty regular `(2, 2)` (inset 8.33%, 20×20)
- annotation regular `(2.4, 2.4)` (p-3 + inset -3.33% bleed, 19.2×19.2)
- annotation bold `(2.25, 2.25)` (p-3 + inset -4.17%, 19.5×19.5)
- cursor regular `(2, 2)` (top/bottom 8.33%, 20×20)
- call bold `(3, 3)` (top/bottom 12.5%, 18×18)
- corporation bold `(2, 2)` (20×20)
- trash bold `(3, 2)` (aspect 18/20)

부동소수점 오차(예: `viewBox="0 0 24.0001 24"`)는 단순 viewBox 교체만.

### Step 6 — Stroke-width 일관성 검사

```bash
for f in regular/*.svg bold/*.svg; do
  sw=$(grep -oE 'stroke-width="[^"]+"' "$f" | head -1)
  [[ -n "$sw" ]] && echo "$f $sw"
done
```

**룰**: regular = `1.5`, bold = `1.5` (Figma export 1.2 outlier 정정). bold에서도 1.5 유지.

### Step 7 — 검증 + 커밋 + push

```bash
npx tsc --noEmit
git add Icon/svg/
git commit -m "feat(icon): ..."
git push origin main
```

push 후 `/watch-deploy` 호출해 배포 완료까지 watch.

---

## 2. Sub-batch 분할 가이드

70개+ 한 번에 진행하면 컨텍스트/토큰 폭증 + 디버깅 어려움. **sub-batch 20~30개씩 + 각 cycle에 사용자 시각 검증**.

권장 분할:
- **Batch 1: 자주 쓰는 우선순위** (Arrow 4종, Circle 4종, list/hamburger/send/location/card/image/notice/equal/retry/history + R-only navigation)
- **Batch 2: 객체+상태** (eyes, money, used-list, final-balance, chating, board, annotation, bye, reorder, change, floor, cursor, rating, call, signal-bars + circle 잔여)
- **Batch 3: 잔여+컬러** (Side, hammer, ticket, gift, building, package, ai-line, default-bold variants, double-left/right, warning-triangle bold, color)

각 sub-batch 끝나면 **사용자 hard reload 검증** 후 다음 진행.

---

## 3. CSS 정책 (Icon.css)

```css
/* fill 명시된 element만 강제. fill="none"/fill="white"는 보존 */
.bds-icon:not(.bds-icon--colored) svg [fill]:not([fill="none"]):not([fill="white"]) {
  fill: currentColor;
}
.bds-icon:not(.bds-icon--colored) svg [stroke]:not([stroke="none"]):not([stroke="white"]) {
  stroke: currentColor;
}
```

**왜**:
- outline-stroke 아이콘(heart, pen)에 fill 강제 시 검정 덩어리 → fill 미명시 path는 부모 `<svg fill="none">` 상속해야
- bold 원형 아이콘(clock, info, warning, profile 등)의 안쪽 hole은 `white`로 그려져 있어야 외곽 currentColor가 hole 처리 → white 정규화 + CSS exclusion

---

## 4. 알려진 한계 (자동화 X — 사용자 결정 필요)

이런 케이스는 자동 처리하지 말고 사용자에게 보고 + 수동 처리:

1. **Multi-vector 합성** (image regular, ai-color, kakao-channel) — Figma export가 2+ vector subset + 그라디언트로 분할됨. 단일 SVG로 합성 시 좌표 추정 + 색 결정 필요. 사용자에게 "Figma desktop에서 직접 export 받아주세요" 또는 매번 What 확인.
2. **Single closed path** (search bold) — Figma 디자인 자체가 외곽 path만 (안쪽 hole 없음). Figma 원본 의도대로 유지 — 수정하지 말 것.
3. **Variant 자리에 다른 weight** (arrow-down은 Style=Bold 없고 Style=Arrow만) — bold 자리에 저장하되 사용자에게 보고.
4. **Path 없이 div로 그려진 아이콘** (add-bold) — `<rect>` 두 개로 수동 SVG 작성. design_context의 inset/transform 분석 후 좌표 계산.
5. **Color 다중 vector** (ai, kakao-channel) — 그라디언트 + 외곽 + 안쪽 vector 합성. linear-gradient는 SVG `<linearGradient>`로 변환.

---

## 5. 명명 정책

**Figma 폴더 path lock-step**:
- `Icon/Down` → `down.svg` (chevron 모양)
- `Icon/Caret/Down` → `caret-down.svg`
- `Icon/Arrow/Down` → `arrow-down.svg`
- `Icon/Down/Circle` → `down-circle.svg`

**예외 — 의미 모호 시 사용자 결정 후 rename**:
- 이번 세션: down/up/left/right → chevron-down/up/left/right (chevron vs arrow vs caret 혼동 방지)

What(어떤 이름이 사용자 직관적인가)은 항상 사용자에게 묻기. Claude는 Figma path 그대로가 default.

---

## 6. 좀비 정리 (이전 export 검증)

이전 세션에서 hash로 export됐다가 의미명 보존만 된 SVG는 Figma 원본 path와 일치 안 할 수 있음. **path 비교**:

```bash
for f in regular/<suspect>.svg; do
  echo "=== $f ===" && grep -oE 'd="M[^"]{0,100}' "$f" | head -1
done
```

각 path 시작점 좌표(`M5.59 13.83...`)를 Figma 원본의 새 export와 비교. 일치 안 하면 삭제 후 재export.

---

## 7. 실행 체크리스트

- [ ] Figma metadata로 트리 파악 (Step 1)
- [ ] 매핑표 작성 (Step 2)
- [ ] design_context 8~12개씩 병렬 호출, URL 수집 (Step 3)
- [ ] fetch.sh 작성 → 실행 → `_tmp/` 삭제 (Step 4)
- [ ] viewBox outlier 검출 + Edit으로 24×24 정규화 (Step 5)
- [ ] stroke-width 1.5 일관성 (Step 6)
- [ ] tsc + commit + push + `/watch-deploy` (Step 7)
- [ ] 사용자 hard reload 검증 후 다음 sub-batch
