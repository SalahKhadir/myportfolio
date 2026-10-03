import ClientCapabilities from "./ClientCapabilities";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Capabilities & Stack',
  description:
    'Core competencies across backend engineering (Spring Boot, FastAPI), DevSecOps CI/CD automation, and cloud delivery.',
  alternates: {
    canonical: 'https://www.salahkhadir.codes/capabilities',
  },
};

export default function CapabilitiesPage() {
  return <ClientCapabilities />;
}
