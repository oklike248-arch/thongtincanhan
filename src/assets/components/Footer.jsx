// src/components/Footer.jsx
import { motion } from "framer-motion"; // ✅ thiếu import
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-zinc-200 dark:border-zinc-800 relative"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl opacity-70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Copyright */}
        <div className="font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          © {new Date().getFullYear()} NekoTheDev. All rights reserved.
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
