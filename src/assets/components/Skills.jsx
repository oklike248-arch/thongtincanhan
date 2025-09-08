import { motion } from "framer-motion";
// React icons
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaJava 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiPostgresql, SiMongodb, SiGraphql 
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-600" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-28 bg-cream dark:bg-blackpure 
                 text-[#111827] dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-emerald-500">Kỹ năng</p>
          <h2 className="text-3xl font-bold text-emerald-500 tracking-tight mt-2 font-display">
            Công nghệ tôi sử dụng
          </h2>
        </div>

        {/* Grid hiển thị skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center 
                         p-5 rounded-2xl shadow-md 
                         bg-white/60 dark:bg-zinc-900/60
                         border border-zinc-200 dark:border-zinc-800
                         backdrop-blur-sm hover:scale-105
                         transition-transform"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h4 className="font-medium text-center font-display">{s.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
