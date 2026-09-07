"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function WorksSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="works" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Title Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E3D]">
            My works & loves
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-[#1F4E3D] hover:bg-[#1F4E3D] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-[#1F4E3D] hover:bg-[#1F4E3D] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* LightCraft Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="min-w-[340px] md:min-w-[500px] h-[360px] md:h-[400px] rounded-3xl overflow-hidden relative flex-shrink-0 snap-start group cursor-pointer"
          >
            <Image
              src="/images/lightcraft.png"
              alt="LightCraft Project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E3D]/90 via-[#1F4E3D]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm mb-3 inline-block">
                Featured
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                LightCraft
              </h3>
              <p className="text-sm text-white/70 mt-1">
                Brand Identity & Product Design
              </p>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1F4E3D] transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Secondary Works Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="min-w-[300px] md:min-w-[380px] h-[360px] md:h-[400px] rounded-3xl overflow-hidden relative flex-shrink-0 snap-start group cursor-pointer"
          >
            <Image
              src="/images/works-secondary.png"
              alt="Collaboration Project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#54BB8E]/90 via-[#54BB8E]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm mb-3 inline-block">
                Open Source
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Collab Studio
              </h3>
              <p className="text-sm text-white/70 mt-1">
                I&apos;m always looking to collaborate on meaningful projects.
              </p>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#54BB8E] transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Third Card - Text Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="min-w-[300px] md:min-w-[360px] h-[360px] md:h-[400px] rounded-3xl bg-white border border-zinc-100 p-8 flex-shrink-0 snap-start flex flex-col justify-between shadow-sm cursor-pointer"
          >
            <div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#A5D6A5]/30 text-[#1F4E3D]">
                Collaboration
              </span>
              <h3 className="text-2xl font-bold text-[#1F4E3D] mt-4">
                Let&apos;s build something great together
              </h3>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                I&apos;m always looking to collaborate with passionate creators,
                developers, and designers who care about craft.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#54BB8E] font-medium text-sm">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Fourth Card - Stats */}
          <motion.div
            whileHover={{ y: -5 }}
            className="min-w-[280px] md:min-w-[320px] h-[360px] md:h-[400px] rounded-3xl bg-[#1F4E3D] p-8 flex-shrink-0 snap-start flex flex-col justify-between cursor-pointer"
          >
            <div>
              <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/80">
                Stats
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Impact by numbers
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Projects Delivered", value: "120+" },
                { label: "Happy Clients", value: "50+" },
                { label: "Awards Won", value: "3" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm text-white/60">{stat.label}</span>
                  <span className="text-lg font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
