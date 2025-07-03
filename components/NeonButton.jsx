'use client';
import Link from 'next/link';

export default function NeonButton({ text, href = "#", ariaLabel, disabled = false }) {
  const isExternal = href.startsWith('http');

  const baseClasses =
    "inline-block !no-underline bg-neonBlue text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#00ffff] transition cursor-pointer";
  const disabledClasses = "opacity-60 pointer-events-none";

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${disabled ? disabledClasses : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || text}
        tabIndex={disabled ? -1 : 0}
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} tabIndex={disabled ? -1 : 0} aria-label={ariaLabel || text}>
      <span className={`${baseClasses} ${disabled ? disabledClasses : ""}`}>
        {text}
      </span>
    </Link>
  );
}
