import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@fontsource/pretendard/800.css";

import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "alternative", value: "#f5f5f5" },
        { name: "dim", value: "#11111133" },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        muchonPC: {
          name: "Muchon · PC (1280)",
          styles: { width: "1280px", height: "832px" },
          type: "desktop",
        },
        muchonMobile: {
          name: "Muchon · Mobile (375)",
          styles: { width: "375px", height: "812px" },
          type: "mobile",
        },
      },
    },
    options: {
      storySort: {
        order: ["Foundations", "Components", "Examples"],
      },
    },
  },
};

export default preview;
