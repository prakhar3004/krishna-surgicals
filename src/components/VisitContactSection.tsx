"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { businessConfig, formatFullAddress } from "@/config/business";
import { uiStrings } from "@/data/translations";
import { Badge } from "./ui/badge";
import { SpotlightSurface } from "./SpotlightSurface";
import { useShowroom } from "./ShowroomProvider";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function VisitContactSection() {
  const { locale } = useShowroom();
  const t = uiStrings[locale].visit;
  const { address, contact, openingHours } = businessConfig;
  const fullAddress = formatFullAddress(locale);

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-[#E2DDD3] bg-[#FAF8F4] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
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

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Verified Contact Details */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {/* Address Card */}
            {address.addressVerified && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="sm:col-span-2"
              >
                <SpotlightSurface className="h-full rounded-2xl">
                  <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl border border-[#DFD8CA] bg-white p-5">
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F2F0] text-[#136B63]">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#5C6D82]">
                          {t.addressLabel}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold leading-snug text-[#0F233D] sm:text-base">
                          {fullAddress}
                        </p>
                        <p className="mt-1 text-xs text-[#42546B]">
                          {t.landmarkPrefix}{" "}
                          {locale === "hi" ? address.landmarkHi : address.landmark}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-[#EFECE4] pt-3">
                      <a
                        href={address.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0F233D] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#193356] sm:w-auto"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>{t.directionsCta}</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                </SpotlightSurface>
              </motion.div>
            )}

            {/* Verified Phone */}
            {contact.phone.verified && (
              <motion.a
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.4, delay: 0.05, ease: EASE_OUT }}
                whileHover={{ y: -2 }}
                href={`tel:${contact.phone.e164}`}
                className="group flex flex-col justify-between rounded-2xl border border-[#DFD8CA] bg-white p-5 transition-all hover:border-[#136B63] hover:shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFECE4] text-[#0F233D] transition-colors group-hover:bg-[#E6F2F0] group-hover:text-[#136B63]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#5C6D82]">
                      {t.phoneLabel}
                    </p>
                    <p className="mt-1 break-all text-base font-bold text-[#0F233D]">
                      {contact.phone.display}
                    </p>
                  </div>
                </div>
              </motion.a>
            )}

            {/* Verified WhatsApp */}
            {contact.whatsapp.verified && (
              <motion.a
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT }}
                whileHover={{ y: -2 }}
                href={`https://wa.me/${contact.whatsapp.waMeDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-[#C6E2DD] bg-[#E6F2F0]/55 p-5 transition-all hover:border-[#136B63] hover:shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#136B63] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#0E544E]">
                      {t.whatsappLabel}
                    </p>
                    <p className="mt-1 break-all text-base font-bold text-[#0F233D]">
                      {contact.whatsapp.display}
                    </p>
                    <p className="mt-0.5 text-xs text-[#42546B]">
                      {t.whatsappSub}
                    </p>
                  </div>
                </div>
              </motion.a>
            )}

            {/* Opening Hours — Only show scheduled hours when verified against Google Profile */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.4, delay: 0.12, ease: EASE_OUT }}
              className="rounded-2xl border border-[#DFD8CA] bg-white p-5 sm:col-span-2"
            >
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBF5EB] text-[#8A5A2B]">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#5C6D82]">
                    {t.hoursLabel}
                  </p>
                  {openingHours.verified ? (
                    <dl className="mt-2 space-y-1.5">
                      {openingHours.schedule.map((row) => (
                        <div
                          key={row.dayEn}
                          className="flex flex-wrap items-center justify-between gap-2 text-sm"
                        >
                          <dt className="font-medium text-[#42546B]">
                            {locale === "hi" ? row.dayHi : row.dayEn}
                          </dt>
                          <dd className="font-semibold text-[#0F233D]">
                            {locale === "hi" ? row.hoursHi : row.hoursEn}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <div className="mt-1">
                      <p className="text-sm font-semibold text-[#0F233D]">
                        {t.hoursPendingTitle}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5C6D82]">
                        {t.hoursPendingNote}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stylized Kakadeo / Avon Market Location Schematic */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
            className="rounded-2xl border border-[#DFD8CA] bg-white p-5 shadow-xs sm:rounded-3xl lg:col-span-5"
          >
            <div className="flex items-center justify-between gap-2">
              <Badge variant="teal">{t.mapCardBadge}</Badge>
              <a
                href={address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#136B63] hover:underline"
              >
                Google Maps →
              </a>
            </div>

            <div className="bg-showroom-grid relative mt-4 overflow-hidden rounded-2xl border border-[#E2DDD3] bg-[#F7F5F0] p-4">
              <svg
                viewBox="0 0 360 220"
                className="h-44 w-full sm:h-48"
                role="img"
                aria-label={`${t.mapCardTitle}: ${address.streetLine}, ${address.locality}, ${address.city}`}
              >
                {/* Neighborhood road schematic */}
                <path
                  d="M16 145 L344 145"
                  stroke="#D5CEC2"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M120 20 L120 205"
                  stroke="#D5CEC2"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M250 34 L250 198"
                  stroke="#E2DDD3"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Avon Market Block highlight */}
                <rect
                  x="138"
                  y="62"
                  width="96"
                  height="64"
                  rx="10"
                  fill="#E6F2F0"
                  stroke="#136B63"
                  strokeWidth="1.5"
                />
                <text
                  x="186"
                  y="83"
                  textAnchor="middle"
                  fill="#0E544E"
                  fontSize="10"
                  fontWeight="700"
                >
                  N Block · Avon Market
                </text>
                <text
                  x="186"
                  y="98"
                  textAnchor="middle"
                  fill="#42546B"
                  fontSize="9"
                >
                  Near Ashok Jewellers
                </text>

                {/* Animated Beacon Pulse */}
                <motion.circle
                  cx="186"
                  cy="116"
                  r="11"
                  fill="#136B63"
                  fillOpacity="0.22"
                  animate={{ r: [8, 16, 8], opacity: [0.35, 0.08, 0.35] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="186" cy="116" r="5.5" fill="#136B63" />

                {/* Road labels */}
                <text x="24" y="135" fill="#5C6D82" fontSize="9.5" fontWeight="600">
                  Kakadeo · Kanpur
                </text>
                {address.postalCodeVerified && (
                  <text x="275" y="135" fill="#5C6D82" fontSize="9.5" fontWeight="600">
                    PIN {address.postalCode}
                  </text>
                )}
              </svg>
            </div>

            <h3 className="mt-4 text-sm font-bold text-[#0F233D]">
              {t.mapCardTitle}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[#42546B]">
              {t.mapCardNote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
