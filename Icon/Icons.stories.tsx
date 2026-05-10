import { useState, type CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ICON_NAMES, type IconStyle, type IconSize } from "./Icon";

const meta = {
  title: "Foundations/Icons",
  component: Icon,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Muchon Design System 아이콘 — Figma 노드 2861:20421 기준. 단색(regular/bold) + 다색(color) 세 카테고리. 사이즈는 16/18/24 셋만.",
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    iconStyle: {
      control: "inline-radio",
      options: ["regular", "bold", "color"] satisfies IconStyle[],
    },
    size: {
      control: "inline-radio",
      options: [16, 18, 24] satisfies IconSize[],
    },
    color: { control: "color" },
    colored: { control: "boolean" },
  },
  args: {
    name: ICON_NAMES.regular[0] ?? "chevron-down",
    iconStyle: "regular",
    size: 24,
    colored: false,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const cellStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  padding: 12,
  borderRadius: 8,
  border: "1px solid var(--stroke-solid)",
  background: "var(--background-default)",
  fontFamily: "var(--font-family-base)",
  fontSize: 11,
  color: "var(--label-600)",
  wordBreak: "break-all",
  textAlign: "center",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
  gap: 8,
};

export const Playground: Story = {};

/** 전체 아이콘 그리드 — regular / bold / color 토글 */
export const Gallery: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [tab, setTab] = useState<IconStyle>("regular");
    const names = ICON_NAMES[tab];
    const isColor = tab === "color";

    return (
      <div style={{ fontFamily: "var(--font-family-base)" }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 16,
            borderBottom: "1px solid var(--stroke-solid)",
          }}
        >
          {(["regular", "bold", "color"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              style={{
                appearance: "none",
                background: "none",
                border: 0,
                padding: "10px 14px",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                color: tab === k ? "var(--label-900)" : "var(--label-500)",
                borderBottom:
                  tab === k
                    ? "2px solid var(--brand-600)"
                    : "2px solid transparent",
              }}
            >
              {k} ({ICON_NAMES[k].length})
            </button>
          ))}
        </div>

        {names.length === 0 ? (
          <p style={{ fontSize: 13, color: "var(--label-600)" }}>
            등록된 아이콘이 없습니다 — svg/{tab}/ 에 SVG를 추가하세요.
          </p>
        ) : (
          <div style={gridStyle}>
            {names.map((n) => (
              <div key={n} style={cellStyle}>
                <Icon name={n} iconStyle={tab} size={24} colored={isColor} />
                <span>{n}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

/** 사이즈 매트릭스 — 16/18/24 모든 사이즈 가용 검증 */
export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const sample = ICON_NAMES.regular[0] ?? ICON_NAMES.bold[0] ?? "chevron-down";
    const sizes: IconSize[] = [16, 18, 24];
    const styles: IconStyle[] = ["regular", "bold"];

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto repeat(3, 1fr)",
          gap: 16,
          alignItems: "center",
          fontFamily: "var(--font-family-base)",
          fontSize: 13,
        }}
      >
        <div />
        {sizes.map((s) => (
          <div
            key={`h-${s}`}
            style={{ fontWeight: 600, color: "var(--label-600)" }}
          >
            {s}px
          </div>
        ))}
        {styles.flatMap((st) => [
          <div
            key={`label-${st}`}
            style={{ fontWeight: 600, color: "var(--label-600)" }}
          >
            {st}
          </div>,
          ...sizes.map((s) => (
            <Icon key={`${st}-${s}`} name={sample} iconStyle={st} size={s} />
          )),
        ])}
      </div>
    );
  },
};

/** color prop 데모 — 단색 아이콘 색상 변경 */
export const ColorProp: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const sample = ICON_NAMES.regular[0] ?? ICON_NAMES.bold[0] ?? "chevron-down";
    const colors = [
      { token: "label.900", value: "var(--label-900)" },
      { token: "brand.600", value: "var(--brand-600)" },
      { token: "status.error", value: "var(--status-error)" },
      { token: "status.warning", value: "var(--status-warning)" },
      { token: "status.success", value: "var(--status-success)" },
    ];
    return (
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "flex-end",
          fontFamily: "var(--font-family-base)",
          fontSize: 12,
          color: "var(--label-600)",
        }}
      >
        {colors.map((c) => (
          <div
            key={c.token}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon name={sample} iconStyle="regular" size={24} color={c.value} />
            <span>{c.token}</span>
          </div>
        ))}
      </div>
    );
  },
};

/** colored 데모 — color 카테고리 + 단색이라도 colored=true로 원본 보존 */
export const Colored: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ fontFamily: "var(--font-family-base)" }}>
      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
        color/ 폴더의 다색 아이콘
      </h3>
      {ICON_NAMES.color.length === 0 ? (
        <p style={{ fontSize: 13, color: "var(--label-600)" }}>
          svg/color/ 폴더가 비어있습니다 — 2단계에서 Emergency, AI(color),
          Kakao/Channel SVG를 추가합니다.
        </p>
      ) : (
        <div style={gridStyle}>
          {ICON_NAMES.color.map((n) => (
            <div key={n} style={cellStyle}>
              <Icon name={n} iconStyle="color" size={24} />
              <span>{n}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  ),
};
