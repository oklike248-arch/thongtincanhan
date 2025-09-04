import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

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
    <section id="home" className="relative overflow-hidden scroll-mt-24 py-15">
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
          <div className="flex justify-center">
            <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow hover:[animation-play-state:paused]">
              <div className="w-36 h-36 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden bg-white dark:bg-zinc-900 shadow-xl">
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

export default Hero;
