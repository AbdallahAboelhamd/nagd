"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-ivory overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-warm-gray block mb-8"
            >
              OUR PHILOSOPHY
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-headline text-espresso"
            >
              من الفكرة...
              <br />
              <span className="text-gold">إلى قطعة تعيش معك.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-16 h-[1px] bg-gold my-8 origin-right"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body text-espresso/60 leading-relaxed max-w-md"
            >
              في نمارق نجد، نجمع بين التصميم المعاصر والحرفة التقليدية.
              كل قطعة تبدأ من فكرة، تمر بأيدي حرفيين مهرة، وتنتهي
              كقطعة فريدة تنتمي لمساحتك.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-body text-espresso/60 leading-relaxed max-w-md mt-4"
            >
              من غرف النوم إلى المجالس، ومن الخزائن إلى القطع المخصصة —
              نصنع أثاثًا يحكي قصتك.
            </motion.p>

            <motion.a
              href="#custom"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="btn-ghost mt-8 inline-flex"
            >
              اكتشف قصتنا
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
            </motion.a>
          </div>

          {/* Images Side - Asymmetric */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative">
              {/* Large Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative aspect-[4/5] w-full lg:w-[85%] lg:ms-auto overflow-hidden"
              >
                <Image
                  src="/images/brand/workshop.png"
                  alt="ورشة نمارق نجد — حرفة تصنيع الأثاث"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>

              {/* Overlapping Smaller Image */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: -20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute -bottom-8 lg:-bottom-12 right-[50%] lg:right-auto lg:-left-8 w-[55%] lg:w-[45%] aspect-[3/4] overflow-hidden border-4 border-ivory shadow-lg"
              >
                <Image
                  src="/images/brand/detail.png"
                  alt="تفاصيل الخامات — جودة التصنيع"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
