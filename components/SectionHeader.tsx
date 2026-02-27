interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      <p className="max-w-2xl text-slate-600">{subtitle}</p>
    </div>
  );
}
