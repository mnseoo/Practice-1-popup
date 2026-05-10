import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

const ALL_SIZES: ButtonSize[] = ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];
const ALL_VARIANTS: ButtonVariant[] = ["solid-primary", "solid-weak", "line", "ghost"];

const PlusIcon = () => (
  <svg viewBox="0 0 18 18" width="100%" height="100%" fill="none" aria-hidden>
    <path
      d="M9 3v12M3 9h12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRight = () => (
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

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "버림 디자인 시스템의 기본 Button 컴포넌트. 4종 variant(solid-primary, solid-weak, line, ghost) × 8종 size(xs ~ 4xl) × disabled 조합을 지원하며 좌/우 아이콘 또는 아이콘 단독 모드로 사용할 수 있다.",
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ALL_VARIANTS },
    size: { control: "inline-radio", options: ALL_SIZES },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    variant: "solid-primary",
    size: "m",
    children: "버튼",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SolidPrimary: Story = {
  args: { variant: "solid-primary" },
};

export const SolidWeak: Story = {
  args: { variant: "solid-weak" },
};

export const Line: Story = {
  args: { variant: "line" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLeftIcon: Story = {
  args: { leftIcon: <PlusIcon /> },
};

export const WithRightIcon: Story = {
  args: { rightIcon: <ArrowRight /> },
};

export const IconOnly: Story = {
  args: { iconOnly: <PlusIcon />, "aria-label": "추가" },
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
};

const colStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: 24,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Pretendard, sans-serif",
  fontSize: 12,
  color: "#686868",
  marginBottom: 4,
  letterSpacing: 0,
};

export const AllSizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={colStyle}>
      {ALL_VARIANTS.map((variant) => (
        <div key={variant}>
          <div style={labelStyle}>{variant}</div>
          <div style={rowStyle}>
            {ALL_SIZES.map((size) => (
              <Button key={size} variant={variant} size={size}>
                버튼
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={colStyle}>
      {ALL_VARIANTS.map((variant) => (
        <div key={variant}>
          <div style={labelStyle}>{variant}</div>
          <div style={rowStyle}>
            <Button variant={variant} size="m">
              Default
            </Button>
            <Button variant={variant} size="m" disabled>
              Disabled
            </Button>
            <Button variant={variant} size="m" leftIcon={<PlusIcon />}>
              Left icon
            </Button>
            <Button variant={variant} size="m" rightIcon={<ArrowRight />}>
              Right icon
            </Button>
            <Button
              variant={variant}
              size="m"
              iconOnly={<PlusIcon />}
              aria-label="추가"
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
