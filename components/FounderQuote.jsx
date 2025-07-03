import React from 'react';

export default function FounderQuote() {
  return (
    <section className="py-16 px-6 md:px-20 bg-backgroundDark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl md:text-2xl italic leading-relaxed border-l-4 border-purple-500 pl-4">
          “OmniNex is your second brain — built to think fast, never sleep, and grow with your ambition.”
        </blockquote>
        <p className="mt-4 text-sm text-gray-400">— Nikola Nikolov, CEO of OmniNex</p>
      </div>
    </section>
  );
}
