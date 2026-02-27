'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' },
  { href: '/academic-projects', label: 'Academic Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/photography', label: 'Photography' },
  { href: '/sports-fitness', label: 'Sports & Fitness' },
  { href: '/design-architecture', label: 'Design/Architecture' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4" aria-label="Primary">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-md text-lg font-bold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label="Go to homepage"
          >
            Alex Portfolio
          </Link>

          <ul className="hidden items-center gap-5 md:flex" role="menubar" aria-label="Desktop navigation links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} role="none" className="relative">
                  <Link
                    href={link.href}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    className={`group inline-block rounded-md px-1 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                      isActive ? 'text-brand-700' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-1 -bottom-0.5 h-0.5 origin-left rounded bg-brand-600 transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/resume"
              className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              aria-label="Download resume"
            >
              Download Resume
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-md border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
            menuOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className="min-h-0 space-y-1 pt-1" aria-label="Mobile navigation links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                      isActive
                        ? 'bg-brand-100 text-brand-700'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/resume"
                className="block rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                aria-label="Download resume"
              >
                Download Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
