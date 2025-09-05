// src/components/Contact.jsx
"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageCircle, User, FileText } from "lucide-react";

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

  // animation variants
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
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-purple-400/10 to-cyan-400/20 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 shadow-xl rounded-3xl p-10 transition-colors">
          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-8 md:grid-cols-2"
            variants={container}
          >
            {/* Họ tên */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <User className="w-4 h-4 text-pink-500" /> Họ tên
              </label>
              <input
                name="name"
                required
                className="rounded-2xl border px-5 py-3 
                border-zinc-300 dark:border-zinc-700 
                bg-white dark:bg-zinc-800/80 
                text-zinc-800 dark:text-zinc-100
                shadow-sm outline-none transition 
                focus:border-transparent focus:ring-2 
                focus:ring-transparent focus:outline-none
                focus:[background-image:linear-gradient(to_right,#ec4899,#a855f7,#06b6d4)] 
                focus:[background-origin:border-box] focus:[background-clip:padding-box,border-box]"
                placeholder="Nguyễn Văn A"
              />
            </motion.div>

            {/* Email */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-500" /> Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border px-5 py-3 
                border-zinc-300 dark:border-zinc-700 
                bg-white dark:bg-zinc-800/80 
                text-zinc-800 dark:text-zinc-100
                shadow-sm outline-none transition 
                focus:border-transparent focus:ring-2 
                focus:ring-transparent focus:outline-none
                focus:[background-image:linear-gradient(to_right,#ec4899,#a855f7,#06b6d4)] 
                focus:[background-origin:border-box] focus:[background-clip:padding-box,border-box]"
                placeholder="you@mail.com"
              />
            </motion.div>

            {/* Nội dung */}
            <motion.div className="md:col-span-2 grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-500" /> Nội dung
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="rounded-2xl border px-5 py-3 
                border-zinc-300 dark:border-zinc-700 
                bg-white dark:bg-zinc-800/80 
                text-zinc-800 dark:text-zinc-100
                shadow-sm outline-none transition 
                focus:border-transparent focus:ring-2 
                focus:ring-transparent focus:outline-none
                focus:[background-image:linear-gradient(to_right,#ec4899,#a855f7,#06b6d4)] 
                focus:[background-origin:border-box] focus:[background-clip:padding-box,border-box]"
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
                hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] 
                transition-all duration-300"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Gửi lời nhắn
              </button>
            </motion.div>
          </motion.form>

          {/* Social links */}
          <motion.div
            className="mt-10 flex justify-center gap-8 text-sm"
            variants={container}
          >
            {[
              {
                href: "https://t.me/",
                icon: (
                  <MessageCircle className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-500 group-hover:-translate-y-1" />
                ),
                text: "Telegram",
              },
              {
                href: "https://m.me/",
                icon: (
                  <Mail className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-500 group-hover:-translate-y-1" />
                ),
                text: "Messenger",
              },
              {
                href: "https://zalo.me/",
                icon: (
                  <MessageCircle className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-500 group-hover:-translate-y-1" />
                ),
                text: "Zalo",
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="group relative flex items-center gap-2 font-medium 
                text-zinc-700 dark:text-zinc-300 
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400
                transition-all duration-500"
                variants={item}
              >
                {link.icon}
                <span>{link.text}</span>
                {/* underline gradient */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
