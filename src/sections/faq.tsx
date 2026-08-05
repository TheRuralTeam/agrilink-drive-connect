import { FaqItem } from "@/components/ui-bits";

const PERGUNTAS = [
  {
    q: "Preciso de camião próprio para me registar?",
    a: "Sim. Aceitamos motoristas com veículo próprio ou com autorização formal do proprietário do veículo, devidamente documentada no registo.",
  },
  {
    q: "Que documentos são exigidos?",
    a: "Bilhete de identidade, carta de condução válida, livrete e seguro do veículo. Para carga refrigerada podem ser pedidos comprovativos adicionais.",
  },
  {
    q: "Posso recusar uma carga depois de aceitar?",
    a: "Podes, mas recusas tardias e repetidas afetam a tua classificação na rede e a prioridade nas atribuições seguintes.",
  },
  {
    q: "Quando recebo o pagamento?",
    a: "Metade no momento em que marcas o início da viagem, e o restante após a confirmação de entrega pelo comprador.",
  },
  {
    q: "O que acontece se a carga chegar danificada?",
    a: "O registo fotográfico do carregamento e da descarga é comparado. Se a divergência resultar do transporte, aplica-se o previsto no contrato digital da viagem.",
  },
  {
    q: "Como partilho a minha localização?",
    a: "Pela plataforma AgriLink ou por WhatsApp com a central, conforme o que for combinado no início da viagem.",
  },
  {
    q: "Trabalho em regime exclusivo?",
    a: "Não. És transportador parceiro independente e podes manter outros clientes, desde que cumpras os prazos das cargas aceites.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Perguntas Frequentes</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Dúvidas do <em className="text-primary">motorista</em>
          </h2>
        </div>
        <div>
          {PERGUNTAS.map((p) => (
            <FaqItem key={p.q} question={p.q} answer={p.a} />
          ))}
        </div>
      </div>
    </section>
  );
}