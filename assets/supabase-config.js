/* ============================================================
   ANA TERRA: CRONICAS DO PAMPA
   Configuracao de conexao com o Supabase

   INSTRUCOES:
   1. Crie um projeto gratuito em https://supabase.com
   2. Vá em Project Settings > API
   3. Copie a "Project URL" e cole em SUPABASE_URL abaixo
   4. Copie a chave "anon public" e cole em SUPABASE_ANON_KEY abaixo
   5. Execute o script sql/setup.sql no SQL Editor do Supabase
      antes de usar o site

   Veja o README.md para o passo a passo completo.
   ============================================================ */

const SUPABASE_URL = "SUA_URL_DO_PROJETO_AQUI";
const SUPABASE_ANON_KEY = "SUA_CHAVE_ANON_AQUI";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
