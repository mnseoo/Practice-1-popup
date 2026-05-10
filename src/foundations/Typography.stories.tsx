import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Muchon Design System의 타이포그래피 스케일. Pretendard 패밀리, mobile/desktop 두 스케일을 지원.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type Specimen = {
  alias: string;
  size: number;
  lineHeight: number;
  weights: { name: string; weight: number }[];
};

const desktop: Specimen[] = [
  { alias: "title1", size: 36, lineHeight: 54, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }] },
  { alias: "title2", size: 32, lineHeight: 48, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "title3", size: 24, lineHeight: 36, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "heading1", size: 20, lineHeight: 30, weights: [{ name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
  { alias: "heading2", size: 18, lineHeight: 27, weights: [{ name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
  { alias: "body1", size: 16, lineHeight: 24, weights: [{ name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
  { alias: "body2", size: 14, lineHeight: 21, weights: [{ name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
];

const mobile: Specimen[] = [
  { alias: "title3", size: 24, lineHeight: 36, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "title4", size: 22, lineHeight: 33, weights: [{ name: "extrabold", weight: 800 }, { name: "bold", weight: 700 }, { name: "semibold", weight: 600 }] },
  { alias: "heading1", size: 20, lineHeight: 30, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "heading2", size: 18, lineHeight: 27, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "body1", size: 16, lineHeight: 24, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
  { alias: "body2", size: 14, lineHeight: 21, weights: [{ name: "extrabold", weight: 800 }, { name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "label1", size: 13, lineHeight: 19.5, weights: [{ name: "bold", weight: 700 }, { name: "semibold", weight: 600 }, { name: "medium", weight: 500 }] },
  { alias: "label2", size: 12, lineHeight: 18, weights: [{ name: "semibold", weight: 600 }, { name: "medium", weight: 500 }, { name: "regular", weight: 400 }] },
];

function SpecimenRow({ s }: { s: Specimen }) {
  return (
    <div
      style={{
        padding: "16px 0",
        borderBottom: "1px solid var(--stroke-solid)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "var(--label-500)",
          marginBottom: 8,
          fontFamily: "monospace",
        }}
      >
        {s.alias} · {s.size}/{s.lineHeight}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {s.weights.map((w) => (
          <div
            key={w.name}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 88,
                fontSize: 11,
                color: "var(--label-500)",
                fontFamily: "monospace",
              }}
            >
              {w.name}/{w.weight}
            </div>
            <div
              style={{
                fontSize: s.size,
                lineHeight: `${s.lineHeight}px`,
                fontWeight: w.weight,
                color: "var(--label-900)",
              }}
            >
              무촌 디자인 The quick brown fox 1234567890
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Desktop: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-family-base)", maxWidth: 960 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Desktop scale</h2>
      <p style={{ fontSize: 13, color: "var(--label-600)", marginBottom: 16 }}>
        Pretendard · 1.5 line-height · 0 letter-spacing
      </p>
      {desktop.map((s) => (
        <SpecimenRow key={`d-${s.alias}`} s={s} />
      ))}
    </div>
  ),
};

export const Mobile: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-family-base)", maxWidth: 720 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Mobile scale</h2>
      <p style={{ fontSize: 13, color: "var(--label-600)", marginBottom: 16 }}>
        Pretendard · 1.5 line-height · 0 letter-spacing · 일부 size에 extrabold(800) 추가
      </p>
      {mobile.map((s) => (
        <SpecimenRow key={`m-${s.alias}`} s={s} />
      ))}
    </div>
  ),
};
