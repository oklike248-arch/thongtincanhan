// ===== Experience Timeline
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function SectionTitle({ title, eyebrow }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <div className="text-sm uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-2">
          {eyebrow}
        </div>
      )}
      <h2
        className="text-3xl font-extrabold 
                   bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 
                   bg-clip-text text-transparent"
      >
        {title}
      </h2>
    </div>
  );
}

// Card component
function Card({ children, className }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md 
        bg-white/70 dark:bg-zinc-900/50
        border border-zinc-200/40 dark:border-white/10
        backdrop-blur-xl transition-all duration-500
        ${className}`}
    >
      {children}
    </div>
  );
}

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
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-20 relative"
      ref={containerRef}
    >
      <SectionTitle eyebrow="Kinh nghiệm" title="Hành trình làm việc" />

      <div className="relative">
        {/* Timeline base line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 
          bg-zinc-300 dark:bg-zinc-700/30 rounded-full"
        />

        {/* Progress line */}
        <motion.div
          style={{ scaleY: progress }}
          className="origin-top absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 
                     bg-gradient-to-b from-pink-500 via-violet-500 to-cyan-400 
                     shadow-[0_0_12px_rgba(236,72,153,0.4)] rounded-full"
        />

        {/* Timeline items */}
        <div className="space-y-20 relative z-10">
          {items.map((it, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{
                  opacity: 0,
                  y: 80,
                  x: isLeft ? -120 : 120,
                  rotateX: -15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                }}
                transition={{ duration: 0.9, delay: idx * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                {/* Marker với tooltip */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ amount: 0.3 }}
                  className="group absolute left-1/2 top-5 flex items-center justify-center 
                    h-10 w-10 -translate-x-1/2 rounded-full 
                    bg-gradient-to-tr from-fuchsia-500 to-cyan-400 
                    shadow-[0_0_25px_rgba(139,92,246,0.6)] cursor-pointer"
                >
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
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                                   px-3 py-1 rounded-md text-xs font-medium 
                                   bg-zinc-800 text-white dark:bg-white dark:text-zinc-900
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {it.time}
                  </span>
                </motion.div>

                {/* Card */}
                <Card
                  className={`hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                    hover:scale-105 hover:rotate-1
                    w-[calc(50%-3rem)]
                    ${isLeft ? "mr-auto" : "ml-auto"}`}
                >
                  <div className="text-xs uppercase tracking-wider text-pink-600 dark:text-pink-400">
                    {it.time}
                  </div>
                  <div
                    className="mt-1 font-bold text-xl 
                    bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 
                    bg-clip-text text-transparent"
                  >
                    {it.title}
                  </div>
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
                    {it.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full 
            bg-fuchsia-400/20 dark:bg-fuchsia-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full 
            bg-cyan-300/20 dark:bg-cyan-400/10 blur-3xl"
        />
      </div>
    </section>
  );
}

export default Experience;
