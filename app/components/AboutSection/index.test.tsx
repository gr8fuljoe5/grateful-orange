import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AboutSection from "./index";

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
    // eslint-disable-next-line @next/next/no-img-element -- test mock for next/image
    <img src={src} alt={alt} {...props} />
  ),
}));

afterEach(() => {
  cleanup();
});

describe("AboutSection", () => {
  it("renders the headline, bio copy, and location", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: "I build thoughtful, high-impact digital experiences.",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/I am a Staff Software Engineer focused on full-stack e-commerce/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Brooklyn, NY")).toBeInTheDocument();
  });

  it("renders the about profile image with accessible alt text", () => {
    render(<AboutSection />);

    const image = screen.getByRole("img", { name: "Portrait of Joseph Kanakaraj" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/about-profile.jpg");
  });
});
