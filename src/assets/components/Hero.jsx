import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { FaAws, FaDocker, FaGithub } from "react-icons/fa";

function Hero() {
  const skills = [
    { icon: <SiReact size={22} />, pos: "top-6 left-[12%]", from: "from-emerald-400", to: "to-green-500" },
    { icon: <SiNextdotjs size={22} />, pos: "top-14 right-[20%]", from: "from-zinc-800", to: "to-zinc-600" },
    { icon: <SiTypescript size={22} />, pos: "top-[45%] left-0", from: "from-blue-500", to: "to-blue-600" },
    { icon: <SiNodedotjs size={22} />, pos: "bottom-[35%] right-0", from: "from-green-500", to: "to-lime-500" },
    { icon: <SiTailwindcss size={22} />, pos: "bottom-10 left-[20%]", from: "from-cyan-400", to: "to-blue-400" },
    { icon: <SiPostgresql size={22} />, pos: "bottom-16 right-[18%]", from: "from-indigo-600", to: "to-blue-700" },
    { icon: <FaAws size={22} />, pos: "top-[28%] right-[5%]", from: "from-yellow-400", to: "to-green-500" },
    { icon: <FaDocker size={22} />, pos: "bottom-[22%] left-[8%]", from: "from-sky-500", to: "to-blue-600" },
    { icon: <FaGithub size={22} />, pos: "top-[60%] right-[10%]", from: "from-zinc-700", to: "to-black" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-28 flex items-center justify-center min-h-screen"
    >
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-28 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full blur-3xl
                     bg-gradient-to-br from-emerald-300/25 via-lime-300/25 to-teal-300/25
                     dark:from-emerald-600/20 dark:via-lime-600/20 dark:to-teal-600/20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center text-center lg:text-left">
          {/* Left: text */}
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full 
                          border border-green-200 dark:border-green-700 
                          bg-green-50 dark:bg-green-900 
                          text-xs font-semibold text-green-700 dark:text-green-200 
                          shadow-sm select-none hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
                          transition-all duration-300"
            >
              <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
              Open to work • Full-Stack
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight font-display">
              <span
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                             bg-clip-text text-transparent animate-text-gradient
                             drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              >
                Xin chào, tôi là
              </span>{" "}
              <span
                className="bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 
                             bg-clip-text text-transparent animate-text-gradient
                             drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              >
                Minh Ngọc
              </span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-zinc-300 font-sans">
              Tôi là lập trình viên Full-stack tập trung vào React, Next.js và Node.js. 
              Tôi thiết kế và phát triển web app nhanh, gọn, tối ưu hiệu năng và trải nghiệm, 
              giúp ý tưởng của bạn thành sản phẩm hoàn chỉnh.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center 
                           rounded-2xl px-7 py-3.5 font-semibold text-white
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
                           rounded-2xl px-7 py-3.5 font-semibold text-white
                           bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500
                           transition-all duration-300 hover:-translate-y-1 hover:brightness-110
                           shadow-[0_0_15px_rgba(34,197,94,0.5)]
                           hover:shadow-[0_0_35px_rgba(34,197,94,0.9)]"
              >
                📩 Liên hệ ngay
              </a>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center 
                           rounded-2xl px-7 py-3.5 font-semibold text-white
                           bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                           transition-all duration-300 hover:-translate-y-1 hover:brightness-110
                           shadow-[0_0_15px_rgba(250,204,21,0.5)]
                           hover:shadow-[0_0_35px_rgba(250,204,21,0.9)]"
              >
                📄 Tải CV
              </a>
            </div>
          </div>

          {/* Right: avatar + floating badges */}
          <div className="relative flex justify-center items-center">
            {/* Avatar floating */}
            <div className="animate-float group">
              <div
                className="rounded-full p-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 
                           transform transition-transform duration-700 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              >
                <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden bg-white dark:bg-zinc-900 shadow-xl">
                  <img
                    src="/nice.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Badges floating */}
            {skills.map((skill, i) => (
              <div key={i} className={`absolute ${skill.pos} animate-bounce-slow hidden lg:block`}>
                <div
                  className={`p-3 rounded-xl text-white shadow-md 
                              bg-gradient-to-r ${skill.from} ${skill.to}
                              transition-all duration-300 hover:scale-110 hover:rotate-6 hover:brightness-125`}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 7s ease-in-out infinite;
        }
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
