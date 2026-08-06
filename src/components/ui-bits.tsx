import { useEffect, useRef, useState, type ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/* Componentes reutilizáveis simples partilhados pelas secções. */

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </div>
  );
}

/** Métrica com animação de contagem ao entrar em vista. */
export function StatCounter({
  value,
  suffix = "",
  label,
  tone = "default",
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "default" | "onColor";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [display, setDisplay] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!shown) return;
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [shown, value]);

  return (
    <div ref={ref}>
      <div
        className={cn(
          "text-5xl font-extrabold tracking-tight md:text-6xl",
          tone === "onColor" ? "text-white" : "text-foreground",
        )}
      >
        {display}
        <span className={tone === "onColor" ? "text-white/80" : "text-accent"}>
          {suffix}
        </span>
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-medium",
          tone === "onColor" ? "text-white/75" : "text-muted-foreground",
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function NumberedCard({
  number,
  category,
  title,
  children,
}: {
  number: string;
  category: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] md:p-10">
      <div className="text-4xl font-extrabold text-accent">{number}</div>
      <div className="mt-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-accent-strong">
        {category}
      </div>
      <h3 className="mt-2 text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-lg font-semibold md:text-xl">{question}</span>
        <span
          className={cn(
            "shrink-0 text-2xl leading-none text-primary transition-transform duration-300 ease-out",
            open && "rotate-45",
          )}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CtaButtons({
  className,
  variant = "duo",
}: {
  className?: string;
  variant?: "duo" | "onColor";
}) {
  const href = "https://www.agrilink.ao/cadastro";
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={href}
        className={
          variant === "onColor"
            ? "inline-flex min-h-[44px] items-center justify-center rounded-[0.6rem] bg-white px-6 py-3 text-[0.95rem] font-bold text-primary transition-transform hover:-translate-y-0.5"
            : "btn-primary"
        }
      >
        Entrar na Plataforma
      </a>
      <a
        href={href}
        className={
          variant === "onColor"
            ? "inline-flex min-h-[44px] items-center justify-center rounded-[0.6rem] border border-white/50 px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10"
            : "btn-outline"
        }
      >
        Registar
      </a>
    </div>
  );
}
