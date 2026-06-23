import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import TopNav from "./index";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element -- mock for unit tests
    <img src={src} alt={alt} {...props} />
  ),
}));

afterEach(() => {
  cleanup();
});

describe("TopNav", () => {
  it("renders the logo and primary navigation", () => {
    render(<TopNav />);

    expect(screen.getByRole("img", { name: "Grateful Orange" })).toBeInTheDocument();
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
      { name: "Skills", href: "#skills" },
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
