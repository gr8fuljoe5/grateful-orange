import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import skillsData from "@/app/content/skills.json";
import ServicesSection from "./index";

afterEach(() => {
  cleanup();
});

describe("ServicesSection", () => {
  it("renders the section heading and intro copy", () => {
    render(<ServicesSection />);

    expect(screen.getByRole("heading", { level: 2, name: "Services" })).toBeInTheDocument();
    expect(
      screen.getByText(
        /Strategic services spanning product engineering, architecture, and technical leadership/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders all services from JSON with titles and blurbs", () => {
    render(<ServicesSection />);

    for (const service of skillsData.skills) {
      expect(
        screen.getByRole("heading", { level: 3, name: service.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(service.blurb)).toBeInTheDocument();
    }

    expect(screen.getAllByRole("article")).toHaveLength(skillsData.skills.length);
  });
});
