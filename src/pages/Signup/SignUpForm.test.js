import SignUpForm from "./SignUpForm";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
// Test disable sign up button:
describe("first test", () => {
    it("it dose nothing", () => {
        render(<SignUpForm />);
        const orLine = screen.getByAltText(/OR/i);
        expect(orLine).toBeInTheDocument();
    });
});
