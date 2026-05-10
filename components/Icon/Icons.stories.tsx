import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon, ICON_NAMES, ALL_ICON_NAMES, type IconStyle } from "./Icon";

const meta = {
  title: "Foundations/Icons",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
버림 디자인 시스템의 아이콘 카탈로그.

**파일 구조** — \`src/icons/svg/regular/<name>.svg\`, \`src/icons/svg/bold/<name>.svg\`. Vite의 \`import.meta.glob\`로 빌드 시 자동 수집되므로, 새 SVG를 떨어뜨리면 코드 수정 없이 이 갤러리에 등장한다.

**색 처리** — SVG 안의 \`stroke\` / \`fill\`을 \`currentColor\`로 두면 \`<Icon color="…">\` 또는 부모의 \`color\` CSS로 색이 결정된다. SNS 등 자체 색을 보존해야 하는 다색 아이콘은 \`<Icon colored />\`로 그리면 원본 색이 유지된다.

**Figma → 폴더 export 워크플로** — Figma에서 24×24 viewBox 단일 색 아이콘을 SVG로 export → 파일명은 kebab-case로(\`arrow-right.svg\`, \`check-circle.svg\`) → \`regular/\` 또는 \`bold/\` 폴더에 떨어뜨림. 같은 이름이 양쪽에 있으면 \`<Icon iconStyle="bold|regular" />\`로 선택.
        `.trim(),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const cell: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 8,
  padding: 16,
  border: "1px solid #f3f3f3",
  borderRadius: 8,
  background: "#fff",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 12,
};

const nameStyle: React.CSSProperties = {
  fontFamily: "Pretendard, sans-serif",
  fontSize: 11,
  color: "#686868",
  textAlign: "center",
  wordBreak: "break-all",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "Pretendard, sans-serif",
  fontSize: 16,
  fontWeight: 600,
  color: "#111",
  marginBottom: 12,
};

const subtle: React.CSSProperties = {
  fontFamily: "Pretendard, sans-serif",
  fontSize: 12,
  color: "#9e9e9e",
  marginBottom: 16,
};

const searchInput: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #e5e5e5",
  borderRadius: 8,
  fontFamily: "Pretendard, sans-serif",
  fontSize: 14,
  outline: "none",
  marginBottom: 24,
};

function Gallery({ which }: { which: IconStyle }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const names = ICON_NAMES[which];
    if (!q.trim()) return names;
    return names.filter((n) => n.includes(q.trim().toLowerCase()));
  }, [which, q]);

  return (
    <div>
      <div style={sectionTitle}>{which === "regular" ? "Regular" : "Bold"}</div>
      <div style={subtle}>
        총 {ICON_NAMES[which].length}개 · 표시 {list.length}개
      </div>
      <input
        type="text"
        placeholder="아이콘 이름 검색…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={searchInput}
      />
      {list.length === 0 ? (
        <div style={{ ...subtle, padding: 24, textAlign: "center" }}>
          매칭되는 아이콘이 없습니다.
        </div>
      ) : (
        <div style={grid}>
          {list.map((name) => (
            <div key={name} style={cell}>
              <Icon name={name} iconStyle={which} size={28} />
              <div style={nameStyle}>{name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const Regular: Story = {
  render: () => <Gallery which="regular" />,
};

export const Bold: Story = {
  render: () => <Gallery which="bold" />,
};

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Gallery which="regular" />
      <Gallery which="bold" />
    </div>
  ),
};

export const SizeAndColor: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div>
        <div style={sectionTitle}>크기</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {[14, 16, 18, 20, 24, 28, 32, 40, 48].map((s) => (
            <div key={s} style={{ textAlign: "center" }}>
              <Icon name="check" size={s} />
              <div style={nameStyle}>{s}px</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={sectionTitle}>색 (currentColor 기반)</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {[
            { c: "#111111", label: "Label/900" },
            { c: "#686868", label: "Label/600" },
            { c: "#02be8f", label: "Brand-600" },
            { c: "#ff4242", label: "Red/500" },
            { c: "#1778f8", label: "Blue/500" },
          ].map(({ c, label }) => (
            <div key={c} style={{ textAlign: "center" }}>
              <Icon name="warning" size={28} color={c} />
              <div style={nameStyle}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const UsageHint: Story = {
  render: () => {
    const example = `
import { Icon } from "@/icons";

<Icon name="check" />
<Icon name="check" iconStyle="bold" size={20} />
<Icon name="warning" color="#ff4242" />
    `.trim();

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 720,
        }}
      >
        <div style={sectionTitle}>사용법</div>
        <pre
          style={{
            background: "#f9f9f9",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: 16,
            margin: 0,
            fontFamily:
              "ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace",
            fontSize: 13,
            lineHeight: 1.6,
            color: "#111",
            whiteSpace: "pre-wrap",
          }}
        >
          {example}
        </pre>
        <div style={subtle}>
          현재 등록된 아이콘 ({ALL_ICON_NAMES.length}개): {ALL_ICON_NAMES.join(", ")}
        </div>
      </div>
    );
  },
};
