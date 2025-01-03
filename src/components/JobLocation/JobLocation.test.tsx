import JobLocation from "./JobLocation";
import { render, screen } from '@testing-library/react';
import React from "react";

describe("JobLocation", () => {
    test("component renders correctly", () => {
        render(<JobLocation />);
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();
        const submitBtnElement = screen.getByRole("button");
        expect(submitBtnElement).toBeInTheDocument();
    })
})