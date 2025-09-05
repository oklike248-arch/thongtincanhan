import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header
      className={`navbar-blur ${
        theme === "dark" ? "navbar-gradient-dark" : "navbar-gradient-light"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="h-11 w-11 rounded-full overflow-hidden ring-2 cursor-pointer transition 
                         ring-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]
                         dark:ring-purple-500 dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            >
              <img src="/ava.jpg" alt="logo" className="object-cover w-full h-full" />
            </div>
            <span
              className="font-extrabold text-lg tracking-wide bg-clip-text text-transparent 
                         bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500
                         dark:from-cyan-400 dark:via-fuchsia-400 dark:to-purple-500"
            >
              NekoTheDev
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)} className="nav-link">
                {l.name}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="cursor-pointer rounded-full p-2 bg-white/10 border border-white/20 hover:bg-white/20 
                         shadow-[0_0_10px_rgba(236,72,153,0.5)] hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile nav toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="cursor-pointer rounded-full p-2 bg-white/10 border border-white/20 hover:bg-white/20 
                         shadow-[0_0_10px_rgba(34,211,238,0.6)] hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="cursor-pointer rounded-lg p-2 bg-white/10 border border-white/20 hover:bg-white/20 
                         shadow-[0_0_10px_rgba(147,51,234,0.6)] hover:shadow-[0_0_15px_rgba(147,51,234,0.8)] transition"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/20 animate-slide-down 
                        bg-white/30 dark:bg-black/30 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setOpen(false);
                  scrollToId(l.id);
                }}
                className="cursor-pointer w-full rounded-xl px-3 py-2 text-left 
                           text-black/90 dark:text-white/90
                           hover:bg-white/10 hover:text-cyan-300 
                           hover:shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
