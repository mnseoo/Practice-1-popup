# Modal — Confirm Dialog

> 사용자 확인이 필요한 액션(낙찰·취소·삭제·등록 등)에 쓰는 2버튼 모달 다이얼로그.
> 단순 알림(단일 확인 버튼)이 아니라 **취소/확인 양자택일이 가능한 컨펌 시트**.

## Button variants — 1버튼 또는 2버튼 (경우에 따라)

이 모달은 **케이스에 따라 버튼 수가 달라짐**. 같은 컴포넌트, 같은 토큰을 쓰되 버튼 row만 변형.

| 버튼 수 | 사용 케이스 | 버튼 구성 |
|---|---|---|
| **1버튼** | 사용자가 그저 인지만 하면 되는 알림. 분기 없음 (e.g. "전화번호가 변경되었어요", "신청이 접수됐어요") | 풀폭 **확인** (Solid Primary 2XL, flex: 1 단독) |
| **2버튼** | 확정/취소 분기 의미 있음. 되돌릴 수 없거나 결과 큰 액션 (e.g. 낙찰·삭제·등록·결제) | 좌측 **취소** (Line, fit-content) + 우측 **확인** (Solid Primary, flex: 1), gap 10 |

**확인 버튼 카피**: 화면 컨텍스트의 액션 동사로 — "낙찰하기" / "등록하기" / "삭제하기" / "사진 삭제" 등. 단순 "확인"은 1버튼 알림형에서만 권장.

## Anatomy

```
┌─────────────────────────────────────┐
│  Title (20 SemiBold, label.900)     │ ← 상단 텍스트 블록
│  Description (15 Regular, label.600)│   gap 6
│                                     │
│ ┌──────┐ ┌──────────────────────┐   │ ← 버튼 row, gap 10
│ │ 취소 │ │     확인             │   │
│ └──────┘ └──────────────────────┘   │
└─────────────────────────────────────┘
   ← gap 16 between text and buttons
   padding 24 all sides
   width 360, radius 16, white bg
```

## Tokens

### Container

| 속성 | 값 |
|---|---|
| width | `360px` (디자인 고정. 좌우 마진 24는 부모 백드롭이 책임) |
| height | `hug content` |
| **padding** | **`20` (전체 면)** ← 모달 카드 내부 padding |
| **gap (text ↔ button row)** | **`20`** ← Description 아래 ↔ 버튼 row 위 |
| background | `{background.default}` (#FFFFFF) |
| borderRadius | `12` |

### Backdrop / Overlay

| 속성 | 값 |
|---|---|
| position | absolute, full-screen |
| background | `rgba(17,17,17,0.4)` (= `label.900` 40% alpha) |
| layout | `display: flex; align-items: center; justify-content: center` |
| padding | `0 24px` (가로 마진으로 카드 잘림 방지) |

### Text block

| 속성 | 값 |
|---|---|
| gap (Title ↔ Description) | `6` |

**Title**
- fontSize: `20`
- fontWeight: `600` (SemiBold)
- lineHeight: `30` (1.5)
- color: `{label.900}` (#111111)
- textAlign: `left`

**Description**
- fontSize: `15`
- fontWeight: `400` (Regular)
- lineHeight: `23` (≈1.5)
- color: `{label.600}` (#686868)
- textAlign: `left`

### Button row

| 속성 | 값 |
|---|---|
| layout | `display: flex; align-items: center` |
| gap | `10` (2버튼일 때만 의미) |
| ratio (2버튼 시 cancel / confirm) | `0.3 / 1` (FAB Mobile `twoFlexible_horizontal` 패턴) |
| **buttons (공통)** | **표준 2XL** (`button.json`): height `48`, paddingX `16`, paddingY `12`, borderRadius `8`, text `16/600` lh `24` |

> 버튼 내부 패딩은 Muchon button.json 표준 2XL 그대로 (paddingX 16 / paddingY 14). 모달의 내부 padding 20과는 별개.

**1버튼 케이스 — 확인만**
- variant: `Solid Primary` (button.json `variants.solid.primary`)
- width: `flex: 1` 또는 `width: 100%` (풀폭)
- background: `{brand.600}` / text color: `{static.white}`
- 카피: "확인" (단순 알림 종료)

**2버튼 케이스 — 취소 + 확인**

좌측 **취소 (Line 2XL)**
- variant: `Line` (button.json `variants.line`)
- width: `fit-content` (텍스트 hug, 표준 paddingX 16)
- background: `{background.default}` / border: `1px solid {stroke.solid}` / text color: `{label.900}`

우측 **확인 (Solid Primary 2XL)**
- variant: `Solid Primary`
- width: `flex: 1` (남은 공간)
- background: `{brand.600}` / text color: `{static.white}`
- 카피: 액션 동사 명시 ("낙찰하기" / "삭제하기" 등)

## HTML 템플릿

### 공통 — Backdrop + Card + Text block

```html
<!-- Backdrop / Overlay -->
<div style="position: absolute; inset: 0; background: rgba(17,17,17,0.4); display: flex; align-items: center; justify-content: center; padding: 0 24px;">

  <!-- Card (radius 12, padding 20, gap 20) -->
  <div style="display: flex; flex-direction: column; width: 360px; padding: 20px; gap: 20px; background: #ffffff; border-radius: 12px;">

    <!-- Text block -->
    <div style="display: flex; flex-direction: column; gap: 6px;">
      <div style="font: 600 20px/30px Pretendard; color: #111;">Title</div>
      <div style="font: 400 15px/23px Pretendard; color: #686868;">Description</div>
    </div>

    <!-- Button row (1버튼 또는 2버튼 케이스 아래 참고) -->

  </div>
</div>
```

### 2버튼 — 취소 + 확인

```html
<div style="display: flex; align-items: center; gap: 10px;">
  <!-- 취소 (Line 2XL, fit-content, paddingX 16 paddingY 14 h52) -->
  <div style="display: flex; align-items: center; justify-content: center; height: 48px; padding: 12px 16px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; flex-shrink: 0;">
    <span style="font: 600 16px/24px Pretendard; color: #111;">취소</span>
  </div>
  <!-- 확인 (Solid Primary 2XL, flex 1) — 카피는 액션 동사 -->
  <div style="display: flex; align-items: center; justify-content: center; height: 48px; padding: 12px 16px; flex: 1; background: #02be8f; border-radius: 8px;">
    <span style="font: 600 16px/24px Pretendard; color: #fff;">낙찰하기</span>
  </div>
</div>
```

### 1버튼 — 확인 풀폭

```html
<div style="display: flex; align-items: center;">
  <!-- 확인 (Solid Primary 2XL, full width) -->
  <div style="display: flex; align-items: center; justify-content: center; height: 48px; padding: 12px 16px; flex: 1; background: #02be8f; border-radius: 8px;">
    <span style="font: 600 16px/24px Pretendard; color: #fff;">확인</span>
  </div>
</div>
```

## 사용 예 (Beorim 시안 4)

| 화면 | 모달 | 확인 버튼 카피 |
|---|---|---|
| 입찰 비교 (`9KZ-0`) | 낙찰 확정 (`AWU-0`) | "낙찰하기" |
| 견적 요청 (`9IY-1`) | 5장 초과 안내 (`AEH-0`) | "사진 삭제" |
| 후기 작성 (`9Q9-0`) | 후기 등록 확인 (TBD) | "등록하기" |
| 이용 내역 (`9N7-0`) | 견적 취소 확인 (TBD) | "취소하기" |

## 참고

- 단일 버튼이 적합한 경우(단순 토스트성 알림)는 별도 알러트 패턴 — 이 컴포넌트는 **2버튼 컨펌 전용**
- 카드 width 360은 디자인 고정값. 단, 부모 백드롭이 좌우 24 padding으로 잘림 방지 책임
- 자식 요소는 모두 `width: 100%` / `flex: 1` 기반 (반응형 룰)
- 백드롭 dim 컬러는 `material.dim` 토큰(`#11111133` ≈ rgba(17,17,17,0.2))이 시스템 표준이지만 모달은 더 어두운 0.4 alpha를 권장 — 백그라운드 컨텐츠 컨텍스트 분리를 위해
