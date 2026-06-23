import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import TopNav from "./index";

afterEach(() => {
  cleanup();
});

describe("TopNav", () => {
  it("renders the brand text and primary navigation", () => {
    render(<TopNav />);

    expect(screen.getByRole("link", { name: "Grateful Orange home" })).toBeInTheDocument();
    expect(screen.getByText("Grateful")).toBeInTheDocument();
    expect(screen.getByText("ORANGE")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Grateful Orange home" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("renders anchor links for each section", () => {
    render(<TopNav />);

    const expectedLinks = [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Work", href: "#work" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ];

    for (const link of expectedLinks) {
      const matches = screen.getAllByRole("link", { name: link.name });
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.some((element) => element.getAttribute("href") === link.href)).toBe(
        true,
      );
    }
  });

  it("keeps the selected link active after click", async () => {
    const user = userEvent.setup();
    render(<TopNav />);

    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toHaveAttribute("aria-current", "page");

    const contactLink = screen.getByRole("link", { name: "Contact" });
    await user.click(contactLink);

    expect(contactLink).toHaveAttribute("aria-current", "page");
    expect(aboutLink).not.toHaveAttribute("aria-current");
  });

  it("opens the mobile menu when the toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<TopNav />);

    const openButton = screen.getByRole("button", { name: "Open menu" });
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    await user.click(openButton);

    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
