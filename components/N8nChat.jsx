@'
"use client";
import { useEffect } from "react";

/**
 * Lightweight n8n chat widget mounting.
 * Adds chatId + target so the input box appears and binds to the page.
 */
export default function N8nChat() {
  useEffect(() => {
    let cleanup;

    (async () => {
      const { createChat } = await import("@n8n/chat");

      cleanup = createChat({
        // ✅ СМЕНИ с твоя реален публичен чат webhook URL от n8n
        webhookUrl: "https://n8n.srv925690.hstgr.cloud/webhook/62f64574-348c-4cdd-b048-201056022ef8/chat",

        // важно e да има chatId (уникално име за твоя сайт)
        chatId: "omninex-chat",

        // къде да се закачи widget-ът (в края на body)
        target: document.body,
      });
    })();

    // опит за чисто отделяне при unmount
    return () => {
      try { typeof cleanup === "function" && cleanup(); } catch {}
    };
  }, []);

  return null;
}
'@ | Set-Content -Encoding UTF8 components\N8nChat.jsx
