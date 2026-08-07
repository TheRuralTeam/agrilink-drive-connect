import type { Database } from "@/integrations/supabase/types";

export type Carga = Database["public"]["Tables"]["cargas"]["Row"];
export type MotoristaDetails =
  Database["public"]["Tables"]["motorista_details"]["Row"];
export type CargaEstado = Database["public"]["Enums"]["carga_estado"];

export const ESTADO_LABEL: Record<CargaEstado, string> = {
  disponivel: "Disponível",
  atribuida: "Atribuída",
  carregada: "Carregada",
  em_transito: "Em trânsito",
  entregue: "Entregue",
  confirmada: "Confirmada",
  cancelada: "Cancelada",
};

/** Máquina de estados da viagem: próximo passo que o motorista pode acionar. */
export const PROXIMO_ESTADO: Partial<Record<CargaEstado, { estado: CargaEstado; acao: string }>> = {
  atribuida: { estado: "carregada", acao: "Confirmar carregamento" },
  carregada: { estado: "em_transito", acao: "Iniciar viagem" },
  em_transito: { estado: "entregue", acao: "Marcar como entregue" },
};

export const ESTADOS_ATIVOS: CargaEstado[] = ["atribuida", "carregada", "em_transito"];

export function formatKz(valor: number): string {
  return new Intl.NumberFormat("pt-AO").format(valor) + " Kz";
}

export function formatData(iso: string): string {
  return new Intl.DateTimeFormat("pt-PT", { day: "2-digit", month: "short" }).format(
    new Date(iso + "T00:00:00"),
  );
}