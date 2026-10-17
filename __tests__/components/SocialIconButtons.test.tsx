import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SocialIconButtons from "@/components/SocialIconButtons";
import { LanguageProvider } from "@/components/LanguageContext";

describe("SocialIconButtons", () => {
  it("renders all social links with correct URLs", () => {
    render(
      <LanguageProvider>
        <SocialIconButtons />
      </LanguageProvider>
    );

    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const emailLink = screen.getByRole("link", { name: /email/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/SalahKhadir");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/salah-khadir");
    expect(emailLink).toHaveAttribute("href", "mailto:salah.khadir@outlook.com");
  });

  it("handles mouse hover interactions and activates adjacent borders", () => {
    render(
      <LanguageProvider>
        <SocialIconButtons />
      </LanguageProvider>
    );

    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    fireEvent.mouseEnter(linkedinLink);
    // Adjacent link (GitHub, above LinkedIn at index 0 vs 1) receives adjacent side
    expect(githubLink).toHaveAttribute("data-adjacent-side", "bottom");

    fireEvent.mouseLeave(linkedinLink);
  });
});
