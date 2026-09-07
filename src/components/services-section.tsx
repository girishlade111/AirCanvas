"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Toggle Pills */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap gap-2 mb-8"
        >
          {["Design", "Development", "Consulting", "Strategy"].map(
            (tag, i) => (
              <span
                key={tag}
                className={`text-xs px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                  i === 0
                    ? "bg-[#1F4E3D] text-white border-[#1F4E3D]"
                    : "bg-white text-[#1F4E3D] border-zinc-200 hover:border-[#54BB8E] hover:bg-[#54BB8E]/10"
                }`}
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-5xl font-bold text-[#1F4E3D] mb-10 leading-tight max-w-2xl"
        >
          Work one{" "}
          <span className="relative inline-block">
            <span className="border-b-2 border-dashed border-[#54BB8E]">
              on one
            </span>
          </span>{" "}
          with me or my team.
        </motion.h2>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Dark Card - Product Design */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-1 bg-[#1F4E3D] text-white rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-white/10 min-h-[380px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs px-4 py-1.5 rounded-full border border-white/30 text-white/80">
                  Available from September
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Product Design</h3>
              <p className="text-sm text-white/60 mt-2">
                UI Design & Information Architecture
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mt-6">
                $85{" "}
                <span className="text-base font-normal text-white/60">
                  / Hour
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/15 pt-5 mt-5">
                <span className="text-xs font-medium border border-white/30 rounded-full px-5 py-2 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
                  Contact for total cost
                </span>
                <div className="bg-white text-[#1F4E3D] rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Light Card - Design Systems */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-1 bg-[#54BB8E] text-[#1F4E3D] rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-[#54BB8E]/50 min-h-[380px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs px-4 py-1.5 rounded-full bg-[#1F4E3D] text-white font-medium">
                  Best Selling
                </span>
                <div className="w-10 h-10 rounded-full bg-[#1F4E3D]/10 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#1F4E3D]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Design Systems</h3>
              <p className="text-sm text-[#1F4E3D]/60 mt-2">
                Component Libraries & Design Tokens
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mt-6">
                $110{" "}
                <span className="text-base font-normal text-[#1F4E3D]/60">
                  / Hour
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-[#1F4E3D]/15 pt-5 mt-5">
                <span className="text-xs font-medium border border-[#1F4E3D]/30 rounded-full px-5 py-2 text-[#1F4E3D]/80 hover:bg-[#1F4E3D]/10 transition-colors cursor-pointer">
                  Contact for total cost
                </span>
                <div className="bg-[#1F4E3D] text-white rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* White Card - Consulting */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-1 bg-white text-[#1F4E3D] rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-zinc-200 min-h-[380px] shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs px-4 py-1.5 rounded-full border border-[#54BB8E] text-[#54BB8E]">
                  Limited
                </span>
                <div className="w-10 h-10 rounded-full bg-[#F4F6F4] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#1F4E3D]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Consulting</h3>
              <p className="text-sm text-zinc-500 mt-2">
                UX Audit & Strategy Workshops
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mt-6">
                $150{" "}
                <span className="text-base font-normal text-zinc-500">
                  / Hour
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-5">
                <span className="text-xs font-medium border border-zinc-200 rounded-full px-5 py-2 text-zinc-600 hover:bg-[#F4F6F4] transition-colors cursor-pointer">
                  Book a session
                </span>
                <div className="bg-[#1F4E3D] text-white rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
