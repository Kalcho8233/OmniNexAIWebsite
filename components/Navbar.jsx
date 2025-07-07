"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-backgroundLight px-6 py-4 flex justify-between items-center border-b border-lightGray shadow-sm"
      aria-label="Main navigation"
    >
      <h1 className="text-xl font-bold text-accentText tracking-widest">OmniNex</h1>
      <div className="space-x-8 text-base text-accentText font-medium">
        <Link href="/" className="hover:text-neonBlue transition underline-offset-4">Home</Link>
        <Link href="/pricing" className="hover:text-neonBlue transition underline-offset-4">Pricing</Link>
        <Link href="/about" className="hover:text-neonBlue transition underline-offset-4">About Us</Link>
        <a href="/#contact" className="hover:text-neonBlue transition underline-offset-4">Contact</a>
      </div>
    </nav>
  );
}
