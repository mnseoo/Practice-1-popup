# 지원금 및 사기업체 관련 공지 팝업 — 디자인 스펙

작성일: 2026-05-10
작업자: 김민서 (kminseo@muchon.kr)
산출 위치: `muchon-design-system/src/examples/popups/NoticeSubsidyScam/`
배포 형태: Storybook 정적 빌드 → 링크 공유 (개발자 전달용)

## 1. 목적

무촌 홈페이지 진입 시 노출되는 마케팅/공지 팝업. 폐업 철거 지원금 지급 지연 상황과 사기 업체 주의를 알리고, 올바른 지원금 정보 페이지로 유도한다.

## 2. 콘텐츠

### 2.1 헤더
- **타이틀**: 지원금 및 사기업체 관련 공지

### 2.2 뉴스 카드 (Section 2-1)
- **썸네일**: `assets/newspaper.png` (사용자 제공, 952×952 RGBA)
- **날짜**: 2026.04.05
- **타이틀**: 소진공 철거비 지원도 늦장
- **카피**: 전국 폐업자 100만명 시대...흔들리는 재기 발판

### 2.3 본문 카피 (Section 2-2)
- 하루 약 2,700여건의 폐업신고로 **정부 철거 지원금** 지급이 지연되고 있습니다.
- 빠른 상담이 폐업철거지원금 지연을 막는 유일한 방법입니다.
- **지원금 지급 1개월, 추가지원금 등 사기 주의!** ← 강조 (status.error)

> 콘텐츠 정정: 사용자 원본 "종뷰 촐고 지원금" → "정부 철거 지원금" (사용자 확인)

### 2.4 CTA
- **버튼**: 올바른 지원금 정보 확인하기 (Solid Primary, size 2xl)

## 3. 레이아웃

```
[Backdrop · material.dim]
└─ [Card · background.default · radius 12 · elevation.l]
   ├─ Title (32/Bold PC, 24/Bold Mobile · label.900)
   ├─ News Card
   │  ├─ Thumbnail (newspaper.png)
   │  ├─ Date (label2 12/Medium · label.500)
   │  ├─ News Title (heading1 20/Bold PC, heading2 18/Bold Mobile · label.900)
   │  └─ News Copy (body2 14/Regular · label.600)
   ├─ Body Bullets (3 lines)
   │  ├─ #1, #2 (body1 16/Medium · label.800)
   │  └─ #3 — 강조 (body1 16/Bold · status.error)
   └─ CTA Button (Solid Primary · 2XL · 풀폭)
```

## 4. 토큰 매핑

| 요소 | 토큰 |
|---|---|
| 백드롭 | `material.dim` (#11111133) |
| 카드 배경 | `background.default` (#ffffff) |
| 카드 borderRadius | 12px |
| 카드 그림자 | `elevation.l` |
| 메인 타이틀 | `label.900`, Title2 32/Bold (PC) / Title3 24/Bold (Mobile) |
| 뉴스카드 배경 | `background.alternative` (#f5f5f5) |
| 뉴스카드 borderRadius | 8px |
| 날짜 | `label.500`, label2 12/Medium |
| 뉴스 타이틀 | `label.900`, heading1 20/Bold (PC) / heading2 18/Bold (Mobile) |
| 뉴스 카피 | `label.600`, body2 14/Regular |
| 본문 일반 | `label.800`, body1 16/Medium |
| 본문 강조 (3번째) | `status.error` (#ff4242), body1 16/Bold |
| CTA | Button `solid-primary` size `2xl`, brand.600 |

## 5. 반응형

| 영역 | PC (≥768px) | Mobile (<768px) |
|---|---|---|
| 카드 width | 480px | 320–360px (좌우 24 padding) |
| 카드 padding | 32px | 24px |
| 메인 타이틀 | 32/Bold | 24/Bold |
| 뉴스 타이틀 | 20/Bold | 18/Bold |
| 카드 ↔ 카드 내부 gap | 24px | 16px |
| 썸네일 크기 | 64×64 | 56×56 |

## 6. 폴더 구조

```
muchon-design-system/
├── package.json                    ← 신규 (Vite + Storybook + React)
├── vite.config.ts                  ← 신규
├── tsconfig.json                   ← 신규
├── .storybook/
│   ├── main.ts                     ← stories 경로: src/**, components/**
│   └── preview.ts                  ← Pretendard CDN + tokens.css import
│
├── src/
│   ├── tokens/
│   │   ├── tokens.css              ← 자동 생성 결과물
│   │   └── generate.ts             ← semantic.json/typography.json → CSS 변수
│   ├── foundations/
│   │   ├── Colors.stories.tsx
│   │   ├── Typography.stories.tsx
│   │   └── BrandTokens.stories.tsx
│   └── examples/
│       └── popups/
│           └── NoticeSubsidyScam/
│               ├── NoticeSubsidyScamPopup.tsx
│               ├── NoticeSubsidyScamPopup.css
│               ├── NoticeSubsidyScamPopup.stories.tsx
│               └── assets/
│                   └── newspaper.png
│
└── (기존 그대로 — Brand/, colors/, components/, typography/, System Tokens/)
   ※ components/Button/Button.stories.tsx, Icon/Icons.stories.tsx 자동 인식
```

## 7. Storybook 카테고리 (Sidebar)

```
Foundations/
├── Colors
├── Typography
└── Brand Tokens
Components/
├── Button         (기존 components/Button)
└── Icon           (기존 components/Icon)
Examples/
└── Popups/
    └── Notice — 지원금/사기업체 공지 (PC, Mobile)
```

## 8. 빌드/배포

- 개발: `npm run dev` (Storybook dev server, http://localhost:6006)
- 정적 빌드: `npm run build-storybook` → `storybook-static/`
- 배포(추후 결정): Vercel / GitHub Pages / Chromatic 중 1택

## 9. 의존성

| 패키지 | 용도 |
|---|---|
| `react`, `react-dom` | 컴포넌트 |
| `vite`, `@vitejs/plugin-react` | 번들러 |
| `storybook`, `@storybook/react-vite` | 스토리북 |
| `@fontsource/pretendard` | Pretendard 웹폰트 (로컬 미설치 대응) |
| `typescript` | 타입 |

## 10. 사용자 제공 자료

- ✅ `newspaper.png` — `/Users/minseo/Project/작업 완료/muchon-homepage-popup/icon/newspaper.png`
- (옵션) `siren icon.svg` — 같은 폴더, 본문 강조 카피 옆 아이콘으로 활용 가능. **현재 디자인엔 미포함**, 추후 사용자 요청 시 추가.

## 11. 미해결 / 결정 보류

- **siren 아이콘 활용 여부**: 현재 디자인은 텍스트만으로 강조. 사용자가 추가 요청 시 본문 3번째 줄 좌측에 아이콘 추가.
- **배포 채널**: Storybook 정적 빌드 후 어디에 올릴지(Vercel/GitHub Pages 등)는 빌드 완료 후 사용자 결정.

## 12. 향후 확장

이 폴더 구조(`src/examples/`)는 앞으로 무촌 디자인 시스템을 사용해 만드는 모든 페이지/모달/팝업의 카탈로그가 된다. 새 산출물은 `src/examples/<카테고리>/<이름>/` 패턴을 따라 추가한다.
