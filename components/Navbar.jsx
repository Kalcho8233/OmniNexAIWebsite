"use client";
export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-[#0a0a0a] px-6 py-4 flex justify-between items-center border-b border-[#1f1f1f]"
      aria-label="Main navigation"
    >
      <h1 className="text-xl font-bold text-white tracking-widest">OmniNex</h1>
      <div className="space-x-6 text-sm text-gray-300 font-medium">
        <a href="/" className="hover:text-neonBlue transition underline-offset-4">Home</a>
        <a href="#contact" className="hover:text-neonBlue transition underline-offset-4">Contact</a>
      </div>
    </nav>
  );
}
