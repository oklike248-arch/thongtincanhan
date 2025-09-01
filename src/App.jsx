import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, className: "from-sky-400 to-sky-600" },
  { name: "Next.js", icon: SiNextdotjs, className: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: SiTypescript, className: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: SiNodedotjs, className: "from-green-500 to-green-700" },
  { name: "TailwindCSS", icon: SiTailwindcss, className: "from-cyan-400 to-cyan-600" },
  { name: "PostgreSQL", icon: SiPostgresql, className: "from-indigo-500 to-indigo-700" },
];



// ===== Helper: smooth scroll to id
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// ===== Theme toggle with localStorage
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

// ===== Badge
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm border-zinc-200/60 bg-white/60 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
    {children}
  </span>
);

// ===== Card
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border shadow-sm border-zinc-200 bg-white/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/70 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mb-8 text-center">
    {eyebrow && <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{eyebrow}</p>}
    <h2 className="mt-1 text-2xl font-semibold sm:text-3xl text-zinc-900 dark:text-zinc-100">{title}</h2>
    {desc && <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{desc}</p>}
  </div>
);

// ===== Navbar
function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-pink-900/70"
      : "bg-gradient-to-r from-cyan-400/80 via-pink-400/80 to-orange-400/80";

  const textGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500"
      : "bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500";

  const safeToggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl shadow-lg ${bgGradient}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`h-11 w-11 rounded-full overflow-hidden ring-2 cursor-pointer transition 
                ${theme === "dark" ? "ring-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]" : "ring-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"}`}
            >
              <img src="./public/ava.jpg" alt="avatar" className="object-cover" />
            </div>
            <span
              className={`font-extrabold text-lg tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.7)] ${textGradient}`}
            >
              NekoTheDev
            </span>
          </div>

          {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToId(l.id)}
                  className={`cursor-pointer relative text-sm font-semibold transition-all duration-300 ease-in-out
                    ${theme === "dark" ? "text-white/80" : "text-black/80"}
                     hover:bg-clip-text hover:text-transparent
                    ${
                     theme === "dark"
                        ? "hover:bg-gradient-to-r hover:from-cyan-300 hover:via-fuchsia-400 hover:to-purple-500"
                        : "hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                    after:rounded-full after:transition-all after:duration-500
                    ${
                      theme === "dark"
                        ? "after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 hover:after:w-full"
                        : "after:bg-gradient-to-r after:from-pink-500 after:to-orange-500 hover:after:w-full"
                    }
                  `}
                >
                  {l.name}
                </button>
              ))}
              

          {/* Theme toggle */}
          <button
            onClick={safeToggle}
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
              onClick={safeToggle}
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
        <div className="md:hidden border-t border-white/20 animate-slide-down bg-black/30 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setOpen(false);
                  (l.id);
                }}
                className="cursor-pointer w-full rounded-xl px-3 py-2 text-left text-white/90 
                hover:bg-white/10 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
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

// ===== Hero
function Hero() {
  // Danh sách skill
  const skills = [
    {
      name: "React",
      icon: <SiReact size={28} />,
      className:
        "from-blue-400 to-cyan-400 shadow-[0_6px_18px_rgba(59,130,246,0.12)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={28} />,
      className:
        "from-gray-800 to-gray-600 shadow-[0_6px_18px_rgba(107,114,128,0.08)] hover:shadow-[0_0_30px_rgba(107,114,128,0.18)]",
    },
    {
      name: "TS",
      icon: <SiTypescript size={28} />,
      className:
        "from-blue-500 to-blue-600 shadow-[0_6px_18px_rgba(37,99,235,0.12)] hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={28} />,
      className:
        "from-green-500 to-green-600 shadow-[0_6px_18px_rgba(34,197,94,0.12)] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={28} />,
      className:
        "from-cyan-400 to-blue-400 shadow-[0_6px_18px_rgba(6,182,212,0.10)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    },
    {
      name: "Postgres",
      icon: <SiPostgresql size={28} />,
      className:
        "from-indigo-600 to-blue-700 shadow-[0_6px_18px_rgba(79,70,229,0.10)] hover:shadow-[0_0_30px_rgba(79,70,229,0.25)]",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full blur-3xl
                     bg-gradient-to-br from-indigo-400/30 via-sky-300/30 to-emerald-300/30
                     dark:from-indigo-600/20 dark:via-sky-600/20 dark:to-emerald-600/20"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: text + buttons + skills */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full 
                            border border-zinc-200 dark:border-zinc-700 
                          bg-zinc-50 dark:bg-zinc-900 
                            text-xs font-semibold text-zinc-700 dark:text-zinc-200 
                            shadow-sm select-none">
                              <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                        Open to work • Full-Stack
            </div>

            {/* Title */}
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50">
              Xin chào, tôi là{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent animate-text-gradient">
                Minh Ngọc
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Lập trình viên web chuyên React, Next.js, Node.js. Tôi xây dựng sản phẩm nhanh, gọn và đẹp.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center 
                           rounded-2xl px-6 py-3 font-semibold text-white
                           bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                           transition-all duration-300 hover:-translate-y-1 hover:brightness-110
                           shadow-[0_0_15px_rgba(236,72,153,0.5)]
                           hover:shadow-[0_0_35px_rgba(236,72,153,0.9)]"
              >
                🚀 Xem dự án
              </a>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center 
                           rounded-2xl px-6 py-3 font-semibold text-white
                           bg-gradient-to-r from-green-400 via-teal-400 to-blue-500
                           transition-all duration-300 hover:-translate-y-1 hover:brightness-110
                           shadow-[0_0_15px_rgba(34,197,94,0.5)]
                           hover:shadow-[0_0_35px_rgba(34,197,94,0.9)]"
              >
                📩 Liên hệ ngay
              </a>

              <a
                href="/cv.pdf"
                className="relative inline-flex items-center justify-center 
                           rounded-2xl px-6 py-3 font-semibold text-white
                           bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                           transition-all duration-300 hover:-translate-y-1 hover:brightness-110
                           shadow-[0_0_15px_rgba(250,204,21,0.5)]
                           hover:shadow-[0_0_35px_rgba(250,204,21,0.9)]"
              >
                📄 Tải CV
              </a>
            </div>

            {/* Skills */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`relative group flex flex-col items-center justify-center rounded-2xl p-6 text-white cursor-default transition-all duration-300 bg-gradient-to-r ${skill.className} hover:scale-110`}
                >
                  {/* Hiệu ứng glow viền */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Nội dung */}
                  <div className="relative flex flex-col items-center">
                    <div className="text-4xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="mt-2 text-sm font-semibold">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex justify-center pl-6">
            <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow hover:[animation-play-state:paused]">
              <div className="w-36 h-36 sm:w-80 sm:h-80 lg:w-110 lg:h-110 rounded-full overflow-hidden bg-white dark:bg-zinc-900 shadow-xl">
                <img
                  src="/cafe.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
          
// ===== About
import { 
  FiZap, FiLink, FiUploadCloud, FiCheckCircle, FiCloud, 
  FiBriefcase, FiMapPin, FiMonitor, FiGlobe 
} from "react-icons/fi";

function About() {
  // Định nghĩa icon riêng để dễ tái sử dụng
  const icons = {
    zap: <FiZap className="text-amber-300" />,
    link: <FiLink className="text-sky-300" />,
    cloudUpload: <FiUploadCloud className="text-rose-300" />,
    check: <FiCheckCircle className="text-emerald-300" />,
    cloud: <FiCloud className="text-violet-300" />,
  };

  const skills = [
    { name: "SPA/SSR", icon: icons.zap, color: "from-yellow-400 to-amber-500" },
    { name: "REST/GraphQL", icon: icons.link, color: "from-blue-400 to-cyan-500" },
    { name: "CI/CD", icon: icons.cloudUpload, color: "from-pink-400 to-rose-500" },
    { name: "Testing", icon: icons.check, color: "from-green-400 to-emerald-500" },
    { name: "Cloud", icon: icons.cloud, color: "from-indigo-400 to-purple-500" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase text-indigo-500">Giới thiệu</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-2">
          Về tôi
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3">
          Tập trung vào trải nghiệm, hiệu năng và khả năng mở rộng. 
          Đam mê hệ sinh thái JS/TS, từ prototype đến sản phẩm thực tế.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Left Card */}
        <div className="md:col-span-2 rounded-2xl shadow-md bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-6">
          <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Tôi làm gì?
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
            Tôi tập trung vào <span className="font-medium">trải nghiệm người dùng</span>, 
            hiệu năng và khả năng mở rộng. Thích làm việc với hệ sinh thái JS/TS, 
            xây dựng từ prototype đến sản phẩm chạy thật.
          </p>

          {/* Badge List */}
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s.name}
                className={`inline-flex items-center gap-2 rounded-full 
                bg-gradient-to-r ${s.color} text-white shadow-sm 
                text-sm font-medium px-3 py-1.5`}
              >
                {s.icon} {s.name}
              </span>
            ))}
          </div>
          {/* Tagline */}
          <p className="mt-8 text-indigo-500 dark:text-indigo-400 italic font-medium">
            "Luôn tìm cách kết hợp thẩm mỹ với hiệu năng."
          </p>
        </div>

        {/* Right Card */}
        <div className="rounded-2xl shadow-md bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-6">
          <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Thông tin nhanh
          </h3>
          <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 text-sm">
            <li className="flex items-center gap-2">
              <FiBriefcase className="text-amber-400" /> 3+ năm làm web
            </li>
            <li className="flex items-center gap-2">
              <FiMonitor className="text-violet-400" /> Làm tự do & nhận dự án
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-fuchsia-400" /> Đang ở Việt Nam
            </li>
            <li className="flex items-center gap-2">
              <FiGlobe className="text-emerald-400" /> Ưu tiên remote/hybrid
            </li>
          </ul>

          {/* Tagline */}
          <p className="mt-5 text-center text-indigo-500 dark:text-indigo-400 italic font-medium">
            "Code sạch, sản phẩm tinh gọn, trải nghiệm mượt mà."
          </p>
        </div>
      </div>
    </section>
  );
}









import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// React icons
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";

function Skills() {
  // Skills data
  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-sky-500" />, color: "from-sky-400 to-sky-600" },
    { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-white" />, color: "from-zinc-300 to-zinc-500" },
    { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-600" />, color: "from-blue-400 to-blue-600" },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" />, color: "from-green-400 to-green-600" },
    { name: "TailwindCSS", level: 90, icon: <SiTailwindcss className="text-cyan-500" />, color: "from-cyan-400 to-cyan-600" },
    { name: "PostgreSQL", level: 75, icon: <SiPostgresql className="text-blue-700" />, color: "from-blue-500 to-indigo-700" },
    { name: "Docker", level: 70, icon: <FaDocker className="text-blue-500" />, color: "from-sky-400 to-blue-600" },
    { name: "AWS", level: 65, icon: <FaAws className="text-orange-500" />, color: "from-yellow-400 to-orange-600" },
  ];

  // Sub component
  const ProgressBar = ({ level, inView, color }) => (
    <div className="relative w-full h-2 rounded-full bg-zinc-700 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
      </motion.div>
    </div>
  );

  const SkillCard = ({ skill, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="rounded-xl p-5 shadow-md bg-zinc-900 hover:shadow-lg hover:scale-[1.02] transition-transform"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {skill.icon}
            <h4 className="font-medium text-white">{skill.name}</h4>
          </div>
          <span className="text-xs text-zinc-400">{skill.level}%</span>
        </div>
        <ProgressBar level={skill.level} inView={inView} color={skill.color} />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black py-20">
      {/* Section Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-1 py-20 pb-32">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-indigo-400">Kỹ năng</p>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
            Tôi sử dụng hằng ngày
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </section>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-[shimmer_1.5s_infinite] {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}


// ===== Projects

function Projects() {
  const projects = [
    {
      title: "Wild Lotus Travel – Booking Portal",
      desc: "Website du lịch với tìm kiếm tour, giỏ hàng và thanh toán.",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      demo: "#",
      code: "#",
    },
    {
      title: "Shopee Profit Tool",
      desc: "Công cụ tính lợi nhuận & phí sàn tự động.",
      tags: ["React", "TypeScript"],
      demo: "#",
      code: "#",
    },
    {
      title: "Photo Presets Hub",
      desc: "Landing page bán preset Lightroom với CMS.",
      tags: ["Next.js", "Tailwind"],
      demo: "#",
      code: "#",
    },
  ];

  // 🎨 Màu riêng cho từng tag
  const tagColors = {
    "React": "from-cyan-500 to-blue-500 text-white",
    "TypeScript": "from-sky-500 to-indigo-500 text-white",
    "Next.js": "from-zinc-900 to-zinc-700 text-white",
    "Tailwind": "from-teal-400 to-cyan-500 text-white",
    "PostgreSQL": "from-blue-600 to-sky-700 text-white",
    "Stripe": "from-purple-500 to-indigo-500 text-white",
    "JavaScript": "from-yellow-400 to-amber-500 text-black",
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-indigo-500 font-medium tracking-wide uppercase">
          Dự án
        </p>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Một vài sản phẩm nổi bật
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-zinc-50/80 to-white/90 dark:from-zinc-900/80 dark:to-zinc-950/90 border border-zinc-200 dark:border-zinc-700 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] transition-all duration-500"
          >
            {/* Fake thumbnail */}
            <motion.div
              className="aspect-video w-full rounded-xl mb-5 bg-gradient-to-tr from-pink-400/40 via-purple-400/30 to-indigo-400/40 dark:from-pink-600/30 dark:via-purple-600/20 dark:to-indigo-600/30"
              whileHover={{ scale: 1.05 }}
            />

            {/* Title & Desc */}
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${tagColors[t] || "from-gray-400 to-gray-500 text-white"} shadow-md`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <motion.a
                href={p.demo}
                whileHover={{ scale: 1.07 }}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all"
              >
                🚀 Demo
              </motion.a>
              <motion.a
                href={p.code}
                whileHover={{ scale: 1.07 }}
                className="rounded-xl px-4 py-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                💻 Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// ===== Experience Timeline (Modern)
"use client";
import { useScroll, useTransform } from "framer-motion";
function Experience() {
  const items = [
    {
      time: "2023—2025",
      title: "Full-stack Developer • Freelancer",
      desc: "Xây dựng sản phẩm web cho khách SMB: du lịch, thương mại điện tử, nội dung.",
    },
    {
      time: "2021—2023",
      title: "Frontend Developer • StackForge Studio",
      desc: "Phát triển UI/UX, tối ưu hiệu năng Lighthouse và SEO cho landing page.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"],
  });

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-20 relative"
      ref={containerRef}
    >
      <SectionTitle eyebrow="Kinh nghiệm" title="Hành trình làm việc" />

      <div className="relative">
        {/* Timeline base line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 
          bg-zinc-700/30 rounded-full" />

        {/* Progress line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 
            bg-gradient-to-b from-pink-500 via-violet-500 to-cyan-400 
            shadow-[0_0_20px_rgba(236,72,153,0.6)] rounded-full animate-gradient-xy"
        />

        {/* Timeline items */}
        <div className="space-y-20 relative z-10">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-center ${
                idx % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"
              }`}
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute left-1/2 top-5 flex items-center justify-center 
                  h-10 w-10 -translate-x-1/2 rounded-full 
                  bg-gradient-to-tr from-fuchsia-500 to-cyan-400 
                  shadow-[0_0_25px_rgba(139,92,246,0.7)]"
              >
                {/* Icon (ví dụ: briefcase) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-7 8h8a2 2 0 002-2V8a2 2 0 00-2-2h-2V4H9v2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              {/* Card */}
              <Card
                className="backdrop-blur-xl bg-white/10 dark:bg-zinc-900/40 
                  border border-white/10 
                  shadow-[0_0_25px_rgba(236,72,153,0.15)] 
                  hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] 
                  hover:scale-105 hover:rotate-1 transition-all duration-500 
                  w-[calc(50%-2rem)] p-6 rounded-2xl"
              >
                <div className="text-xs uppercase tracking-wider text-pink-400">
                  {it.time}
                </div>
                <div className="mt-1 font-bold text-xl 
                  bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 
                  bg-clip-text text-transparent">
                  {it.title}
                </div>
                <p className="mt-3 text-sm text-zinc-200">{it.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background particles (parallax glow) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full 
            bg-fuchsia-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full 
            bg-cyan-400/10 blur-3xl"
        />
      </div>
    </section>
  );
}



// ===== Contact
"use client";

import { Mail, Send, MessageCircle } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const msg = data.get("message");

    window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(
      "Liên hệ từ " + name
    )}&body=${encodeURIComponent(msg + "\n\n" + email)}`;
  };

  // variants cho animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-cyan-400/20 blur-3xl" />

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="backdrop-blur-xl bg-white/40 dark:bg-zinc-900/40 border border-white/20 shadow-2xl rounded-3xl p-10">
          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-8 md:grid-cols-2"
            variants={container}
          >
            {/* Họ tên */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Họ tên
              </label>
              <input
                name="name"
                required
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-pink-400/40 outline-none transition"
                placeholder="Nguyễn Văn A"
              />
            </motion.div>

            {/* Email */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-purple-400/40 outline-none transition"
                placeholder="you@mail.com"
              />
            </motion.div>

            {/* Nội dung */}
            <motion.div className="md:col-span-2 grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Nội dung
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-cyan-400/40 outline-none transition"
                placeholder="Chào bạn, mình muốn làm website..."
              />
            </motion.div>

            {/* Button */}
            <motion.div
              className="md:col-span-2 flex justify-center"
              variants={item}
            >
              <button
                type="submit"
                className="group flex items-center gap-2 rounded-2xl px-8 py-3 text-sm font-medium 
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
                text-white shadow-lg shadow-pink-500/30 
                hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Gửi lời nhắn
              </button>
            </motion.div>
          </motion.form>

          {/* Social links */}
          <motion.div
            className="mt-10 flex justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
            variants={container}
          >
            <motion.a
              href="https://t.me/"
              className="flex items-center gap-2 hover:text-pink-500 transition"
              variants={item}
            >
              <MessageCircle className="w-4 h-4" /> Telegram
            </motion.a>
            <motion.a
              href="https://m.me/"
              className="flex items-center gap-2 hover:text-purple-500 transition"
              variants={item}
            >
              <Mail className="w-4 h-4" /> Messenger
            </motion.a>
            <motion.a
              href="https://zalo.me/"
              className="flex items-center gap-2 hover:text-cyan-500 transition"
              variants={item}
            >
              <MessageCircle className="w-4 h-4" /> Zalo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


// ===== Footer
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-zinc-200 dark:border-zinc-800 relative"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl opacity-70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Copyright */}
        <div className="font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          © {new Date().getFullYear()} NekoTheDev. All rights reserved.
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}




export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
