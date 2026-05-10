# Muchon Design System

이 폴더는 **Muchon Design System**의 토큰·컴포넌트·아이콘 소스 오브 트루스입니다. 어떤 프로젝트에서든 이 디자인 시스템을 사용할 때 본 문서의 규칙을 따릅니다.

> **사용법**: 프로젝트 루트에서 이 폴더를 참조하세요. 프로젝트의 CLAUDE.md에 `디자인 시스템: ./design-system/` (또는 `~/design-system/`) 한 줄만 추가하면 본 문서가 자동 로딩됩니다.

- **Source of Truth**: [Figma — Muchon Design System](https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System)
- **Icon Source**:https://www.figma.com/design/jnSV0A67mS3c17zHS1mwwh/Muchon-Design-System?node-id=2861-20421&t=Lz7qcsjpILoFrPJ2-4

---

## 📂 폴더 구성

```
design-system/
├── colors/         primitive.json + semantic.json + README
├── typography/     Pretendard 스케일 (mobile/desktop) + README
├── components/     button · badge · navigation · text-input · modal
│                   각각 .md(스펙) + .json(토큰)
├── Icon/
└── references/
    ├── muchon-patterns.md   Muchon 자매 서비스 + 토스 등 외부 패턴 분석
    └── images/              패턴 레퍼런스 스크린샷
```

---

## 🎨 디자인 브리프 (고정)

- **Primary 브랜드 컬러**: `brand.600` 
- **폰트**: Pretendard (Regular 400 / Medium 500 / SemiBold 600 / Bold 700)
- **기본 텍스트**: `label.900` (#111)
- **기본 배경**: `background.default` (흰색)
- **라운드**: **8~12px** (필드·카드 등 대부분). 작은 컴포넌트는 4 허용
- **패딩**: **12~24px** (카드·메뉴 등)
- **사이즈·간격**: 모두 **짝수**
- **Line-height**: 150% 공통
- **Letter-spacing**: 0 공통
- **Stroke**: 모두 1px
- **모바일 캔버스**: 390 × 844, 라이트모드 (별도 명시 없으면 기본)

---

## 🎯 기본 디자인 방향

특별한 지정이 없으면 기본 방향은 다음과 같습니다 (프로젝트별로 조정 가능):

**당근(Karrot) 스타일의 친숙·정돈된 모바일 UI**가 기준 레퍼런스. 정보 밀도는 높이되 여백·라운드·뉴트럴 그레이로 친근함을 살림. 카피 톤은 **토스** — 신뢰감 + 친근 + 군더더기 없음.

| 항목 | 방향 |
|------|------|
| **레이아웃** | iOS 프레임 390×844, 좌우 마진 20px |
| **컬러 운용** | 라이트모드. 화이트 + 연한 그레이 베이스. 브랜드 컬러는 **CTA 버튼·포인트 강조**에만 |
| **타이포그래피** | Pretendard. 한글 가독성 우선 |
| **바이브** | 정보 밀도 높게, UI/텍스트 간 간격은 여유 있게 |
| **UI 룰** | 카드·메뉴 등 컴포넌트 패딩 12~24px. 모든 사이즈·간격 짝수. 라운드 8~12px |
| **카피 톤** | 토스 톤 — 명령형보다 권유형 ("~해 주세요", "~할 수 있어요") |

> 프로젝트 성격에 따라 이 방향은 조정 가능합니다. 프로젝트 CLAUDE.md에서 상이한 방향을 지정하면 그쪽이 우선합니다.

---

## 🎨 컬러·구조 운용 규칙

- **CTA·포인트**: `brand.600` 활용
- **베이스**: 흰색(`background.default`) + 연한 그레이 (`#fafafa`, `#f8f8f8`, `#f3f3f3`)
- **텍스트**: `label.900` 기본 / `label.600` 보조 / `label.400` 비활성
  - ⚠️ `label.400`은 흰 배경에서 WCAG AA 4.5:1 미달 → 본문 텍스트로 사용 금지, 아이콘·디바이더 정도만
- **대비**: 텍스트 vs 배경 4.5:1 이상 (WCAG AA)
- **시각 일관성**: 같은 역할의 정보는 같은 스타일로 (위계 룰 위반 금지)
- **다크 채움 컬러**: `label.900` (#111111) 사용. #243042 슬레이트 네이비·#333333 차콜 사용 금지
- **Line vs Filled 트리트먼트 일관**: 한 화면에 라인 카드 + 그레이 채움 + 브랜드 채움이 무분별하게 섞이지 않도록 통일
- **UI엔 항상 semantic 토큰 사용** — primitive는 semantic이 참조하는 원본일 뿐, 직접 UI에 꽂지 않음

---

## 🔤 타이포그래피 사용

- 토큰은 `typography/typography.json` 에서 조회
- 모바일/데스크탑 스케일이 별도로 정의됨 — 화면 컨텍스트에 맞게 선택
- 한글 가독성 우선. line-height 150% 고정

---

## 🧩 컴포넌트 사용

`components/`의 button · badge · navigation · text-input · modal 은 **그대로** 사용합니다. 각 컴포넌트마다 `.md`(스펙)과 `.json`(토큰)이 쌍으로 있음.

폴더에 없는 UI는 기존 컴포넌트의 스타일을 따라 신규 제작합니다. 외부 디자인 시스템(Material, Ant 등)을 그대로 끌어오지 않음.

---

## 🔣 아이콘 사용 룰

- **`icons/` 의 SVG만 사용**. 가용 아이콘은 `icons/INDEX.md`에서 확인
- **가중치 선택**:
  - `-regular`: 본문·secondary·inactive
  - `-bold`: 강조·active·CTA
- 폴더에 없는 아이콘은 직접 그리지 말고, 어떤 아이콘이 필요한지(이름+용도)를 사용자에게 요청
- 사용 시: SVG 파일을 읽어 인라인 `<svg>...</svg>`로 그대로 삽입. 색상은 `fill`/`stroke`만 토큰 색으로 교체
- **사이즈는 wrapper로 제어** — **16×16 / 18×18 / 24×24 세 가지만** 사용 (다른 사이즈 금지)
- **Color 계열(`color-*`)** 은 다색이라 fill 변경 금지
- 그래픽·일러스트는 넣지 않음
- **더보기·disclosure 인디케이터는 `right-regular.svg` / `right-bold.svg`** 사용 (`arrow-right-*.svg` 금지)

---

## 💡 작업 원칙 (UI 작업 시 항상 적용)

> ⚠️ **항상 반응형으로 그릴 것** — 모든 자식 요소는 `width: 100%` / `flex: 1`. 부모 padding 계산해서 픽셀(예: 350·316·318) 박는 패턴 절대 ❌

1. **토큰 값은 직접 hex/px로 박지 말고** `colors/*.json`, `typography/*.json`, `components/*.json` 에서 항상 조회해 쓴다
2. **보더·스트로크는 1px 고정** — 강조는 색·배경 틴트·체크 필로
3. **짝수 그리드 / 라운드 8~12 / 패딩 12~24** — 토큰에 없는 값을 쓸 때도 짝수만
4. **다크 채움 = `label.900` (#111)** — 채움 컬러로 #243042·#333은 사용 금지
5. **소수점 픽셀 금지** — flex 분배가 정수가 안 되면 gap이나 셀 수를 조정
6. **레퍼런스 이미지 = 영감만** — 레이아웃 원리만 추출, Muchon 토큰으로 번역. 외부 컬러·폰트·컴포넌트 그대로 가져오지 않음
7. **UI는 항상 반응형** (비협상 룰):
   - 자식 요소 width는 `100%` / `flex: 1` 만
   - 부모 padding을 미리 계산해 자식에 픽셀 width(예 350·316·390) 박는 패턴 절대 ❌
   - 새 코드를 쓸 때마다 즉시 본인 코드를 검수해서 하드코딩 width 색출 → 100%/flex로 교체
   - **예외만 픽셀 유지**: 아트보드 자체(390), 아이콘 사이즈(16/18/24), 별점(18), 모달 max-width(360) 등 의미있는 토큰

   **체크리스트** (UI 작업 끝마다):
   1. `width: 350` / `316` / `318` / `390`(자식) 모두 색출
   2. 100% 또는 flex로 교체
   3. 부모 padding/gap만으로 레이아웃 자연 정렬 확인

---

## 🚀 새 프로젝트에 적용하는 법

**옵션 A — 공유 (여러 프로젝트가 같은 디자인 시스템 공유)**

```
~/design-system/                ← 이 폴더를 홈 디렉토리에 둠 (한 번만)
~/my-new-project/
└── CLAUDE.md                   ← 한 줄 추가: "디자인 시스템: ~/design-system/"
```

**옵션 B — 프로젝트 내장 (한 프로젝트에 종속, fork 가능)**

```
~/my-new-project/
├── design-system/              ← 이 폴더 통째로 복사
└── CLAUDE.md                   ← 한 줄 추가: "디자인 시스템: ./design-system/"
```

cmux로 여러 프로젝트를 굴린다면 **옵션 A** 추천. 디자인 시스템을 프로젝트별로 다르게 변형할 거면 **옵션 B**.

> 프로젝트의 CLAUDE.md에서 이 폴더 경로를 가리키기만 하면, Claude Code가 본 문서를 컨텍스트로 자동 로딩합니다.
