"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const collections = [
  {
    id: "bedrooms",
    title: "غرف النوم",
    subtitle: "BEDROOMS",
    image: "/images/hero/hero-main.png",
    span: "col-span-2 row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    id: "majlis",
    title: "المجالس",
    subtitle: "MAJLIS",
    image: "/images/collections/majlis.png",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "living",
    title: "غرف المعيشة",
    subtitle: "LIVING ROOMS",
    image: "/images/collections/livingroom.png",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "dining",
    title: "السفرات",
    subtitle: "DINING",
    image: "/images/collections/dining.png",
    span: "col-span-1 row-span-2",
    aspect: "aspect-[3/5]",
  },
  {
    id: "wardrobes",
    title: "الخزائن",
    subtitle: "WARDROBES",
    image: "/images/collections/wardrobe.png",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "decor",
    title: "الديكورات",
    subtitle: "DÉCOR",
    image: "/images/collections/decor.png",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "custom",
    title: "الأثاث المخصص",
    subtitle: "CUSTOM",
    image: "/images/collections/custom.png",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[21/9]",
  },
];

export default function CollectionExplorer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="collections"
      className="section-padding bg-ivory-dark overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-warm-gray block mb-4"
            >
              EXPLORE COLLECTIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-headline text-espresso"
            >
              مجموعاتنا
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-body text-espresso/50 max-w-md"
          >
            كل مجموعة تحكي قصة مختلفة من الخامات والتفاصيل.
          </motion.p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[260px]">
          {collections.map((collection, i) => (
            <motion.a
              key={collection.id}
              href={`#${collection.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative overflow-hidden group cursor-pointer ${collection.span}`}
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-all duration-500 group-hover:from-charcoal/80" />

              {/* Content */}
              <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-ivory/40 mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                  {collection.subtitle}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-ivory transition-transform duration-500 group-hover:-translate-y-1">
                    {collection.title}
                  </h3>
                  <ArrowLeft
                    size={18}
                    className="text-ivory/0 transition-all duration-500 group-hover:text-ivory/80 group-hover:-translate-x-1 rtl:rotate-180"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
