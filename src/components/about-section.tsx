"use client";

import { motion } from "framer-motion";
import { X, Award, Palette, GraduationCap, Heart, CloudSun } from "lucide-react";

const timelineItems = [
  {
    icon: Award,
    label: "3 Times Design Award Winner",
    year: "2023",
  },
  {
    icon: Palette,
    label: "Product Designer",
    year: "2018–Now",
  },
  {
    icon: GraduationCap,
    label: "Bachelor in Human Interface",
    year: "2016",
  },
  {
    icon: Heart,
    label: "Young Father",
    year: "2022",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - Headline & Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:w-2/5"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F4E3D] leading-tight mb-6">
            A pixel
            <br />
            lover{" "}
            <span className="italic text-[#54BB8E]">human.</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            I&apos;m also deeply into{" "}
            <span className="text-[#1F4E3D] font-semibold bg-[#A5D6A5]/30 px-1.5 py-0.5 rounded">
              No-code
            </span>{" "}
            technologies and a 3d{" "}
            <span className="text-[#1F4E3D] font-semibold bg-[#A5D6A5]/30 px-1.5 py-0.5 rounded">
              Typography
            </span>{" "}
            enthusiast. I believe in the power of design thinking to transform
            complex problems into elegant, intuitive solutions.
          </p>
        </motion.div>

        {/* Right - Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-3/5 w-full"
        >
          <div className="bg-[#1F4E3D] rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden">
            {/* Close X icon */}
            <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <X className="w-4 h-4 text-white/60" />
            </button>

            {/* Avatar + Weather snippet */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#54BB8E] flex items-center justify-center text-2xl font-bold">
                AC
              </div>
              <div>
                <p className="font-semibold text-lg">AirCanvas</p>
                <p className="text-sm text-white/50">Product Designer</p>
              </div>
              <div className="ml-auto flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <CloudSun className="w-4 h-4 text-[#A5D6A5]" />
                <span className="text-xs text-white/70">76°F</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-4 py-4 border-b border-white/10 last:border-b-0 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#54BB8E]/30 transition-colors">
                    <item.icon className="w-4 h-4 text-[#A5D6A5]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white/90">
                      {item.label}
                    </p>
                  </div>
                  <span className="text-xs text-white/40 font-mono">
                    {item.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#54BB8E]/10 blur-2xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#A5D6A5]/10 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
