"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight, Building2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { businessConfig } from "@/config/business";
import { uiStrings } from "@/data/translations";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useShowroom } from "./ShowroomProvider";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const { locale, scrollToSection } = useShowroom();
  const t = uiStrings[locale].hero;
  const { whatsapp } = businessConfig.contact;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E2DDD3] bg-gradient-to-b from-[#F7F5F0] via-[#F7F5F0] to-[#EFECE4]/75"
    >
      {/* Subtle Architectural Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#136B63]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#B87A2B]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        {/* Left Copy with Choreographed Reveal */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <Badge variant="teal" className="mb-4 max-w-full px-3 py-1.5 text-[11px] font-semibold sm:mb-5 sm:px-3.5 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#136B63]" />
              <span className="truncate">{t.eyebrow}</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: EASE_OUT }}
            className="text-3xl font-bold tracking-tight text-[#0F233D] sm:text-4xl lg:text-[2.95rem] lg:leading-[1.1]"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE_OUT }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-[#42546B] sm:mt-5 sm:text-base lg:text-lg"
          >
            {t.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE_OUT }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
          >
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("products")}
            >
              <span>{t.browseProducts}</span>
              <ArrowDownRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("enquiry")}
            >
              <MessageCircle className="h-4 w-4 text-[#136B63]" />
              <span>{t.startEnquiry}</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#E2DDD3] pt-4 text-xs font-medium text-[#5C6D82] sm:mt-8 sm:pt-5 sm:text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 shrink-0 text-[#136B63]" />
              <span>{t.servingLine}</span>
            </span>
          </motion.div>
        </div>

        {/* Right Showroom Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE_OUT }}
          className="lg:col-span-6"
        >
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="overflow-hidden rounded-2xl border border-[#DFD8CA] bg-white p-1.5 shadow-[0_18px_45px_rgba(15,35,61,0.08)] sm:rounded-3xl sm:p-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#EFECE4] sm:rounded-2xl">
                <Image
                  src="/images/hero-showroom.jpg"
                  alt={t.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Grounded Factual Showroom Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: EASE_OUT }}
              className="mt-3 rounded-2xl border border-[#E2DDD3] bg-white/96 p-4 shadow-sm backdrop-blur-xs sm:relative sm:z-10 sm:mx-4 sm:-mt-8 sm:p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6F2F0] text-[#136B63]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0F233D]">
                      {t.showroomCardTitle}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#42546B]">
                      {t.showroomCardBody}
                    </p>
                  </div>
                </div>
                {whatsapp.verified && (
                  <a
                    href={`https://wa.me/${whatsapp.waMeDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F2F0] px-3.5 text-xs font-semibold text-[#0E544E] transition-colors hover:bg-[#D5EAE6]"
                  >
                    {whatsapp.display}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
