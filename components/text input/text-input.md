# Muchon Design System — Text Input

텍스트 입력 컴포넌트 패밀리: TextField (단일행) + TextArea (다중행).

- **Source**: [Figma — Muchon Design System (Text Input)](https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System?node-id=2871-21697)
- **Extracted**: 2026-04-24

## 계보

```
Text Input
├── TextField  (한 줄)
│   ├── Box
│   │   ├── Box    ← 기본 박스 (Size M/S)
│   │   └── Big    ← 강조 박스 (22px, Size M만)
│   └── Line
│       ├── Line   ← 기본 언더라인 (22px)
│       └── Big    ← 디스플레이 언더라인 (32px)
└── TextArea   (여러 줄)
    └── Box        ← 박스만 있음
```

> `TextField/Box/Hero` 는 이번 추출에서 제외.

## 언제 어떤 Input 쓰지?

| 상황 | 권장 |
|------|------|
| 일반 폼 필드 (이름, 이메일 등) | **TextField/Box/Box** Size M |
| 리스트/카드 안의 보조 입력 | **TextField/Box/Box** Size S |
| 금액, 숫자, 강조 입력 | **TextField/Box/Big** |
| 좁은 모바일 화면, 리스트 내 | **TextField/Line/Line** |
| 첫 단계 단일 입력 (풀폭 강조) | **TextField/Line/Big** |
| 긴 텍스트 (리뷰, 문의) | **TextArea/Box** |

## TextField / Box / Box (기본)

| 속성 | Size M | Size S |
|------|--------|--------|
| Input 높이 | 48 | 40 |
| Padding X | 16 | 14 |
| Padding Y | 12 | 8 |
| 폰트 사이즈 | 16 (body1) | 16 (body1) |
| Radius | 8 | 8 |

### State별 컬러

| State | Background | Border | Text/Placeholder |
|-------|------------|--------|------------------|
| Enabled | `background.default` | `label.300` | placeholder `label.500` |
| Focused | `background.default` | `label.800` | cursor `gray.700` |
| Typing | `background.default` | `label.800` | cursor `brand.600`, placeholder `label.400` |
| Error | `background.default` | `status.error` | description `status.error` |
| Disabled | `background.alternative` | `label.300` | placeholder `label.400` |

## TextField / Box / Big (강조)

- Input 높이 55, padding 16/11, **22px Medium (title4)**
- 주로 금액·중요 단일값 입력
- Cursor 24px 높이
- Enabled border `gray.300` → Focused border `gray.800` → Error border `status.error`
- 옵션: `unit` (22px '원' 라벨), `rightIcon` (24px cancel-circle)

## TextField / Line / Line (언더라인)

- Width 402, **22px Medium (title4)**, Separator 2px
- Padding 없음 (모서리 꽉 채움)

### State별 컬러

| State | Label | Separator | Cursor |
|-------|-------|-----------|--------|
| Enabled | `label.900` | `gray.300` | — |
| Focus | `brand.600` | `brand.600` | `brand.600` (24×2, r10) |
| Typing | `label.900` | `brand.600` | `brand.600` |
| Disabled | `label.900` (dim 느낌은 text로) | `gray.300` | — |

### Negative 플래그
`negative=True`일 때 → **Label·Separator·Description이 모두 `status.error`로 전환**. Input value text는 그대로 `label.900` 유지 (가독성).

### 옵션 슬롯
- `unit` — '원' 등 (20px Medium heading1, `label.600`)
- `cancelIcon` — 24px clear
- `time` — 카운트다운 표시 "02:57" (16px Regular)

## TextField / Line / Big (디스플레이)

- **32px Medium**, cursor 36×2
- 구조는 Line/Line과 동일, 폰트만 큼
- 강조 피드백 필요한 단일 필드용 (예: "얼마를 빌릴까요?")

## TextArea / Box

- Width 353, **min-height 78** (자동 확장), padding 16/15
- 16px Medium (body1)

### State별 컬러

| State | Background | Border | Text |
|-------|------------|--------|------|
| Enabled | white | `gray.300` | placeholder `label.500` |
| Focused | white | `gray.800` | cursor `gray.700` |
| Filled | white | `gray.300` | `label.900` |
| Error | white | `status.error` | `label.800` |
| Disabled | `gray.200` | `gray.300` | `label.500` |

### 하단 Description Row (옵션 슬롯)
```
[Description 텍스트] [체크박스] [···][카운터 0/1000] | [Badge]
```
- Description: 12px Medium `label.600` (Error 시 `status.error`)
- CheckBox: 18×18, 1.5px border `label.300`, radius 4
- Counter: 12px Medium `label.600`, 우측 정렬
- Divider: 1×12 `stroke.solid`
- Badge: `badge.background` bg + `badge.stock` 테두리 + `badge.font` 글자 (11px)

### Scrollbar (옵션)
내용이 넘칠 때 우측에 3px 폭 세로 스크롤바, radius 999.

## Resources (공통 부품)

### Resource / Label — 입력 필드 상단 라벨
- **Base**: 14px Medium (body2), `label.800`
- **4 Variants** (Asterisk × Negative):
  - Asterisk=False: 평범한 라벨
  - Asterisk=True: 라벨 오른쪽에 **4×4 빨간 dot** (필수 입력 표시)
  - Negative=True: 텍스트 자체가 `status.error`
- 옵션: 우측 Info 아이콘 16px (툴팁 트리거)

### Resource / Time — 카운트다운
- iOS type: 16px Regular body1, `label.900`, 예: "02:57"
- padding x=4, radius 6

### Resource / Description — 도움말 / 오류 문구
- 12px Medium
- Default: `label.600` / Error: `status.error`
- 옵션: 좌/우 아이콘 14px

## 페이퍼에서 쓸 때

Claude에게 "로그인 폼 그려줘 — 이메일, 비밀번호 TextField Box M" 식으로 말하면:
1. `text-input.json` → `textField.box.box.sizes.M` + 적절한 state
2. `colors/semantic.json`, `typography/typography.json` 체이닝
3. 정확한 치수·색상으로 페이퍼에 그림

## 컬러 패턴 요약

- **Focused 테두리**: 항상 중성 다크 (`label.800` / `gray.800`), 브랜드 색 아님
- **브랜드 색**: Line variant의 Focus Label·Separator·Cursor에서만 등장
- **Cursor 2단계**: 정지(Focused) = `gray.700`, 움직임(Typing) = `brand.600`
- **Error/Negative**: 테두리·라벨·설명 다 빨강, **입력값 자체는 검정 유지**

## 추출되지 않은 상태 (참고)

- `TextField/Box/Box` Hover state — Figma에 있으나 이번 세션 미추출
- `TextArea/Box` Hover, Typing state — 동일
- 실사용 시 Enabled→Focused 패턴으로 보간 가능. 필요하면 재추출.
