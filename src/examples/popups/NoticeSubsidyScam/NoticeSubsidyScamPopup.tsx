import { type ReactNode } from "react";
import { Button } from "../../../../components/Button/Button";
import newspaperImg from "./assets/newspaper.png";
import "./NoticeSubsidyScamPopup.css";

export type NoticeSubsidyScamPopupSize = "pc" | "mobile";

export interface NoticeSubsidyScamPopupProps {
  /** 사이즈 variant. 기본 "pc". */
  size?: NoticeSubsidyScamPopupSize;
  /** 어두운 백드롭 표시 여부. 기본 true. false면 카드만 단독 노출 (스토리북 미리보기용). */
  showBackdrop?: boolean;
  /** CTA 클릭 핸들러. */
  onCtaClick?: () => void;
}

const ArrowRight = (): ReactNode => (
  <svg viewBox="0 0 18 18" width="100%" height="100%" fill="none" aria-hidden>
    <path
      d="M6 3l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function NoticeSubsidyScamPopup({
  size = "pc",
  showBackdrop = true,
  onCtaClick,
}: NoticeSubsidyScamPopupProps) {
  const card = (
    <div className={`mc-notice-popup mc-notice-popup--${size}`} role="dialog" aria-labelledby="mc-notice-popup-title">
      <h2 id="mc-notice-popup-title" className="mc-notice-popup__title">
        지원금 및 사기업체 관련 공지
      </h2>

      <article className="mc-notice-popup__news">
        <div className="mc-notice-popup__news-thumb-box" aria-hidden>
          <img
            className="mc-notice-popup__news-thumb"
            src={newspaperImg}
            alt=""
          />
        </div>
        <div className="mc-notice-popup__news-body">
          <time className="mc-notice-popup__news-date" dateTime="2026-04-05">
            2026.04.05
          </time>
          <h3 className="mc-notice-popup__news-title">
            소진공 철거비 지원도 늦장
          </h3>
          <p className="mc-notice-popup__news-copy">
            전국 폐업자 100만명 시대...흔들리는 재기 발판
          </p>
        </div>
      </article>

      <ul className="mc-notice-popup__bullets">
        <li className="mc-notice-popup__bullet">
          하루 약 2,700여건의 폐업신고로 정부 철거 지원금 지급이 지연되고 있습니다.
        </li>
        <li className="mc-notice-popup__bullet">
          빠른 상담이 폐업철거지원금 지연을 막는 유일한 방법입니다.
        </li>
        <li className="mc-notice-popup__bullet mc-notice-popup__bullet--alert">
          지원금 지급 1개월, 추가지원금 등 사기 주의!
        </li>
      </ul>

      <Button
        variant="solid-primary"
        size="2xl"
        rightIcon={<ArrowRight />}
        onClick={onCtaClick}
        className="mc-notice-popup__cta"
      >
        올바른 지원금 정보 확인하기
      </Button>
    </div>
  );

  if (!showBackdrop) {
    return card;
  }

  return (
    <div className={`mc-notice-popup__backdrop mc-notice-popup__backdrop--${size}`}>
      {card}
    </div>
  );
}
