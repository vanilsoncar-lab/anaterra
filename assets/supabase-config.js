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

const SUPABASE_URL = "https://betfuvirdfikkhcuyweg.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldGZ1dmlyZGZpa2toY3V5d2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NTY2MjMsImV4cCI6MjA5NzEzMjYyM30.ymiJTQ3mQDYCdu7ShW4_7x2yH95wyS-L30uxzlH9Fxw";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);