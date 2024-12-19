import React from "react";
import { render, screen } from "@testing-library/react";
import CreditDetailsCard from "./index";
import "@testing-library/jest-dom";

describe("CreditDetailsCard", () => {
  it("renders all detail boxes", () => {
    render(
      <CreditDetailsCard
        termCap="12 months"
        availableCredit="$50,000"
        maxInterestRate="5%"
      />
    );

    expect(screen.getByText("Term cap")).toBeInTheDocument();
    expect(screen.getByText("12 months")).toBeInTheDocument();

    expect(screen.getByText("Available credit")).toBeInTheDocument();
    expect(screen.getByText("$50,000")).toBeInTheDocument();

    expect(screen.getByText("Max interest rate")).toBeInTheDocument();
    expect(screen.getByText("5%")).toBeInTheDocument();
  });

  it("displays icons with the correct colors", () => {
    render(
      <CreditDetailsCard
        termCap="12 months"
        availableCredit="$50,000"
        maxInterestRate="5%"
      />
    );

    const calendarIcon = screen.getByTestId("CalendarMonthOutlinedIcon");
    const moneyIcon = screen.getByTestId("AttachMoneyOutlinedIcon");
    const percentIcon = screen.getByTestId("PercentOutlinedIcon");

    expect(calendarIcon).toHaveStyle("color: #A996F2");
    expect(moneyIcon).toHaveStyle("color: #75D1E0");
    expect(percentIcon).toHaveStyle("color: #E6C08C");
  });
});
