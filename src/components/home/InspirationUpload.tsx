"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Check, X } from "lucide-react";

export default function InspirationUpload() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const f = e.dataTransfer.files[0];
      if (f && /\.(jpg|jpeg|png|webp)$/i.test(f.name)) {
        handleFile(f);
      }
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  return (
    <section ref={ref} className="section-padding bg-sand/30 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-warm-gray block mb-4"
          >
            INSPIRATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-headline text-espresso mb-4"
          >
            لديك صورة في بالك؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-subtitle text-espresso/50 mb-12"
          >
            أرسلها لنا، ودعنا نحولها لواقع.
          </motion.p>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {!file ? (
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative block border-2 border-dashed cursor-pointer transition-all duration-300 py-20 px-8 ${
                  dragOver
                    ? "border-gold bg-gold/5"
                    : "border-sand-dark hover:border-espresso/30"
                }`}
              >
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={handleInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border border-sand-dark flex items-center justify-center">
                    <Upload size={24} className="text-warm-gray" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-espresso">
                      اسحب صورتك هنا
                    </p>
                    <p className="text-xs text-warm-gray mt-1">
                      JPG, PNG, WEBP
                    </p>
                  </div>
                </div>
              </label>
            ) : !submitted ? (
              <div className="border border-sand p-8">
                {/* Preview */}
                <div className="flex items-center gap-6 mb-8">
                  {preview && (
                    <div className="w-24 h-24 relative overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview}
                        alt="Inspiration upload"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-start">
                    <div className="flex items-center gap-2 text-gold mb-1">
                      <Check size={16} />
                      <span className="text-sm font-medium">
                        تم استلام الإلهام
                      </span>
                    </div>
                    <p className="text-xs text-warm-gray">{file.name}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFile(null);
                      setPreview(null);
                    }}
                    className="text-warm-gray hover:text-espresso transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Contact Form */}
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
                  <textarea
                    placeholder="ملاحظات إضافية"
                    rows={3}
                    className="w-full px-4 py-3 bg-transparent border border-sand text-sm text-espresso placeholder:text-warm-gray focus:border-espresso outline-none transition-colors resize-none"
                  />
                  <button
                    onClick={() => setSubmitted(true)}
                    className="btn-primary w-full"
                  >
                    إرسال الطلب
                  </button>
                </div>
              </div>
            ) : (
              <div className="border border-gold/30 bg-gold/5 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold flex items-center justify-center">
                  <Check size={24} className="text-gold" />
                </div>
                <h3 className="text-title text-espresso mb-2">
                  تم إرسال طلبك
                </h3>
                <p className="text-sm text-warm-gray">
                  سنتواصل معك قريبًا — هذا عرض تجريبي
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
