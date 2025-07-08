"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-backgroundLight px-6 py-4 flex justify-between items-center border-b border-lightGray shadow-sm"
      aria-label="Main navigation"
    >
      <h1 className="text-xl font-bold text-accentText tracking-widest">
        OmniNex
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row sm:space-x-8 text-base text-accentText font-medium text-right sm:text-left">
        {/* Row 1 */}
        <div className="flex justify-end space-x-6">
          <Link href="/" className="hover:text-neonBlue transition underline-offset-4">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-neonBlue transition underline-offset-4">
            Pricing
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex justify-end space-x-6 mt-2 sm:mt-0">
          <Link href="/about" className="hover:text-neonBlue transition underline-offset-4">
            About Us
          </Link>
          <a href="/#contact" className="hover:text-neonBlue transition underline-offset-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
