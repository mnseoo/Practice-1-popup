# Muchon 디자인 패턴 — 자매 서비스 관찰 노트

Muchon Design System을 사용하는 다른 서비스(`버림 파트너` 앱 등)의 실제 적용 패턴을 정리. **토큰·컴포넌트는 `~/design-system/`이 정답**, 이 문서는 "어떻게 운용하느냐"의 사례집.

> 새 이미지가 추가될 때마다 패턴 보강. 시안별로 적합한 케이스는 비고에 명시.

---

## 📂 출처 이미지

`~/design-system/references/images/`

| 파일 | 화면 | 핵심 패턴 |
|---|---|---|
| `partner-login-splash.png` | 로그인 스플래시 | 로고 + 헤드 카피 + 일러스트 + Bottom CTA + 보조 링크 |
| `partner-login-phone-empty.png` | 휴대폰 번호 입력 | Line 인풋 + Disabled CTA |
| `partner-login-otp-error.png` | 인증번호 입력 에러 | Negative 상태 + 타이머 + 키패드 |
| `partner-login-no-permission.png` | 권한 없음 빈상태 | Empty State (회색 원 + ! 아이콘) |
| `partner-onboarding-info.png` | 첫 접속 안내 | Empty State + 회색 안내 카드 + 불릿 |
| `partner-history-list.png` | 이용 완료 리스트 | 상태 pill + 카드 리스트 + Bottom Nav 3탭 |
| `partner-receipt-detail.png` | 영수증 상세 | 큰 금액 헤더 + breakdown + 라벨/값 표 + 사진 그리드 |
| `partner-collect-info-payment.png` | 반출 정보 입력 | 상단 정보 바 + 청구/지급 토글 + 다중 카드 + Disabled CTA |
| `partner-waste-type-multiselect.png` | 폐기물 성상 다중선택 시트 | 검색 + 선택칩 + 체크 리스트 + Bottom CTA |
| `partner-billing-prepaid-applied.png` | 청구 확정 (긴 폼) | 12개 섹션 적층 + 카드형 분리 + 최종 카드 강조 |
| `partner-amount-input-sheet.png` | 금액 입력 시트 | Bottom Sheet + 큰 숫자 인풋 + 키패드 |
| `partner-account-edit-delete-modal.png` | 계좌 삭제 모달 | Center 모달 + 취소/삭제 (red) |

---

## 🎨 컬러 운용 패턴

### Brand mint (`brand.600` #02BE8F) — 어디에 쓰는가

| 위치 | 사례 |
|---|---|
| **Bottom CTA** | "로그인", "선택 완료", "입력 완료", "3,080,000원 청구 확정" |
| **활성 탭 underline** | 세그먼트 컨트롤("청구/지급")의 active 인디케이터 |
| **Active 선택 보더** | 결제수단 카드 선택 시 mint 1px 보더 |
| **Active 체크** | 체크박스/리스트 다중선택 체크 (브랜드 색 ✓) |
| **Numbered 리스트 원** | 폐기물 성상 1·2·3 라벨링용 mint 작은 원 |
| **강조 금액** | 최종 결제 금액 큰 숫자 (`28-32/700` mint) |
| **상태 Weak pill** | "전송 대기중" mint.50 bg + mint.700 text |
| **Toggle ON** | 견적 영수증 발송 토글 ON |
| **로고** | "버림 PARTNER" 워드마크 |

### Brand mint를 안 쓰는 곳 (중요)

- 일반 본문 텍스트
- 기본 배경 (베이스는 화이트 + 연한 그레이)
- 보더·디바이더 (neutral grey)
- Disabled CTA는 **brand.300 정도의 옅은 mint**로 처리 (grey가 아니라 lighter brand)

### 그 외 시그널 컬러

| 컬러 | 역할 | 사례 |
|---|---|---|
| **다크 슬레이트** (#1F2937 계열) | 상단 정보 바 / Solid 상태 pill ("전송 완료", "확정") | 상단 차량/고객 바 |
| **Status red** | 파괴적 액션 / 음수 / 에러 | "삭제" 버튼, "할인 금액 -300,000원", "입력하신 번호를 다시 확인해주세요" |
| **System blue** | 전화번호 등 시스템 링크 | 카드 안 010-1234-1234 (밑줄) |
| **Light grey strip** (#f5f5f5 계열) | 섹션 간 구분 | 카드 사이 8px 띠 |

---

## 📐 타이포 위계 사례

| 역할 | 사이즈/웨이트 | 컬러 | 사례 |
|---|---|---|---|
| 페이지 헤드라인 | 22-24/700 | label.900 | "휴대폰 번호를 입력해주세요", "금액을 입력해주세요" |
| 강조 금액 (Hero number) | 28-32/700 | brand.600 | "330,000원" 총 결제, "1,440,000원" 최종 |
| 섹션 타이틀 | 18/700 | label.900 | "결제수단", "선입금", "이용 정보" |
| 카드 헤더 | 15-16/600 | label.900 | "최종 결제 금액", "폐기물 AI 분석 결과" |
| Body label (좌측) | 14/500 | label.600 | breakdown 좌측 "공급가액", "할인 금액" |
| Body value (우측) | 14/500 | label.900 | breakdown 우측 "2,800,000원" |
| Sub helper | 12-13/400 | label.500 | 카드 sub-info, 시각 |
| Pill / 작은 뱃지 | 11-12/600 | (variant별) | 상태 pill, "TOP 1" |

> **드리프트 주의**: spec과 다르게 보이는 값은 zoom·렌더링 차이일 수 있음 — 항상 `~/design-system/typography/typography.json`이 정답.

---

## 🧱 컴포넌트 운용 패턴

### Bottom CTA (가장 중요)
- **Solid Primary 3XL** (`button.json`) — 52h, radius 8, padding 14·16, 16/600, 풀 폭
- 화면 하단에 항상 안전 영역 위로 배치
- **Disabled = brand.300** (lighter mint), grey가 아님
- 단독 CTA가 표준. 모달일 때만 좌(취소) + 우(주요) 페어

### Pair CTA (모달 / 시트)
- 좌: **Line L** (white bg + grey 1px border + dark text) — 취소·이전
- 우: **Solid 색상** — 주요 액션 색에 따라 mint(긍정) / red(파괴)
- 비율 50/50 또는 1/3+2/3, 정렬은 우측 강조

### 인풋 (TextField)
- **Box 스타일**: 흰 bg + 1px 보더 + 라벨(좌측 위 12/500 label.600) + 단위 슬롯(우측, 12-14/500 label.500)
- **Line 스타일**: 라벨 위 + 밑줄 1px (`label.800` neutral), focus시 미묘한 굵기 변화 없이 색만 변화
- **숫자 인풋**: 우측 정렬 + 단위 슬롯 ("원", "평", "개", "층")
- **Negative**: 라벨/언더라인/헬퍼 모두 red. 입력 텍스트 자체는 그대로 (label.900)

### 카드 (Section card)
- 흰 bg + 1px 보더 + radius 8-12 + 패딩 16-20
- 헤더(15-16/600) → 컨텐츠 → 필요 시 디바이더 → 액션 row
- 카드 사이는 회색 strip(8px #f5f5f5)으로 구분

### 뱃지·칩 4종 분류 (혼동 금지)

뱃지·칩 같은 작은 라벨류는 **용도에 따라 4종으로 명확히 분리**해서 사용. 같은 화면에서 여러 종류가 섞이면 위계가 무너지고 사용자가 "어떤 것이 액션 가능한지" 헷갈림.

| # | 카테고리 | 용도 | Spec |
|---|---|---|---|
| 1 | **Status Pill** | 아이템의 상태 표시 (견적 도착·수거 완료·취소) | ↓ Status Pill variant matrix 참조 |
| 2 | **Info Tag Chip** | 분류·태그·라벨 (read-only, 짧고 작음) | bg `gray.200` (#f3f3f3) + text `label.600` (#686868) **11/500**, padding **3·8**, **radius 4** (작은 rectangle, pill 아님) |
| 3 | **Selectable Chip** | 옵션 선택 (필터·날짜·환경 등, 인터랙티브) | **pill (radius 999)**, padding 8·14, fontSize 14/500-600. Line(unselected): white + 1px stroke.solid + label.900 14/500 / **Selected: bg `gray.800` (#333333) + 1px gray.800 + `static.white` 14/600 (dark filled)** |

**Selectable chip selected — 왜 brand 아닌 dark?**: brand.50+brand.600 mint tint은 Status Pill의 "Solid Weak mint (랭킹·추천)"와 시각적으로 비슷해 혼동됨. 또한 brand 컬러는 CTA·포인트만 쓰는 룰에 어긋남. **dark filled**로 통일해 "선택됨"이 명확하고 brand 컬러와 분리됨.
| 4 | **Mode Indicator** | 페이지 컨텍스트 (현재 모드·진행 중인 분기) | bg `background.alternative` (#f5f5f5) + label.900 13/600 + 1×12 vertical bar + label.600 13/500 secondary, padding 10·14, radius 8 — **pill 아님, banner-style** |

**의사결정**: 라벨 만들기 전에 "이건 어떤 용도인가?" 자문하고 위 4종 중 하나로 명확히 분류. 새 variant 만들지 말 것.

### Status Pill — variant 선택 매트릭스

상태 뱃지를 단순 grey muted로만 쓰면 화면이 단조롭고 위계가 흐려짐. 상태의 **성격**(action 필요? 확정? 종료?)에 따라 4가지 variant를 골라 써야 시각적 리듬이 살고 사용자가 "지금 뭘 봐야 하는지" 빠르게 파악 가능.

| 상태 성격 | Variant | bg / text | 예시 |
|---|---|---|---|
| **Action 필요·대기·진행 중** (가장 강조) | **Solid Primary mint** | `brand.600` (#02be8f) + `static.white` | 견적 도착 / 견적 중 / 받는 중 / 전송 대기중 |
| **예약 완료** (다가오는 일정, action context) | Line/Outline | white + 1px `label.800` + `label.900` text | 예약 완료 / 확정 (방문 예정) |
| **랭킹·강조 (highlight)** | Solid Weak mint | `brand.50` (#ecf9f6) + `brand.700` (#02ab81) | AI 추천 / TOP 1 / 추천 |
| **수거 완료·취소·종료** (passive, 위계 낮음) | Solid Weak grey | `gray.200` (#f3f3f3) + `label.600` (#686868) | 수거 완료 / 취소 / 만료 |
| **에러·경고** | Solid Weak Red | `red.50` + `red.700` | 결제 실패 / 환불 |

**위계 원칙**: Action 필요 상태가 시각적으로 가장 눈에 띄어야 함. 완료된 내역은 archive 성격이라 약하게. **`gray.800` dark filled은 Selectable Chip selected 전용 — Status Pill에는 사용 X** (시각적 충돌 방지).

**Solid Primary > Outline > Solid Weak mint > Solid Weak grey** 순으로 weight 차등.

**활용 원칙**:
- 한 화면에 같은 의미의 pill은 같은 variant 사용 (consistency)
- 화면에 여러 pill이 있으면 variant 차이로 위계 만들기 — 모두 grey muted면 어떤 게 중요한지 안 보임
- **Solid Dark**는 시각 무게가 강함 — 1-2개의 "확정" 카드에만 (남발 X)
- **Solid Weak mint**는 "지금 봐야 할 카드" 시그널 — 가장 많이 쓰지만 active 상태에만
- **Solid Primary mini** (brand.600 fill)는 단 하나의 강조 포인트 (AI 추천처럼)
- contrast: 모두 4.5:1 이상 통과해야 함 (text on pill bg)

### Segmented Toggle ("청구 / 지급")
- 회색 트랙 + 흰 캡슐 active + active label.900 + inactive label.500
- 또는 underline 스타일 (active만 mint underline + label.900)
- 두 패턴 다 등장 — 화면 정보 밀도에 따라 골라 씀

### 다중 선택 리스트 (성상 선택)
- 검색 인풋 (위)
- 선택된 항목들이 **회색 pill + X**로 위에 모여 보임
- 본 리스트는 1px 디바이더로 row 분리
- 선택된 row는 **mint 텍스트 + mint 체크 ✓** (좌측은 일반 위치, 체크는 우측)
- Bottom CTA "선택 완료"

### Bottom Nav (Partner 앱)
- 3탭(파트너): "새 접수 / 진행 중 / 이용 완료"
- 아이콘 + 라벨 (24px 아이콘 + 11/500 라벨)
- Active = label.900 + 채워진 아이콘, Inactive = label.500
- 알림 점(red dot)을 아이콘 우상단에 노출
- 상단 미세 그림자, border-top 없음 (Muchon nav spec과 일치)

### 모달 (Center Alert)
- 중앙 white 카드 + radius 12 + 패딩 24
- 헤드라인 16/600 label.900 (질문형)
- 좌(취소 white outline) + 우(주요 솔리드: 파괴면 red, 확정이면 brand)
- 배경 dim ~50%

### Bottom Sheet (시안 3 표준)
- **Top corners radius 16** (좌·우 둘 다, 하단은 둥글지 않음)
- **Sheet Header**: 48h, padding 12·16, X close button 우측 정렬 (24×24, `cancle-bold.svg`, fill `label.900`)
  - 핸들바는 사용 안 함 (X close 단독으로 충분)
- **Sheet Body**: padding 8 20 24
  - Greeting (title 22/700 + sub 14/500 label.600)
  - Content (옵션 카드·검색·리스트·키패드 등)
- **Home Indicator Area**: 34h
- **배경**: dim overlay 50% black (`rgba(17,17,17,0.5)`)
- 단일 Solid Primary CTA가 필요할 때만 하단에 추가 (옵션 선택 시트는 카드 자체가 액션이므로 CTA 불필요)

### Empty State
- 그레이 60×60 원 + 중앙 "!" 아이콘 (회색)
- 헤드라인 18/700 label.900 (한 줄, 짧게)
- Sub copy 14/400 label.500 (한 줄)
- 추가 안내가 필요하면 회색 카드 (`#fafafa`) + 헤더 14/600 + 불릿 13/500

### Sticky 다크 컨텍스트 헤더 (this-is-your-X 패턴)

**언제 쓰나**: 한 화면이 "사용자의 X에 대한 Y"를 보여줄 때, X를 화면 상단에 고정 컨텍스트로 노출. 사용자가 "내가 어디에 있는지" 항상 인지하게 함.

**구조**:
- Status bar: 그대로 유지 (white bg + black icons) — OS 영역은 건드리지 않음
- **Top Nav**: white bg + 검정 텍스트/아이콘 (일반 spec) — 다크는 Context Block에만 적용. Top Nav까지 다크로 칠하면 OS 외 영역과 충돌해 무거움
- Context Block (다크 슬레이트, Top Nav 바로 아래):
  - 색상: `gray.800` (#333333) — primitive 토큰
  - padding 12·20 (top·side), bottom 18 (다음 white content와 분리감)
  - 사용자/요청/객체 요약 정보
- Context Block 텍스트:
  - Primary 정보 (이름·종류 등): 14/600 `static.white`
  - Secondary (주소·시간·세부): 12/500 `coolGray.400` (#b8c1d1) — 다크 위에서 충분한 contrast
- Right slot 액션: 13/500 white "신청서 보기", "수정", pencil 아이콘 등

**시안 적용 예시 (시안 3 받은 견적)**:
- 상단 다크 헤더에 "이 견적들은 어떤 신청에 대한 것인가" 명시 (사진 thumb + 가구·일반 폐기물 + 강남구 + 신청서 보기 링크)
- 그 아래 white content에 정렬 + 견적서 비교 카드들

**파트너 앱 적용 예시 (참조)**:
- 차량 번호 + 차량 톤수 (123가 1234 / 1.0t) + 임시저장 right
- 그 아래 다크에 업체·고객 정보 (자연과환경 / 김무촌 010-XXXX) + pencil 수정

**주의**:
- 다크 헤더는 강한 시각 무게 — 정보 밀도 높은 화면에서만. 단순 list 화면엔 과함
- Status bar는 다크에 합치지 말 것 (OS 표준 침범)
- 다크 위 텍스트 contrast는 white 또는 coolGray.300/400 안에서만 (4.5:1 이상)

### Line UI vs Filled UI — 화면 밀도와 리듬

**문제**: 모든 컴포넌트를 white+line으로만 구성하면 화면이 단조롭고 밀도 낮아 보임. 정보가 많은 폼·리스트 화면에서 특히 두드러짐.

**해결**: filled 컨테이너로 섹션 묶고 line 카드를 그 안에 배치 — 계층적 fill/line 교차로 시각 리듬 생성.

**3단 계층 운용**

| 레벨 | 역할 | 스타일 |
|---|---|---|
| **L1** 섹션 그룹 컨테이너 | 큰 토픽 묶기 (결제수단, 상세 분석, 할인 등) | **filled** `background.alternative` (#f5f5f5) — bg 만, no stroke |
| **L2** 인터랙티브 카드 | 단일 컴포넌트 (인풋·옵션·CTA) | **white + 1px line** (stroke.solid #e5e5e5) |
| **L3** Active/Selected 상태 | 선택된 카드·체크된 옵션 | **filled brand.50 + brand.600 1px line** |

**활용 사례 (파트너 앱 청구 화면 패턴)**

- **결제수단 2×2 grid**: 4개 옵션 카드. 3개 white+line(unselected), 1개 brand.50+brand.600 line(selected). 선택 상태 명확
- **선입금 그룹 컨테이너**: filled grey wrapper로 input + "전액 사용" 체크박스 묶기 → "이건 한 묶음 정보"임을 면적으로 표현
- **상세 분석 nested**: filled grey 섹션 → 안에 white-outline "AI 분석 결과" 카드 → 그 안에 input box + collapsible row. 중첩 fill→line→inner-line으로 시각 흥미
- **할인 + "+ 추가"**: filled grey 섹션 안에 dashed/line 추가 버튼 → 액션이 그룹의 일부임을 자연스럽게 편입
- **상태 확인 줄**: input 아래 "✓ 1분 전 입력" 같은 인라인 mint check + sub-text로 confirmation density 추가 (작은 필드지만 정보 풍부)

**적용 가이드 (의사결정 트리)**

1. 같은 토픽 정보 묶음이 N개 이상 있나? → L1 filled 컨테이너로 그룹
2. 그 안에 사용자가 직접 다루는 컴포넌트(인풋, 옵션, 버튼)? → L2 white + line
3. 그 중 selected/active 상태? → L3 brand.50 + brand.600 line
4. 단일 카드 1개만 있는 가벼운 화면? → L1 생략 가능 (white 베이스)
5. 모든 카드가 line이면 → 1-2개 섹션을 L1 filled로 묶어 리듬 생성

**시안 3 적용 원칙**

- "정보 밀도 높게 + 여백 여유" 컨셉은 단순 line 반복으로 달성 안 됨 — fill 섹션을 적절히 끼워야 밀도 ≠ 답답함의 균형
- 모든 화면에서 적용은 X. 정보가 분기되는 화면(견적 신청·이용 내역 등)에서 특히 효과적
- brand 컬러는 여전히 CTA·active만. L1 fill은 grey, L3는 brand.50 (옅은 mint)

**카드 내부 액션 버튼 — canvas 색깔까지 함께 고려**

카드 내 버튼 variant는 카드 색뿐 아니라 **카드를 둘러싼 화면 canvas 색**도 같이 봐야 한다. 같은 grey가 2단계로 겹치면(canvas grey + button grey) 위계가 흐려진다.

| 화면 canvas | 카드 | In-card 버튼 variant | 토큰 |
|---|---|---|---|
| **white** | white + 1px line | **Solid Weak (filled grey)** | bg `gray.200` (#f3f3f3) + text `label.800` |
| **grey (#f5f5f5)** | white (보더 없음) | **Line (white + 1px border)** | bg `static.white` + 1px `stroke.solid` + text `label.900` |
| white | brand.50 (active L3) | Solid Primary mini | brand.600 + white |

**의사결정 트리**:
1. 화면 canvas가 grey인가? → 카드 내 버튼 절대 grey filled 쓰지 말 것 (배경과 겹침). Line으로
2. 화면 canvas가 white인가? → Solid Weak (filled grey) 사용. 흰 line 위에 line은 약함
3. 카드가 brand 강조 상태인가? → 안의 CTA는 Solid Primary mini

**원칙**: 같은 색이 두 계층에서 반복되면 시각 무게가 무너진다. 항상 **canvas → card → button** 세 층의 색 관계를 함께 검토.

**기타 버튼 위치**:
| 위치 | variant | 토큰 |
|---|---|---|
| 화면 하단 main CTA | Solid Primary 3XL | brand.600 + white |
| Toolbar / 보조 액션 (단일) | Line L | white + stroke.solid + label.900 |
| Ghost 인라인 링크 | Ghost (text only) | label.600 또는 brand.700 |

**🚫 안티패턴: 박스 인 박스 (Wrapper-in-Wrapper)**

큰 filled grey wrapper 안에 또 작은 boxed 카드를 라운드+패딩으로 넣지 말 것. 시각적으로 답답하고 nested feel이 무거워짐.

| ❌ 잘못 | ✅ 올바름 |
|---|---|
| 페이지에 큰 grey wrapper (radius 12, padding 16) → 안에 white 카드들 (radius 12) | grey가 필요하면 화면 자체 또는 섹션 자체의 bg로 넣고, 그 위에 white 카드 |
| L1 wrapper가 page-margin 안에 갇혀 좁아 보임 | 화면/섹션 자체가 grey면 좌우 마진까지 채워져 시원함 |

**언제 어디까지 grey를 깔지 — 의사결정 트리**:

1. **화면 전체 콘텐츠가 list-of-cards 위주** (이용 내역, 받은 견적 list, 이용 완료 등)
   → **artboard 자체 bg를 grey** (#f5f5f5)
   → 모든 카드(white)는 그 위에 떠 있는 형태
   → 섹션 간 구분은 **섹션 타이틀 + 간격(24-32px)**만으로 (별도 wrapper X)
   → 예: 이용 내역 화면 — 진행 중 + 지난 내역 두 섹션이 모두 grey 위 카드 리스트

2. **혼합 콘텐츠 + 한 섹션만 list-of-cards 성격이 강한 경우** (예: 업체 상세 페이지의 후기 섹션)
   → **그 섹션만 full-bleed grey**, 나머지는 white
   → 섹션이 화면 폭 전체로 뻗고 자체 padding 24·20
   → 그 위 카드는 white
   → 다른 콘텐츠(Hero, 업체 정보)는 white 위 그대로

3. **단일 카드 1-2개만 있는 가벼운 화면** (홈 등)
   → grey 도입 X, white 베이스 유지
   → CTA solid mint로 충분한 시각 리듬

**구현 원칙**:
- grey 영역(화면이든 섹션이든)에 또 grey wrapper를 또 만들지 말 것 — 이중 grey
- 카드는 항상 white + radius 12 (보더 없음 가능, grey 위에 뜬 느낌)
- 섹션 타이틀은 grey 위에 18/700 label.900 — bg 없이 텍스트만

### 카드 안 banner-header 패턴 (참고용 sub-section)
- 카드 내부에 read-only / 참고용 정보를 묶을 때 사용
- 구조:
  - 카드 외곽: 흰 bg + 1px stroke + radius 12 + `overflow: hidden` (banner radius 잘리게)
  - 상단 banner: `background.alternative` (#f5f5f5), padding 14·16, 헤더 텍스트 14/600 label.900 + (옵션) 작은 보조 라벨 12/500 label.600 — **단, 보조 라벨은 정말 정보를 더할 때만**. 헤더 텍스트만으로 의미가 명확한 경우(예: "신청 정보" 자체가 사용자 입력임)는 보조 라벨 생략. AI 추정·근사값처럼 "참고용" 의미가 추가적 가치 있을 때만 유지
  - 본문: padding 20, 일반 카드 내용 (white bg 그대로)
- 사용처 예시:
  - AI 분석 결과 / 시스템 산출 정보
  - 신청 완료 후 신청 정보 요약
  - 영수증의 "이용 정보" / "폐기물 정보" 섹션
- 효과: 카드 내부 정보를 "이건 시스템이 알려주는 참고 정보예요" 라는 톤으로 명확히 분리. 디바이더보다 강한 그룹핑, 별도 카드보다 가벼운 분리.

### 사진 썸네일 그리드 (영수증 상세)
- 정사각형 5장 가로 정렬 (한 줄 5개)
- radius 4-8, 1px 보더
- 라벨에 "사진 5장" 등 카운트 표기

### 전화번호·식별번호 표기
- 시스템 blue + underline (탭하면 통화/복사)
- 본문 안에 인라인으로 자연스럽게 박힘 (별도 카드 X)

---

## 📏 간격·여백 패턴

**Form-step page title 통일 (시안 3 견적 신청 플로우)**

견적 신청처럼 step-by-step 폼 화면들의 페이지 타이틀은 **24/700 label.900 lineHeight 36**로 통일. 여러 화면을 거치는 플로우에서 같은 위계의 question-headline은 같은 사이즈여야 사용자가 흐름을 일관되게 인지.

예: "어떤 폐기물인지 알려주세요" / "어떤 환경에서 수거하나요?" / "어디에서 수거할까요?" / "언제 수거해 드릴까요?" 모두 24/700.

(섹션 안의 sub-section title은 18/700 유지 — 페이지 타이틀과 구분)

| 위치 | 권장 값 |
|---|---|
| 섹션 간 (다른 토픽) | 24-32px (주로 회색 strip 8px로 보강) |
| 카드 내부 패딩 | 16-20px |
| 카드 안 row 사이 | 12-14px (1px 디바이더 같이 쓰기도 함) |
| **섹션 타이틀 ↔ 서브 헬퍼** | **2px** (짝지어 보이도록 4보다 2가 적절) |
| 인풋 라벨 ↔ 인풋 | 6-8px |
| 인풋 ↔ 헬퍼 | 4-6px |
| Bottom CTA ↔ 콘텐츠 | 16-20px (safe area 위) |
| 페이지 좌우 마진 | 20px (모바일 기본) |

---

## 🎯 시안 3 적용 체크리스트

이 패턴들 시안 3에 적용할 때 우선순위:

1. **Bottom CTA = Solid Primary 3XL 풀 폭, mint** — 모든 화면에 일관
2. **Disabled CTA = lighter mint (brand.300)** — grey 처리 금지
3. **상태 pill 운용**: 진행 중/대기 = mint Weak, 완료/확정 = dark Solid, 취소/실패 = grey/red Weak
4. **금액 강조 = mint 28-32/700** — 화면당 1곳에만 (Primary 위계)
5. **Empty State = 회색 60원 + ! + 헤드 + sub** — 권한·결과 없음 일관 패턴
6. **다중 선택 = 검색 + 선택칩 + 체크리스트** — Bottom Sheet 형태
7. **다크 슬레이트 상단 정보 바**는 정보 밀도가 매우 높을 때만(파트너 앱 패턴) — 시안 3 일반 화면은 화이트 베이스 유지
8. **카드 사이 8px 회색 strip**으로 섹션 구분 — 보더 안 그어도 분리감 확보 (시안 2도 동일)
9. **두 컬럼 인풋**: 비교 가능한 값일 때만 (방/욕실, 전체 층/해당 층 등)
10. **숫자 인풋 우측 정렬 + 단위 슬롯 우측** — 금액·평·층 모든 financial-ish 인풋에 적용

---

## 🧠 운용 원칙 (Muchon 시스템 일반)

- **Brand 컬러는 액션·강조 한 곳에만**. 본문/배경에 깔지 않음.
- **Disabled는 brand 옅은 톤** (grey 아님). 활성/비활성을 같은 컬러 패밀리로 묶어 시각 일관성 유지.
- **상태(status)는 pill로**, 해당 row 안에서 좌측 또는 라벨 옆에 작게.
- **금액·핵심 숫자는 큰 폰트 + brand 컬러**로 시선 잡고, 그 외 row는 14/500 neutral.
- **카드 보더 vs 회색 strip**: 강한 그룹 분리는 strip, 카드 자체 경계는 1px stroke.
- **위계는 점프**: 28→18→14→12 (gradient 금지)
- **명도 대비 4.5:1 이상** 유지 (text on bg).

---

## 🏦 토스 뱅크 화면 분석 (참고 — 시안 3 이용내역·받은견적·홈 적용)

### 출처
사용자가 2026-04-29 공유한 토스뱅크 계좌 상세. 레이아웃·간격·텍스트 사이즈·인카드 버튼 스타일을 우리 시스템 토큰으로 번역해서 활용.

### 추출 원칙

#### 1) 페이지 = 라이트 그레이 베이스 + 화이트 카드
- 페이지 배경: 매우 옅은 그레이 (#f4f5f7급) → 우리 토큰으로는 `background.subtle` 또는 카드 그룹 분리감 필요할 때만 사용. **시안 3 이용내역 화면에서 user는 그레이 깔지 않기로 결정** — 이 패턴은 향후 다른 화면(대시보드·통합 내역 등)에 한정 적용.
- 카드: 순백 (`background.default` #ffffff) + radius **16px** + 패딩 **20–24px**.
- 카드 사이 간격 **12–16px**.

#### 2) Hero 메트릭 카드 (계좌 잔액 패턴)
| 위계 | spec |
|---|---|
| L4 (메타) | 은행/계좌 라벨 — `13/500 label.600`, underline 옵셔널 |
| **L1 (Hero)** | 잔액 숫자 — **`32–36/700 label.900`**, 한 카드에 **단 하나** |
| 우상단 | chevron (24×24 label.400) — 카드 자체가 클릭 영역 |

→ **시안 3 적용처**: 받은 견적 화면 상단 "최저가 ₩{n}원" hero, 이용내역의 진행중 카드 진행 단계 강조 등.

#### 3) 인카드 트랜잭션 리스트 (3-컬럼 row)
| 컬럼 | 폭 | 스타일 |
|---|---|---|
| 날짜 | ~50 | `13/500 label.400` |
| 라벨 | flex 1 | `15/500 label.900` |
| 값 | auto right | `15/700 label.900` (양수면 그대로, 음수도 동일 — 빨간색 안 씀) |

- row 사이 gap: **10–14px**
- 날짜는 `4.28` 형식 (월·일만, 연도 생략)
- 구분자 없음 — 컬럼 정렬만으로 분리

→ **시안 3 적용처**: 이용내역 진행 카드 안 진행 단계 row, 받은 견적 카드 안 입찰 row, 홈 빠른 신청 카드 안 진행 row.

#### 4) 인카드 듀얼 액션 버튼 (좌우 균등 분할)
- 두 버튼 풀폭 균등 분할 (gap 8–12px)
- 높이 **52–56px** (대형) — Solid Weak grey (gray.200 bg + label.800 #333 text)
- 라벨 `16–17/600` 가운데 정렬
- 카드 안 actionable 영역의 표준 패턴

→ **시안 3 적용처**: 이용내역 진행 카드 하단 "받은 견적 보기 / 취소하기", 업체 상세 하단 "전화하기 / 채팅하기" 등 듀얼 액션.

#### 5) 인라인 리스트 row (Color icon + label + count + chevron)
- 좌측: 색상 아이콘 (~36×36 사각, radius 8, 옅은 틴트 bg + 컬러 아이콘)
- 라벨: `16/600 label.900`
- 우측: 카운트(`14/500 label.600`) + chevron 24×24 (`label.400`)
- row 패딩 12–14 vertical, 16 horizontal
- **divider는 그리지 않음** — 카드 안에서는 row만으로 충분

→ **시안 3 적용처**: 홈 화면 "자동 견적 / 직접 신청" 메뉴 row, 더보기 화면 메뉴 row 등.

#### 6) 그룹 row (avatar + 2단 텍스트)
- 좌측 avatar 36–40×40 (라이트 블루 그레이 bg + 그레이 인물 아이콘)
- 우측: 라벨 `13/500 label.600` 위, 금액 `18/700 label.900` 아래 (2-line)
- row 사이 gap 14–16

→ **시안 3 적용처**: 받은 견적 카드 "업체명 + 견적가" 패턴, 후기 작성 화면 "업체명 + 별점" 등.

#### 7) Promo/2차 카드 (썸네일 + 텍스트)
- 좌 썸네일 60×60 radius 12
- 우: 타이틀 `15/700 label.900` + 메타 `13/500 label.400`
- 카드 자체는 다른 카드들과 동일한 화이트 + radius 16 + 패딩 16–20

→ **시안 3 적용처**: 홈 화면 "이번 달 견적 트렌드" 같은 정보성 카드, 업체 상세 하단 "비슷한 업체" 추천 카드 등.

### 토스 → Muchon 토큰 매핑

| 토스 관찰값 | Muchon 토큰 |
|---|---|
| 카드 radius ~16–20 | **radius 16** (시안 3 카드 표준) |
| 카드 패딩 ~20 | **padding 20** (12–24 범위 내) |
| 페이지 bg 옅은 그레이 | `background.subtle` (#f8f8f8) — 선택적 |
| 카드 bg 화이트 | `background.default` (#ffffff) |
| 잔액 숫자 ~32/700 | typography mobile **28** 또는 **30/700** + label.900 |
| 라벨 13/500 | typography **13/500 label.400** (메타) / `label.600` (메타 강조) |
| 액션 라벨 16-17/600 | **Solid Weak L (40h)** 또는 **2XL (48h)** 컴포넌트 |
| Solid Weak grey 버튼 | `gray.200 bg + label.800 text` (button.json Solid Weak) |
| chevron 24 muted | `arrow-right-regular.svg` 또는 `chevron-right` 24×24, fill `label.400` |

### 안 가져올 것 (절대)
- 토스 라이트 블루 그레이 (avatar bg) — 우리는 `gray.100`이나 `brand.50`로 대체
- 토스 본문 폰트 (Toss Product Sans 류) — 우리는 무조건 **Pretendard**
- 토스 굵은 보더·shadow — 우리 시안 3는 1px `stroke.solid` + 미니멀
- 토스 빨간색/파란색 강조 — 우리는 mint 한 색만 강조

---

## 📅 변경 이력

- **2026-04-29**: 최초 작성. 버림 파트너 앱 12장 기준 패턴 추출.
- **2026-04-29 (추가)**: 토스 뱅크 계좌 상세 화면 1장 분석 — 인카드 듀얼 액션, 3-컬럼 트랜잭션 row, hero 메트릭 카드 등 7개 패턴 추출.
