"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  LayoutGrid,
  List,
  MessageSquarePlus,
  Minus,
  Plus,
  Search,
  Tag,
  X,
} from "lucide-react";
import {
  catalogCategories,
  catalogProducts,
  type CatalogProduct,
  type CategorySlug,
} from "@/data/catalog";
import { uiStrings } from "@/data/translations";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SpotlightSurface } from "./SpotlightSurface";
import { useShowroom } from "./ShowroomProvider";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function ProductCatalogSection() {
  const {
    locale,
    activeCategory,
    setActiveCategory,
    activeBrand,
    setActiveBrand,
    searchQuery,
    setSearchQuery,
    enquiryItems,
    addCatalogItem,
    updateQuantity,
    scrollToSection,
  } = useShowroom();

  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const t = uiStrings[locale].catalog;

  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    for (const product of catalogProducts) {
      if (product.brand) brands.add(product.brand);
    }
    return Array.from(brands).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return catalogProducts.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (activeBrand !== "all" && item.brand !== activeBrand) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        item.name.en,
        item.name.hi,
        item.description.en,
        item.description.hi,
        item.brandModel ?? "",
        item.brand ?? "",
        ...item.searchKeywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, activeBrand, searchQuery]);

  const categoryNameById = useMemo(() => {
    const map = new Map<CategorySlug, string>();
    for (const c of catalogCategories) {
      map.set(c.id, c.shortName[locale]);
    }
    return map;
  }, [locale]);

  const handleReset = () => {
    setActiveCategory("all");
    setActiveBrand("all");
    setSearchQuery("");
  };

  return (
    <section
      id="products"
      className="scroll-mt-20 border-b border-[#E2DDD3] bg-[#FAF8F4] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#136B63]">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F233D] sm:text-3xl">
              {t.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#42546B] sm:text-base">
              {t.subheading}
            </p>
          </div>

          {/* Search Field */}
          <div className="w-full lg:max-w-md">
            <label
              htmlFor="catalog-search"
              className="mb-1.5 block text-xs font-semibold text-[#0F233D]"
            >
              {t.searchLabel}
            </label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5C6D82]"
              />
              <Input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label={t.clearSearch}
                  className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-[#5C6D82] hover:bg-[#EFECE4] hover:text-[#0F233D] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs (Horizontal scroll strip on mobile, wrap cleanly on sm+) */}
        <div
          role="tablist"
          aria-label={t.allCategories}
          className="no-scrollbar -mx-4 mt-6 flex flex-nowrap items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-7 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          <CategoryFilterButton
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            label={t.allCategories}
            layoutId="cat-tab-pill"
          />
          {catalogCategories.map((cat) => (
            <CategoryFilterButton
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              label={cat.name[locale]}
              layoutId="cat-tab-pill"
            />
          ))}
        </div>

        {/* Brand Quick Filter Chips */}
        <div className="no-scrollbar -mx-4 mt-3.5 flex flex-nowrap items-center gap-1.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-4 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          <span className="mr-1 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#5C6D82]">
            <Tag className="h-3.5 w-3.5" />
            {locale === "hi" ? "ब्रांड:" : "Brand:"}
          </span>
          <button
            type="button"
            onClick={() => setActiveBrand("all")}
            className={`shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${activeBrand === "all"
                ? "bg-[#0F233D] text-white"
                : "border border-[#DFD8CA] bg-white text-[#42546B] hover:border-[#136B63]"
              }`}
          >
            {t.allBrands}
          </button>
          {availableBrands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() =>
                setActiveBrand(activeBrand === brand ? "all" : brand)
              }
              className={`shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${activeBrand === brand
                  ? "bg-[#0F233D] text-white"
                  : "border border-[#DFD8CA] bg-white text-[#42546B] hover:border-[#136B63]"
                }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Count Status & View Density Switcher */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-[#5C6D82]">
          <div className="flex flex-wrap items-center gap-3">
            <span>{t.showingCount(filteredProducts.length, catalogProducts.length)}</span>
            {(activeCategory !== "all" || activeBrand !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer font-semibold text-[#136B63] underline-offset-4 hover:underline"
              >
                {t.resetFilters}
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label={locale === "hi" ? "दृश्य बदलें" : "Layout view"}
            className="hidden items-center gap-1 rounded-xl border border-[#DFD8CA] bg-white p-0.5 sm:inline-flex"
          >
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
              aria-label={locale === "hi" ? "ग्रिड व्यू" : "Grid view"}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors cursor-pointer ${viewMode === "grid"
                  ? "bg-[#0F233D] text-white"
                  : "text-[#5C6D82] hover:text-[#0F233D]"
                }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              aria-pressed={viewMode === "compact"}
              aria-label={locale === "hi" ? "कॉम्पैक्ट व्यू" : "Compact list view"}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors cursor-pointer ${viewMode === "compact"
                  ? "bg-[#0F233D] text-white"
                  : "text-[#5C6D82] hover:text-[#0F233D]"
                }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Choreographed Product Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-dashed border-[#CFC6B8] bg-white px-6 py-12 text-center"
          >
            <h3 className="text-base font-bold text-[#0F233D]">{t.emptyTitle}</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#42546B]">
              {t.emptyBody}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button variant="outline" onClick={handleReset}>
                {t.resetFilters}
              </Button>
              <Button variant="primary" onClick={() => scrollToSection("enquiry")}>
                {uiStrings[locale].hero.startEnquiry}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className={
              viewMode === "compact"
                ? "mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2"
                : "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => {
                const inEnquiry = enquiryItems.find((e) => e.id === product.id);
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    viewMode={viewMode}
                    categoryLabel={categoryNameById.get(product.category) ?? ""}
                    locale={locale}
                    inEnquiryQty={inEnquiry?.quantity ?? 0}
                    onAdd={() => addCatalogItem(product)}
                    onIncrement={() => updateQuantity(product.id, 1)}
                    onDecrement={() => updateQuantity(product.id, -1)}
                    onReviewEnquiry={() => scrollToSection("enquiry")}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CategoryFilterButton({
  active,
  onClick,
  label,
  layoutId,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  layoutId: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative shrink-0 cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${active
          ? "text-white"
          : "border border-[#DFD8CA] bg-white text-[#42546B] hover:border-[#136B63]/50 hover:text-[#0F233D]"
        }`}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          className="absolute inset-0 -z-0 rounded-xl bg-[#136B63]"
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </button>
  );
}

function ProductCard({
  product,
  index,
  viewMode,
  categoryLabel,
  locale,
  inEnquiryQty,
  onAdd,
  onIncrement,
  onDecrement,
  onReviewEnquiry,
}: {
  product: CatalogProduct;
  index: number;
  viewMode: "grid" | "compact";
  categoryLabel: string;
  locale: "en" | "hi";
  inEnquiryQty: number;
  onAdd: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onReviewEnquiry: () => void;
}) {
  const t = uiStrings[locale].catalog;
  const ctaLabel =
    product.enquiryCta === "ask-price" ? t.askTodaysPrice : t.checkAvailability;
  const isCompact = viewMode === "compact";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        layout: { type: "spring", stiffness: 320, damping: 28, mass: 0.85 },
        opacity: { duration: 0.28, delay: Math.min(index * 0.025, 0.18) },
        y: { duration: 0.35, delay: Math.min(index * 0.025, 0.18), ease: EASE_OUT },
      }}
      whileHover={{ y: -3 }}
      className="h-full"
    >
      <SpotlightSurface className="h-full rounded-2xl">
        <div
          className={`group relative z-10 flex h-full overflow-hidden rounded-2xl border border-[#E2DDD3] bg-white shadow-[0_2px_10px_rgba(15,35,61,0.03)] transition-shadow duration-300 hover:border-[#136B63]/40 hover:shadow-[0_14px_34px_rgba(15,35,61,0.09)] ${isCompact ? "flex-col sm:flex-row" : "flex-col"
            }`}
        >
          {/* Image Well */}
          <div
            className={`relative overflow-hidden bg-[#F7F5F0] ${isCompact
                ? "aspect-[4/3] w-full shrink-0 border-b border-[#EFECE4] sm:aspect-square sm:w-44 sm:border-b-0 sm:border-r"
                : "aspect-[4/3] w-full border-b border-[#EFECE4]"
              }`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt[locale]}
              fill
              sizes={
                isCompact
                  ? "(max-width: 640px) 100vw, 176px"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              <Badge variant="sand" className="bg-white/92 backdrop-blur-xs">
                {categoryLabel}
              </Badge>
            </div>
            {product.brand && (
              <div className="absolute right-3 top-3">
                <Badge variant="warm" className="bg-[#FBF5EB]/95">
                  {product.brand}
                </Badge>
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
            <div>
              <h3 className="text-base font-bold leading-snug text-[#0F233D] transition-colors group-hover:text-[#136B63] sm:text-lg">
                {product.name[locale]}
              </h3>

              {product.brandModel && (
                <p className="mt-1 text-xs font-semibold text-[#136B63]">
                  {product.brandModel}
                </p>
              )}

              <p className="mt-2 text-sm leading-relaxed text-[#42546B]">
                {product.description[locale]}
              </p>
            </div>

            <div className="mt-4 border-t border-[#EFECE4] pt-3.5 sm:mt-5 sm:pt-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C6D82]">
                <span>{product.unitSpec[locale]}</span>
                <span className="font-semibold text-[#0E544E]">
                  {product.availabilityLabel[locale]}
                </span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {inEnquiryQty > 0 ? (
                  <motion.div
                    key="stepper"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <div className="flex h-11 items-center rounded-xl border border-[#C6E2DD] bg-[#E6F2F0] px-1">
                      <button
                        type="button"
                        onClick={onDecrement}
                        aria-label="Decrease quantity"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#0E544E] hover:bg-white cursor-pointer"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-bold text-[#0F233D]">
                        {inEnquiryQty}
                      </span>
                      <button
                        type="button"
                        onClick={onIncrement}
                        aria-label="Increase quantity"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#0E544E] hover:bg-white cursor-pointer"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <Button
                      variant="navy"
                      size="md"
                      className="min-w-[140px] flex-1"
                      onClick={onReviewEnquiry}
                    >
                      <Check className="h-4 w-4" />
                      <span>{t.addedToEnquiry}</span>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="add-btn"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Button
                      variant="subtle"
                      size="md"
                      className="w-full justify-center"
                      onClick={onAdd}
                    >
                      <MessageSquarePlus className="h-4 w-4" />
                      <span>{ctaLabel}</span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SpotlightSurface>
    </motion.article>
  );
}
