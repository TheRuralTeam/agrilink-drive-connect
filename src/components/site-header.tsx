import { useState } from "react";
import logo from "@/assets/agrilink-logo.asset.json";

const NAV = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Protocolo", href: "#protocolo" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Durante a Viagem", href: "#viagem" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Corredores", href: "#corredores" },
];

const IDIOMAS = ["PT", "FR", "EN"];

export function SiteHeader() {
  const [lang, setLang] = useState("PT");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <a href="#top" className="shrink-0">
          <img src={logo.url} alt="AgriLink" className="h-8 w-auto" />
        </a>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-1 text-xs md:flex">
            {IDIOMAS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={
                  l === lang
                    ? "px-1.5 py-1 font-semibold text-foreground"
                    : "px-1.5 py-1 text-muted-foreground hover:text-foreground"
                }
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#registo"
            className="hidden rounded-sm border border-foreground/25 px-4 py-2 text-sm transition-colors hover:border-foreground sm:inline-block"
          >
            Entrar
          </a>
          <a
            href="#registo"
            className="rounded-sm bg-lime px-4 py-2 text-sm font-medium text-lime-foreground transition-opacity hover:opacity-90"
          >
            Registar
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}