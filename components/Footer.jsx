export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200 bg-white">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-900 font-medium">OmniNex</span>. All rights reserved.
      </p>
    </footer>
  );
}
