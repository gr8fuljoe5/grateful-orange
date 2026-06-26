import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Footer from "./index";

afterEach(() => {
  cleanup();
});

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);

    expect(
      screen.getByText(/Grateful Orange\. All rights reserved\./i),
    ).toBeInTheDocument();
  });

  it("renders GitHub and LinkedIn icon links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: "GitHub profile" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "LinkedIn profile" }),
    ).toBeInTheDocument();
  });
});
