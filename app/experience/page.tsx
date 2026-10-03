import ClientExperience from "./ClientExperience";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Record & Experience',
  description:
    'Professional experience, DevOps internships, and software engineering milestones by Salah Khadir.',
  alternates: {
    canonical: 'https://www.salahkhadir.codes/experience',
  },
};

export default function ExperiencePage() {
  return <ClientExperience />;
}
