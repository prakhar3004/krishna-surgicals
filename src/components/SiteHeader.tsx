"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClipboardList, Menu, MessageCircle, Phone, X } from "lucide-react";
import { businessConfig } from "@/config/business";
import { uiStrings } from "@/data/translations";
import { BrandMark } from "./BrandMark";
import { useShowroom } from "./ShowroomProvider";

export function SiteHeader() {
  const { locale, setLocale, enquiryItems, scrollToSection } = useShowroom();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiStrings[locale];

  const totalQty = enquiryItems.reduce((sum, item) => sum + item.quantity, 0);
  const { phone, whatsapp } = businessConfig.contact;

  const navItems = [
    { href: "#products", id: "products", label: t.nav.products },
    { href: "#categories", id: "categories", label: t.nav.categories },
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2DDD3]/90 bg-[#F7F5F0]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3 lg:px-8">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136B63] sm:gap-3"
        >
          <BrandMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight text-[#0F233D] sm:text-lg">
              {businessConfig.name[locale]}
            </span>
            <span className="block truncate text-[11px] font-medium text-[#5C6D82] sm:text-xs">
              {locale === "hi" ? "काकादेव, कानपुर" : "Kakadeo, Kanpur"}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#42546B] transition-colors hover:bg-[#EFECE4] hover:text-[#0F233D]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Language Switcher */}
          <div
            role="group"
            aria-label="Language selection"
            className="relative inline-flex items-center rounded-xl border border-[#D5CEC2] bg-white p-0.5"
          >
            {(["en", "hi"] as const).map((lang) => {
              const active = locale === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  aria-pressed={active}
                  className={`relative z-10 cursor-pointer rounded-[9px] px-2 py-1.5 text-[11px] font-semibold transition-colors sm:px-2.5 sm:text-xs ${
                    active ? "text-white" : "text-[#42546B] hover:text-[#0F233D]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="lang-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-[9px] bg-[#0F233D]"
                    />
                  )}
                  {lang === "en" ? "EN" : "हिन्दी"}
                </button>
              );
            })}
          </div>

          {/* Enquiry List Button */}
          <button
            type="button"
            onClick={() => handleNavClick("enquiry")}
            aria-label={`${t.nav.enquiryTray} (${totalQty})`}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#C6E2DD] bg-[#E6F2F0] px-2.5 text-xs font-semibold text-[#0E544E] transition-colors hover:bg-[#D5EAE6] cursor-pointer sm:px-3"
          >
            <ClipboardList className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline">{t.nav.enquiryTray}</span>
            <motion.span
              key={totalQty}
              initial={{ scale: 0.78 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 520, damping: 24 }}
              className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#136B63] px-1.5 text-[11px] font-bold text-white"
            >
              {totalQty}
            </motion.span>
          </button>

          {/* Verified Call Action */}
          {phone.verified && (
            <a
              href={`tel:${phone.e164}`}
              className="hidden h-10 items-center gap-1.5 rounded-xl border border-[#D5CEC2] bg-white px-3.5 text-xs font-semibold text-[#0F233D] transition-colors hover:bg-[#EFECE4] md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-[#136B63]" />
              <span>{t.nav.callNow}</span>
            </a>
          )}

          {/* Verified WhatsApp Action */}
          {whatsapp.verified && (
            <a
              href={`https://wa.me/${whatsapp.waMeDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-1.5 rounded-xl bg-[#136B63] px-3.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0E544E] sm:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{t.nav.whatsapp}</span>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D5CEC2] bg-white text-[#0F233D] lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E2DDD3] bg-[#F7F5F0] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="flex h-11 items-center rounded-xl px-3 text-sm font-semibold text-[#0F233D] hover:bg-[#EFECE4]"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-2 grid grid-cols-1 gap-2 border-t border-[#E2DDD3] pt-3 sm:grid-cols-2">
                {phone.verified && (
                  <a
                    href={`tel:${phone.e164}`}
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#D5CEC2] bg-white text-sm font-semibold text-[#0F233D]"
                  >
                    <Phone className="h-4 w-4 text-[#136B63]" />
                    {t.nav.callNow}: {phone.display}
                  </a>
                )}
                {whatsapp.verified && (
                  <a
                    href={`https://wa.me/${whatsapp.waMeDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#136B63] text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.nav.whatsapp}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
