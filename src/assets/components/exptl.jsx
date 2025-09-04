// ===== Experience Timeline
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
  );
}

function Card({ children }) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-zinc-900">
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
    offset: ["start 100px", "end end"],
  });
  const progress = useTransform(scrollYProgress, [1, 0], [1, 0]);

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
          bg-zinc-700/30 rounded-full"
        />

        {/* Progress line */}
        <motion.div
          style={{ scaleY: progress }}
          className="origin-top absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 
                     bg-gradient-to-b from-pink-500 via-violet-500 to-cyan-400 
                     shadow-[0_0_20px_rgba(236,72,153,0.6)] rounded-full"
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
                <div
                  className="mt-1 font-bold text-xl 
                  bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 
                  bg-clip-text text-transparent"
                >
                  {it.title}
                </div>
                <p className="mt-3 text-sm text-zinc-200">{it.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background particles */}
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

export default Experience;