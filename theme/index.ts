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
};

export const theme = extendTheme(
  {
    colors: colors,
  },
  withProse()
);
