# Muchon Design System — Typography

Figma에서 추출한 타이포 토큰. 모바일·데스크탑 두 스케일로 나뉘어 있고 둘 다 **Pretendard** 폰트를 사용합니다.

- **Source**: [Figma — Muchon Design System (Typography)](https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System?node-id=3832-192)
- **Extracted**: 2026-04-24

## 공통 규칙 (모든 스타일에 적용)

| 속성 | 값 |
|------|----|
| Font family | `Pretendard` |
| Line height | `1.5` (150%) — `typography.json`에는 px로 이미 계산되어 있음 |
| Letter spacing | `0` |

## 파일

| 파일 | 용도 |
|------|------|
| `typography.json` | mobile + desktop 전체 타이포 토큰. fontSize·fontWeight·lineHeight·letterSpacing을 px로 기록. |

## 구조

```
typography.json
├── fontFamily       "Pretendard"
├── fontWeight       { regular: 400, medium: 500, semibold: 600, bold: 700 }
├── semanticAliases  { title1: 36, heading1: 20, body1: 16, label1: 13, ... }
├── mobile
│   ├── 36  → { bold, semibold, medium }
│   ├── 32  → { bold, semibold, medium }
│   ├── ... (28, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10)
│   └── 10  → { medium }
└── desktop
    ├── 64  → { bold, semibold }
    ├── 56  → { bold, semibold }
    ├── 48  → { bold, semibold, medium }
    └── ... (40, 32, 24, 20, 18, 16, 14)
```

`typography.mobile["16"].semibold` 같은 경로로 정확한 스타일 객체를 꺼내면 `{ fontSize: 16, fontWeight: 600, lineHeight: 24, letterSpacing: 0 }`이 나옵니다.

## 의미별 사이즈 가이드 (semanticAliases)

피그마 Font 변수에 정의된 의미별 이름과 실제 px 사이즈 매핑:

| 이름 | 사이즈 | 권장 용도 |
|------|--------|-----------|
| `title1` | 36 | 페이지 최상위 타이틀 (모바일) |
| `title2` | 32 | 섹션 타이틀 |
| `title3` | 24 | 서브섹션 / 카드 헤더 |
| `title4` | 22 | 작은 섹션 타이틀 |
| `heading1` | 20 | 본문 내 강조 헤딩 |
| `heading2` | 18 | 부제목 / 리스트 헤더 |
| `body1` | 16 | 기본 본문 |
| `body2` | 14 | 보조 본문 / 긴 텍스트 |
| `label1` | 13 | 폼 라벨 / 뱃지 |
| `label2` | 12 | 캡션 / 메타 정보 |

## 모바일 vs 데스크탑 선택

- **모바일 화면 (≤ 768px)**: `mobile.*` 사용. 최대 36px.
- **데스크탑 화면 (> 768px)**: `desktop.*` 사용. 디스플레이용 대형 사이즈(40~64px) 포함.
- 같은 사이즈가 양쪽에 다 있으면 (예: 16, 18, 20, 24, 32) 스타일 값은 동일 — 스케일 선택은 맥락에 맞게.

## 사용 예시

페이퍼에서 본문 텍스트를 그릴 때:
```js
// typography.mobile["16"].regular
{
  fontFamily: "Pretendard",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24,
  letterSpacing: 0
}
```

버튼 라벨(14px semibold):
```js
// typography.mobile["14"].semibold
{
  fontFamily: "Pretendard",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 21,
  letterSpacing: 0
}
```

## 피그마 원본 이슈 (정리 시 수정됨)

1. **`24/SeBold` / `48/SeBold` 오타** — 피그마 원본에 "SeBold"로 저장돼있으나 실제는 SemiBold. `semibold`로 정규화.
2. **데스크탑 18 샘플 레이어 이름 오류** — 피그마에서 세 샘플 중 두 개의 레이어 이름이 "14/Medium"·"14/Regular"로 잘못 저장돼있음. 라벨(SemiBold/Medium/Regular, 18/150%)은 정확하므로 JSON에서는 `desktop.18.*`로 배치.
3. **웨이트 누락 (의도된 것으로 간주)**:
   - Desktop 64, 56: Medium 없음
   - Desktop 20: Bold 없음
   - Mobile 16 이하: Bold 없음 (최대 웨이트가 SemiBold)
   - Mobile 10: Medium만 있음

## 페이퍼에서 쓸 때

Claude에게 "Muchon 디자인 시스템 타이포 적용해서 써줘"라고 하면 이 JSON을 참조해서 `update_styles` 호출 시 정확한 값을 주입합니다. 직접 사이즈를 옮겨적거나 계산할 필요 없음.

## 업데이트

피그마에서 타이포가 변경되면 JSON을 재추출해 덮어씁니다. 새로운 사이즈나 웨이트가 추가되면 mobile/desktop 객체에 엔트리 추가.
