export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 text-center relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Futuristic Background (light circuit pattern) */}
      <div
        className="absolute inset-0 bg-[url('/bg-circuits.png')] opacity-5 bg-cover bg-center pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Us</h2>
        <div className="flex justify-center gap-12 mb-8">
          <a
            href="https://calendly.com/nikivldmrv/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/calendar-icon.png"
              alt="Calendly"
              className="w-12 h-12 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nikola-nikolov-79982a290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="w-12 h-12 hover:scale-110 transition-transform"
            />
          </a>
          <a href="mailto:omninex@vinbrothers.com">
            <img
              src="/email-icon.png"
              alt="Email"
              className="w-12 h-12 hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Attribution */}
        <div className="text-xs text-gray-500 space-y-1">
          <div>
            <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">
              Calendar icons created by afif fudin - Flaticon
            </a>
          </div>
          <div>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">
              Linkedin icons created by Laisa Islam Ani - Flaticon
            </a>
          </div>
          <div>
            <a href="https://www.flaticon.com/free-icons/email" title="email icons">
              Email icons created by Noplubery - Flaticon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
