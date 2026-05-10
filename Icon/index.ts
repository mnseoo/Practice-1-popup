export {
  Icon,
  ICON_NAMES,
  MONO_ICON_NAMES,
  ALL_ICON_NAMES,
  type IconProps,
  type IconStyle,
  type IconSize,
} from "./Icon";

import { ICON_NAMES, MONO_ICON_NAMES, ALL_ICON_NAMES } from "./Icon";

/** regular 폴더에 존재하는 아이콘 이름 (런타임 union 대용) */
export type IconRegularName = (typeof ICON_NAMES.regular)[number];
/** bold 폴더에 존재하는 아이콘 이름 */
export type IconBoldName = (typeof ICON_NAMES.bold)[number];
/** color 폴더에 존재하는 아이콘 이름 */
export type IconColorName = (typeof ICON_NAMES.color)[number];

/** regular ∪ bold (단색 아이콘) */
export type MonoIconName = (typeof MONO_ICON_NAMES)[number];
/** regular ∪ bold ∪ color (전체 아이콘) */
export type IconName = (typeof ALL_ICON_NAMES)[number];
