import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes"; // Adjust path as needed

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
