export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      cargas: {
        Row: {
          created_at: string
          data_carga: string
          destino: string
          distancia_km: number | null
          estado: Database["public"]["Enums"]["carga_estado"]
          id: string
          motorista_id: string | null
          observacoes: string | null
          origem: string
          produto: string
          quantidade_kg: number
          updated_at: string
          valor_kz: number
        }
        Insert: {
          created_at?: string
          data_carga: string
          destino: string
          distancia_km?: number | null
          estado?: Database["public"]["Enums"]["carga_estado"]
          id?: string
          motorista_id?: string | null
          observacoes?: string | null
          origem: string
          produto: string
          quantidade_kg: number
          updated_at?: string
          valor_kz: number
        }
        Update: {
          created_at?: string
          data_carga?: string
          destino?: string
          distancia_km?: number | null
          estado?: Database["public"]["Enums"]["carga_estado"]
          id?: string
          motorista_id?: string | null
          observacoes?: string | null
          origem?: string
          produto?: string
          quantidade_kg?: number
          updated_at?: string
          valor_kz?: number
        }
        Relationships: []
      }
      localizacoes_viagem: {
        Row: {
          carga_id: string
          id: string
          latitude: number
          longitude: number
          motorista_id: string
          registado_em: string
        }
        Insert: {
          carga_id: string
          id?: string
          latitude: number
          longitude: number
          motorista_id: string
          registado_em?: string
        }
        Update: {
          carga_id?: string
          id?: string
          latitude?: number
          longitude?: number
          motorista_id?: string
          registado_em?: string
        }
        Relationships: [
          {
            foreignKeyName: "localizacoes_viagem_carga_id_fkey"
            columns: ["carga_id"]
            isOneToOne: false
            referencedRelation: "cargas"
            referencedColumns: ["id"]
          },
        ]
      }
      motorista_details: {
        Row: {
          base_provincia: string | null
          bi_numero: string | null
          capacidade_kg: number | null
          carta_conducao: string | null
          created_at: string
          matricula: string | null
          nome_completo: string
          telefone: string
          tier: Database["public"]["Enums"]["motorista_tier"]
          tipo_veiculo: string | null
          updated_at: string
          user_id: string
          verificado: boolean
        }
        Insert: {
          base_provincia?: string | null
          bi_numero?: string | null
          capacidade_kg?: number | null
          carta_conducao?: string | null
          created_at?: string
          matricula?: string | null
          nome_completo: string
          telefone: string
          tier?: Database["public"]["Enums"]["motorista_tier"]
          tipo_veiculo?: string | null
          updated_at?: string
          user_id: string
          verificado?: boolean
        }
        Update: {
          base_provincia?: string | null
          bi_numero?: string | null
          capacidade_kg?: number | null
          carta_conducao?: string | null
          created_at?: string
          matricula?: string | null
          nome_completo?: string
          telefone?: string
          tier?: Database["public"]["Enums"]["motorista_tier"]
          tipo_veiculo?: string | null
          updated_at?: string
          user_id?: string
          verificado?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      carga_estado:
        | "disponivel"
        | "atribuida"
        | "carregada"
        | "em_transito"
        | "entregue"
        | "confirmada"
        | "cancelada"
      motorista_tier: "inicial" | "intermedio" | "avancado"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      carga_estado: [
        "disponivel",
        "atribuida",
        "carregada",
        "em_transito",
        "entregue",
        "confirmada",
        "cancelada",
      ],
      motorista_tier: ["inicial", "intermedio", "avancado"],
    },
  },
} as const
