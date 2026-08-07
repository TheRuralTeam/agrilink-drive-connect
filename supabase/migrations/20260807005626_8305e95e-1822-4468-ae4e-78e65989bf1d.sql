CREATE TYPE public.carga_estado AS ENUM ('disponivel','atribuida','carregada','em_transito','entregue','confirmada','cancelada');
CREATE TYPE public.motorista_tier AS ENUM ('inicial','intermedio','avancado');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.motorista_details (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome_completo TEXT NOT NULL,
  telefone TEXT NOT NULL,
  bi_numero TEXT,
  carta_conducao TEXT,
  matricula TEXT,
  tipo_veiculo TEXT,
  capacidade_kg INTEGER,
  base_provincia TEXT,
  verificado BOOLEAN NOT NULL DEFAULT false,
  tier public.motorista_tier NOT NULL DEFAULT 'inicial',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.motorista_details TO authenticated;
GRANT ALL ON public.motorista_details TO service_role;
ALTER TABLE public.motorista_details ENABLE ROW LEVEL SECURITY;
CREATE POLICY "motorista_details_own" ON public.motorista_details FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER motorista_details_updated_at BEFORE UPDATE ON public.motorista_details
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.cargas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  produto TEXT NOT NULL,
  quantidade_kg INTEGER NOT NULL,
  origem TEXT NOT NULL,
  destino TEXT NOT NULL,
  data_carga DATE NOT NULL,
  valor_kz INTEGER NOT NULL,
  distancia_km INTEGER,
  observacoes TEXT,
  estado public.carga_estado NOT NULL DEFAULT 'disponivel',
  motorista_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE ON public.cargas TO authenticated;
GRANT SELECT ON public.cargas TO anon;
GRANT ALL ON public.cargas TO service_role;
ALTER TABLE public.cargas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "cargas_public_disponiveis" ON public.cargas FOR SELECT TO anon
  USING (estado = 'disponivel');
CREATE POLICY "cargas_select_auth" ON public.cargas FOR SELECT TO authenticated
  USING (estado = 'disponivel' OR motorista_id = auth.uid());
CREATE POLICY "cargas_update_auth" ON public.cargas FOR UPDATE TO authenticated
  USING ((estado = 'disponivel' AND motorista_id IS NULL) OR motorista_id = auth.uid())
  WITH CHECK (motorista_id = auth.uid());
CREATE TRIGGER cargas_updated_at BEFORE UPDATE ON public.cargas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.localizacoes_viagem (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  carga_id UUID NOT NULL REFERENCES public.cargas(id) ON DELETE CASCADE,
  motorista_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  registado_em TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX localizacoes_viagem_carga_idx ON public.localizacoes_viagem (carga_id, registado_em DESC);
GRANT SELECT, INSERT ON public.localizacoes_viagem TO authenticated;
GRANT ALL ON public.localizacoes_viagem TO service_role;
ALTER TABLE public.localizacoes_viagem ENABLE ROW LEVEL SECURITY;
CREATE POLICY "localizacoes_own_select" ON public.localizacoes_viagem FOR SELECT TO authenticated
  USING (motorista_id = auth.uid());
CREATE POLICY "localizacoes_own_insert" ON public.localizacoes_viagem FOR INSERT TO authenticated
  WITH CHECK (motorista_id = auth.uid());

ALTER PUBLICATION supabase_realtime ADD TABLE public.cargas;

INSERT INTO public.cargas (produto, quantidade_kg, origem, destino, data_carga, valor_kz, distancia_km, observacoes) VALUES
('Batata rena', 12000, 'Huambo', 'Luanda', CURRENT_DATE + 1, 480000, 600, 'Carga em sacos de 50 kg. Descarga no Mercado dos Kwanzas.'),
('Banana pão', 8000, 'Kwanza Sul (Sumbe)', 'Luanda', CURRENT_DATE + 2, 320000, 340, 'Camião aberto com lona obrigatória.'),
('Milho em grão', 20000, 'Bié (Kuito)', 'Luanda', CURRENT_DATE + 3, 690000, 720, 'Carga a granel ensacada.'),
('Tomate', 5000, 'Benguela', 'Luanda', CURRENT_DATE + 1, 260000, 560, 'Carga perecível — saída antes das 06h00.'),
('Feijão', 15000, 'Malanje', 'Luanda', CURRENT_DATE + 4, 520000, 400, 'Carregamento supervisionado por agente AgriLink.'),
('Insumos agrícolas', 9000, 'Luanda', 'Huíla (Lubango)', CURRENT_DATE + 2, 610000, 980, 'Carga de retorno — adubos e sementes.');