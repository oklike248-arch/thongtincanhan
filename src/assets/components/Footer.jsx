// src/components/Footer.jsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative border-t border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      {/* Animated Glow background */}
      <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 blur-3xl opacity-70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left font-medium bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
          © {new Date().getFullYear()} NekoTheDev. All rights reserved.
        </div>

        {/* Social links */}
        <div className="flex justify-center md:justify-end items-center gap-5 sm:gap-6">
          {[
            { icon: Github, href: "https://github.com/" },
            { icon: Linkedin, href: "https://linkedin.com/" },
            { icon: Twitter, href: "https://twitter.com/" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <Icon className="w-6 h-6 sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
