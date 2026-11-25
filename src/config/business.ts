/**
 * Central editable configuration for Krishna Surgicals.
 *
 * Verification audit against reference sources:
 * - WhatsApp Business (https://wa.me/919415304778): directly confirmed
 *   "Krishna Surgicals — Business Account" for +91 94153 04778.
 * - IndiaMART (https://www.indiamart.com/krishnasurgicals/): confirmed
 *   est. 2020, Proprietorship (Lavi Vishnani), GSTIN 09AOEPV0103P1ZO,
 *   Wholesaler/Trader/Distributor in Kanpur, and catalog brands/models.
 *   Note: IndiaMART JSON-LD lists postalCode "208005" (with blank street)
 *   and PNS virtual forwarding phone "+91-7942838520".
 * - Justdial & India Post cross-checks list 117/N/39, N Block, Avon Market,
 *   Near Ashok Jewellers, Kakadeo, Kanpur, UP 208025 (Kakadeo sub-office PIN).
 * - Live Google Business Profile (https://www.google.com/search?q=krishna+surgicals+kanpur):
 *   could not be inspected directly without an attached Chrome debugging session,
 *   so Google ratings/reviews remain disabled and opening hours stay gated
 *   until confirmed by the business owner against the live Google profile.
 */

export interface DayHours {
  dayEn: string;
  dayHi: string;
  hoursEn: string;
  hoursHi: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface BusinessConfig {
  siteUrl: string;
  name: {
    en: string;
    hi: string;
  };
  tagline: {
    en: string;
    hi: string;
  };
  establishedYear: number;
  businessType: {
    en: string;
    hi: string;
  };
  proprietor: {
    name: string;
    verified: boolean;
  };
  gstin: {
    value: string;
    verified: boolean;
  };
  address: {
    streetLine: string;
    streetLineHi: string;
    landmark: string;
    landmarkHi: string;
    locality: string;
    localityHi: string;
    city: string;
    cityHi: string;
    state: string;
    stateHi: string;
    postalCode: string;
    country: string;
    /** Toggle false to hide postal code if owner needs to revise 208025 vs 208005. */
    postalCodeVerified: boolean;
    /** Confirmed against Justdial/WhatsApp snippets & India Post Kakadeo PIN; owner should verify against live GBP. */
    addressVerified: boolean;
    directionsUrl: string;
  };
  contact: {
    phone: {
      e164: string;
      display: string;
      verified: boolean;
    };
    whatsapp: {
      /** Digits only with country code for wa.me links (e.g. "919415304778"). */
      waMeDigits: string;
      display: string;
      /** Prefilled WhatsApp links are enabled only when verified is true. */
      verified: boolean;
    };
    /** Optional IndiaMART virtual helpline (+91-7942838520); kept in config for reference. */
    secondaryListingPhone?: string;
    email?: {
      address: string;
      verified: boolean;
    };
  };
  openingHours: {
    /** Set to true after confirming live Google Business Profile timings. */
    verified: boolean;
    /** Staged from directory cross-checks; rendered only when verified is true. */
    schedule: DayHours[];
  };
  reviews: {
    /** Keep false unless ratings/quotes are directly verified from the live Google profile. */
    verified: boolean;
    ratingValue?: number;
    reviewCount?: number;
  };
  /** Keep empty unless official social media handles are confirmed. */
  socialLinks: SocialLink[];
  /** Confirmed brands observed in the Krishna Surgicals catalog. */
  confirmedBrands: string[];
}

export const businessConfig: BusinessConfig = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://krishnasurgicals.in"),
  name: {
    en: "Krishna Surgicals",
    hi: "कृष्णा सर्जिकल्स",
  },
  tagline: {
    en: "Medical, Orthopaedic & Home-Care Supplies",
    hi: "मेडिकल, ऑर्थोपेडिक और होम-केयर सामग्री",
  },
  establishedYear: 2020,
  businessType: {
    en: "Wholesaler, Distributor & Retail Medical Store",
    hi: "होलसेलर, डिस्ट्रीब्यूटर एवं रिटेल मेडिकल सप्लायर",
  },
  proprietor: {
    name: "Lavi Vishnani",
    verified: true,
  },
  gstin: {
    value: "09AOEPV0103P1ZO",
    verified: true,
  },
  address: {
    streetLine: "117/N/39, N Block, Avon Market",
    streetLineHi: "117/N/39, N ब्लॉक, एवन मार्केट",
    landmark: "Near Ashok Jewellers",
    landmarkHi: "अशोक ज्वैलर्स के पास",
    locality: "Kakadeo",
    localityHi: "काकादेव",
    city: "Kanpur",
    cityHi: "कानपुर",
    state: "Uttar Pradesh",
    stateHi: "उत्तर प्रदेश",
    postalCode: "208025",
    country: "IN",
    postalCodeVerified: true,
    addressVerified: true,
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Krishna+Surgicals+117+N+39+Avon+Market+Kakadeo+Kanpur+208025",
  },
  contact: {
    phone: {
      e164: "+919415304778",
      display: "+91 94153 04778",
      verified: true,
    },
    whatsapp: {
      waMeDigits: "919415304778",
      display: "+91 94153 04778",
      verified: true,
    },
    secondaryListingPhone: "+91-7942838520",
  },
  openingHours: {
    // Owner verification required against live Google Business Profile before publishing timings.
    verified: false,
    schedule: [
      {
        dayEn: "Monday – Saturday",
        dayHi: "सोमवार – शनिवार",
        hoursEn: "10:00 AM – 9:00 PM",
        hoursHi: "सुबह 10:00 – रात 9:00 बजे",
      },
      {
        dayEn: "Sunday",
        dayHi: "रविवार",
        hoursEn: "11:30 AM – 5:00 PM",
        hoursHi: "सुबह 11:30 – शाम 5:00 बजे",
      },
    ],
  },
  reviews: {
    verified: false,
  },
  socialLinks: [],
  confirmedBrands: [
    "Tynor",
    "AccuSure",
    "Accu-Chek",
    "OneTouch",
    "Contour Plus",
    "Dr. Morepen",
    "Control D",
    "Karma",
    "Vissco",
    "Dr. ORG",
    "Hicks",
    "Microtek",
    "Surgicare",
    "Surgiwear",
    "Gelonet",
    "Frido",
  ],
};

/** Format full readable address from verified fields. */
export function formatFullAddress(locale: "en" | "hi"): string {
  const { address } = businessConfig;
  const parts =
    locale === "hi"
      ? [
          address.streetLineHi,
          address.landmarkHi,
          address.localityHi,
          `${address.cityHi}, ${address.stateHi}`,
        ]
      : [
          address.streetLine,
          address.landmark,
          address.locality,
          `${address.city}, ${address.state}`,
        ];

  const pinSuffix = address.postalCodeVerified ? ` - ${address.postalCode}` : "";
  return `${parts.join(", ")}${pinSuffix}`;
}

/** Build a verified WhatsApp prefilled URL, returning null if WhatsApp is unverified. */
export function buildWhatsAppEnquiryUrl(message: string): string | null {
  const { whatsapp } = businessConfig.contact;
  if (!whatsapp.verified || !whatsapp.waMeDigits) {
    return null;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${whatsapp.waMeDigits}?text=${encoded}`;
}
