import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/sections/hero";
import { MetricasSection } from "@/sections/metricas";
import { ComoFuncionaSection } from "@/sections/como-funciona";
import { CargasPublicasSection } from "@/sections/cargas-publicas";
import { ProtocoloSection } from "@/sections/protocolo";
import { PagamentoSection } from "@/sections/pagamento";
import { PrecosSection } from "@/sections/precos";
import { ViagemSection } from "@/sections/viagem";
import { CorredoresSection } from "@/sections/corredores";
import { FaqSection } from "@/sections/faq";
import { CtaFinalSection } from "@/sections/cta-final";

const TITLE = "Carrega | Transporte de Carga Agroalimentar — AgriLink";
const DESCRIPTION =
  "Carrega é o serviço de logística da AgriLink: cargas agroalimentares atribuídas a motoristas em Angola, carregamento supervisionado, 50% pago no início e 50% na entrega.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <MetricasSection />
        <ComoFuncionaSection />
        <CargasPublicasSection />
        <ProtocoloSection />
        <PagamentoSection />
        <PrecosSection />
        <ViagemSection />
        <CorredoresSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <SiteFooter />
    </div>
  );
}
