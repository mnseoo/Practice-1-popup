import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Spacing",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Spacing 토큰. Source: System Tokens/Mobile.tokens.json `Spacing` 필드 — Figma의 mode-aware 토큰. Desktop 모드에서는 같은 alias가 더 큰 값으로 매핑된다(예: spacing.12 = Mobile 12px / Desktop 16px). 본 스토리는 Mobile 모드 기준 px scale.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type Spec = { name: string; cssVar: string; value: string; missing?: boolean };

const spacings: Spec[] = [
  { name: "spacing-1", cssVar: "--spacing-1", value: "1px" },
  { name: "spacing-2", cssVar: "--spacing-2", value: "2px" },
  { name: "spacing-3", cssVar: "--spacing-3", value: "3px" },
  { name: "spacing-4", cssVar: "--spacing-4", value: "4px" },
  { name: "spacing-5", cssVar: "--spacing-5", value: "5px" },
  { name: "spacing-5-5", cssVar: "--spacing-5-5", value: "5.5px" },
  { name: "spacing-6", cssVar: "--spacing-6", value: "6px" },
  { name: "spacing-7-5", cssVar: "--spacing-7-5", value: "7.5px" },
  { name: "spacing-8", cssVar: "--spacing-8", value: "8px" },
  { name: "spacing-9", cssVar: "--spacing-9", value: "9px" },
  { name: "spacing-9-5", cssVar: "--spacing-9-5", value: "9.5px" },
  { name: "spacing-10", cssVar: "--spacing-10", value: "10px" },
  { name: "spacing-11", cssVar: "--spacing-11", value: "11px" },
  { name: "spacing-12", cssVar: "--spacing-12", value: "12px" },
  { name: "spacing-14", cssVar: "--spacing-14", value: "14px" },
  { name: "spacing-16", cssVar: "--spacing-16", value: "16px" },
  { name: "spacing-17", cssVar: "--spacing-17", value: "17px" },
  { name: "spacing-18", cssVar: "--spacing-18", value: "18px" },
  { name: "spacing-20", cssVar: "--spacing-20", value: "20px" },
  { name: "spacing-24", cssVar: "--spacing-24", value: "24px" },
  { name: "spacing-28", cssVar: "--spacing-28", value: "28px" },
  { name: "spacing-36", cssVar: "--spacing-36", value: "36px" },
  { name: "spacing-48", cssVar: "--spacing-48", value: "48px" },
  { name: "spacing-56", cssVar: "--spacing-56", value: "56px" },
  { name: "spacing-62", cssVar: "--spacing-62", value: "62px" },
  { name: "spacing-100", cssVar: "--spacing-100", value: "100px" },
];

export const All: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-family-base)" }}>
      <p style={{ fontSize: 13, color: "var(--label-600)", marginBottom: 16 }}>
        총 {spacings.length}개 토큰. ⚠️ 표시는 Figma 디자인 시스템 토큰엔 누락된 값(웹 사용을 위해 임시 추가).
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {spacings.map((s) => (
          <div
            key={s.name}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 80px 1fr",
              alignItems: "center",
              gap: 16,
              padding: "8px 12px",
              borderBottom: "1px solid var(--stroke-solid)",
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                color: s.missing ? "var(--status-warning)" : "var(--label-900)",
                fontWeight: 600,
              }}
            >
              {s.missing ? "⚠ " : ""}
              {s.name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--label-600)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                height: 12,
                width: `var(${s.cssVar})`,
                background: s.missing
                  ? "var(--status-warning)"
                  : "var(--brand-600)",
                borderRadius: 2,
                maxWidth: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
