"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "تصميم حسب احتياجك",
    desc: "كل قطعة تبدأ من فهم مساحتك وأسلوبك. نصمم لتناسبك، لا لتناسب الجميع.",
    image: "/images/brand/workshop.png",
  },
  {
    title: "خامات مختارة",
    desc: "نختار الأخشاب والأقمشة والجلود بعناية من مصادر موثوقة، لنضمن جودة تدوم.",
    image: "/images/brand/detail.png",
  },
  {
    title: "تصنيع بعناية",
    desc: "كل مرحلة تمر بأيدي حرفيين ذوي خبرة. من القص إلى التجميع، التفاصيل تفرق.",
    image: "/images/collections/custom.png",
  },
  {
    title: "تفاصيل مخصصة",
    desc: "من اختيار لون الخياطة إلى شكل اليد، نعطيك حرية التخصيص في كل شيء.",
    image: "/images/collections/decor.png",
  },
];

export default function WhyNamarg() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-ivory overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            WHY NAMARG NAJD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-headline text-espresso max-w-lg"
          >
            لماذا نمارق نجد
          </motion.h2>
        </div>

        {/* Editorial Split Panels */}
        <div className="space-y-px bg-sand">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 bg-ivory group`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-8 lg:p-16 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="text-5xl lg:text-6xl font-sans font-bold text-espresso/[0.06] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-title text-espresso mb-4">
                  {feature.title}
                </h3>
                <p className="text-body text-espresso/50 max-w-md leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
