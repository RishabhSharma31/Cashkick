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
      <Button
        buttonText="Click Me"
        onClickEvent={handleClick}
        propVariant="contained"
        customColor="#4CAF50"
      />

      <CreditDetailsCard
        termCap="12 months"
        availableCredit="$880.0k"
        maxInterestRate="12.00%"
      />

      <DueOutstandingCard
        dueDate="May 03, 2021"
        dueAmount="$14,204.55"
        outstandingAmount="$170,454.55"
        dueInDays="30 day(s)"
        progressValue={60}
      />
      {/* Applies global styles, including the black background */}
    </ThemeProvider>
  );
};

export default App;
