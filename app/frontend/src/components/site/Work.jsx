import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/site/SectionBadge";
import { portfolio } from "@/lib/content";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

/** Auto-sliding image carousel for portfolio items with multiple images */
const ImageCarousel = ({ images, title, industry }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
  }, [images.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  return (
    <>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} — ${industry} project by Ziyma Systems, slide ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: i === current ? "0ms" : "0ms" }}
        />
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              clearInterval(timerRef.current);
              setCurrent(i);
              startTimer();
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export const Work = () => (
  <section id="work" data-testid="work-section" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 scroll-mt-4">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionBadge number="3" label="Selected work" />
      <h2 className="font-display font-medium leading-[1.08] tracking-[-0.03em] text-[#142523] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-10 sm:mb-14 lg:mb-16">
        Our work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
        {portfolio.map((item, i) => (
          <motion.article
            key={item.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
            data-testid={`work-card-${item.slug}`}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block ${item.aspect} rounded-2xl overflow-hidden bg-[#142523] group cursor-pointer`}
            >
              {/* Carousel (multiple images) or single image */}
              {item.images ? (
                <ImageCarousel images={item.images} title={item.title} industry={item.industry} />
              ) : (
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.industry} project by Ziyma Systems`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
                />
              )}
              <div className="absolute top-4 right-4 text-[11px] font-medium text-[#142523] bg-white/90 backdrop-blur rounded-full px-3 py-1 z-10">
                {item.industry}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center h-9 w-9 group-hover:w-[168px] bg-[#142523] rounded-full overflow-hidden transition-all duration-300 ease-in-out z-10">
                <span className="flex items-center justify-center w-9 h-9 shrink-0">
                  <ArrowRight size={14} className="text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                </span>
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View project
                </span>
              </div>
            </a>
            <p className="text-[13px] sm:text-[14px] text-[#5d6b68] mt-4 leading-relaxed">{item.description}</p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#142523] mt-1">{item.title}</h3>
          </motion.article>
        ))}
      </div>

      <p className="mt-10 sm:mt-14 text-[13px] sm:text-[14px] text-[#5d6b68]">
        New builds are added here as they ship. <button data-testid="work-contact-link" onClick={() => scrollTo("#contact")} className="text-[#E2603B] font-medium hover:underline">Yours could be next →</button>
      </p>
    </div>
  </section>
);
