import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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

  it("updates the active link as the user scrolls through sections", () => {
    const mockSections = document.createElement("div");
    mockSections.innerHTML = `
      <section id="about"></section>
      <section id="services"></section>
      <section id="work"></section>
      <section id="skills"></section>
      <section id="contact"></section>
    `;
    document.body.appendChild(mockSections);

    const sectionTopMap: Record<string, number> = {
      about: 0,
      services: 600,
      work: 1200,
      skills: 1800,
      contact: 2400,
    };

    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function () {
      const id = (this as HTMLElement).id;
      const absoluteTop = sectionTopMap[id] ?? 0;
      const top = absoluteTop - window.scrollY;
      return {
        x: 0,
        y: top,
        top,
        left: 0,
        right: 0,
        bottom: top + 400,
        width: 0,
        height: 400,
        toJSON: () => ({}),
      };
    };

    try {
      render(<TopNav />);

      const workLinksBefore = screen.getAllByRole("link", { name: "Work" });
      expect(workLinksBefore.some((link) => link.getAttribute("aria-current") === "page")).toBe(
        false,
      );

      Object.defineProperty(window, "scrollY", {
        value: 1300,
        writable: true,
        configurable: true,
      });
      fireEvent.scroll(window);

      const workLinksAfter = screen.getAllByRole("link", { name: "Work" });
      expect(workLinksAfter.some((link) => link.getAttribute("aria-current") === "page")).toBe(
        true,
      );
    } finally {
      Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
      mockSections.remove();
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
