import { type CSSProperties, type HTMLAttributes } from "react";
import "./Icon.css";

/**
 * Vite의 import.meta.glob을 통해 svg/regular, svg/bold, svg/color 디렉터리의
 * 모든 svg를 빌드 타임에 raw 문자열로 수집한다. 새 svg 파일을 떨어뜨리면
 * 자동으로 등록된다.
 *
 * - regular / bold: 단색(currentColor) 아이콘
 * - color: 고정 다색 아이콘 (fill을 currentColor로 덮어쓰지 않음)
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

const colorModules = import.meta.glob("./svg/color/*.svg", {
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
const colorMap = buildMap(colorModules);

export type IconStyle = "regular" | "bold" | "color";

/** 디자인 시스템 룰: 16/18/24 세 가지만 허용 */
export type IconSize = 16 | 18 | 24;

export const ICON_NAMES: Record<IconStyle, string[]> = {
  regular: Object.keys(regularMap).sort(),
  bold: Object.keys(boldMap).sort(),
  color: Object.keys(colorMap).sort(),
};

/** regular ∪ bold (단색 아이콘) */
export const MONO_ICON_NAMES: string[] = Array.from(
  new Set([...ICON_NAMES.regular, ...ICON_NAMES.bold]),
).sort();

/** regular ∪ bold ∪ color (전체 아이콘) */
export const ALL_ICON_NAMES: string[] = Array.from(
  new Set([...MONO_ICON_NAMES, ...ICON_NAMES.color]),
).sort();

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  /** SVG 파일명(확장자 제외). 예: "down", "arrow-right" */
  name: string;
  /** Regular(라인) / Bold(채움) / Color(다색). 기본 "regular" */
  iconStyle?: IconStyle;
  /** 아이콘 사이즈 — 디자인 시스템 룰: 16 / 18 / 24만 허용. 기본 24 */
  size?: IconSize;
  /** currentColor 대신 강제 색상 (단색 아이콘 전용). color 아이콘은 무시. */
  color?: string;
  /** 단색 아이콘이라도 SVG 원본 색을 보존하고 싶을 때 true. (color 아이콘은 항상 보존) */
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
  // 1) 요청한 스타일에서 찾고, 없으면 단색끼리만 자동 fallback
  let svg: string | undefined;
  let resolvedStyle: IconStyle = iconStyle;

  if (iconStyle === "color") {
    svg = colorMap[name];
  } else {
    const primary = iconStyle === "bold" ? boldMap : regularMap;
    const fallback = iconStyle === "bold" ? regularMap : boldMap;
    svg = primary[name] ?? fallback[name];
    if (!primary[name] && fallback[name]) {
      resolvedStyle = iconStyle === "bold" ? "regular" : "bold";
    }
  }

  // 2) color 아이콘이거나 colored=true → 원본 색 보존
  const isColored = iconStyle === "color" || colored;

  const classes = [
    "bds-icon",
    isColored ? "bds-icon--colored" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    color: !isColored ? color : undefined,
    ...style,
  };

  if (!svg) {
    return (
      <span
        className={classes}
        style={mergedStyle}
        role="img"
        aria-label={`missing icon: ${name}`}
        data-icon-style={resolvedStyle}
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
      data-icon-style={resolvedStyle}
      // SVG 문자열을 직접 inject — 단색은 fill: currentColor, 다색은 fill: revert
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
}
