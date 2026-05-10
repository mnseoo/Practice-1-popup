import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoticeSubsidyScamPopup } from "./NoticeSubsidyScamPopup";

const meta = {
  title: "Examples/Popups/Notice — 지원금·사기업체 공지",
  component: NoticeSubsidyScamPopup,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "무촌 홈페이지 진입 시 노출되는 공지 팝업. 폐업 철거 지원금 지급 지연 + 사기 업체 주의 안내 후 정보 확인 페이지로 유도한다. PC(480) / Mobile(360) 두 사이즈를 제공.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["pc", "mobile"],
    },
    showBackdrop: { control: "boolean" },
  },
  args: {
    size: "pc",
    showBackdrop: true,
  },
} satisfies Meta<typeof NoticeSubsidyScamPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  args: { size: "pc", showBackdrop: true },
  parameters: {
    viewport: { defaultViewport: "muchonPC" },
  },
};

export const Mobile: Story = {
  args: { size: "mobile", showBackdrop: true },
  parameters: {
    viewport: { defaultViewport: "muchonMobile" },
  },
};

export const PCWithoutBackdrop: Story = {
  name: "PC (no backdrop)",
  args: { size: "pc", showBackdrop: false },
  parameters: { layout: "centered" },
};

export const MobileWithoutBackdrop: Story = {
  name: "Mobile (no backdrop)",
  args: { size: "mobile", showBackdrop: false },
  parameters: { layout: "centered" },
};

export const SideBySide: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        alignItems: "flex-start",
        padding: 24,
        background: "var(--background-alternative)",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 13,
            fontFamily: "var(--font-family-base)",
            fontWeight: 600,
            color: "var(--label-600)",
            marginBottom: 8,
          }}
        >
          PC · 480
        </div>
        <NoticeSubsidyScamPopup size="pc" showBackdrop={false} />
      </div>
      <div>
        <div
          style={{
            fontSize: 13,
            fontFamily: "var(--font-family-base)",
            fontWeight: 600,
            color: "var(--label-600)",
            marginBottom: 8,
          }}
        >
          Mobile · 360
        </div>
        <NoticeSubsidyScamPopup size="mobile" showBackdrop={false} />
      </div>
    </div>
  ),
};
