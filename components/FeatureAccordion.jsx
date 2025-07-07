"use client";
import { useState } from "react";

export default function FeatureAccordion({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-0 md:px-0 py-0">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-6 bg-white text-black rounded-lg border border-neonPurple hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">{label}</span>
            <span>{open ? "−" : "+"}</span>
          </div>
        </button>

        {open && (
          <div className="mt-4 p-4 text-gray-800 text-base leading-relaxed border-t border-neonPurple">
            {typeof children === "string" ? <p>{children}</p> : children}
          </div>
        )}
      </div>
    </section>
  );
}
