export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Alex Portfolio. All rights reserved.</p>
        <p>Built with Next.js + Tailwind CSS</p>
      </div>
    </footer>
  );
}
