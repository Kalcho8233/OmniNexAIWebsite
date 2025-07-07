'use client';
import Link from 'next/link';

export default function NeonButton({ text, href = "#", ariaLabel, disabled = false }) {
  const isExternal = href.startsWith('http');
  const baseClasses =
    "inline-block !no-underline bg-neonPurple text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#00ffff] transition cursor-pointer";
  const disabledClasses = "opacity-60 pointer-events-none";

  const classNames = `${baseClasses} ${disabled ? disabledClasses : ""}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || text}
        className={classNames}
        tabIndex={disabled ? -1 : 0}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel || text}
      tabIndex={disabled ? -1 : 0}
      className={classNames}
    >
      {text}
    </Link>
  );
}
