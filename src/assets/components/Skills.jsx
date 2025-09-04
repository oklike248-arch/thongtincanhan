// src/components/Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// React icons
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql } from "react-icons/si";

function Skills() {
  // Danh sách skill
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

  // Thanh progress
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

  // Thẻ skill card
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
    <section id="skills" className="min-h-screen py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-indigo-500">Kỹ năng</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2">
            Tôi sử dụng hằng ngày
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>

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
    </section>
  );
}

export default Skills;
