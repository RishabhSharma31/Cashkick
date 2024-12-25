import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../themes/index";
import Button from "./components/atoms/Button/index";
import CreditDetailsCard from "./components/molecules/CashAccelerationInfoCard";
import DueOutstandingCard from "./components/molecules/HomeInfoCard";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
    </ThemeProvider>
  );
};

export default App;
