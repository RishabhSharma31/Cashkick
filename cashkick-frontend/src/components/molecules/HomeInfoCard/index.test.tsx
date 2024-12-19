import React from "react";
import { render, screen } from "@testing-library/react";
import DueOutstandingCard from "./index";
import "@testing-library/jest-dom";

describe("DueOutstandingCard", () => {
  it("renders due date, amount, and outstanding amount", () => {
    render(
      <DueOutstandingCard
        dueDate="2024-12-31"
        dueAmount="$5,000"
        outstandingAmount="$2,000"
        dueInDays="5 days"
        progressValue={40}
      />
    );

    expect(screen.getByText("Due - 2024-12-31")).toBeInTheDocument();
    expect(screen.getByText("$5,000")).toBeInTheDocument();
    expect(screen.getByText("Outstanding amount")).toBeInTheDocument();
    expect(screen.getByText("$2,000")).toBeInTheDocument();
  });

  it("displays the correct progress value", () => {
    render(
      <DueOutstandingCard
        dueDate="2024-12-31"
        dueAmount="$5,000"
        outstandingAmount="$2,000"
        dueInDays="5 days"
        progressValue={40}
      />
    );

    expect(screen.getByText("40%")).toBeInTheDocument();
    const progressCircle = screen.getByRole("progressbar");
    expect(progressCircle).toHaveAttribute("aria-valuenow", "40");
  });

  it("displays the correct due days chip", () => {
    render(
      <DueOutstandingCard
        dueDate="2024-12-31"
        dueAmount="$5,000"
        outstandingAmount="$2,000"
        dueInDays="5 days"
        progressValue={40}
      />
    );

    expect(screen.getByText("Due in 5 days")).toBeInTheDocument();
  });
});
