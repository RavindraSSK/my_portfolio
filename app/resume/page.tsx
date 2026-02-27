import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume preview with download and fullscreen viewing options.'
};

const resumeFilePath = path.join(process.cwd(), 'public', 'resume.pdf');
const hasResumePdf = fs.existsSync(resumeFilePath);

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeader title="Professional Resume" subtitle="A concise snapshot of experience, capabilities, and impact." />
          <p className="max-w-3xl text-slate-600">
            I blend engineering, design, and storytelling to build meaningful experiences across digital and physical spaces.
            This resume highlights my project work, cross-functional collaboration, and technical execution across research and
            product contexts.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {hasResumePdf ? (
              <>
                <Link
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Download Resume
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  View Fullscreen
                </Link>
              </>
            ) : (
              <>
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center rounded-lg bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500"
                >
                  Download Resume
                </span>
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-400"
                >
                  View Fullscreen
                </span>
              </>
            )}
          </div>
        </section>
      </header>

      <section className="space-y-4">
        <SectionHeader title="Resume Preview" subtitle="Embedded view for quick review before downloading." />

        {hasResumePdf ? (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src="/resume.pdf"
              title="Professional Resume PDF Preview"
              className="h-[70vh] w-full md:h-[80vh]"
            />
          </div>
        ) : (
          <div
            role="status"
            className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800"
          >
            Resume PDF not found. Add <code className="rounded bg-amber-100 px-1 py-0.5">public/resume.pdf</code> to enable
            download and embedded preview.
          </div>
        )}
      </section>
    </div>
  );
}
