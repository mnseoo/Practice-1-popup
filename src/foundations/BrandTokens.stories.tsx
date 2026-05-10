import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Brand Tokens",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "그림자(elevation), 모서리(radius), 배경(material) 등 시각적 토큰의 미리보기.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const elevations = [
  { token: "elevation.xxs", cssVar: "--elevation-xxs" },
  { token: "elevation.xs", cssVar: "--elevation-xs" },
  { token: "elevation.s", cssVar: "--elevation-s" },
  { token: "elevation.l", cssVar: "--elevation-l" },
  { token: "elevation.xl", cssVar: "--elevation-xl" },
];

const radii = [
  { token: "radius-2", cssVar: "--radius-2" },
  { token: "radius-4", cssVar: "--radius-4" },
  { token: "radius-6", cssVar: "--radius-6" },
  { token: "radius-8", cssVar: "--radius-8" },
  { token: "radius-12", cssVar: "--radius-12" },
  { token: "radius-16", cssVar: "--radius-16" },
];

export const All: Story = {
  render: () => (
    <div
      style={{
        padding: 24,
        fontFamily: "var(--font-family-base)",
        background: "var(--background-alternative)",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
        Elevation
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        {elevations.map((e) => (
          <div
            key={e.token}
            style={{
              padding: 24,
              background: "#fff",
              borderRadius: 12,
              boxShadow: `var(${e.cssVar})`,
              fontSize: 13,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {e.token}
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
        Radius
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}
      >
        {radii.map((r) => (
          <div
            key={r.token}
            style={{
              height: 96,
              background: "var(--brand-100)",
              border: "1px solid var(--brand-300)",
              borderRadius: `var(${r.cssVar})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              color: "var(--brand-800)",
              fontWeight: 600,
            }}
          >
            {r.token}
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
        Material — dim backdrop
      </h2>
      <div
        style={{
          position: "relative",
          height: 200,
          background:
            "linear-gradient(135deg, var(--brand-200), var(--brand-400))",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--material-dim)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          material.dim — rgba(17, 17, 17, 0.4)
        </div>
      </div>
    </div>
  ),
};
