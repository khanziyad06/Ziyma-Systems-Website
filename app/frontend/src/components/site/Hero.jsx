import React from "react";
import { motion } from "framer-motion";
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";
import { Navbar } from "@/components/site/Navbar";
import { RollButton } from "@/components/site/RollButton";
import { StarburstIcon } from "@/components/site/StarburstIcon";

class ShaderBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => (
  <header className="relative min-h-[100svh] flex flex-col bg-[#F4F1EA] overflow-hidden">
    <div className="absolute inset-0 z-10 pointer-events-none">
      <ShaderBoundary>
        <Shader style={{ width: "100%", height: "100%" }}>
          <Swirl colorA="#ffffff" colorB="#ece7d9" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#E2603B"
            leftColor="#135C50"
            rightColor="#E2603B"
            upColor="#135C50"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </ShaderBoundary>
    </div>

    <Navbar />

    <div className="flex-1" />

    <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[13px] sm:text-[14px] text-[#142523] tracking-wide mb-5 sm:mb-8 font-medium"
      >
        Ziyma Systems — India
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        data-testid="hero-headline"
        className="font-display font-medium leading-[1.08] tracking-[-0.03em] text-[#142523] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]"
      >
        We build the websites, data
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        and automations that keep
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        growing businesses moving.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
      >
        <RollButton label="Start a project" testId="hero-start-project-btn" onClick={() => scrollTo("#contact")} />
      </motion.div>
    </div>
  </header>
);
