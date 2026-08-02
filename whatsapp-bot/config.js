import "dotenv/config";

const get = (key) => (process.env[key] ?? "").trim();

export const config = {
  supabaseUrl: get("SUPABASE_URL"),
  supabaseAnonKey: get("SUPABASE_ANON_KEY"),
  supabaseServiceRoleKey: get("SUPABASE_SERVICE_ROLE_KEY"),
  whatsappNumber: get("WHATSAPP_NUMBER"),
  authDir: get("AUTH_DIR") || "auth_info",
  logLevel: get("LOG_LEVEL") || "warn",
  productName: get("PRODUCT_NAME") || "Dr. Rubina Herbal Weight Loss Powder",
  productPrice: get("PRODUCT_PRICE") || "1999",
};
