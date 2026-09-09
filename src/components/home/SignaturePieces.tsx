"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

const products = [
  {
    id: "ariana-bed",
    name: "سرير أريانا",
    nameEn: "Ariana Bed",
    category: "غرف النوم",
    material: "خشب الجوز — قماش بوكليه",
    dimensions: "200 × 180 سم",
    image: "/images/products/bed-ariana.png",
  },
  {
    id: "nova-table",
    name: "طاولة نوفا",
    nameEn: "Nova Table",
    category: "طاولات",
    material: "خشب الجوز — رخام ترافرتين",
    dimensions: "60 × 60 × 50 سم",
    image: "/images/products/table-nova.png",
  },
  {
    id: "riwa-sofa",
    name: "كنبة رِواء",
    nameEn: "Riwaa Sofa",
    category: "غرف المعيشة",
    material: "خشب الجوز — كتان طبيعي",
    dimensions: "240 × 95 × 75 سم",
    image: "/images/products/sofa-riwa.png",
  },
  {
    id: "laura-tv",
    name: "وحدة تلفاز لورا",
    nameEn: "Laura TV Unit",
    category: "وحدات تلفاز",
    material: "خشب الجوز — خرسانة",
    dimensions: "200 × 45 × 55 سم",
    image: "/images/products/tv-unit-laura.png",
  },
];

export default function SignaturePieces() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-ivory overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            SIGNATURE PIECES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-headline text-espresso mb-4"
          >
            قطع مختارة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-subtitle text-espresso/50"
          >
            تفاصيل صُنعت لتلفت النظر.
          </motion.p>
        </div>

        {/* Asymmetric Product Layout */}
        <div className="space-y-24 lg:space-y-32">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-ltr" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  i % 2 === 0
                    ? "lg:col-span-7"
                    : "lg:col-span-7 lg:order-2"
                } relative`}
              >
                <div className="relative overflow-hidden group img-hover-zoom">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>
                {/* Number Accent */}
                <span className="absolute -top-4 lg:-top-6 right-4 lg:right-8 text-[6rem] lg:text-[8rem] font-bold text-espresso/[0.04] leading-none font-sans select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Info */}
              <div
                className={`${
                  i % 2 === 0
                    ? "lg:col-span-5"
                    : "lg:col-span-5 lg:order-1"
                } flex flex-col`}
              >
                <span className="text-label text-warm-gray mb-3">
                  {product.category.toUpperCase().replace(/\s/g, " ")}
                </span>
                <h3 className="text-title text-espresso mb-2">
                  {product.name}
                </h3>
                <span className="text-sm text-espresso/30 font-sans mb-6">
                  {product.nameEn}
                </span>

                <div className="space-y-3 py-6 border-t border-sand">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-espresso/40">الخامات</span>
                    <span className="text-sm text-espresso/70">
                      {product.material}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-espresso/40">الأبعاد</span>
                    <span className="text-sm text-espresso/70">
                      {product.dimensions}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button className="btn-primary text-sm">
                    اطلب عرض سعر
                  </button>
                  <a
                    href="https://wa.me/966XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <MessageCircle size={16} />
                    واتساب
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
