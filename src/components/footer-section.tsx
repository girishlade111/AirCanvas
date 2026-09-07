"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, House } from "lucide-react";
import { useState } from "react";

const footerColumns = [
  {
    title: "Index",
    links: ["Home", "Works", "Services", "About"],
  },
  {
    title: "Works",
    links: ["LightCraft", "Collab Studio", "Design Systems", "Brand Identity"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Design Tips", "Newsletter"],
  },
  {
    title: "Utility",
    links: ["Privacy Policy", "Terms of Service", "Cookies", "Sitemap"],
  },
];

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="pt-16 md:pt-24 pb-0">
      {/* Book a Meeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-[#1F4E3D] rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 text-white mb-16"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Text */}
          <div className="lg:w-2/5">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Book a free
              <br />
              <span className="text-[#54BB8E]">Meeting</span>
            </h2>
            <p className="text-[#A5D6A5] text-lg">
              I strive to respond within 3 hours.
            </p>
          </div>

          {/* Right - Form */}
          <div className="lg:w-3/5">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#54BB8E] rounded-2xl p-8 text-center"
              >
                <p className="text-xl font-bold text-white">
                  Thank you! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Type your name here"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#54BB8E] focus:ring-1 focus:ring-[#54BB8E]/30 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Type your e-mail here"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/15 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#54BB8E] focus:ring-1 focus:ring-[#54BB8E]/30 transition-all"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="flex-1 bg-white/10 border border-white/15 rounded-2xl px-5 py-3.5 text-white/70 focus:outline-none focus:border-[#54BB8E] appearance-none cursor-pointer transition-all"
                    required
                  >
                    <option value="" className="text-zinc-800">
                      Choose the service
                    </option>
                    <option value="product-design" className="text-zinc-800">
                      Product Design
                    </option>
                    <option value="design-systems" className="text-zinc-800">
                      Design Systems
                    </option>
                    <option value="consulting" className="text-zinc-800">
                      Consulting
                    </option>
                  </select>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#54BB8E] hover:bg-[#4aa87d] text-[#1F4E3D] font-semibold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Start meeting
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>

      {/* Footer Columns */}
      <div className="border-t border-zinc-200 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <House className="w-5 h-5 text-[#1F4E3D]" />
              <span className="text-[#1F4E3D] font-bold text-lg">AirCanvas</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Designing digital experiences with heart and precision.
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-[#1F4E3D] text-sm mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-[#1F4E3D] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            © 2024 Created by AirCanvas | Powered by Webflow
          </p>
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-[#1F4E3D] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-[#1F4E3D] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-[#1F4E3D] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
