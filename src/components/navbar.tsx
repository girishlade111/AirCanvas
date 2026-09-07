"use client";

import { motion } from "framer-motion";
import { House, Plus } from "lucide-react";

const navLinks = ["Works", "Services", "About", "Resources"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center py-4 px-2"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <House className="w-5 h-5 text-[#1F4E3D]" />
        <span className="text-[#1F4E3D] font-bold text-lg tracking-tight">
          AirCanvas
        </span>
      </div>

      {/* Center Links - hidden on mobile */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.05 }}
            className="text-sm text-zinc-600 hover:text-[#1F4E3D] transition-colors duration-200 cursor-pointer"
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 rounded-full px-5 py-2 border border-[#54BB8E] text-[#1F4E3D] text-sm font-medium hover:bg-[#54BB8E]/10 transition-colors duration-200"
      >
        <Plus className="w-4 h-4" />
        <span className="hidden sm:inline">Let&apos;s Talk</span>
      </motion.button>
    </motion.nav>
  );
}
