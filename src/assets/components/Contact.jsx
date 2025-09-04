// src/components/Contact.jsx
"use client";

import { motion } from "framer-motion"; // ✅ thiếu import
import { Mail, Send, MessageCircle } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-cyan-400/20 blur-3xl" />

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="backdrop-blur-xl bg-white/40 dark:bg-zinc-900/40 border border-white/20 shadow-2xl rounded-3xl p-10">
          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-8 md:grid-cols-2"
            variants={container}
          >
            {/* Họ tên */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Họ tên
              </label>
              <input
                name="name"
                required
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-pink-400/40 outline-none transition"
                placeholder="Nguyễn Văn A"
              />
            </motion.div>

            {/* Email */}
            <motion.div className="grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-purple-400/40 outline-none transition"
                placeholder="you@mail.com"
              />
            </motion.div>

            {/* Nội dung */}
            <motion.div className="md:col-span-2 grid gap-2" variants={item}>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Nội dung
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="rounded-2xl border px-5 py-3 border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 shadow-sm focus:ring-4 focus:ring-cyan-400/40 outline-none transition"
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
                hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Gửi lời nhắn
              </button>
            </motion.div>
          </motion.form>

          {/* Social links */}
          <motion.div
            className="mt-10 flex justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
            variants={container}
          >
            <motion.a
              href="https://t.me/"
              className="flex items-center gap-2 hover:text-pink-500 transition"
              variants={item}
            >
              <MessageCircle className="w-4 h-4" /> Telegram
            </motion.a>
            <motion.a
              href="https://m.me/"
              className="flex items-center gap-2 hover:text-purple-500 transition"
              variants={item}
            >
              <Mail className="w-4 h-4" /> Messenger
            </motion.a>
            <motion.a
              href="https://zalo.me/"
              className="flex items-center gap-2 hover:text-cyan-500 transition"
              variants={item}
            >
              <MessageCircle className="w-4 h-4" /> Zalo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
