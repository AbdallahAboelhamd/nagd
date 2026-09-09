"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/966XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-espresso text-ivory py-3 px-4 shadow-lg hover:shadow-xl transition-all duration-400 group"
      style={{ borderRadius: "2px" }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <MessageCircle size={20} className="text-gold" />
      </motion.div>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            تحدث معنا
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse indicator */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-[pulseGlow_2s_ease-in-out_infinite]" />
    </motion.a>
  );
}
