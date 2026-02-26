import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export default function Card({ title, description, footer, children }: CardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        {children}
      </div>
      {footer ? <div className="mt-4">{footer}</div> : null}
    </article>
  );
}
