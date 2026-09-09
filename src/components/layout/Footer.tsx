"use client";

import { MessageCircle, MapPin } from "lucide-react";

const footerLinks = [
  { label: "المجموعات", href: "#collections" },
  { label: "أعمالنا", href: "#projects" },
  { label: "صمّم قطعتك", href: "#custom" },
  { label: "خدماتنا", href: "#services" },
  { label: "من نحن", href: "#about" },
  { label: "المعرض", href: "#showroom" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold text-ivory mb-4">نمارق نجد</h3>
            <p className="text-subtitle text-ivory/50 mb-2">
              Namarg Najd Furniture
            </p>
            <p className="text-body text-ivory/40 max-w-sm mt-6 leading-relaxed">
              أثاث فاخر مصمم بعناية. نصنع قطعًا تجمع بين التصميم العصري
              والحرفة التقليدية، لمساحات تعكس ذوقك.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <span className="text-label text-ivory/30 block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <span className="text-label text-ivory/30 block mb-6">
              CONNECT
            </span>
            <div className="space-y-4">
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                <MessageCircle size={16} />
                واتساب
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                انستغرام
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                <MapPin size={16} />
                <span>الموقع — [عنوان تجريبي]</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {["TikTok", "Snapchat"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 border border-ivory/10 flex items-center justify-center text-xs text-ivory/40 hover:text-ivory hover:border-ivory/30 transition-all duration-300"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/5">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/25 font-sans">
            © {new Date().getFullYear()} Namarg Najd Furniture. Demo Website.
          </p>
          <p className="text-xs text-ivory/25">
            هذا موقع تجريبي — Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
