"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Figma,
  Linkedin,
  Github,
  ArrowDownRight,
  Thermometer,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Figma, label: "Figma" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "Github" },
];

export default function HeroSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Weather Widget & Hobbies */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 lg:col-span-5 flex flex-col gap-4"
        >
          {/* Weather Card */}
          <div className="bg-[#54BB8E] rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Weather</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-5xl font-bold">76°</span>
                <p className="text-sm opacity-80 mt-1">San Francisco, CA</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Thermometer className="w-8 h-8 opacity-60" />
                {/* Mini graph line */}
                <svg
                  width="80"
                  height="30"
                  viewBox="0 0 80 30"
                  className="opacity-40"
                >
                  <path
                    d="M0 20 Q10 5, 20 15 T40 10 T60 18 T80 8"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-500">Hobbies, Appetite, and more.</span>
              <span className="bg-[#54BB8E] text-white text-xs font-medium px-3 py-1 rounded-full">
                17
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Photography", "3D Art", "Typography", "Coffee", "Hiking", "Music"].map(
                (hobby) => (
                  <span
                    key={hobby}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#F4F6F4] text-[#1F4E3D] border border-[#A5D6A5]/30"
                  >
                    {hobby}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mini Stats */}
          <div className="bg-[#1F4E3D] rounded-3xl p-5 text-white">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-bold">8+</p>
                <p className="text-xs opacity-60 mt-0.5">Years Exp</p>
              </div>
              <div>
                <p className="text-2xl font-bold">120+</p>
                <p className="text-xs opacity-60 mt-0.5">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs opacity-60 mt-0.5">Clients</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Headline & Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="md:col-span-7 lg:col-span-7 relative"
        >
          {/* Headline */}
          <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl font-bold leading-[1.1] text-[#1F4E3D] mb-6">
            Designing
            <br />
            from <span className="italic text-[#54BB8E]">heart.</span>
          </h1>

          {/* Portrait + Badge Container */}
          <div className="relative flex flex-col sm:flex-row items-start gap-4">
            {/* Portrait */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src="/images/portrait.png"
                alt="Product Designer Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-[#A5D6A5]/30 rounded-2xl p-5 border border-[#A5D6A5]/40 max-w-xs"
            >
              <p className="text-sm text-[#1F4E3D] font-medium leading-relaxed">
                Product designer based in US, with 8 years+ experience crafting
                digital experiences that matter.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-[#54BB8E] animate-pulse" />
                <span className="text-xs text-[#1F4E3D]/70">Available for freelance</span>
              </div>
            </motion.div>
          </div>

          {/* Social Links - Vertical on right edge */}
          <div className="absolute right-0 top-20 md:top-24 hidden md:flex flex-col gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                whileHover={{ scale: 1.15, x: -4 }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#1F4E3D] hover:bg-[#54BB8E] hover:text-white transition-colors duration-200"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Scroll/Wait Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-2 mt-8 justify-end"
          >
            <span className="text-sm text-[#1F4E3D]/60 font-medium">Cool</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownRight className="w-4 h-4 text-[#54BB8E]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
