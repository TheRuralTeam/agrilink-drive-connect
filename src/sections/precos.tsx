import { Badge, Reveal } from "@/components/ui-bits";
import { PLATFORM_URL } from "@/lib/site";

const PLANOS = [
  {
    tier: "Inicial",
    destaque: false,
    preco: "0",
    unidade: "Kz / mês",
    resumo:
      "Para motoristas que estão a começar na rede. Sem mensalidade — apenas a comissão por viagem concluída.",
    comissao: "12% de comissão por frete",
    features: [
      "Acesso a cargas da tua província",
      "Até 2 cargas ativas em simultâneo",
      "Pagamento 50% partida / 50% entrega",
      "Contrato digital por viagem",
      "Suporte por WhatsApp com o agente de campo",
    ],
    cta: "Começar grátis",
  },
  {
    tier: "Intermédio",
    destaque: true,
    preco: "9.900",
    unidade: "Kz / mês",
    resumo:
      "Para transportadores com histórico comprovado que querem prioridade nas cargas de maior valor.",
    comissao: "8% de comissão por frete",
    features: [
      "Cargas de todos os corredores nacionais",
      "Até 6 cargas ativas em simultâneo",
      "Prioridade na atribuição de cargas",
      "Rastreamento em tempo real partilhado",
      "Histórico e recibos exportáveis",
      "Selo de confiança no perfil",
    ],
    cta: "Subir para Intermédio",
  },
  {
    tier: "Avançado",
    destaque: false,
    preco: "24.900",
    unidade: "Kz / mês",
    resumo:
      "Para frotas e transportadores com vários veículos e operação contínua entre províncias.",
    comissao: "5% de comissão por frete",
    features: [
      "Gestão de frota com vários motoristas",
      "Cargas ilimitadas em simultâneo",
      "Acesso antecipado a corredores SADC/RDC",
      "Painel de desempenho e relatórios mensais",
      "Gestor de conta dedicado",
      "Adiantamento de combustível elegível",
    ],
    cta: "Falar sobre frota",
  },
];

export function PrecosSection() {
  return (
    <section id="precos" className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Badge>Planos para Transportadores</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Escolhe o plano que acompanha o teu{" "}
              <span className="text-accent-strong">nível de confiança</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Quanto maior o histórico de viagens concluídas, menor a comissão e
              maior a prioridade na atribuição de cargas. Podes mudar de plano a
              qualquer momento, sem fidelização.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PLANOS.map((p, i) => (
            <Reveal key={p.tier} delay={i * 80} className="h-full">
              <div
                className={
                  p.destaque
                    ? "flex h-full flex-col rounded-2xl border-2 border-primary bg-card p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]"
                    : "flex h-full flex-col rounded-2xl border border-border bg-card p-8"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-accent-strong">
                    {p.tier}
                  </span>
                  {p.destaque && (
                    <span className="rounded-full bg-primary px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white">
                      Mais escolhido
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {p.preco}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {p.unidade}
                  </span>
                </div>
                <div className="mt-2 text-sm font-semibold text-primary">
                  {p.comissao}
                </div>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p.resumo}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-base">
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={PLATFORM_URL}
                  className={
                    p.destaque
                      ? "btn-primary mt-8 w-full justify-center"
                      : "btn-outline mt-8 w-full justify-center"
                  }
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-muted-foreground">
            Valores em kwanzas, sem IVA. A comissão é descontada apenas em
            viagens concluídas e confirmadas pelo comprador.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
