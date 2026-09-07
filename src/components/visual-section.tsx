"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const images = [
  { src: "/images/visual1.png", alt: "3D Abstract Shapes", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/visual2.png", alt: "Glassy Spheres", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/visual3.png", alt: "Indoor Plants", span: "md:col-span-1 md:row-span-2" },
  { src: "/images/visual4.png", alt: "Abstract Fluid Art", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/lightcraft.png", alt: "LightCraft Visual", span: "md:col-span-1 md:row-span-1" },
];

export default function VisualSection() {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E3D]">
              Fun time visuals
            </h2>
            <p className="text-zinc-500 mt-2 text-sm">
              Designs I made to satisfy my soul
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#54BB8E] font-medium text-sm hover:text-[#1F4E3D] transition-colors group"
          >
            <span>View all designs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[240px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className={`${img.span} rounded-3xl overflow-hidden relative group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1F4E3D]/0 group-hover:bg-[#1F4E3D]/20 transition-colors duration-300" />
            </motion.div>
          ))}

          {/* Text card in the grid */}
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-[#A5D6A5]/20 border border-[#A5D6A5]/30 p-6 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#54BB8E]/20 text-[#1F4E3D] font-medium">
                Exploration
              </span>
              <h3 className="text-lg font-bold text-[#1F4E3D] mt-3">
                Visual experiments & creative play
              </h3>
              <p className="text-sm text-zinc-500 mt-2">
                Pushing boundaries through abstract forms and green aesthetics.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#54BB8E] text-sm font-medium group-hover:gap-3 transition-all">
              <span>Explore more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
