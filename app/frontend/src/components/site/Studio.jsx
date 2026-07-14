import { motion } from "framer-motion";
import { SectionBadge } from "@/components/site/SectionBadge";
import { RollButton } from "@/components/site/RollButton";

const IMG_SMALL = "https://static.prod-images.emergentagent.com/jobs/32e17a24-9530-4a08-a15c-e16a911a5745/images/f006b74edfc4e02e48a240ef18ace893e3232820634a20959a3b2009ee94525f.png";
const IMG_LARGE = "https://static.prod-images.emergentagent.com/jobs/32e17a24-9530-4a08-a15c-e16a911a5745/images/bd0d3113b0c4a45ccf8ade1da665208ab7b768ae314978bcd9e5c63b64e6567a.png";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export const Studio = () => (
  <section id="studio" data-testid="studio-section" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden scroll-mt-4">
    <div className="max-w-[1440px] mx-auto">
      <div className="px-5 sm:px-8 lg:px-12">
        <SectionBadge number="1" label="The studio" />
        <motion.h2
          {...fadeUp}
          className="font-display font-medium leading-[1.12] tracking-[-0.02em] text-[#142523] text-[clamp(1.5rem,4vw,3.2rem)] mb-12 sm:mb-16 lg:mb-28"
        >
          Strategy-led systems that turn
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          scattered tools into one clean operation.
        </motion.h2>
      </div>

      <div className="px-5 sm:px-8 lg:px-12 lg:hidden">
        <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-[#142523] max-w-md">
          Your website, your numbers and your daily workflows — connected, so every lead, order and report just works.
        </p>
        <div className="mt-6 mb-10">
          <RollButton label="See what we build" testId="studio-cta-mobile" onClick={() => scrollTo("#services")} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <img src={IMG_SMALL} alt="Abstract teal and cream design representing connected systems" loading="lazy" className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover" />
          <img src={IMG_LARGE} alt="3D visual of connected data pipelines in teal and orange" loading="lazy" className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover" />
        </div>
      </div>

      <motion.div {...fadeUp} className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
        <div className="self-end">
          <img src={IMG_SMALL} alt="Abstract teal and cream design representing connected systems" loading="lazy" className="w-full aspect-[438/346] rounded-2xl object-cover" />
        </div>
        <div className="self-start flex flex-col items-start gap-8">
          <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-[#142523]">
            Your website, your numbers and your
            <br />
            daily workflows — connected, so every
            <br />
            lead, order and report just works.
          </p>
          <RollButton label="See what we build" testId="studio-cta-desktop" onClick={() => scrollTo("#services")} />
        </div>
        <div className="self-end">
          <img src={IMG_LARGE} alt="3D visual of connected data pipelines in teal and orange" loading="lazy" className="w-full aspect-[3/2] rounded-2xl object-cover" />
        </div>
      </motion.div>
    </div>
  </section>
);
