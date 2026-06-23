import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./index";

afterEach(() => {
  cleanup();
});

describe("ServiceCard", () => {
  it("renders the title and blurb", () => {
    render(
      <ServiceCard
        title="Full-Stack Product Development"
        blurb="From UX to APIs, full-stack products are built to launch quickly."
        icon={faRocket}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Full-Stack Product Development" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "From UX to APIs, full-stack products are built to launch quickly.",
      ),
    ).toBeInTheDocument();
  });

  it("renders as an article landmark", () => {
    render(
      <ServiceCard
        title="SaaS Product Engineering"
        blurb="Scalable SaaS platforms combine clean architecture."
        icon={faRocket}
      />,
    );

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
