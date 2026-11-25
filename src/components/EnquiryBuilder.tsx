"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  Copy,
  ExternalLink,
  Info,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Trash2,
} from "lucide-react";
import { buildWhatsAppEnquiryUrl, businessConfig } from "@/config/business";
import { catalogProducts } from "@/data/catalog";
import { uiStrings } from "@/data/translations";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useShowroom } from "./ShowroomProvider";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function EnquiryBuilder() {
  const {
    locale,
    enquiryItems,
    addCatalogItem,
    addCustomItem,
    updateQuantity,
    removeItem,
    clearEnquiry,
  } = useShowroom();

  const t = uiStrings[locale].enquiry;

  const [selectedQuickId, setSelectedQuickId] = useState<string>("");
  const [customItemInput, setCustomItemInput] = useState<string>("");
  const [buyerType, setBuyerType] = useState<"home" | "clinic">("home");
  const [notes, setNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleQuickAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuickId) return;
    const found = catalogProducts.find((p) => p.id === selectedQuickId);
    if (found) {
      addCatalogItem(found);
      setSelectedQuickId("");
    }
  };

  const handleCustomAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemInput.trim()) return;
    addCustomItem(customItemInput);
    setCustomItemInput("");
  };

  const composedMessage = useMemo(() => {
    const isHi = locale === "hi";
    const buyerLabel =
      buyerType === "clinic"
        ? isHi
          ? "क्लिनिक / अस्पताल / होलसेल पूछताछ"
          : "Clinic / Hospital / Wholesale enquiry"
        : isHi
          ? "घरेलू / व्यक्तिगत पूछताछ"
          : "Home / Family care enquiry";

    const lines: string[] = [
      isHi
        ? "नमस्ते कृष्णा सर्जिकल्स (काकादेव, कानपुर),"
        : "Hello Krishna Surgicals (Kakadeo, Kanpur),",
      isHi
        ? `मैं आज के रेट और उपलब्धता के बारे में जानकारी चाहता/चाहती हूँ (${buyerLabel}):`
        : `Please share today's price and availability (${buyerLabel}):`,
      "",
    ];

    if (enquiryItems.length > 0) {
      enquiryItems.forEach((item, index) => {
        const label = isHi ? item.nameHi : item.nameEn;
        const modelText = item.brandModel ? ` [${item.brandModel}]` : "";
        lines.push(`${index + 1}. ${label}${modelText} — Qty: ${item.quantity}`);
      });
    } else {
      lines.push(
        isHi
          ? "- (कोई आइटम चयनित नहीं है — कृपया उत्पाद का नाम लिखें)"
          : "- (Please let me know current availability and pricing)"
      );
    }

    if (notes.trim()) {
      lines.push("");
      lines.push(isHi ? `नोट: ${notes.trim()}` : `Note: ${notes.trim()}`);
    }

    return lines.join("\n");
  }, [locale, buyerType, enquiryItems, notes]);

  const { whatsapp, phone } = businessConfig.contact;
  const prefilledWaUrl = buildWhatsAppEnquiryUrl(composedMessage);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <section
      id="enquiry"
      className="scroll-mt-20 border-b border-[#E2DDD3] bg-[#EFECE4]/65 py-12 sm:py-16 lg:py-20"
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
          {/* Left: Item Selector & Shortlist */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="flex flex-col gap-5 rounded-2xl border border-[#DFD8CA] bg-white p-4 shadow-xs sm:rounded-3xl sm:p-6 lg:col-span-6"
          >
            <div className="flex items-center justify-between border-b border-[#EFECE4] pb-3">
              <h3 className="text-base font-bold text-[#0F233D]">
                {t.selectedItemsTitle} ({enquiryItems.length})
              </h3>
              {enquiryItems.length > 0 && (
                <button
                  type="button"
                  onClick={clearEnquiry}
                  className="cursor-pointer text-xs font-semibold text-[#5C6D82] hover:text-[#0F233D]"
                >
                  {t.clearList}
                </button>
              )}
            </div>

            {/* Selected Items List with Animated Transitions */}
            {enquiryItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#D5CEC2] bg-[#FAF8F4] px-4 py-6 text-sm leading-relaxed text-[#5C6D82]">
                {t.emptyListPrompt}
              </div>
            ) : (
              <ul className="flex flex-col gap-2.5" aria-label={t.selectedItemsTitle}>
                <AnimatePresence initial={false}>
                  {enquiryItems.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -16, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2DDD3] bg-[#FAF8F4] px-3.5 py-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#0F233D]">
                          {locale === "hi" ? item.nameHi : item.nameEn}
                        </p>
                        {item.brandModel && (
                          <p className="truncate text-xs text-[#136B63]">
                            {item.brandModel}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-[#D5CEC2] bg-white px-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`${t.quantityLabel} -1`}
                            className="flex h-9 w-9 items-center justify-center rounded-md text-[#0F233D] hover:bg-[#EFECE4] cursor-pointer"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-7 text-center text-xs font-bold text-[#0F233D]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`${t.quantityLabel} +1`}
                            className="flex h-9 w-9 items-center justify-center rounded-md text-[#0F233D] hover:bg-[#EFECE4] cursor-pointer"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={t.removeItem}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#5C6D82] hover:bg-white hover:text-[#B42318] cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            {/* Quick Add from Catalog */}
            <form onSubmit={handleQuickAdd} className="border-t border-[#EFECE4] pt-4">
              <label
                htmlFor="quick-add-select"
                className="mb-1.5 block text-xs font-semibold text-[#0F233D]"
              >
                {t.quickAddLabel}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  id="quick-add-select"
                  value={selectedQuickId}
                  onChange={(e) => setSelectedQuickId(e.target.value)}
                  className="h-11 w-full min-w-0 flex-1 rounded-xl border border-[#D5CEC2] bg-white px-3 text-sm text-[#0F233D] focus:border-[#136B63] focus:outline-none"
                >
                  <option value="">{t.quickAddPlaceholder}</option>
                  {catalogProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name[locale]}
                      {p.brandModel ? ` (${p.brand ?? p.brandModel})` : ""}
                    </option>
                  ))}
                </select>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full sm:w-auto"
                  disabled={!selectedQuickId}
                >
                  {t.addItemButton}
                </Button>
              </div>
            </form>

            {/* Add Custom Item */}
            <form onSubmit={handleCustomAdd}>
              <label
                htmlFor="custom-item-input"
                className="mb-1.5 block text-xs font-semibold text-[#0F233D]"
              >
                {t.customItemLabel}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  id="custom-item-input"
                  value={customItemInput}
                  onChange={(e) => setCustomItemInput(e.target.value)}
                  placeholder={t.customItemPlaceholder}
                />
                <Button
                  type="submit"
                  variant="subtle"
                  className="w-full sm:w-auto"
                  disabled={!customItemInput.trim()}
                >
                  {t.addCustomButton}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right: Buyer Context, Live Message Preview & Channel Action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
            className="flex flex-col justify-between gap-5 rounded-2xl border border-[#DFD8CA] bg-white p-4 shadow-xs sm:rounded-3xl sm:p-6 lg:col-span-6"
          >
            <div className="space-y-4">
              {/* Buyer Type */}
              <div>
                <span className="mb-2 block text-xs font-semibold text-[#0F233D]">
                  {t.buyerTypeLabel}
                </span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {(
                    [
                      { key: "home", label: t.buyerHome },
                      { key: "clinic", label: t.buyerClinic },
                    ] as const
                  ).map((opt) => {
                    const active = buyerType === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setBuyerType(opt.key)}
                        aria-pressed={active}
                        className={`relative flex h-11 items-center justify-center rounded-xl border px-3 text-xs font-semibold transition-colors cursor-pointer sm:text-sm ${
                          active
                            ? "border-[#136B63] bg-[#E6F2F0] text-[#0E544E]"
                            : "border-[#D5CEC2] bg-white text-[#42546B] hover:bg-[#FAF8F4]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label
                  htmlFor="enquiry-notes"
                  className="mb-1.5 block text-xs font-semibold text-[#0F233D]"
                >
                  {t.notesLabel}
                </label>
                <Textarea
                  id="enquiry-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.notesPlaceholder}
                  rows={3}
                />
              </div>

              {/* Live Message Preview */}
              <div>
                <span className="mb-1.5 block text-xs font-semibold text-[#0F233D]">
                  {t.previewLabel}
                </span>
                <pre className="max-h-44 overflow-y-auto whitespace-pre-wrap break-words rounded-2xl border border-[#E2DDD3] bg-[#FAF8F4] p-3.5 font-sans text-xs leading-relaxed text-[#0F233D] sm:p-4 sm:text-sm">
                  {composedMessage}
                </pre>
              </div>
            </div>

            {/* Channel Disclosure & Actions */}
            <div className="space-y-3 border-t border-[#EFECE4] pt-4">
              <div className="flex items-start gap-2.5 rounded-xl bg-[#E6F2F0]/70 p-3 text-xs leading-relaxed text-[#0E544E]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#136B63]" />
                <span>
                  {whatsapp.verified
                    ? t.channelNoticeVerified(whatsapp.display)
                    : t.channelNoticeUnverified}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                {prefilledWaUrl && (
                  <a
                    href={prefilledWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#136B63] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0E544E] sm:flex-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t.sendWhatsApp}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                )}

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#136B63]" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>{t.copyMessage}</span>
                    </>
                  )}
                </Button>

                {phone.verified && (
                  <a
                    href={`tel:${phone.e164}`}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#D5CEC2] bg-white px-4 text-sm font-semibold text-[#0F233D] transition-colors hover:bg-[#EFECE4] sm:w-auto"
                  >
                    <Phone className="h-4 w-4 text-[#136B63]" />
                    <span>{t.callInstead}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
