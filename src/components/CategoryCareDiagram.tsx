"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  Accessibility,
  Bandage,
  Bone,
  Wind,
} from "lucide-react";
import { catalogCategories, type CategorySlug } from "@/data/catalog";
import { uiStrings } from "@/data/translations";
import { useShowroom } from "./ShowroomProvider";

const iconMap: Record<CategorySlug, React.ComponentType<{ className?: string }>> = {
  "orthopaedic-supports": Bone,
  "home-care-mobility": Accessibility,
  "monitoring-diagnostics": Activity,
  "respiratory-therapy": Wind,
  "wound-care-consumables": Bandage,
};

interface CategoryCareDiagramProps {
  onSelectCategory: (cat: CategorySlug) => void;
}

/**
 * Interactive Care-Area Selector Diagram.
 * Visually maps the 5 supply categories across a home & clinic recovery layout
 * with animated architectural signal lines and responsive 1 / 2 / 5 column framing.
 */
export function CategoryCareDiagram({ onSelectCategory }: CategoryCareDiagramProps) {
  const { locale, activeCategory } = useShowroom();
  const t = uiStrings[locale].categories;

  const nodes: Array<{ id: CategorySlug }> = [
    { id: "orthopaedic-supports" },
    { id: "home-care-mobility" },
    { id: "monitoring-diagnostics" },
    { id: "respiratory-therapy" },
    { id: "wound-care-consumables" },
  ];

  return (
    <div className="rounded-2xl border border-[#DFD8CA] bg-white p-4 shadow-[0_4px_20px_rgba(15,35,61,0.04)] sm:rounded-3xl sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#0F233D] sm:text-base">
            {t.diagramTitle}
          </h3>
          <p className="text-xs text-[#5C6D82]">{t.diagramSubtitle}</p>
        </div>
        <span className="rounded-full bg-[#EFECE4] px-3 py-1 text-[11px] font-semibold text-[#42546B]">
          5 {locale === "hi" ? "मुख्य श्रेणियाँ" : "Care Areas"}
        </span>
      </div>

      {/* Interactive Blueprint Canvas */}
      <div className="bg-showroom-grid relative overflow-hidden rounded-2xl border border-[#E2DDD3] bg-[#FAF8F4] p-3.5 sm:p-5">
        {/* Animated architectural connector lines */}
        <svg
          viewBox="0 0 400 220"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M40 56 C 125 56, 155 110, 200 110 C 245 110, 275 52, 360 52"
            stroke="#136B63"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M40 166 C 125 166, 155 110, 200 110 C 245 110, 275 166, 360 166"
            stroke="#0F233D"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
            animate={{ strokeDashoffset: [0, 24] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <circle cx="200" cy="110" r="34" stroke="#136B63" strokeOpacity="0.2" fill="none" />
          <circle cx="200" cy="110" r="56" stroke="#B87A2B" strokeOpacity="0.14" fill="none" />
        </svg>

        <div className="relative grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {nodes.map((node, index) => {
            const cat = catalogCategories.find((c) => c.id === node.id)!;
            const Icon = iconMap[node.id];
            const isSelected = activeCategory === node.id;
            return (
              <motion.button
                key={node.id}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(node.id)}
                aria-pressed={isSelected}
                className={`group flex flex-col items-start justify-between rounded-xl border p-3.5 text-left transition-colors cursor-pointer sm:last:col-span-2 lg:last:col-span-1 ${
                  isSelected
                    ? "border-[#136B63] bg-[#E6F2F0] shadow-xs"
                    : "border-[#E2DDD3] bg-white/95 hover:border-[#136B63]/55 hover:bg-white"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105 ${
                      isSelected
                        ? "bg-[#136B63] text-white"
                        : "bg-[#EFECE4] text-[#0F233D] group-hover:bg-[#E6F2F0] group-hover:text-[#136B63]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#5C6D82]">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-[#0F233D]">
                    {cat.shortName[locale]}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#5C6D82]">
                    {cat.careZone[locale]}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
