import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import skillsData from "@/app/content/skills.json";
import SkillsSection from "./index";

afterEach(() => {
  cleanup();
});

describe("SkillsSection", () => {
  it("renders the section heading and intro copy", () => {
    render(<SkillsSection />);

    expect(screen.getByRole("heading", { level: 2, name: "Skills" })).toBeInTheDocument();
    expect(
      screen.getByText(
        /Core capabilities across product engineering, front-end architecture, back-end integration, and technical leadership/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders organized skill groups and their list items from JSON", () => {
    render(<SkillsSection />);

    for (const group of skillsData.organizedSkills) {
      const groupHeading = screen.getByRole("heading", {
        level: 3,
        name: group.category,
      });
      expect(groupHeading).toBeInTheDocument();

      const groupSection = groupHeading.closest("section");
      expect(groupSection).not.toBeNull();

      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument();
      }

      expect(
        within(groupSection as HTMLElement).getAllByRole("listitem"),
      ).toHaveLength(group.items.length);
    }
  });
});
