import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/sections/hero";
import { ComoFuncionaSection } from "@/sections/como-funciona";
import { ProtocoloSection } from "@/sections/protocolo";
import { PagamentoSection } from "@/sections/pagamento";
import { CitacaoSection } from "@/sections/citacao";
import { ViagemSection } from "@/sections/viagem";
import { CorredoresSection } from "@/sections/corredores";
import { FaqSection } from "@/sections/faq";
import { CtaFinalSection } from "@/sections/cta-final";

const TITLE = "AgriLink Logística | Rede de Motoristas e Transportadores";
const DESCRIPTION =
  "Transporta carga agrícola verificada em Angola com a AgriLink: cargas atribuídas, carregamento supervisionado, pagamento em duas fases e apoio durante toda a viagem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ComoFuncionaSection />
        <ProtocoloSection />
        <PagamentoSection />
        <CitacaoSection />
        <ViagemSection />
        <CorredoresSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <SiteFooter />
    </div>
  );
}
