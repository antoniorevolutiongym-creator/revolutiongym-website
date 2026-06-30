type PlaceholderProps = {
  label: string;
  className?: string;
};

export function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(215,38,38,0.16))]" />
      <div className="absolute inset-6 rounded-[1.5rem] border border-white/15" />
      <div className="relative flex h-full min-h-72 items-center justify-center p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/55">{label}</p>
      </div>
    </div>
  );
}
