import { useState, type ReactNode } from "react";

/* Pequenos componentes reutilizáveis partilhados pelas secções da página. */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function NumberedCard({
  number,
  category,
  title,
  children,
  dark = false,
}: {
  number: string;
  category: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "border border-ink-foreground/15 bg-ink/40 p-8"
          : "border border-border bg-card p-8"
      }
    >
      <div
        className={`font-display text-3xl ${dark ? "text-lime" : "text-gold"}`}
      >
        {number}
      </div>
      <div className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
        {category}
      </div>
      <h3
        className={`mt-2 text-2xl ${dark ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${dark ? "text-ink-foreground/70" : "text-muted-foreground"}`}
      >
        {children}
      </p>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-gold/60 pt-5">
      <div className="font-display text-4xl leading-none md:text-5xl">{value}</div>
      <div className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
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
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg md:text-xl">{question}</span>
        <span className="shrink-0 text-2xl text-gold">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      )}
    </div>
  );
}