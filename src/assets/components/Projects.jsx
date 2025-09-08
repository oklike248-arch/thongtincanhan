// src/components/Projects.jsx
import { motion } from "framer-motion";

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

  // 🎨 Màu riêng cho từng tag (có dark mode)
  const tagColors = {
    React: "from-cyan-500 to-blue-500 text-white",
    TypeScript: "from-sky-500 to-indigo-500 text-white",
    "Next.js": "from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-black",
    Tailwind: "from-teal-400 to-cyan-500 text-white",
    PostgreSQL: "from-blue-600 to-sky-700 text-white",
    Stripe: "from-purple-500 to-indigo-500 text-white",
    JavaScript: "from-yellow-400 to-amber-500 text-black",
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-emerald-500 font-medium tracking-wide uppercase">
          Dự án
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-display bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
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
            className="flex flex-col p-6 rounded-2xl 
              bg-gradient-to-br from-white to-zinc-50 
              dark:from-zinc-900/80 dark:to-zinc-950/90 
              border border-zinc-200 dark:border-zinc-700 
              shadow-xl hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.55)] 
              transition-all duration-500"
          >
            {/* Thumbnail */}
            <motion.div
              className="aspect-video w-full rounded-xl mb-5 overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/pro.jpg" alt={p.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </motion.div>

            {/* Title & Desc */}
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-display">
              {p.title}
            </h3>
            <p className="mt-2 text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${
                    tagColors[t] || "from-gray-400 to-gray-500 text-white"
                  } shadow-md`}
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
                className="rounded-xl px-4 py-2 text-sm font-medium 
                  bg-gradient-to-r from-emerald-500 to-teal-600 
                  text-white shadow-md hover:shadow-lg transition-all"
              >
                🚀 Demo
              </motion.a>
              <motion.a
                href={p.code}
                whileHover={{ scale: 1.07 }}
                className="rounded-xl px-4 py-2 text-sm font-medium 
                  border border-zinc-300 dark:border-zinc-700 
                  text-zinc-900 dark:text-zinc-200 
                  hover:bg-emerald-50 dark:hover:bg-emerald-900/30 
                  transition-colors"
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

export default Projects;
