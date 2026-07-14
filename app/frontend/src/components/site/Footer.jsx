import { navLinks, site } from "@/lib/content";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#142523] border-t border-white/10 py-8">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#142523] text-[10px] font-bold">ZY</span>
        <span className="text-[13px] text-white/60">© 2026 {site.name}. All rights reserved.</span>
      </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-5">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">
                {l.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="/privacy-policy" className="text-[12px] text-white/40 hover:text-white/80 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-[12px] text-white/40 hover:text-white/80 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
);
