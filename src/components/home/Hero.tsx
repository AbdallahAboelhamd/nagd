"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/hero/hero-main.png"
          alt="أثاث فاخر — غرفة نوم مصممة بعناية"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-end pb-20 lg:pb-28">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="text-label text-ivory/60 tracking-[0.2em]">
            NAMARG NAJD FURNITURE
          </span>
          <div className="w-12 h-[1px] bg-gold mt-3" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-display text-ivory max-w-4xl leading-[1.05]"
        >
          نصنع المساحة
          <br />
          <span className="text-sand">التي تشبهك</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-subtitle text-ivory/60 max-w-lg mt-6 lg:mt-8"
        >
          أثاث مصمم بعناية، وتفاصيل تُصنع لتدوم.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#collections"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ivory text-espresso text-sm font-medium hover:bg-sand transition-colors duration-300"
          >
            اكتشف مجموعتنا
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rtl:rotate-180"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#custom"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory text-sm font-medium hover:bg-ivory/10 transition-colors duration-300"
          >
            صمّم قطعتك
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-ivory/40 font-sans uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-ivory/20 relative overflow-hidden">
          <motion.div
            className="w-full bg-gold absolute top-0"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "150%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Side Label */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <span
          className="text-label text-ivory/20 tracking-[0.3em]"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          نمارق نجد للأثاث
        </span>
      </div>
    </section>
  );
}
