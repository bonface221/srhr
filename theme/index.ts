import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: "1.8rem",
        fontweight: "400",
        fontStyle: "normal",
        color: "brand.black",
        opacity: ".8",
      },
    },
  },

  colors: {
    brand: {
      main: "#217329",
      red: "#E41E26",
      black: "#000000",
      white: "#FFFF",
    },
  },
});
