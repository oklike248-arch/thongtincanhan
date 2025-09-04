// src/components/About.jsx
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
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-28 scroll-mt-24">
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

export default About;
