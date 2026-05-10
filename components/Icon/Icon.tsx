import { type CSSProperties, type HTMLAttributes } from "react";
import "./Icon.css";

/**
 * Vite의 import.meta.glob을 통해 src/icons/svg 디렉터리의 모든 svg를
 * 빌드 타임에 raw 문자열로 수집한다. 새 svg 파일을 떨어뜨리면 자동으로 등록된다.
 */
const regularModules = import.meta.glob("./svg/regular/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const boldModules = import.meta.glob("./svg/bold/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function buildMap(modules: Record<string, string>): Record<string, string> {
  const map: Record<string, string> = {};
  for (const path in modules) {
    const file = path.split("/").pop() ?? "";
    const name = file.replace(/\.svg$/, "");
    map[name] = modules[path];
  }
  return map;
}

const regularMap = buildMap(regularModules);
const boldMap = buildMap(boldModules);

export type IconStyle = "regular" | "bold";

export const ICON_NAMES: Record<IconStyle, string[]> = {
  regular: Object.keys(regularMap).sort(),
  bold: Object.keys(boldMap).sort(),
};

export const ALL_ICON_NAMES: string[] = Array.from(
  new Set([...ICON_NAMES.regular, ...ICON_NAMES.bold]),
).sort();

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  /** SVG 파일명(확장자 제외). 예: "check", "arrow-right" */
  name: string;
  /** Regular(라인) 또는 Bold(채움) — 같은 이름의 파일이 양쪽에 존재할 때 결정 */
  iconStyle?: IconStyle;
  /** 픽셀 크기. number면 px, 문자열이면 그대로 적용. 기본 24. */
  size?: number | string;
  /** currentColor 대신 강제 색상 지정. 보통은 부모의 color로 결정. */
  color?: string;
  /** SNS 등 자체 색을 보존해야 하는 아이콘(혹은 다색 SVG)이면 true */
  colored?: boolean;
}

export function Icon({
  name,
  iconStyle = "regular",
  size = 24,
  color,
  colored = false,
  className,
  style,
  ...rest
}: IconProps) {
  const primary = iconStyle === "bold" ? boldMap : regularMap;
  const fallback = iconStyle === "bold" ? regularMap : boldMap;
  const svg = primary[name] ?? fallback[name];

  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const mergedStyle: CSSProperties = {
    width: sizeValue,
    height: sizeValue,
    color,
    ...style,
  };

  const classes = ["bds-icon", colored ? "bds-icon--colored" : null, className]
    .filter(Boolean)
    .join(" ");

  if (!svg) {
    return (
      <span
        className={classes}
        style={mergedStyle}
        role="img"
        aria-label={`missing icon: ${name}`}
        {...rest}
      />
    );
  }

  return (
    <span
      className={classes}
      style={mergedStyle}
      role="img"
      aria-hidden={rest["aria-label"] ? undefined : true}
      // SVG 문자열을 직접 inject — currentColor가 작동하도록 fill 속성을
      // CSS에서 currentColor로 덮어씀 (Icon.css 참조).
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
}
