"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-backgroundLight px-6 py-4 border-b border-lightGray shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-accentText tracking-widest">OmniNex</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base text-accentText font-medium">
          <Link href="/" className="hover:text-neonBlue transition underline-offset-4">Home</Link>
          <Link href="/pricing" className="hover:text-neonBlue transition underline-offset-4">Pricing</Link>
          <Link href="/about" className="hover:text-neonBlue transition underline-offset-4">About Us</Link>
          <a href="/#contact" className="hover:text-neonBlue transition underline-offset-4">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-accentText focus:outline-none transition">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 text-base text-accentText font-medium">
          <Link href="/" onClick={closeMenu} className="hover:text-neonBlue transition">Home</Link>
          <Link href="/pricing" onClick={closeMenu} className="hover:text-neonBlue transition">Pricing</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-neonBlue transition">About Us</Link>
          <a href="/#contact" onClick={closeMenu} className="hover:text-neonBlue transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
