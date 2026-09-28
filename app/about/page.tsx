import Navbar from "@/components/Navbar";
import FadeInView from "@/components/FadeInView";
import AboutSection from "@/components/AboutSection";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About & Background',
  description:
    'Academic background at EMSI Rabat (DDSI), certifications (OCI DevOps & Java SE 17), and systems engineering philosophy.',
  alternates: {
    canonical: 'https://www.salahkhadir.codes/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full min-h-[80vh]">
        <FadeInView className="mb-32">
          <AboutSection showCvDownload={true} />
        </FadeInView>
      </main>
    </>
  );
}
