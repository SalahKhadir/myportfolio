import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Salah Khadir | Software & DevSecOps Engineer",
  description: "Architecting resilient backend systems and automated CI/CD security pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-[#F8F7F4] dark:bg-[#0a0a0a] text-black dark:text-white min-h-screen selection:bg-accent selection:text-white"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
