import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Muchon Design System의 시멘틱 색상 토큰. UI에서는 primitive(원시 hex) 대신 semantic 토큰을 사용한다.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type Swatch = { token: string; cssVar: string; value: string; note?: string };

const labelTokens: Swatch[] = [
  { token: "label.300", cssVar: "--label-300", value: "#e5e5e5" },
  { token: "label.400", cssVar: "--label-400", value: "#c5c5c5" },
  { token: "label.500", cssVar: "--label-500", value: "#9e9e9e" },
  { token: "label.600", cssVar: "--label-600", value: "#686868" },
  { token: "label.800", cssVar: "--label-800", value: "#333333" },
  { token: "label.900", cssVar: "--label-900", value: "#111111" },
];

const backgroundTokens: Swatch[] = [
  { token: "background.default", cssVar: "--background-default", value: "#ffffff" },
  { token: "background.alternative", cssVar: "--background-alternative", value: "#f5f5f5" },
  { token: "background.elevated", cssVar: "--background-elevated", value: "#1111110a" },
];

const strokeTokens: Swatch[] = [
  { token: "stroke.solid", cssVar: "--stroke-solid", value: "#e5e5e5" },
  { token: "stroke.translucent", cssVar: "--stroke-translucent", value: "#1111110f" },
];

const statusTokens: Swatch[] = [
  { token: "status.error", cssVar: "--status-error", value: "#ff4242" },
  { token: "status.success", cssVar: "--status-success", value: "#00cc44" },
  { token: "status.info", cssVar: "--status-info", value: "#1778f8" },
  { token: "status.warning", cssVar: "--status-warning", value: "#ff9200" },
];

const brandTokens: Swatch[] = [
  { token: "brand.50", cssVar: "--brand-50", value: "#fbfcff" },
  { token: "brand.100", cssVar: "--brand-100", value: "#eff5ff" },
  { token: "brand.200", cssVar: "--brand-200", value: "#edf4ff" },
  { token: "brand.300", cssVar: "--brand-300", value: "#cbe0ff" },
  { token: "brand.400", cssVar: "--brand-400", value: "#93bbf7" },
  { token: "brand.500", cssVar: "--brand-500", value: "#3d8bff" },
  { token: "brand.600", cssVar: "--brand-600", value: "#006afe", note: "Primary" },
  { token: "brand.700", cssVar: "--brand-700", value: "#0154c8" },
  { token: "brand.800", cssVar: "--brand-800", value: "#033f92" },
  { token: "brand.900", cssVar: "--brand-900", value: "#0e2f5c" },
  { token: "brand.950", cssVar: "--brand-950", value: "#141b24" },
];

function SwatchGrid({ title, items }: { title: string; items: Swatch[] }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        {items.map((s) => (
          <div
            key={s.token}
            style={{
              border: "1px solid var(--stroke-solid)",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div
              style={{
                height: 64,
                background: `var(${s.cssVar})`,
                borderBottom: "1px solid var(--stroke-solid)",
              }}
            />
            <div style={{ padding: 10, fontSize: 12, lineHeight: 1.5 }}>
              <div style={{ fontWeight: 600, color: "var(--label-900)" }}>
                {s.token}
                {s.note ? (
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: 10,
                      padding: "2px 6px",
                      borderRadius: 999,
                      background: "var(--brand-100)",
                      color: "var(--brand-800)",
                    }}
                  >
                    {s.note}
                  </span>
                ) : null}
              </div>
              <div style={{ color: "var(--label-600)" }}>{s.value}</div>
              <div style={{ color: "var(--label-500)", fontFamily: "monospace" }}>
                var({s.cssVar})
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const All: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-family-base)" }}>
      <SwatchGrid title="Label (text / icon)" items={labelTokens} />
      <SwatchGrid title="Background" items={backgroundTokens} />
      <SwatchGrid title="Stroke" items={strokeTokens} />
      <SwatchGrid title="Status" items={statusTokens} />
      <SwatchGrid title="Brand" items={brandTokens} />
    </div>
  ),
};
