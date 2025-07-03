export default function NeonButton({ text, link }) {
  return (
    <a
      href={link}
      className="inline-block bg-neonBlue text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#00ffff] transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
