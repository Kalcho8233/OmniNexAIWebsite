// components/N8nChat.jsx
"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // 1) инжектираме CSS (ако не е вече инжектиран)
    const cssId = "n8n-chat-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // 2) зареждаме bundle script и стартираме createChat
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      // 👉 ЗАДЪЛЖИТЕЛНО смени webhookUrl с твоя ПРОДАКШЪН webhook от n8n (Chat Trigger)
      const chat = createChat({
        webhookUrl: 'https://n8n.srv925690.hstgr.cloud/webhook/62f64574-348c-4cdd-b048-201056022ef8/chat',
        chatId: 'omninex-chat',
        target: document.body,           // фиксиран бадж в страницата
        defaultOpen: false,              // кликаш баджа и се отваря
        // UI "сейфти" – високи слоеве, ако нещо го покрива
        zIndex: 2147483000,
        position: 'bottom-right',
      });
    `;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {}
    };
  }, []);

  return null;
}
