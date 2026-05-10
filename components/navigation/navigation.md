# Muchon Design System — Navigation Bar

모바일 탑/바텀 내비게이션 바. 데스크탑은 범위 제외.

- **Source**: [Figma — Muchon Design System (Navigation Bar)](https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System?node-id=2871-19830)
- **Extracted**: 2026-04-24

## 계보

```
Navigation Bar
├── Top (화면 상단)
│   ├── OS Variants: iOS · Android · Web  (safe-area 높이만 차이)
│   └── Resource: Tap · Title · Car Number
└── Bottom (화면 하단)
    ├── Platform Variants: iOS · Android  (탭 padding/폰트 사이즈 차이)
    └── Resource: Tab
```

## Top Navigation

### 기본 스펙 (모든 OS 공통)
| 속성 | 값 |
|------|----|
| Width | 402 |
| 배경 | `background.default` (흰색) |
| Bar 높이 | 54 |
| Bar 패딩 X | 20 |
| 섹션 간격 | 10 |

### OS 별 Safe Area 높이
| OS | Safe Area 높이 |
|----|---------------|
| iOS | 44 |
| Android | 36 |
| Web | 0 |

> iOS/Android는 상태바(시계, 배터리)가 보이는 영역. Web은 브라우저에 맡기므로 0.

### Bar 내부 3섹션 (Left / Center / Right)

**Left 슬롯** (중복 가능):
- `leftIcon` — 24×24 (뒤로가기 화살표 등)
- `leftLabel` — 22px SemiBold Title4, `label.900` (큰 타이틀 모드)
  - 옆에 count 숫자 뱃지 표시 가능
- `carNumber` — 번호판 스타일 (24px SemiBold, 2px 검정 테두리)

**Center 슬롯** (단일):
- `centerLabel` — 16px SemiBold `label.900`, line-height 24 (페이지 타이틀)

**Right 슬롯** (중복 가능):
- `rightIcon` — 24×24 (X 버튼, 메뉴 등)
- `rightLabel` — 20px Medium `label.900` (완료/편집 링크)
- `rightButton` — Primary pill (brand.600, 15px SemiBold 흰색, padding 10/8, radius 8)

### Top Nav Resource 부품

#### Tap (세그먼트 탭 타이틀)
"상품 | 리뷰 | 문의" 같은 대형 텍스트 탭.
- 24px **Bold** (title3)
- Selected: `gray.700` (`#4b4b4b`) ← primitive 참조
- Unselected: `label.400`

> ⚠️ `label.700`이 시맨틱에 없어서 primitive `gray.700`을 직접 참조.

#### Title (페이지 타이틀 3단계)
| Size | fontSize | 의미 |
|------|----------|------|
| L | 24 | title3 — 메인 페이지 타이틀 |
| M | 20 | heading1 — 서브페이지 타이틀 |
| S | 18 | heading2 — 작은 섹션 타이틀 |

모두 Bold, `label.900`.

#### Car Number
번호판 임베드 전용. 외곽 2px padding + radius 6, 내부 2px 검정 테두리 + radius 4, 24px 글자.

## Bottom Navigation

### 공통 스펙
| 속성 | 값 |
|------|----|
| Width | 402 |
| 배경 | `background.default` |
| 그림자 | `0 -1 12 0 rgba(17,17,17,0.06)` (상단으로 솟는 소프트 섀도우) |
| 탭 개수 | 3개 (동일 너비) |
| 아이콘 | 24×24 |

### 탭 컬러 (iOS/Android 공통)
| State | Icon + Label 컬러 |
|-------|-------------------|
| Active | `label.900` (#111) |
| Inactive | `label.400` (#c5c5c5) |

### Platform별 차이

| 속성 | iOS | Android |
|------|-----|---------|
| 상단 패딩 | 4 | 0 |
| 탭 세로 패딩 | 4 | 9 |
| 아이콘-라벨 간격 | 1 | 4 |
| 라벨 폰트 | 11px Medium | 12px Medium |
| 시스템 바 높이 | 34 (홈 인디케이터) | 24 (제스처 바) |

### Badge (알림 닷)
탭 아이콘 우상단에 붙는 작은 빨간 점.
- 크기: 4×4
- 컬러: `status.error` (#ff4242)
- 위치 오프셋: iOS +11.5 / -19, Android +11.5 / -22

## 사용 가이드

### Top Nav 조합 패턴
| 용도 | 구성 |
|------|------|
| 서브 페이지 (뒤로가기) | `leftIcon` + `centerLabel` |
| 상세 페이지 + 액션 | `leftIcon` + `centerLabel` + `rightIcon` 또는 `rightButton` |
| 큰 타이틀 리스트 | `leftLabel` (count 포함) + `rightIcon` |
| 번호판 상세 | `leftIcon` + `carNumber` (Center 생략) |
| 편집 모드 | `leftLabel` + `rightLabel` ("완료") |

### Bottom Nav 사용
- 모바일 앱의 메인 네비게이션. 보통 3개 탭 (홈/검색/마이페이지 같은 구조)
- Active 탭 1개, 나머지는 Inactive
- 알림이 있으면 해당 탭에 Badge 켜기

## 페이퍼에서 쓸 때

Claude에게 "Muchon Top Nav로 상세페이지 헤더 그려줘" 식으로 말하면:
1. `navigation.json` → `top.mobile` + 필요 slot들
2. `colors/semantic.json` → 토큰 해결
3. `typography/typography.json` → 폰트 해결
4. 페이퍼에 정확한 치수·색상으로 구현

## 추출되지 않은 것

- **Top Nav Desktop** (Size L/M/S/XS — 4 variants) — 범위 제외
- **Bottom Button** (757×64 Size L, 넓은 CTA 바) — Navigation 범주 밖
