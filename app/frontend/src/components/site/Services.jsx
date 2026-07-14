import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionBadge } from "@/components/site/SectionBadge";
import { services, industries } from "@/lib/content";

export const Services = () => (
  <section id="services" data-testid="services-section" className="bg-[#F4F1EA] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 scroll-mt-4">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionBadge number="2" label="What we build" border="border-[#d9d3c4]" />
      <h2 className="font-display font-medium leading-[1.08] tracking-[-0.03em] text-[#142523] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-10 sm:mb-14 lg:mb-16">
        Three systems.
        <br />
        One clean operation.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            data-testid={`service-card-${s.num}`}
            className="group bg-white rounded-2xl p-6 sm:p-8 flex flex-col hover:-translate-y-1.5 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-[0_2px_8px_rgba(20,37,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,37,35,0.1)]"
          >
            <span className="text-[13px] font-semibold text-[#E2603B]">{s.num}</span>
            <h3 className="mt-5 text-[20px] sm:text-[22px] font-display font-medium tracking-[-0.02em] text-[#142523]">{s.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5d6b68]">{s.description}</p>
            <ul className="mt-6 pt-6 border-t border-[#efece3] flex flex-col gap-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] text-[#142523]">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#135C50]/10 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-[#135C50]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-2.5" data-testid="industries-strip">
        <span className="text-[13px] text-[#5d6b68] mr-2">Built for</span>
        {industries.map((ind) => (
          <span key={ind} className="text-[12px] sm:text-[13px] font-medium text-[#142523] bg-white border border-[#e5e0d5] rounded-full px-3.5 py-1.5 hover:border-[#135C50] transition-colors duration-300">
            {ind}
          </span>
        ))}
      </div>
    </div>
  </section>
);
