import { useEffect, useState } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

const useMumbaiTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const time = useMumbaiTime();
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 250 : 0);
  };

  return (
    <>
      <div className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3">
        <nav data-testid="main-navbar" className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-[0_2px_12px_rgba(20,37,35,0.06)]">
          <div className="flex items-center gap-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-testid="nav-logo" className="flex items-center gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#142523] flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight">ZY</span>
              <span className="hidden sm:block text-[14px] font-semibold text-[#142523] tracking-tight pr-2">Ziyma Systems</span>
            </button>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="text-[14px] text-[#142523] hover:text-[#5d6b68] transition-colors duration-300"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="hidden lg:block text-[13px] text-[#5d6b68]">Taking on projects for Q3 2026</span>
            <span className="flex items-center gap-1.5 text-[13px] text-[#5d6b68]">
              <Clock size={14} />
              {time} in Mumbai
            </span>
            <button
              data-testid="nav-cta-button"
              onClick={() => go("#contact")}
              className="group flex items-center gap-2 bg-[#142523] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2"
            >
              <span className="relative overflow-hidden h-[20px]">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] leading-[20px]">Book a consultation</span>
                  <span className="h-[20px] leading-[20px]">Book a consultation</span>
                </span>
              </span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                <ArrowRight size={12} className="text-[#142523] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
              </span>
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center gap-2 bg-[#142523] text-white text-[13px] font-medium rounded-full px-4 py-2.5 mr-[2px]"
          >
            {open ? <X size={14} /> : <Menu size={14} />}
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </div>

      <div className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          data-testid="mobile-menu-sheet"
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "translate-y-0" : "translate-y-[110%]"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-1.5 text-[12px] text-[#5d6b68] border border-[#e5e0d5] rounded-full px-3 py-1.5">
              <Clock size={12} /> {time} in Mumbai
            </span>
            <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} className="w-9 h-9 rounded-full bg-[#F4F1EA] flex items-center justify-center">
              <X size={16} className="text-[#142523]" />
            </button>
          </div>
          <div className="flex flex-col gap-1 mb-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="text-left text-[28px] leading-[38px] font-medium text-[#142523]"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            data-testid="mobile-menu-cta"
            onClick={() => go("#contact")}
            className="w-full flex items-center justify-between bg-[#E2603B] text-white text-[15px] font-medium rounded-full pl-6 pr-2 py-2"
          >
            Start a project
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
              <ArrowRight size={15} className="text-[#E2603B]" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
