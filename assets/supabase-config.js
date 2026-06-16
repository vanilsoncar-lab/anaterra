/* ============================================================
   O INVENTARIANTE DO TEMPO: A JORNADA DE ANA TERRA
   Configuracao de conexao com o Supabase
   Versão 5.0
   ============================================================ */

const SUPABASE_URL = "https://betfuvirdfikkhcuyweg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldGZ1dmlyZGZpa2toY3V5d2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NTY2MjMsImV4cCI6MjA5NzEzMjYyM30.ymiJTQ3mQDYCdu7ShW4_7x2yH95wyS-L30uxzlH9Fxw";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
