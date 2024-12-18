import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../themes/index";
import Button from "./components/atoms/Button/index";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      <Button
        buttonText="Click Me"
        onClickEvent={handleClick}
        propVariant="contained"
        customColor="#4CAF50"
      />
      {/* Applies global styles, including the black background */}
    </ThemeProvider>
  );
};

export default App;
