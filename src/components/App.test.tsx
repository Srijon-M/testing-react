import React from "react";
import App from "./App";
import { render, screen } from '@testing-library/react';

describe("App", () => {
    test("App renders correctly", () => {
        render(<App/>);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    })
    test("App renders with a name", () => {
        render(<App name="Srijon" />);
        const textElement = screen.getByText("Hello Srijon");
        expect(textElement).toBeInTheDocument();
    })
    test("adding 2 and 3 should result 5", () => {
        expect(2+3).toBe(5);
    })
})