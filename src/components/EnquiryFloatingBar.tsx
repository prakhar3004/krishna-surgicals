"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ClipboardList } from "lucide-react";
import { uiStrings } from "@/data/translations";
import { useShowroom } from "./ShowroomProvider";

export function EnquiryFloatingBar() {
  const { locale, enquiryItems, scrollToSection } = useShowroom();
  const totalCount = enquiryItems.reduce((sum, i) => sum + i.quantity, 0);
  const t = uiStrings[locale].enquiry;

  return (
    <AnimatePresence>
      {totalCount > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 30 }}
          className="pointer-events-none fixed inset-x-0 bottom-3 z-30 flex justify-center px-3 sm:bottom-4 sm:px-4"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("enquiry")}
            className="pointer-events-auto flex max-w-[calc(100vw-1.5rem)] items-center gap-2.5 rounded-2xl border border-[#1E7C73] bg-[#0F233D] px-3.5 py-2.5 text-white shadow-[0_12px_30px_rgba(15,35,61,0.28)] cursor-pointer sm:gap-3 sm:px-4 sm:py-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#136B63]">
              <ClipboardList className="h-4 w-4" />
            </span>
            <motion.span
              key={totalCount}
              initial={{ opacity: 0.6, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              className="truncate text-xs font-semibold sm:text-sm"
            >
              {t.floatingLabel(totalCount)}
            </motion.span>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-white/15 px-2.5 py-1.5 text-xs font-bold text-[#8FE0D6] sm:px-3">
              {t.floatingAction}
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
