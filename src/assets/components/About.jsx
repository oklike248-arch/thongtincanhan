// src/components/About.jsx
import { 
  FiZap, FiLink, FiUploadCloud, FiCheckCircle, FiCloud, 
  FiBriefcase, FiMapPin, FiMonitor, FiGlobe 
} from "react-icons/fi";
import { motion } from "framer-motion";

function About() {
  const icons = {
    zap: <FiZap className="text-white" />,
    link: <FiLink className="text-white" />,
    cloudUpload: <FiUploadCloud className="text-white" />,
    check: <FiCheckCircle className="text-white" />,
    cloud: <FiCloud className="text-white" />,
  };

  const skills = [
    { name: "SPA/SSR", icon: icons.zap, color: "from-emerald-400 to-emerald-600" },
    { name: "REST/GraphQL", icon: icons.link, color: "from-cyan-400 to-cyan-600" },
    { name: "CI/CD", icon: icons.cloudUpload, color: "from-teal-400 to-teal-600" },
    { name: "Testing", icon: icons.check, color: "from-sky-400 to-sky-600" },
    { name: "Cloud", icon: icons.cloud, color: "from-indigo-400 to-indigo-600" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28 scroll-mt-24">
      {/* Section Title */}
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-sm font-semibold uppercase text-emerald-500">Giới thiệu</p>
        <h2 className="text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 mt-2 font-display">
          Về tôi
        </h2>
        <p className="text-zinc-700 dark:text-zinc-400 mt-3 leading-relaxed">
          Tập trung vào <span className="text-emerald-600 dark:text-emerald-400 font-medium">trải nghiệm, hiệu năng và khả năng mở rộng</span>.  
          Đam mê hệ sinh thái JS/TS, từ prototype đến sản phẩm thực tế.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Left Card */}
        <motion.div 
          className="md:col-span-2 rounded-2xl shadow-lg 
          bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-zinc-900
          border border-emerald-100 dark:border-emerald-900/50 p-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="font-semibold text-xl text-emerald-600 dark:text-emerald-400 tracking-tight font-display">
            Tôi làm gì?
          </h3>
          <p className="mt-3 text-zinc-700 dark:text-zinc-400 leading-relaxed text-base">
            Tôi tập trung vào xây dựng <span className="font-medium text-emerald-600 dark:text-emerald-400">ứng dụng web mượt mà</span>, 
            ưu tiên trải nghiệm người dùng, hiệu năng và khả năng mở rộng.  
            Luôn tận hưởng việc phát triển trong hệ sinh thái JS/TS – từ ý tưởng ban đầu đến sản phẩm hoàn chỉnh.
          </p>

          {/* Badge List */}
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={s.name}
                className={`inline-flex items-center gap-2 rounded-full 
                bg-gradient-to-r ${s.color} text-white shadow-sm 
                text-sm font-medium px-3 py-1.5 transition-transform 
                hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/30`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
              >
                {s.icon} {s.name}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <p className="mt-8 pt-4 border-t border-emerald-100 dark:border-emerald-900/50 
            text-emerald-600 dark:text-emerald-400 italic font-medium text-center">
            "Luôn kết hợp thẩm mỹ với hiệu năng."
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          className="rounded-2xl shadow-lg 
          bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-zinc-900
          border border-emerald-100 dark:border-emerald-900/50 p-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="font-semibold text-xl text-emerald-600 dark:text-emerald-400 tracking-tight font-display">
            Thông tin nhanh
          </h3>
          <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-400 text-sm">
            <li className="flex items-center gap-2">
              <FiBriefcase className="text-white/80 bg-emerald-500 rounded-full p-1" /> 3+ năm làm web
            </li>
            <li className="flex items-center gap-2">
              <FiMonitor className="text-white/80 bg-cyan-500 rounded-full p-1" /> Làm tự do & nhận dự án
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-white/80 bg-teal-500 rounded-full p-1" /> Đang ở Việt Nam
            </li>
            <li className="flex items-center gap-2">
              <FiGlobe className="text-white/80 bg-sky-500 rounded-full p-1" /> Ưu tiên remote/hybrid
            </li>
          </ul>

          {/* Tagline */}
          <p className="mt-6 pt-4 border-t border-emerald-100 dark:border-emerald-900/50 
            text-center text-emerald-600 dark:text-emerald-400 italic font-medium">
            "Code sạch – sản phẩm tinh gọn – trải nghiệm mượt mà."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
