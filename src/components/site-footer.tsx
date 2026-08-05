import logo from "@/assets/agrilink-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="inline-block bg-ink-foreground px-3 py-2">
            <img src={logo.url} alt="AgriLink" className="h-7 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            AgriLink Logística — a rede de transportadores que liga a produção
            agrícola angolana aos mercados institucionais.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Plataforma
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li><a href="#como-funciona" className="hover:text-lime">Como Funciona</a></li>
            <li><a href="#protocolo" className="hover:text-lime">Protocolo de Carregamento</a></li>
            <li><a href="#pagamento" className="hover:text-lime">Pagamento</a></li>
            <li><a href="#viagem" className="hover:text-lime">Durante a Viagem</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Links Úteis
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li><a href="#faq" className="hover:text-lime">Perguntas Frequentes</a></li>
            <li><a href="#registo" className="hover:text-lime">Registo de Motorista</a></li>
            <li><a href="https://agrilink.ao" className="hover:text-lime">agrilink.ao</a></li>
            <li><a href="#registo" className="hover:text-lime">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Presença
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li>Luanda</li>
            <li>Benguela</li>
            <li>Huíla</li>
            <li>Huambo</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} AgriLink. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-lime">Termos</a>
            <a href="#faq" className="hover:text-lime">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}