"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    text: "من أول ما شفت الشغل عرفت إن هذا اللي أبيه. التفاصيل والخامات فرق واضح.",
    attribution: "— عميل تجريبي ٠١",
    note: "DEMO",
  },
  {
    text: "طلبت تصميم مخصص وكانت النتيجة أحسن من اللي تخيلته. شغل احترافي.",
    attribution: "— عميل تجريبي ٠٢",
    note: "DEMO",
  },
  {
    text: "المجلس طلع بالضبط زي ما أبيه. الخشب والقماش اختياراتهم ممتازة.",
    attribution: "— عميل تجريبي ٠٣",
    note: "DEMO",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-sand/20 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            TESTIMONIALS — DEMO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-title text-espresso mb-16"
          >
            رأي عملائنا
          </motion.h2>

          {/* Testimonial */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-4xl text-gold/30 mb-6 leading-none">"</div>
            <p className="text-xl lg:text-2xl text-espresso leading-relaxed font-light mb-8">
              {testimonials[active].text}
            </p>
            <p className="text-sm text-espresso/40">
              {testimonials[active].attribution}
            </p>
            <span className="inline-block mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-warm-gray/50 border border-warm-gray/20 px-2 py-0.5">
              {testimonials[active].note}
            </span>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 transition-all duration-300 ${
                  i === active
                    ? "bg-espresso w-8"
                    : "bg-espresso/20 hover:bg-espresso/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
