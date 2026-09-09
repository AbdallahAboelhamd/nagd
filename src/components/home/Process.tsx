"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "استكشف",
    desc: "نفهم رؤيتك واحتياجاتك ونستكشف الإمكانيات.",
  },
  {
    num: "02",
    title: "صمّم",
    desc: "نصمم القطعة بناءً على ذوقك وتفاصيل مساحتك.",
  },
  {
    num: "03",
    title: "نصنع",
    desc: "نبدأ التصنيع بأيدي حرفيين ومواد مختارة.",
  },
  {
    num: "04",
    title: "نراجع التفاصيل",
    desc: "نتأكد من كل تفصيلة قبل التسليم.",
  },
  {
    num: "05",
    title: "نوصّل ونركّب",
    desc: "نوصل القطعة ونركبها في مساحتك.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-sand/20 overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            THE PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-headline text-espresso mb-4"
          >
            رحلة التصنيع
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-subtitle text-espresso/50"
          >
            من الفكرة إلى التسليم.
          </motion.p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Line */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-[1px] bg-sand-dark origin-right"
            />

            <div className="grid grid-cols-5 gap-0 -mt-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex flex-col items-center text-center px-4"
                >
                  {/* Dot */}
                  <div className="w-6 h-6 bg-ivory border-2 border-espresso flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-gold" />
                  </div>

                  {/* Number */}
                  <span className="text-3xl font-sans font-bold text-espresso/10 mb-2">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-espresso mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-espresso/45 leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 right-[19px] w-[1px] bg-sand-dark" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                  }}
                  className="flex gap-6"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 w-10 h-10 bg-ivory border-2 border-espresso flex items-center justify-center z-10">
                    <span className="text-xs font-sans font-bold text-gold">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-espresso mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-espresso/45 leading-relaxed">
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
