export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <p>
        © {new Date().getFullYear()} <span className="text-white font-medium">OmniNex</span>. All rights reserved.
      </p>
    </footer>
  );
}
