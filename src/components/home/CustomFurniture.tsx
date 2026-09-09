"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "اختر نوع القطعة",
    desc: "سرير، كنبة، طاولة، خزانة، أو أي قطعة تتخيلها.",
    icon: "🪑",
  },
  {
    num: "02",
    title: "حدد المقاسات",
    desc: "حدد الأبعاد المناسبة لمساحتك.",
    icon: "📐",
  },
  {
    num: "03",
    title: "اختر الخامة",
    desc: "خشب جوز، بلوط، قماش، جلد، رخام.",
    icon: "🪵",
  },
  {
    num: "04",
    title: "اختر اللون",
    desc: "من مجموعة ألوان مختارة بعناية.",
    icon: "🎨",
  },
  {
    num: "05",
    title: "أضف ملاحظاتك",
    desc: "أي تفاصيل إضافية تخص طلبك.",
    icon: "✏️",
  },
  {
    num: "06",
    title: "ارفع صورة إلهام",
    desc: "شاركنا صورة من بنترست أو أي مرجع.",
    icon: "📷",
  },
];

export default function CustomFurniture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="custom"
      className="section-padding bg-charcoal text-ivory overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Text + CTA */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-ivory/30 block mb-6"
            >
              CUSTOM DESIGN STUDIO
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-headline text-ivory leading-tight mb-6"
            >
              لست مضطرًا
              <br />
              <span className="text-gold">للاختيار من الجاهز.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-body text-ivory/50 max-w-md mb-10"
            >
              أرسل فكرتك، وحدد احتياجك، ودعنا نحولها إلى قطعة مصممة لمساحتك.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#custom-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-charcoal text-sm font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                ابدأ تصميم قطعتك
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
            </motion.div>
          </div>

          {/* Right: Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 right-[23px] lg:right-[27px] w-[1px] bg-ivory/10" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex gap-6 py-6 group"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-charcoal border border-ivory/15 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <span className="text-sm font-sans font-semibold text-gold">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-ivory mb-1 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ivory/40 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
