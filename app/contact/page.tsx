import type { Metadata } from 'next';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact details and collaboration options.'
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="max-w-3xl text-slate-600">Interested in collaborating? Reach out through any channel below.</p>
      </header>
      <section>
        <SectionHeader title="Get in Touch" subtitle="Placeholder contact methods for email, social, and scheduling." />
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Email" description="alex@example.com" />
          <Card title="LinkedIn" description="linkedin.com/in/alexportfolio" />
          <Card title="Location" description="Based in New York, open to remote collaboration." />
        </div>
      </section>
    </div>
  );
}
