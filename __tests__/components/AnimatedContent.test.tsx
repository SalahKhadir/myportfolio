import React from "react";
import { render, screen } from "@testing-library/react";
import AnimatedContent from "@/components/AnimatedContent";

describe("AnimatedContent", () => {
  it("renders children successfully", () => {
    render(
      <AnimatedContent distance={80}>
        <p>Animated text</p>
      </AnimatedContent>
    );

    expect(screen.getByText("Animated text")).toBeInTheDocument();
  });

  it("applies custom className and style props", () => {
    const { container } = render(
      <AnimatedContent className="custom-wrapper" style={{ padding: "20px" }}>
        <span>Child content</span>
      </AnimatedContent>
    );

    const wrapper = container.querySelector(".custom-wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});
