# Muchon Design System — Colors

Figma에서 추출한 컬러 토큰. 페이퍼(Paper)에서 디자인할 때 이 토큰을 참조해서 일관된 색상을 사용합니다.

- **Source**: [Figma — Muchon Design System](https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System)
- **Extracted**: 2026-04-24

## 파일 구성

| 파일 | 용도 |
|------|------|
| `primitive.json` | 원본 팔레트 (Common, Gray, Cool Gray, Blue, Red, Orange, Green, Purple, Cyan, Yellow) |
| `semantic.json` | 용도별 토큰 (Label, Background, Stroke, Status, Badge, Brand, Elevation 등) |

## 사용 원칙

**UI에는 항상 semantic 토큰을 쓴다.** primitive는 semantic이 참조하는 원본일 뿐, 직접 UI에 꽂지 않습니다.

## 토큰 선택 가이드

### 텍스트 / 아이콘 색상 → `label`
| 용도 | 토큰 | 값 |
|------|------|----|
| 본문(가장 강한 강조) | `label.900` | `#111111` |
| 주요 본문 | `label.800` | `#333333` |
| 보조 본문 | `label.600` | `#686868` |
| 비활성 텍스트 | `label.500` | `#9e9e9e` |
| 플레이스홀더 | `label.400` | `#c5c5c5` |
| 디바이더 위 텍스트 | `label.300` | `#e5e5e5` |

> `label.700`은 의도적으로 제외됨.

### 배경 → `background`
| 용도 | 토큰 |
|------|------|
| 기본 배경 | `background.default` (흰색) |
| 보조 배경(카드 뒤, 섹션 분리) | `background.alternative` |
| 반투명 오버레이 | `background.translucent70` |
| 살짝 떠 있는 느낌 | `background.elevated` |

### 테두리 / 구분선 → `stroke`
- 일반 보더: `stroke.solid`
- 다크 배경 위 구분선: `stroke.translucent`

### 상태 피드백 → `status`
- 에러: `status.error`
- 성공: `status.success`
- 정보: `status.info`
- 경고: `status.warning`

### 뱃지 / 태그 스타일 → `statusStyle` 또는 `badge`
- **statusStyle**: 상태 성격의 뱃지 (`designOnly`, `default`, `resource`)
- **badge**: 일반 뱃지 (`background`, `stock`, `font`)

### 브랜드 / 주요 액션 → `brand`
- **Primary 브랜드 컬러**: `brand.600` (`#02be8f`)
- 버튼 hover: `brand.700`
- 버튼 pressed: `brand.800`
- 약한 브랜드 배경: `brand.50` ~ `brand.100`

### 오버레이 → `material.dim`
모달 백드롭 등 어두운 스크림.

### 섀도우 → `elevation`
| 토큰 | 용도 |
|------|------|
| `elevation.xxs` | 아주 미세한 리프트 (인풋, 얇은 보더 대체) |
| `elevation.xs` | 버튼 기본 |
| `elevation.s` | 카드 |
| `elevation.l` | 드롭다운, 팝오버 (4층 쉐도우 합성) |
| `elevation.xl` | 모달, 플로팅 패널 (4층 쉐도우 합성) |

### 블러 → `blur.20`
백그라운드 블러가 필요한 반투명 표면 (예: 글래스 모피즘).

## 페이퍼에서 쓸 때

Claude에게 "Muchon 디자인 시스템 적용해서 디자인해줘" 식으로 말하면, 이 파일들을 읽어서 `update_styles` 같은 MCP 호출 시 정확한 hex 값을 주입합니다. 직접 hex를 기억하거나 옮겨적을 필요 없습니다.

## 업데이트

피그마에서 토큰이 변경되면 JSON을 재추출해 덮어씁니다. 구조는 Figma 원본 구조와 1:1 매핑되어 있어, 이름이 바뀌지 않는 한 자동으로 호환됩니다.
