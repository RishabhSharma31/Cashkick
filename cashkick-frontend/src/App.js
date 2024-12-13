import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../themes/index";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />{" "}
    {/* Applies global styles, including the black background */}
  </ThemeProvider>
);

export default App;
