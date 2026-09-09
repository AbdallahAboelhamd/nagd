"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "areej",
    title: "مشروع أريج",
    type: "فيلا خاصة",
    typeEn: "PRIVATE VILLA",
    desc: "تصميم وتنفيذ كامل لأثاث فيلا من الخشب الطبيعي والأقمشة الفاخرة.",
    image: "/images/hero/hero-main.png",
  },
  {
    id: "sukoon",
    title: "مشروع سكون",
    type: "مجلس فاخر",
    typeEn: "LUXURY MAJLIS",
    desc: "مجلس معاصر يجمع بين الأصالة والتصميم الحديث بخامات مختارة.",
    image: "/images/collections/majlis.png",
  },
  {
    id: "nuzul",
    title: "مشروع نُزل",
    type: "غرفة نوم",
    typeEn: "MASTER BEDROOM",
    desc: "غرفة نوم رئيسية بتصميم هادئ ودافئ من الخشب والكتان الطبيعي.",
    image: "/images/collections/livingroom.png",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="section-padding bg-ivory overflow-hidden"
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
              PORTFOLIO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-headline text-espresso"
            >
              من أعمالنا
            </motion.h2>
          </div>
          <motion.a
            href="#all-projects"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="btn-ghost text-espresso/60"
          >
            جميع المشاريع
            <ArrowLeft size={16} className="rtl:rotate-180" />
          </motion.a>
        </div>

        {/* Projects Grid - Cinematic */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={`#project-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group block relative overflow-hidden cursor-pointer"
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-[21/9]" : "aspect-[21/7]"
                } overflow-hidden`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-all duration-500 group-hover:from-charcoal/80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ivory/40 block mb-2">
                        {project.typeEn}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-ivory mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-ivory/50">{project.type}</p>
                    </div>
                    <p className="text-sm text-ivory/40 max-w-sm hidden lg:block">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute top-8 left-8 lg:top-12 lg:left-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowLeft
                    size={24}
                    className="text-ivory rtl:rotate-180"
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
