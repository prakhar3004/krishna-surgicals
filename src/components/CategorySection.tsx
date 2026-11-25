"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Accessibility,
  Activity,
  ArrowRight,
  Bandage,
  Bone,
  Wind,
} from "lucide-react";
import {
  catalogCategories,
  catalogProducts,
  type CategorySlug,
} from "@/data/catalog";
import { uiStrings } from "@/data/translations";
import { Badge } from "./ui/badge";
import { CategoryCareDiagram } from "./CategoryCareDiagram";
import { SpotlightSurface } from "./SpotlightSurface";
import { useShowroom } from "./ShowroomProvider";

const categoryIcons: Record<CategorySlug, React.ComponentType<{ className?: string }>> = {
  "orthopaedic-supports": Bone,
  "home-care-mobility": Accessibility,
  "monitoring-diagnostics": Activity,
  "respiratory-therapy": Wind,
  "wound-care-consumables": Bandage,
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function CategorySection() {
  const { locale, activeCategory, selectCategoryAndScroll } = useShowroom();
  const t = uiStrings[locale].categories;

  return (
    <section
      id="categories"
      className="scroll-mt-20 border-b border-[#E2DDD3] bg-[#F7F5F0] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#136B63]">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F233D] sm:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#42546B] sm:text-base">
            {t.subheading}
          </p>
        </motion.div>

        {/* Interactive Assortment Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}
          className="mt-7 sm:mt-8"
        >
          <CategoryCareDiagram onSelectCategory={selectCategoryAndScroll} />
        </motion.div>

        {/* Balanced Editorial Bento Grid: 1-col mobile, 2-col tablet (last spans 2), 6-col desktop (2 wide + 3 cards) */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-6">
          {catalogCategories.map((category, idx) => {
            const Icon = categoryIcons[category.id];
            const count = catalogProducts.filter(
              (p) => p.category === category.id
            ).length;
            const isSelected = activeCategory === category.id;
            const bentoSpan =
              idx < 2
                ? "lg:col-span-3"
                : idx === 4
                  ? "sm:col-span-2 lg:col-span-2"
                  : "lg:col-span-2";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: EASE_OUT,
                }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={bentoSpan}
              >
                <SpotlightSurface className="h-full rounded-2xl">
                  <button
                    type="button"
                    onClick={() => selectCategoryAndScroll(category.id)}
                    className={`group relative z-10 flex h-full w-full flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer sm:p-6 ${
                      isSelected
                        ? "border-[#136B63] bg-[#E6F2F0]/60 shadow-sm"
                        : "border-[#E2DDD3] bg-white hover:border-[#136B63]/50 hover:shadow-[0_14px_32px_rgba(15,35,61,0.07)]"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                          style={{ backgroundColor: category.accentColor }}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="flex flex-wrap items-center justify-end gap-1.5">
                          {isSelected && (
                            <Badge variant="teal">{t.activeFilterHint}</Badge>
                          )}
                          <Badge variant="sand">{t.itemCountLabel(count)}</Badge>
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-[#0F233D] transition-colors group-hover:text-[#136B63]">
                        {category.name[locale]}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#42546B]">
                        {category.summary[locale]}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {category.highlights[locale].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-[#EAE5DC] bg-[#FAF8F4] px-2.5 py-1 text-xs font-medium text-[#42546B] transition-colors group-hover:border-[#D5CEC2]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#EAE5DC] pt-3.5 text-xs font-semibold text-[#136B63]">
                      <span>{t.viewCategory}</span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F2F0] transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-[#136B63] group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                </SpotlightSurface>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
