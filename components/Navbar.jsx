"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] px-6 py-4 flex justify-between items-center border-b border-[#1f1f1f]">
      <h1 className="text-xl font-bold text-white">OmniNex</h1>
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
    </nav>
  );
}
