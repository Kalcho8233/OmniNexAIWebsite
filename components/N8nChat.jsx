"use client";
import { useEffect } from "react";

/**
 * Lightweight n8n chat widget via CDN.
 * Работи изцяло client-side (без SSR конфликти) и показва input полето.
 */
export default function N8nChat() {
  useEffect(() => {
    // 1) Зареждаме CSS (само веднъж)
    const cssId = "n8n-chat-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // 2) Зареждаме chat bundle и инициализираме виджета
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://n8n.srv925690.hstgr.cloud/webhook/62f64574-348c-4cdd-b048-201056022ef8/chat',
        chatId: 'omninex-chat',
        target: document.body,
        defaultOpen: false,
        position: 'bottom-right',
        zIndex: 2147483000
      });
    `;
    document.body.appendChild(script);

    // Cleanup при unmount
    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return null;
}
