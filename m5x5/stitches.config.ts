import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      black: "#000",
      primary: "#000",
    },
    fonts: {
      default: "Poppins, sans-serif",
    },
  },
});

export const globalStyles = globalCss({
  ":root": {
    fontSize: "10px",
  },
  body: {
    fontFamily: "$default !important",
    fontSize: "1.5rem",
    width: "100%",
    margin: "0px",
  },
});
