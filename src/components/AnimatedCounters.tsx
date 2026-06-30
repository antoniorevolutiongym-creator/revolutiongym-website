"use client";

import { useEffect, useRef, useState } from "react";

type Counter = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounters({ counters }: { counters: Counter[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500;
    const start = performance.now();
    let animationFrame = 0;

    const animate = (now: number) => {
      const nextProgress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - nextProgress, 3);
      setProgress(eased);
      if (nextProgress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3">
      {counters.map((counter) => (
        <article key={counter.label} className="counter-card rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/40 backdrop-blur-md">
          <p className="font-display text-6xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-7xl">
            {Math.round(counter.value * progress)}{counter.suffix ?? ""}
          </p>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-revolution-red to-transparent" />
          <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-zinc-200">{counter.label}</p>
        </article>
      ))}
    </div>
  );
}
