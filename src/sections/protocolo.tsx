import loadingAgent from "@/assets/loading-agent.jpg";
import { Badge, NumberedCard, Reveal } from "@/components/ui-bits";

export function ProtocoloSection() {
  return (
    <section id="protocolo" className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Badge>Protocolo de Carregamento</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl">
              O que se espera de ti no{" "}
              <span className="text-accent-strong">ponto de recolha</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O carregamento é sempre presencial e supervisionado. Estes quatro
              pontos protegem o produtor, o comprador e o transportador.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            ["01", "Identidade", "Verificação do motorista", "Apresenta documento de identificação e matrícula do veículo ao agente de campo. Só o motorista atribuído pode levantar a carga."],
            ["02", "Conferência", "Checklist com o agente", "Contagem de caixas, sacos ou grades e verificação do estado do produto. Divergências são registadas antes de fechar a caixa de carga."],
            ["03", "Registo", "Confirmação fotográfica", "Fotografias da carga carregada e do veículo fechado ficam anexadas à viagem — é a tua prova em caso de reclamação."],
            ["04", "Acondicionamento", "Segurança da carga", "Produto fresco devidamente empilhado, coberto e amarrado. A perda por mau acondicionamento é responsabilidade do transportador."],
          ].map(([n, cat, titulo, texto], i) => (
            <Reveal key={n} delay={i * 80} className="h-full">
              <NumberedCard number={n} category={cat} title={titulo}>
                {texto}
              </NumberedCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mt-14">
            <img
              src={loadingAgent}
              alt="Agente de campo AgriLink a supervisionar o carregamento de caixas de tomate e cebola"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[21/9] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Carregamento supervisionado por agente de campo · Província do Bengo
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
