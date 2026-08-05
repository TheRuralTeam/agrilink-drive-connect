import loadingAgent from "@/assets/loading-agent.jpg";
import { NumberedCard } from "@/components/ui-bits";

export function ProtocoloSection() {
  return (
    <section id="protocolo" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow">Protocolo de Carregamento</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            O que se espera de ti no <em className="text-primary">ponto de recolha</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            O carregamento é sempre presencial e supervisionado. Estes quatro
            pontos protegem o produtor, o comprador e o transportador.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          <NumberedCard number="01" category="Identidade" title="Verificação do motorista">
            Apresenta documento de identificação e matrícula do veículo ao agente
            de campo. Só o motorista atribuído pode levantar a carga.
          </NumberedCard>
          <NumberedCard number="02" category="Conferência" title="Checklist com o agente">
            Contagem de caixas, sacos ou grades e verificação do estado do produto.
            Divergências são registadas antes de fechar a caixa de carga.
          </NumberedCard>
          <NumberedCard number="03" category="Registo" title="Confirmação fotográfica">
            Fotografias da carga carregada e do veículo fechado ficam anexadas à
            viagem — é a tua prova em caso de reclamação.
          </NumberedCard>
          <NumberedCard number="04" category="Acondicionamento" title="Segurança da carga">
            Produto fresco devidamente empilhado, coberto e amarrado. A perda por
            mau acondicionamento é responsabilidade do transportador.
          </NumberedCard>
        </div>

        <figure className="mt-16">
          <img
            src={loadingAgent}
            alt="Agente de campo AgriLink a supervisionar o carregamento de caixas de tomate e cebola"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Carregamento supervisionado por agente de campo · Província do Bengo
          </figcaption>
        </figure>
      </div>
    </section>
  );
}