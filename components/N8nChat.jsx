"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: "https://n8n.srv925690.hstgr.cloud/webhook/62f64574-348c-4cdd-b048-201056022ef8/chat", // смени с реалния URL от n8n
      });
    });
  }, []);

  return null; // widget-а сам се добавя, не ни трябва HTML
}
