import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const colors = {
  brand: {
    main: "#217329",
    lightMain: "rgb(89, 149, 95)",
    green: "#accfaa",
    red: "#E41E26",
    lightRed: "rgb(247, 77, 77)",
    lightRedHover: "rgba(247,77,77,0.6)",
    black: "#000000",
    white: "#FFFF",
    gray: "#F3F3F3",
    brown: "#ffdede",
  },
  primary: {
    100: "#DEF8D4",
    200: "#B8F0AC",
    300: "#81D579",
    400: "#4FAB50",
    500: "#217329",
    600: "#186226",
    700: "#105223",
    800: "#0A421F",
    900: "#06371C",
  },
  secondary: {
    100: "#FDDFD1",
    200: "#FCB8A4",
    300: "#F68776",
    400: "#EE5A53",
    500: "#E41E26",
    600: "#C4152C",
    700: "#A40F2F",
    800: "#84092F",
    900: "#6D052E",
  },
};

export const theme = extendTheme(
  {
    semanticTokens: {
      colors: {
        primary: "primary.500",
        secondary: "secondary.500",
      },
    },
    components: {
      Text: {
        baseStyle: {
          textAlign: "justify",
        },
      },
    },
    colors: colors,
  },
  withProse()
);
