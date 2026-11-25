"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import type { CatalogProduct, CategorySlug } from "@/data/catalog";
import type { Locale } from "@/data/translations";

export interface EnquiryItem {
  id: string;
  nameEn: string;
  nameHi: string;
  brandModel?: string;
  quantity: number;
  isCustom?: boolean;
}

interface ShowroomContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  activeCategory: "all" | CategorySlug;
  setActiveCategory: (cat: "all" | CategorySlug) => void;
  activeBrand: "all" | string;
  setActiveBrand: (brand: "all" | string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  enquiryItems: EnquiryItem[];
  addCatalogItem: (product: CatalogProduct) => void;
  addCustomItem: (label: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearEnquiry: () => void;
  selectCategoryAndScroll: (cat: CategorySlug) => void;
  scrollToSection: (id: string) => void;
}

const ShowroomContext = createContext<ShowroomContextValue | null>(null);

export function ShowroomProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [activeCategory, setActiveCategory] = useState<"all" | CategorySlug>("all");
  const [activeBrand, setActiveBrand] = useState<"all" | string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "hi" ? "hi" : "en";
  }, [locale]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const selectCategoryAndScroll = useCallback(
    (cat: CategorySlug) => {
      setActiveCategory(cat);
      setActiveBrand("all");
      scrollToSection("products");
    },
    [scrollToSection]
  );

  const addCatalogItem = useCallback((product: CatalogProduct) => {
    setEnquiryItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          nameEn: product.name.en,
          nameHi: product.name.hi,
          brandModel: product.brandModel,
          quantity: 1,
        },
      ];
    });
  }, []);

  const addCustomItem = useCallback((label: string) => {
    const trimmed = label.trim();
    if (!trimmed) return;
    const customId = `custom-${trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
    setEnquiryItems((prev) => [
      ...prev,
      {
        id: customId,
        nameEn: trimmed,
        nameHi: trimmed,
        quantity: 1,
        isCustom: true,
      },
    ]);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setEnquiryItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setEnquiryItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearEnquiry = useCallback(() => {
    setEnquiryItems([]);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ShowroomContext.Provider
        value={{
          locale,
          setLocale,
          activeCategory,
          setActiveCategory,
          activeBrand,
          setActiveBrand,
          searchQuery,
          setSearchQuery,
          enquiryItems,
          addCatalogItem,
          addCustomItem,
          updateQuantity,
          removeItem,
          clearEnquiry,
          selectCategoryAndScroll,
          scrollToSection,
        }}
      >
        {children}
      </ShowroomContext.Provider>
    </MotionConfig>
  );
}

export function useShowroom() {
  const ctx = useContext(ShowroomContext);
  if (!ctx) {
    throw new Error("useShowroom must be used inside ShowroomProvider");
  }
  return ctx;
}
