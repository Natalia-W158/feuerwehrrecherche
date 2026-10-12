/* =====================================================================
   Einstellungen der Webseiten (Assistent_SAM.html und verwaltung.html)
   Hier einmalig die eigenen Werte eintragen. Beim Austausch der Seiten
   bleibt diese Datei unverändert.
   ===================================================================== */
const CONFIG = {
  // Project URL aus Supabase (Connect bzw. Settings, Data API)
  SUPABASE_URL: 'https://jphqvzkbcejnhxztfepx.supabase.co',
  // Publishable key (oder anon-Schlüssel). NIEMALS den secret/service_role-Schlüssel eintragen.
  SUPABASE_KEY: 'sb_publishable_9OuCd24sJyR1tgu_C2O2SQ_A8-KSxn3',
  // Production-Adresse der n8n-Webhooks, ohne Schrägstrich am Ende und ohne Pfad,
  // z. B. https://meinworkspace.app.n8n.cloud/webhook
  WEBHOOK_BASE: 'https://supercamp.app.n8n.cloud/webhook',
  // Größtes erlaubtes Upload-Volumen in MB (n8n Cloud erlaubt 16 MB je Anfrage)
  // Komplette Production-URL aus dem Chat Trigger in n8n
  CHAT_URL: 'https://supercamp.app.n8n.cloud/webhook/5c8f6d04-39d6-4928-85c6-f93888215d54/chat',
  MAX_DATEI_MB: 15,
  // Chat: längste Frage in Zeichen (muss zum Workflow passen) und Wartezeit
  MAX_ZEICHEN: 1000,
  TIMEOUT_SEKUNDEN: 120
};
