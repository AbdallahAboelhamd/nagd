"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Clock, X } from "lucide-react";

export default function Showroom() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="showroom"
        className="section-padding bg-sand/30 overflow-hidden"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/collections/livingroom.png"
                alt="معرض نمارق نجد"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Content */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-label text-warm-gray block mb-6"
              >
                SHOWROOM
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="text-headline text-espresso mb-6"
              >
                تعال وشوف التفاصيل
                <br />
                عن قرب.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 py-6 border-t border-sand"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-espresso">الموقع</p>
                    <p className="text-sm text-espresso/50">
                      [عنوان تجريبي — سيتم تحديثه]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-espresso">
                      أوقات العمل
                    </p>
                    <p className="text-sm text-espresso/50">
                      [أوقات تجريبية — سيتم تحديثها]
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 mt-6"
              >
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-primary"
                >
                  احجز زيارة
                </button>
                <a
                  href="https://wa.me/966XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  تواصل معنا
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setBookingOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="bg-ivory w-full max-w-lg p-8 lg:p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setBookingOpen(false)}
                className="absolute top-4 left-4 text-warm-gray hover:text-espresso transition-colors"
              >
                <X size={20} />
              </button>

              {!bookingSubmitted ? (
                <>
                  <span className="text-label text-warm-gray block mb-2">
                    BOOK A VISIT
                  </span>
                  <h3 className="text-title text-espresso mb-8">احجز زيارة</h3>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="الاسم"
                      className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso placeholder:text-warm-gray focus:border-espresso outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="رقم التواصل"
                      className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso placeholder:text-warm-gray focus:border-espresso outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso focus:border-espresso outline-none transition-colors"
                      />
                      <input
                        type="time"
                        className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso focus:border-espresso outline-none transition-colors"
                      />
                    </div>
                    <select className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso focus:border-espresso outline-none transition-colors">
                      <option value="">نوع الزيارة</option>
                      <option value="browse">تصفح المعرض</option>
                      <option value="custom">استشارة تصميم</option>
                      <option value="pickup">استلام طلب</option>
                    </select>
                    <button
                      onClick={() => setBookingSubmitted(true)}
                      className="btn-primary w-full mt-2"
                    >
                      حجز الزيارة
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto mb-6 border border-gold flex items-center justify-center">
                    <span className="text-gold text-xl">✓</span>
                  </div>
                  <h3 className="text-title text-espresso mb-2">تم الحجز</h3>
                  <p className="text-sm text-warm-gray">
                    هذا عرض تجريبي — Demo
                  </p>
                  <button
                    onClick={() => {
                      setBookingOpen(false);
                      setBookingSubmitted(false);
                    }}
                    className="btn-secondary mt-6"
                  >
                    إغلاق
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
