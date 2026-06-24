import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import workData from "@/app/content/work.json";
import WorkSection from "./index";

afterEach(() => {
  cleanup();
});

describe("WorkSection", () => {
  it("renders the section heading and intro copy", () => {
    render(<WorkSection />);

    expect(screen.getByRole("heading", { level: 2, name: "Work" })).toBeInTheDocument();
    expect(screen.getByText(workData.intro)).toBeInTheDocument();
  });

  it("renders all featured roles from JSON", () => {
    render(<WorkSection />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Featured Experience" }),
    ).toBeInTheDocument();

    for (const role of workData.featured) {
      expect(
        screen.getByRole("heading", { level: 4, name: role.role }),
      ).toBeInTheDocument();
      expect(screen.getByText(role.company)).toBeInTheDocument();
      expect(screen.getByText(role.summary)).toBeInTheDocument();
    }

    expect(screen.getAllByRole("article")).toHaveLength(
      workData.featured.length + workData.achievements.length,
    );
  });

  it("renders selected achievements from JSON", () => {
    render(<WorkSection />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Major League Baseball" }),
    ).toBeInTheDocument();

    for (const achievement of workData.achievements) {
      expect(
        screen.getByText(`${achievement.period} • ${achievement.location}`),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { level: 4, name: achievement.role }),
      ).toBeInTheDocument();
      expect(screen.getByText(achievement.summary)).toBeInTheDocument();

      for (const highlight of achievement.highlights) {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      }
    }
  });

  it("renders all timeline entries from JSON", () => {
    render(<WorkSection />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Career Timeline" }),
    ).toBeInTheDocument();

    const timelineHeading = screen.getByRole("heading", {
      level: 3,
      name: "Career Timeline",
    });
    const timelineSection = timelineHeading.closest("section");
    expect(timelineSection).not.toBeNull();

    for (const role of workData.timeline) {
      expect(screen.getByText(role.period)).toBeInTheDocument();
      expect(screen.getAllByText(role.company).length).toBeGreaterThan(0);
      expect(screen.getByText(role.summary)).toBeInTheDocument();
    }

    expect(
      within(timelineSection as HTMLElement).getAllByRole("listitem"),
    ).toHaveLength(workData.timeline.length);
  });
});
