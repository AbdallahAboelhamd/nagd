"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Menu } from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "#" },
  { label: "المجموعات", href: "#collections" },
  { label: "أعمالنا", href: "#projects" },
  { label: "صمّم قطعتك", href: "#custom" },
  { label: "خدماتنا", href: "#services" },
  { label: "من نحن", href: "#about" },
  { label: "المعرض", href: "#showroom" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-md border-b border-sand"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-10">
              <span
                className={`text-2xl lg:text-[1.625rem] font-bold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-espresso" : "text-ivory"
                }`}
              >
                نمارق نجد
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                    scrolled ? "text-espresso" : "text-ivory"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 z-10">
              {/* Language Toggle */}
              <button
                className={`hidden lg:block text-label transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-espresso" : "text-ivory"
                }`}
              >
                EN
              </button>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-espresso border border-espresso/20 hover:bg-espresso hover:text-ivory"
                    : "text-ivory border border-ivory/30 hover:bg-ivory/10"
                }`}
              >
                <MessageCircle size={16} />
                <span>واتساب</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  scrolled ? "text-espresso" : "text-ivory"
                }`}
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] bg-ivory flex flex-col"
          >
            {/* Mobile Header */}
            <div className="container-wide flex items-center justify-between h-20">
              <span className="text-2xl font-bold text-espresso">
                نمارق نجد
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-espresso"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col justify-center container-wide">
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-3xl font-semibold text-espresso hover:text-gold transition-colors duration-300 border-b border-sand/50"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Bottom Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 space-y-4"
              >
                <a
                  href="https://wa.me/966XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  <MessageCircle size={18} />
                  تحدث معنا عبر واتساب
                </a>
                <button className="text-label text-warm-gray w-full text-center py-2">
                  EN — ENGLISH
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
