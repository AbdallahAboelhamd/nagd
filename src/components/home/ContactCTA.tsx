"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 lg:py-40 bg-espresso overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide relative text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-label text-ivory/20 block mb-6"
        >
          LET&apos;S CREATE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-display text-ivory max-w-3xl mx-auto mb-8"
        >
          جاهز تصنع شيئًا
          <br />
          <span className="text-gold">يشبهك؟</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-body text-ivory/40 max-w-md mx-auto mb-12"
        >
          تحدث معنا وخلنا نبدأ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/966XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-charcoal text-sm font-semibold hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={18} />
            تحدث معنا
          </a>
          <a
            href="#custom"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-ivory/20 text-ivory text-sm font-medium hover:bg-ivory/5 transition-colors duration-300"
          >
            صمّم قطعتك
          </a>
        </motion.div>
      </div>
    </section>
  );
}
