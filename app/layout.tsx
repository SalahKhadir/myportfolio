import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.salahkhadir.codes'),
  title: {
    default: 'Salah Khadir | Software & DevOps Engineer',
    template: '%s | Salah Khadir',
  },
  alternates: {
    canonical: 'https://www.salahkhadir.codes',
  },
  description:
    'Final-year software engineering student at EMSI Rabat specializing in resilient backend architectures (Spring Boot, FastAPI), automated DevSecOps pipelines, and cloud systems.',
  keywords: [
    'Salah Khadir',
    'Software Engineer',
    'DevOps Engineer',
    'DevSecOps',
    'Backend Engineer',
    'Spring Boot',
    'FastAPI',
    'GitLab CI/CD',
    'Docker',
    'Oracle Cloud Infrastructure',
    'OCI Certified',
    'Java SE 17 Developer',
    'EMSI Rabat',
    'Morocco Tech',
  ],
  authors: [{ name: 'Salah Khadir', url: 'https://www.salahkhadir.codes' }],
  creator: 'Salah Khadir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.salahkhadir.codes',
    siteName: 'Salah Khadir Portfolio',
    title: 'Salah Khadir | Software & DevOps Engineer',
    description:
      'Architecting resilient backend systems and automated CI/CD security pipelines. Certified Java SE 17 Developer & OCI Professional.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salah Khadir | Software & DevOps Engineer',
    description:
      'Architecting resilient backend systems and automated CI/CD security pipelines.',
    creator: '@SalahKhadir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/icon.png?v=2', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
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
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Salah Khadir',
              url: 'https://www.salahkhadir.codes',
              jobTitle: 'Software & DevOps Engineer',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
              },
              sameAs: [
                'https://github.com/SalahKhadir',
                'https://linkedin.com/in/salah-khadir',
              ],
              knowsAbout: [
                'Spring Boot',
                'FastAPI',
                'DevOps',
                'DevSecOps',
                'Docker',
                'GitLab CI/CD',
                'Oracle Cloud Infrastructure',
              ],
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
