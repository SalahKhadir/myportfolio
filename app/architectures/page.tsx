import ClientArchitectures from "./ClientArchitectures";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineered Systems & Architectures',
  description:
    'Production backend architectures, microservices, and automated DevSecOps pipelines built by Salah Khadir.',
  alternates: {
    canonical: 'https://www.salahkhadir.codes/architectures',
  },
};

export default function ArchitecturesPage() {
  return <ClientArchitectures />;
}
