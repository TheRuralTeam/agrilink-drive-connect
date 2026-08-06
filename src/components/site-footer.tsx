import logo from "@/assets/agrilink-logo.asset.json";
import { PLATFORM_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="AgriLink" className="h-8 w-auto" />
            <span className="text-lg font-extrabold tracking-tight">Carrega</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            O serviço de transporte e logística integrado da AgriLink. Cargas
            agroalimentares verificadas, do interior de Angola a Luanda.
          </p>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-foreground">
            Produto
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#como-funciona" className="hover:text-primary">Como Funciona</a></li>
            <li><a href="#protocolo" className="hover:text-primary">Protocolo de Carregamento</a></li>
            <li><a href="#pagamento" className="hover:text-primary">Pagamento</a></li>
            <li><a href="#corredores" className="hover:text-primary">Corredores</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-foreground">
            Recursos
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#faq" className="hover:text-primary">Perguntas Frequentes</a></li>
            <li><a href="#viagem" className="hover:text-primary">Durante a Viagem</a></li>
            <li><a href="https://www.agrilink.ao" className="hover:text-primary">agrilink.ao</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-foreground">
            Começar
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Cria conta de transportador e recebe cargas atribuídas.
          </p>
          <a href={PLATFORM_URL} className="btn-primary mt-4 w-full">
            Registar
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} AgriLink · Carrega. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-primary">Termos</a>
            <a href="#faq" className="hover:text-primary">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
