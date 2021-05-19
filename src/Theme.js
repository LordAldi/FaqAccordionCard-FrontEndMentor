import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBlue: "hsl(238, 29%, 16%)",
    softRed: "hsl(14, 88%, 65%)",
    Gray: "hsl(240, 6%, 50%)",
    darkGray: "hsl(237, 12%, 33%)",
    lightGray: "hsl(240, 5%, 91%)",
    softViolet: "hsl(273, 75%, 66%)",
    softBlue: "hsl(240, 73%, 65%)",
    gradientBg: `linear-gradient(180deg, hsl(273, 75%, 66%) 0%, hsl(240, 73%, 65%) 70%)`,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
