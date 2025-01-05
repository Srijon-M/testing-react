import JobLocation from "./JobLocation";
import { render, screen } from '@testing-library/react';
import React from "react";

describe("JobLocation", () => {
    test("component renders correctly", () => {
        render(<JobLocation />);

        const pageHeading = screen.getByRole("heading", {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const pageSubHeading = screen.getByRole("heading", {
            level: 2
        });
        expect(pageSubHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText("All fields are mandetory");
        expect(paragraphElement).toBeInTheDocument();

        const textElement = screen.getByRole("textbox", {
            name: "Name"
        });
        expect(textElement).toBeInTheDocument();

        const nameElement = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByPlaceholderText("Enetr your name");
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByDisplayValue("Srijon");
        expect(nameElement3).toBeInTheDocument();

        const imageElement = screen.getByAltText("A person with a laptop");
        expect(imageElement).toBeInTheDocument();

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();

        const textAreaElement = screen.getByRole("textbox", {
            name: "Bio"
        });
        expect(textAreaElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
        
        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText("I agree to the terms and conditions");
        expect(termsElement2).toBeInTheDocument();
        
        const submitBtnElement = screen.getByRole("button");
        expect(submitBtnElement).toBeInTheDocument();
    })
})