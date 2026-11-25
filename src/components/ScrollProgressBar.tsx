"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Subtle top reading progress indicator calibrated for smooth showroom scrolling. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-50 h-[2.5px] bg-gradient-to-r from-[#0F233D] via-[#136B63] to-[#B87A2B]"
    />
  );
}
