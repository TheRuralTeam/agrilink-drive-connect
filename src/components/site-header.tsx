import { useState } from "react";

import logo from "@/assets/agrilink-logo.asset.json";
import { PLATFORM_URL } from "@/lib/site";

const NAV = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Protocolo", href: "#protocolo" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Preços", href: "#precos" },
  { label: "Corredores", href: "#corredores" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-6 py-3 lg:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <img src={logo.url} alt="AgriLink" className="h-8 w-auto" />
          <span className="text-lg font-extrabold tracking-tight">Carrega</span>
        </a>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={PLATFORM_URL}
            className="btn-outline hidden !px-4 !py-2 text-sm sm:inline-flex"
          >
            Entrar na Plataforma
          </a>
          <a href={PLATFORM_URL} className="btn-primary !px-4 !py-2 text-sm">
            Registar
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-xl lg:hidden"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border px-6 py-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
