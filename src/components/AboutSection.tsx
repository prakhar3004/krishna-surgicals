"use client";

import React from "react";
import { motion } from "motion/react";
import { Building, Calendar, FileCheck2, MapPin, Shield } from "lucide-react";
import { businessConfig } from "@/config/business";
import { uiStrings } from "@/data/translations";
import { Badge } from "./ui/badge";
import { SpotlightSurface } from "./SpotlightSurface";
import { useShowroom } from "./ShowroomProvider";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function AboutSection() {
  const { locale } = useShowroom();
  const t = uiStrings[locale].about;

  const facts = [
    {
      icon: Calendar,
      label: t.facts.establishedLabel,
      value: t.facts.establishedValue,
    },
    {
      icon: Building,
      label: t.facts.roleLabel,
      value: t.facts.roleValue,
    },
    {
      icon: Shield,
      label: t.facts.proprietorLabel,
      value: t.facts.proprietorValue,
    },
    {
      icon: MapPin,
      label: t.facts.locationLabel,
      value: t.facts.locationValue,
    },
  ];

  if (businessConfig.gstin.verified) {
    facts.push({
      icon: FileCheck2,
      label: t.facts.gstLabel,
      value: businessConfig.gstin.value,
    });
  }

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[#E2DDD3] bg-[#F7F5F0] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Story */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#136B63]">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F233D] sm:text-3xl">
              {t.heading}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-[#0F233D]">
              {t.lead}
            </p>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#42546B] sm:text-base">
              {t.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {/* Confirmed Brands Strip */}
            <div className="mt-8 border-t border-[#E2DDD3] pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#5C6D82]">
                {t.brandsHeading}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {businessConfig.confirmedBrands.map((brand, idx) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.025, 0.25) }}
                  >
                    <Badge variant="outline">{brand}</Badge>
                  </motion.span>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#5C6D82]">
                {t.noticeLine}
              </p>
            </div>
          </motion.div>

          {/* Verified Profile Fact Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
            className="lg:col-span-5"
          >
            <SpotlightSurface className="rounded-2xl sm:rounded-3xl">
              <div className="relative z-10 rounded-2xl border border-[#DFD8CA] bg-white p-5 shadow-xs sm:rounded-3xl sm:p-6">
                <h3 className="border-b border-[#EFECE4] pb-3.5 text-base font-bold text-[#0F233D]">
                  {t.factsTitle}
                </h3>
                <dl className="mt-4 divide-y divide-[#EFECE4]">
                  {facts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div
                        key={fact.label}
                        className="flex items-start gap-3.5 py-3.5 first:pt-1 last:pb-1"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6F2F0] text-[#136B63]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <dt className="text-xs font-medium text-[#5C6D82]">
                            {fact.label}
                          </dt>
                          <dd className="mt-0.5 break-words text-sm font-semibold text-[#0F233D]">
                            {fact.value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </SpotlightSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
