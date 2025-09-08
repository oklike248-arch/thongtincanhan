// Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SECTION_IDS = ["home", "about", "skills", "projects", "experience", "contact"];
const HEADER_OFFSET = 80;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const rafRef = useRef(null);

  const getSections = () =>
    SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const updateActiveByViewport = () => {
    const sections = getSections();
    if (sections.length === 0) return;

    const hero = document.getElementById("home");
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;

      // 👇 Nếu trong vùng hero thì active = home
      if (
        window.scrollY + HEADER_OFFSET >= top &&
        window.scrollY < bottom - HEADER_OFFSET
      ) {
        if (active !== "home") setActive("home");
        return;
      }
    }

    // --- Nếu không ở hero thì chọn section gần giữa viewport ---
    const viewportCenter = window.innerHeight / 2;
    let nearestId = sections[0].id;
    let minDistance = Infinity;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      const secCenter = rect.top + rect.height / 2;
      const dist = Math.abs(secCenter - viewportCenter);
      if (dist < minDistance) {
        minDistance = dist;
        nearestId = sec.id;
      }
    }
    if (nearestId && nearestId !== active) {
      setActive(nearestId);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateActiveByViewport();
        rafRef.current = null;
      });
    };
    updateActiveByViewport();
    const t = setTimeout(updateActiveByViewport, 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveByViewport);
    window.addEventListener("load", updateActiveByViewport);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveByViewport);
      window.removeEventListener("load", updateActiveByViewport);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.06, rotate: 4 }}
              onClick={() => scrollToId("home")}
              className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-emerald-500 cursor-pointer shadow-lg"
            >
              <img src="/nice.jpg" alt="logo" className="object-cover w-full h-full" />
            </motion.div>
            <button
              onClick={() => scrollToId("home")}
              className="font-extrabold text-lg tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 focus:outline-none"
            >
              NekoTheDev
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {SECTION_IDS.map((id) => {
              const name = id.charAt(0).toUpperCase() + id.slice(1);
              return (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToId(id)}
                  className={`group relative text-sm font-medium rounded focus:outline-none transition-colors ${
                    active === id
                      ? "text-emerald-600"
                      : "text-zinc-700 hover:text-emerald-500"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${
                      active === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.button>
              );
            })}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow hover:brightness-110 hover:-translate-y-0.5 transition"
              aria-label="Tải CV"
            >
              📄 CV
            </a>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-60 inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-zinc-900/60 dark:bg-zinc-100/10 text-zinc-100 dark:text-zinc-100"
            >
              {!open ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full z-50 border-t border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {SECTION_IDS.map((id) => {
              const name = id.charAt(0).toUpperCase() + id.slice(1);
              return (
                <button
                  key={id}
                  onClick={() => {
                    setOpen(false);
                    scrollToId(id);
                  }}
                  className={`group relative w-full text-left rounded-xl px-3 py-2 transition-colors ${
                    active === id
                      ? "text-emerald-600"
                      : "text-zinc-800 hover:text-emerald-500 dark:text-zinc-100"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 ${
                      active === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow hover:brightness-110 hover:-translate-y-0.5 transition"
            >
              📄 CV
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
