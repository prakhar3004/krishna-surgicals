"use client";

import React from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { businessConfig, formatFullAddress } from "@/config/business";
import { uiStrings } from "@/data/translations";
import { BrandMark } from "./BrandMark";
import { useShowroom } from "./ShowroomProvider";

export function SiteFooter() {
  const { locale, scrollToSection } = useShowroom();
  const t = uiStrings[locale];
  const { contact, socialLinks, gstin } = businessConfig;
  const fullAddress = formatFullAddress(locale);

  const navItems = [
    { id: "products", label: t.nav.products },
    { id: "categories", label: t.nav.categories },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
    { id: "enquiry", label: t.nav.enquiryTray },
  ];

  return (
    <footer className="bg-[#0F233D] text-[#E8EEF5]">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div>
                <p className="text-lg font-bold text-white">
                  {businessConfig.name[locale]}
                </p>
                <p className="text-xs text-[#A7BACF]">
                  {businessConfig.tagline[locale]}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#B9C8D9] sm:text-sm">
              {t.footer.enquiryNoteBody}
            </p>
            <p className="mt-3 text-xs font-medium text-[#8FE0D6]">
              {t.footer.establishedNote}
              {gstin.verified ? ` · GSTIN ${gstin.value}` : ""}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9BB2C9]">
              {t.footer.navigationTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-sm text-[#DCE6F2] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Store Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9BB2C9]">
              {t.footer.storeTitle}
            </h3>
            <div className="mt-3 space-y-3 text-sm text-[#DCE6F2]">
              {businessConfig.address.addressVerified && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#66C7BC]" />
                  <span>{fullAddress}</span>
                </div>
              )}

              {contact.phone.verified && (
                <a
                  href={`tel:${contact.phone.e164}`}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#66C7BC]" />
                  <span>{contact.phone.display}</span>
                </a>
              )}

              {contact.whatsapp.verified && (
                <a
                  href={`https://wa.me/${contact.whatsapp.waMeDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#66C7BC]" />
                  <span>WhatsApp: {contact.whatsapp.display}</span>
                </a>
              )}

              {/* Render social links only when confirmed in businessConfig */}
              {socialLinks.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#8FE0D6] hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-[#9BB2C9]">
          <p>{t.footer.copyright(2026)}</p>
        </div>
      </div>
    </footer>
  );
}
