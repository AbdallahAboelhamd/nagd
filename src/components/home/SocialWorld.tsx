"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const socialCards = [
  {
    platform: "Instagram",
    handle: "@namarg.najd",
    label: "أحدث الإلهامات",
    labelEn: "LATEST INSPIRATION",
    image: "/images/collections/decor.png",
    href: "#",
    icon: "IG",
  },
  {
    platform: "TikTok",
    handle: "@namarg.najd",
    label: "خلف الكواليس",
    labelEn: "BEHIND THE SCENES",
    image: "/images/brand/workshop.png",
    href: "#",
    icon: "TK",
  },
  {
    platform: "Snapchat",
    handle: "@namarg.najd",
    label: "قطع جديدة",
    labelEn: "NEW PIECES",
    image: "/images/products/sofa-riwa.png",
    href: "#",
    icon: "SC",
  },
  {
    platform: "WhatsApp",
    handle: "تواصل مباشر",
    label: "تفاصيل الورشة",
    labelEn: "DIRECT CONTACT",
    image: "/images/brand/detail.png",
    href: "https://wa.me/966XXXXXXXXX",
    icon: "WA",
  },
];

export default function SocialWorld() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-ivory overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            SOCIAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-headline text-espresso mb-4"
          >
            نمارق نجد على منصاتك المفضلة
          </motion.h2>
        </div>

        {/* Social Wall */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {socialCards.map((card, i) => (
            <motion.a
              key={card.platform}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-all duration-500 group-hover:from-charcoal/90" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Platform Badge */}
                <div className="flex justify-end">
                  <span className="w-10 h-10 bg-ivory/10 backdrop-blur-sm flex items-center justify-center text-xs font-sans font-bold text-ivory/70">
                    {card.icon}
                  </span>
                </div>

                {/* Bottom Info */}
                <div>
                  <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-ivory/40 block mb-1">
                    {card.labelEn}
                  </span>
                  <h3 className="text-sm font-semibold text-ivory mb-1">
                    {card.label}
                  </h3>
                  <p className="text-xs text-ivory/40">{card.handle}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
