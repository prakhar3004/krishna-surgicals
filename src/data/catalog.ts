/**
 * Central editable product & category catalog for Krishna Surgicals.
 *
 * Guidelines followed:
 * - Every product description is strictly factual (materials, format, device type).
 * - No treatment, diagnosis, guaranteed-result, or clinical-suitability claims.
 * - `brandModel` is populated only where confirmed in the seller's catalog listings.
 * - No unverified prices or stock numbers; cards route visitors to enquiry actions.
 */

export type CategorySlug =
  | "orthopaedic-supports"
  | "home-care-mobility"
  | "monitoring-diagnostics"
  | "respiratory-therapy"
  | "wound-care-consumables";

export interface CatalogCategory {
  id: CategorySlug;
  name: {
    en: string;
    hi: string;
  };
  shortName: {
    en: string;
    hi: string;
  };
  summary: {
    en: string;
    hi: string;
  };
  highlights: {
    en: string[];
    hi: string[];
  };
  accentColor: string;
  careZone: {
    en: string;
    hi: string;
  };
}

export type EnquiryCtaKind = "ask-price" | "check-availability";

export interface CatalogProduct {
  id: string;
  slug: string;
  category: CategorySlug;
  name: {
    en: string;
    hi: string;
  };
  /** Populated only when confirmed on supplier catalog listings; omitted otherwise. */
  brandModel?: string;
  brand?: string;
  image: string;
  imageAlt: {
    en: string;
    hi: string;
  };
  /** Factual hardware/material summary without clinical or outcome claims. */
  description: {
    en: string;
    hi: string;
  };
  unitSpec: {
    en: string;
    hi: string;
  };
  enquiryCta: EnquiryCtaKind;
  availabilityLabel: {
    en: string;
    hi: string;
  };
  searchKeywords: string[];
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: "orthopaedic-supports",
    name: {
      en: "Orthopaedic Supports",
      hi: "ऑर्थोपेडिक सपोर्ट",
    },
    shortName: {
      en: "Orthopaedic",
      hi: "ऑर्थोपेडिक",
    },
    summary: {
      en: "Lumbo-sacral belts, knee caps, ankle splints, cervical collars, and shoulder supports across standard sizes.",
      hi: "मानक साइज में लम्बो-सैक्रल बेल्ट, नी कैप, एंकल स्प्लिंट, सर्वाइकल कॉलर और शोल्डर सपोर्ट।",
    },
    highlights: {
      en: ["LS & Back Belts", "Knee & Ankle Supports", "Cervical Collars", "Shoulder Braces"],
      hi: ["एलएस और बैक बेल्ट", "नी और एंकल सपोर्ट", "सर्वाइकल कॉलर", "शोल्डर ब्रेस"],
    },
    accentColor: "#136B63",
    careZone: {
      en: "Spine, Neck & Joint Bracing",
      hi: "रीढ़, गर्दन और जोड़ों के सपोर्ट",
    },
  },
  {
    id: "home-care-mobility",
    name: {
      en: "Home Care & Mobility",
      hi: "होम केयर और मोबिलिटी",
    },
    shortName: {
      en: "Mobility & Beds",
      hi: "मोबिलिटी व बेड",
    },
    summary: {
      en: "Folding wheelchairs, walkers, commode chairs, hospital beds, stretchers, and alternating-pressure mattresses.",
      hi: "फोल्डिंग व्हीलचेयर, वॉकर, कमोड चेयर, हॉस्पिटल बेड, स्ट्रेचर और एयर मैट्रेस।",
    },
    highlights: {
      en: ["Wheelchairs & Walkers", "Commode Chairs", "Hospital Beds", "Air Mattresses"],
      hi: ["व्हीलचेयर व वॉकर", "कमोड चेयर", "हॉस्पिटल बेड", "एयर मैट्रेस"],
    },
    accentColor: "#1B4965",
    careZone: {
      en: "Room Setup & Daily Transfer",
      hi: "रूम सेटअप और आवागमन सहायता",
    },
  },
  {
    id: "monitoring-diagnostics",
    name: {
      en: "Monitoring & Diagnostics",
      hi: "मॉनिटरिंग और डायग्नोस्टिक्स",
    },
    shortName: {
      en: "Monitoring",
      hi: "मॉनिटरिंग",
    },
    summary: {
      en: "Digital blood pressure monitors, pulse oximeters, blood glucose meters, test strips, and thermometers.",
      hi: "डिजिटल बीपी मॉनिटर, पल्स ऑक्सीमीटर, ग्लूकोमीटर, टेस्ट स्ट्रिप्स और थर्मामीटर।",
    },
    highlights: {
      en: ["BP Monitors", "Pulse Oximeters", "Glucometers & Strips", "Thermometers"],
      hi: ["बीपी मॉनिटर", "पल्स ऑक्सीमीटर", "ग्लूकोमीटर व स्ट्रिप्स", "थर्मामीटर"],
    },
    accentColor: "#246A73",
    careZone: {
      en: "Home & Clinic Vitals",
      hi: "घर व क्लिनिक वाइटल्स जांच",
    },
  },
  {
    id: "respiratory-therapy",
    name: {
      en: "Respiratory & Home Therapy",
      hi: "श्वसन और होम थेरेपी",
    },
    shortName: {
      en: "Respiratory",
      hi: "श्वसन उपकरण",
    },
    summary: {
      en: "Mesh and compressor nebulizers, oxygen concentrators, 3-ball respiratory exercisers, and electric heating pads.",
      hi: "मेश व कम्प्रेसर नेबुलाइज़र, ऑक्सीजन कॉन्सेंट्रेटर, रेस्पिरेटरी एक्सरसाइज़र और हीटिंग पैड।",
    },
    highlights: {
      en: ["Nebulizers", "Oxygen Concentrators", "3-Ball Exercisers", "Heating Pads"],
      hi: ["नेबुलाइज़र", "ऑक्सीजन कॉन्सेंट्रेटर", "थ्री-बॉल एक्सरसाइज़र", "हीटिंग पैड"],
    },
    accentColor: "#1E5F74",
    careZone: {
      en: "Airflow & Thermal Accessories",
      hi: "श्वसन व हीट-पैड उपकरण",
    },
  },
  {
    id: "wound-care-consumables",
    name: {
      en: "Wound Care & Consumables",
      hi: "वुंड केयर और कंज्यूमेबल्स",
    },
    shortName: {
      en: "Wound & PPE",
      hi: "ड्रेसिंग व पीपीई",
    },
    summary: {
      en: "Paraffin gauze dressings, post-op sterile dressings, surgical and examination gloves, and disposable head caps.",
      hi: "पैराफिन गॉज ड्रेसिंग, स्टराइल ड्रेसिंग पैड, सर्जिकल दस्ताने और डिस्पोजेबल हेड कैप।",
    },
    highlights: {
      en: ["Gauze Dressings", "Surgical Gloves", "Sterile Adhesive Pads", "Disposable Caps & PPE"],
      hi: ["गॉज ड्रेसिंग", "सर्जिकल ग्लव्स", "ड्रेसिंग पैड", "हेड कैप व पीपीई"],
    },
    accentColor: "#8A5A2B",
    careZone: {
      en: "Dressing Trays & Hygiene",
      hi: "ड्रेसिंग और हाइजीन सामग्री",
    },
  },
];

export const catalogProducts: CatalogProduct[] = [
  // 1. Orthopaedic Supports
  {
    id: "ortho-ls-belt",
    slug: "tynor-lumbo-sacral-belt",
    category: "orthopaedic-supports",
    name: {
      en: "Lumbo-Sacral (LS) Back Belt",
      hi: "लम्बो-सैक्रल (LS) बैक बेल्ट",
    },
    brandModel: "Tynor Lumbo Sacral Belt / Abdominal Support",
    brand: "Tynor",
    image: "/images/products/ls-belt.jpg",
    imageAlt: {
      en: "Breathable grey elastic mesh lumbo-sacral back support belt with double-pull hook-and-loop straps",
      hi: "डबल-पुल स्ट्रैप के साथ ग्रे इलास्टिक मेश लम्बो-सैक्रल बैक सपोर्ट बेल्ट",
    },
    description: {
      en: "Breathable elastic mesh waist and lower-back belt with double-pull hook-and-loop straps and flexible vertical stays.",
      hi: "डबल-पुल वेल्क्रो स्ट्रैप और फ्लेक्सिबल वर्टिकल स्टे के साथ हवादार इलास्टिक कमर सपोर्ट बेल्ट।",
    },
    unitSpec: {
      en: "Single piece · S to XXL sizes",
      hi: "सिंगल पीस · S से XXL साइज",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Retail & wholesale sizes",
      hi: "रिटेल व होलसेल साइज उपलब्ध",
    },
    searchKeywords: ["ls belt", "back belt", "lumbo sacral", "abdominal", "tynor", "waist"],
  },
  {
    id: "ortho-open-patella-knee",
    slug: "tynor-open-patella-knee-cap",
    category: "orthopaedic-supports",
    name: {
      en: "Open Patella Knee Support",
      hi: "ओपन पटेला नी सपोर्ट",
    },
    brandModel: "Tynor Knee Cap Open Patella (Grey)",
    brand: "Tynor",
    image: "/images/products/tynor-knee-open-patella.jpg",
    imageAlt: {
      en: "Tynor grey knitted open-patella knee support sleeve",
      hi: "टायनोर ग्रे बुना हुआ ओपन पटेला नी कैप",
    },
    description: {
      en: "Four-way stretch knit knee sleeve with front patella opening and inner silicone ring cushion.",
      hi: "सामने खुले पटेला रिंग और चार-तरफ़ा स्ट्रेच निट फैब्रिक वाला नी स्लीव।",
    },
    unitSpec: {
      en: "Single unit or pair · Check size",
      hi: "सिंगल पीस या जोड़ी · साइज पूछें",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["knee cap", "open patella", "knee support", "tynor", "sleeve"],
  },
  {
    id: "ortho-hinged-knee",
    slug: "hinged-knee-cap",
    category: "orthopaedic-supports",
    name: {
      en: "Hinged Knee Brace",
      hi: "हिंज्ड नी ब्रेस",
    },
    brandModel: "Nylon Hinged Knee Cap / Functional Support",
    brand: "Tynor",
    image: "/images/products/hinged-knee-cap.jpg",
    imageAlt: {
      en: "Grey knee support sleeve with wrap-around hook-and-loop straps and side hinges",
      hi: "रैप-अराउंड स्ट्रैप और साइड हिंज वाला ग्रे नी सपोर्ट",
    },
    description: {
      en: "Wrap-around neoprene and nylon knee support fitted with dual rigid side hinges and upper-lower straps.",
      hi: "ऊपरी व निचली स्ट्रैप और दोनों ओर साइड हिंज के साथ रैप-अराउंड नी ब्रेस।",
    },
    unitSpec: {
      en: "Single piece · Standard sizes",
      hi: "सिंगल पीस · मानक साइज",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Retail & clinic orders",
      hi: "रिटेल व क्लिनिक ऑर्डर",
    },
    searchKeywords: ["hinged knee", "rom knee brace", "functional knee", "tynor"],
  },
  {
    id: "ortho-ankle-splint",
    slug: "tynor-ankle-splint",
    category: "orthopaedic-supports",
    name: {
      en: "Ankle Support & Splint",
      hi: "एंकल सपोर्ट और स्प्लिंट",
    },
    brandModel: "Tynor Ankle Splint & Elastic Ankle Wrap",
    brand: "Tynor",
    image: "/images/products/tynor-ankle-splint.jpg",
    imageAlt: {
      en: "Tynor rigid-shell padded ankle splint with adjustable hook-and-loop straps",
      hi: "एडजस्टेबल स्ट्रैप के साथ टायनोर पैडेड एंकल स्प्लिंट",
    },
    description: {
      en: "Contoured outer shell ankle splint with foam liner and adjustable straps; elastic ankle wraps also stocked.",
      hi: "फोम लाइनिंग और एडजस्टेबल स्ट्रैप वाला एंकल स्प्लिंट; इलास्टिक एंकल रैप भी उपलब्ध।",
    },
    unitSpec: {
      en: "Universal / Pair options",
      hi: "यूनिवर्सल / पेयर विकल्प",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["ankle splint", "ankle support", "anklet", "binder", "tynor"],
  },
  {
    id: "ortho-cervical-collar",
    slug: "tynor-cervical-collar",
    category: "orthopaedic-supports",
    name: {
      en: "Cervical Collar (Soft & Hard Adjustable)",
      hi: "सर्वाइकल कॉलर (सॉफ्ट व हार्ड एडजस्टेबल)",
    },
    brandModel: "Tynor Hard Adjustable / Soft Cervical Collar",
    brand: "Tynor",
    image: "/images/products/tynor-cervical-collar.jpg",
    imageAlt: {
      en: "Tynor hard adjustable cervical collar packaged unit",
      hi: "टायनोर हार्ड एडजस्टेबल सर्वाइकल कॉलर पैक",
    },
    description: {
      en: "Height-adjustable ventilated cervical collar with foam-padded edges and hook-and-loop back closure.",
      hi: "फोम-पैडेड किनारों और वेल्क्रो क्लोज़र के साथ वेंटिलेटेड एडजस्टेबल सर्वाइकल कॉलर।",
    },
    unitSpec: {
      en: "Single unit · S, M, L, XL",
      hi: "सिंगल यूनिट · S, M, L, XL",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Retail & wholesale sizes",
      hi: "रिटेल व होलसेल साइज उपलब्ध",
    },
    searchKeywords: ["cervical collar", "neck collar", "hard collar", "soft collar", "tynor"],
  },
  {
    id: "ortho-shoulder-support",
    slug: "shoulder-support-pad",
    category: "orthopaedic-supports",
    name: {
      en: "Shoulder Support & Clavicle Brace",
      hi: "शोल्डर सपोर्ट और क्लैविकल ब्रेस",
    },
    brandModel: "Nylon Shoulder Support Pad / Tynor Shoulder Immobiliser",
    brand: "Tynor",
    image: "/images/products/shoulder-support.jpg",
    imageAlt: {
      en: "Contoured nylon and elastic shoulder support strap worn across upper arm and torso",
      hi: "कंधे और ऊपरी बांह पर पहने जाने वाला नायलॉन शोल्डर सपोर्ट",
    },
    description: {
      en: "Adjustable chest-and-arm strap shoulder support pad; clavicle braces and arm slings available on request.",
      hi: "एडजस्टेबल चेस्ट-आर्म स्ट्रैप वाला शोल्डर सपोर्ट पैड; क्लैविकल ब्रेस व आर्म स्लिंग भी उपलब्ध।",
    },
    unitSpec: {
      en: "Left / Right / Universal fit",
      hi: "लेफ्ट / राइट / यूनिवर्सल फिट",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["shoulder support", "clavicle brace", "arm sling", "tynor"],
  },

  // 2. Home Care & Mobility
  {
    id: "mob-wheelchair",
    slug: "folding-wheelchair",
    category: "home-care-mobility",
    name: {
      en: "Folding Standard Wheelchair",
      hi: "फोल्डिंग स्टैंडर्ड व्हीलचेयर",
    },
    brandModel: "Karma Folding Wheelchair (and standard models)",
    brand: "Karma",
    image: "/images/products/folding-wheelchair.jpg",
    imageAlt: {
      en: "Chrome-frame folding medical wheelchair with dark grey fabric seat, armrests, and footrests",
      hi: "फोल्डिंग क्रोम-फ्रेम मेडिकल व्हीलचेयर जिसमें आर्मरेस्ट व फुटरेस्ट लगे हैं",
    },
    description: {
      en: "Cross-brace folding steel frame wheelchair with padded armrests, rear hand brakes, solid tyres, and folding footrests.",
      hi: "पैडेड आर्मरेस्ट, रियर ब्रेक, सॉलिड टायर और फोल्डिंग फुटरेस्ट के साथ क्रॉस-ब्रेस फोल्डिंग व्हीलचेयर।",
    },
    unitSpec: {
      en: "Single unit · Folding frame",
      hi: "सिंगल यूनिट · फोल्डिंग फ्रेम",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Check showroom availability",
      hi: "शोरूम उपलब्धता जांचें",
    },
    searchKeywords: ["wheelchair", "folding wheelchair", "karma", "mobility"],
  },
  {
    id: "mob-walker",
    slug: "adjustable-folding-walker",
    category: "home-care-mobility",
    name: {
      en: "Adjustable Folding Walker with Wheels",
      hi: "पहियों वाला एडजस्टेबल फोल्डिंग वॉकर",
    },
    brandModel: "Adjustable Walker Folding Wheels",
    image: "/images/products/folding-walker.jpg",
    imageAlt: {
      en: "Height-adjustable aluminium folding walker with two front caster wheels and rubber rear tips",
      hi: "आगे दो पहियों और एडजस्टेबल ऊंचाई वाला फोल्डिंग एल्युमिनियम वॉकर",
    },
    description: {
      en: "Lightweight height-adjustable aluminium frame walker with dual front wheels, padded grips, and one-button fold hinge.",
      hi: "हल्के एल्युमिनियम फ्रेम, आगे दो पहियों, पैडेड ग्रिप और वन-बटन फोल्डिंग वाला एडजस्टेबल वॉकर।",
    },
    unitSpec: {
      en: "Height-adjustable · Single unit",
      hi: "ऊंचाई एडजस्टेबल · सिंगल यूनिट",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["walker", "folding walker", "wheels", "mobility"],
  },
  {
    id: "mob-commode-chair",
    slug: "tynor-commode-chair",
    category: "home-care-mobility",
    name: {
      en: "Folding Commode Chair & Toilet Raiser",
      hi: "फोल्डिंग कमोड चेयर व टॉयलेट रेज़र",
    },
    brandModel: "Tynor Commode Chair / Vissco Raised Toilet Seat",
    brand: "Tynor",
    image: "/images/products/tynor-commode-chair.png",
    imageAlt: {
      en: "Tynor height-adjustable bedside commode chair with removable bucket and lid",
      hi: "टायनोर की एडजस्टेबल बेडसाइड कमोड चेयर ढक्कन व बकेट के साथ",
    },
    description: {
      en: "Powder-coated tubular frame bedside commode chair with removable bucket, lid, armrests, and non-slip rubber tips.",
      hi: "रिमूवेबल बकेट, ढक्कन, आर्मरेस्ट और नॉन-स्लिप रबर टिप्स के साथ ट्यूबुलर फ्रेम कमोड चेयर।",
    },
    unitSpec: {
      en: "Chair & 4-inch seat raisers",
      hi: "चेयर और 4-इंच सीट रेज़र",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["commode chair", "toilet seat", "vissco", "tynor", "home care"],
  },
  {
    id: "mob-hospital-bed",
    slug: "hospital-bed-with-wheels",
    category: "home-care-mobility",
    name: {
      en: "Hospital Bed with Wheels (Semi-Fowler)",
      hi: "पहियों वाला हॉस्पिटल बेड (सेमी-फाउलर)",
    },
    brandModel: "Hospital Bed With Wheel / Semi-Fowler Bed",
    image: "/images/products/hospital-bed-wheel.jpg",
    imageAlt: {
      en: "White powder-coated steel semi-fowler hospital bed on caster wheels with side frame",
      hi: "पहियों वाला सफेद स्टील सेमी-फाउलर हॉस्पिटल बेड",
    },
    description: {
      en: "Perforated steel-top semi-fowler patient bed with mechanical backrest crank, head/foot bows, and lockable caster wheels.",
      hi: "मैकेनिकल बैकरेस्ट क्रैंक, हेड-फुट पैनल और लॉक होने वाले पहियों वाला स्टील हॉस्पिटल बेड।",
    },
    unitSpec: {
      en: "Home & ward configurations",
      hi: "होम व वार्ड मॉडल उपलब्ध",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Enquire for dimensions & model",
      hi: "साइज व मॉडल के लिए संपर्क करें",
    },
    searchKeywords: ["hospital bed", "semi fowler", "patient bed", "wheels"],
  },
  {
    id: "mob-stretcher",
    slug: "single-fold-stretcher",
    category: "home-care-mobility",
    name: {
      en: "Single-Fold Patient Stretcher",
      hi: "सिंगल-फोल्ड पेशेंट स्ट्रेचर",
    },
    brandModel: "Single Fold Stretcher",
    image: "/images/products/single-fold-stretcher.jpg",
    imageAlt: {
      en: "Orange washable fabric single-fold aluminium stretcher with carry bag and safety straps",
      hi: "कैरी बैग व सेफ्टी स्ट्रैप के साथ ऑरेंज सिंगल-फोल्ड एल्युमिनियम स्ट्रेचर",
    },
    description: {
      en: "Aluminium pole folding stretcher with wipe-clean PVC sheet, two restraint straps, and compact carry bag.",
      hi: "वाइप-क्लीन शीट, दो सेफ्टी बेल्ट और कैरी बैग के साथ हल्का फोल्डिंग एल्युमिनियम स्ट्रेचर।",
    },
    unitSpec: {
      en: "Single unit with carry bag",
      hi: "कैरी बैग सहित सिंगल यूनिट",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Clinic & ambulance supply",
      hi: "क्लिनिक व एम्बुलेंस सप्लाई",
    },
    searchKeywords: ["stretcher", "single fold", "folding stretcher", "ambulance"],
  },
  {
    id: "mob-air-mattress",
    slug: "accusure-anti-decubitus-mattress",
    category: "home-care-mobility",
    name: {
      en: "Anti-Decubitus Air Mattress with Pump",
      hi: "पंप सहित एंटी-डेक्यूबिटस एयर मैट्रेस",
    },
    brandModel: "AccuSure Anti-Decubitus Air Mattress",
    brand: "AccuSure",
    image: "/images/products/accusure-air-mattress.jpg",
    imageAlt: {
      en: "AccuSure anti-decubitus alternating pressure bubble mattress and compact air pump box",
      hi: "एक्यूश्योर एंटी-डेक्यूबिटस एयर मैट्रेस व कॉम्पैक्ट एयर पंप",
    },
    description: {
      en: "Alternating-pressure medical PVC bubble mattress overlay supplied with a low-noise electric air compressor pump.",
      hi: "कम शोर वाले इलेक्ट्रिक एयर कंप्रेसर पंप के साथ आने वाला बबल-सेल एयर मैट्रेस।",
    },
    unitSpec: {
      en: "Mattress + air pump kit",
      hi: "मैट्रेस + एयर पंप किट",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["air mattress", "anti decubitus", "bed sore mattress", "accusure"],
  },

  // 3. Monitoring & Diagnostics
  {
    id: "mon-bp-monitor",
    slug: "digital-bp-monitor",
    category: "monitoring-diagnostics",
    name: {
      en: "Automatic Digital BP Monitor",
      hi: "ऑटोमैटिक डिजिटल बीपी मॉनिटर",
    },
    brandModel: "AccuSure AS Series (and multiple brands)",
    brand: "AccuSure",
    image: "/images/products/bp-monitor.jpg",
    imageAlt: {
      en: "Compact white automatic upper-arm blood pressure monitor with grey inflatable arm cuff",
      hi: "ग्रे आर्म कफ के साथ कॉम्पैक्ट सफेद डिजिटल ब्लड प्रेशर मॉनिटर",
    },
    description: {
      en: "Upper-arm oscillometric blood pressure monitor with large LCD screen, memory recall, and adjustable arm cuff.",
      hi: "बड़ी एलसीडी स्क्रीन, मेमोरी रीकॉल और एडजस्टेबल आर्म कफ वाला डिजिटल बीपी मॉनिटर।",
    },
    unitSpec: {
      en: "Monitor + upper-arm cuff",
      hi: "मॉनिटर + अपर-आर्म कफ",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Retail & wholesale packs",
      hi: "रिटेल व होलसेल पैक",
    },
    searchKeywords: ["bp monitor", "blood pressure", "accusure", "omron", "cuff"],
  },
  {
    id: "mon-pulse-oximeter",
    slug: "fingertip-pulse-oximeter",
    category: "monitoring-diagnostics",
    name: {
      en: "Fingertip Pulse Oximeter",
      hi: "फिंगरटिप पल्स ऑक्सीमीटर",
    },
    brandModel: "AccuSure Pulse Oximeter",
    brand: "AccuSure",
    image: "/images/products/pulse-oximeter.jpg",
    imageAlt: {
      en: "Navy and white compact fingertip pulse oximeter displaying SpO2 and pulse rate",
      hi: "SpO2 और पल्स रेट दिखाने वाला नेवी और सफेद फिंगरटिप पल्स ऑक्सीमीटर",
    },
    description: {
      en: "Compact battery-powered fingertip optical sensor with dual-colour OLED readout for SpO2 and pulse rate.",
      hi: "SpO2 और पल्स रेट रीडआउट दिखाने वाला कॉम्पैक्ट बैटरी-संचालित फिंगरटिप ऑक्सीमीटर।",
    },
    unitSpec: {
      en: "Single unit · AAA powered",
      hi: "सिंगल यूनिट · बैटरी चालित",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["pulse oximeter", "oximeter", "spo2", "accusure"],
  },
  {
    id: "mon-glucometer",
    slug: "blood-glucometer-kit",
    category: "monitoring-diagnostics",
    name: {
      en: "Blood Glucose Meter Kits",
      hi: "ब्लड ग्लूकोमीटर किट",
    },
    brandModel: "OneTouch Select Plus / Contour Plus / Control D / Dr. Morepen",
    brand: "OneTouch",
    image: "/images/products/glucometer-kit.jpg",
    imageAlt: {
      en: "Digital blood glucose meter with lancing device and test strip vial",
      hi: "लैंसिंग पेन और टेस्ट स्ट्रिप वाइल के साथ डिजिटल ब्लड ग्लूकोमीटर",
    },
    description: {
      en: "Handheld blood glucose meters with lancing device and starter strips across leading multi-brand models.",
      hi: "लैंसिंग डिवाइस और स्टार्टर स्ट्रिप्स के साथ प्रमुख ब्रांड के हैंडहेल्ड ग्लूकोमीटर किट।",
    },
    unitSpec: {
      en: "Meter kit · Multiple brands",
      hi: "मीटर किट · विभिन्न ब्रांड",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Check brand stock",
      hi: "ब्रांड स्टॉक पूछें",
    },
    searchKeywords: ["glucometer", "sugar machine", "onetouch", "contour", "control d", "dr morepen", "accusure"],
  },
  {
    id: "mon-test-strips",
    slug: "glucose-test-strips",
    category: "monitoring-diagnostics",
    name: {
      en: "Blood Glucose Test Strips",
      hi: "ब्लड ग्लूकोज टेस्ट स्ट्रिप्स",
    },
    brandModel: "Accu-Chek Active / Instant, Control D, Dr. Morepen, OneTouch",
    brand: "Accu-Chek",
    image: "/images/products/accuchek-strips.jpg",
    imageAlt: {
      en: "Box of 50 Accu-Chek Instant blood glucose test strips",
      hi: "एक्यू-चेक टेस्ट स्ट्रिप्स का 50-काउंट बॉक्स",
    },
    description: {
      en: "Sealed vials and packs of 25, 50, or 100 blood glucose test strips compatible with popular home meters.",
      hi: "प्रमुख होम ग्लूकोमीटर के अनुकूल 25, 50 और 100 स्ट्रिप्स के सीलबंद पैक।",
    },
    unitSpec: {
      en: "25 / 50 / 100 strip packs",
      hi: "25 / 50 / 100 स्ट्रिप पैक",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Specify meter model",
      hi: "मीटर मॉडल बताकर पूछें",
    },
    searchKeywords: ["test strips", "sugar strips", "accuchek", "accu chek", "control d", "onetouch", "bg03"],
  },
  {
    id: "mon-thermometer",
    slug: "infrared-and-digital-thermometers",
    category: "monitoring-diagnostics",
    name: {
      en: "Infrared & Digital Thermometers",
      hi: "इन्फ्रारेड व डिजिटल थर्मामीटर",
    },
    brandModel: "AccuSure Non-Contact IR / Hicks Fast Read / Microtek",
    brand: "AccuSure",
    image: "/images/products/accusure-thermometer.jpg",
    imageAlt: {
      en: "AccuSure handheld non-contact infrared forehead thermometer with backlit LCD",
      hi: "बैकलिट एलसीडी डिस्प्ले वाला एक्यूश्योर नॉन-कॉन्टैक्ट इन्फ्रारेड थर्मामीटर",
    },
    description: {
      en: "Non-contact infrared forehead thermometers and standard flexible-tip digital thermometers for home and clinic use.",
      hi: "घर व क्लिनिक उपयोग के लिए नॉन-कॉन्टैक्ट इन्फ्रारेड थर्मामीटर और डिजिटल थर्मामीटर।",
    },
    unitSpec: {
      en: "IR pistol or pen digital",
      hi: "इन्फ्रारेड या पेन डिजिटल",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["thermometer", "infrared", "hicks", "microtek", "accusure", "temperature"],
  },

  // 4. Respiratory & Home Therapy
  {
    id: "resp-nebulizer",
    slug: "mesh-and-compressor-nebulizer",
    category: "respiratory-therapy",
    name: {
      en: "Portable Mesh & Compressor Nebulizers",
      hi: "पोर्टेबल मेश व कम्प्रेसर नेबुलाइज़र",
    },
    brandModel: "AccuSure Portable Mesh / Dr. ORG Compressor",
    brand: "AccuSure",
    image: "/images/products/accusure-mesh-nebulizer.jpg",
    imageAlt: {
      en: "AccuSure handheld portable mesh nebulizer shown with adult mask, child mask, and mouthpiece",
      hi: "एडल्ट मास्क, चाइल्ड मास्क व माउथपीस सहित एक्यूश्योर पोर्टेबल मेश नेबुलाइज़र",
    },
    description: {
      en: "Compact handheld vibrating-mesh units and tabletop piston compressor nebulizers with adult and child mask kits.",
      hi: "एडल्ट व चाइल्ड मास्क किट के साथ हैंडहेल्ड पोर्टेबल मेश नेबुलाइज़र और टेबलटॉप कम्प्रेसर यूनिट।",
    },
    unitSpec: {
      en: "Unit + mask & tubing set",
      hi: "यूनिट + मास्क व ट्यूब सेट",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Mesh & compressor models",
      hi: "मेश व कम्प्रेसर दोनों उपलब्ध",
    },
    searchKeywords: ["nebulizer", "nebuliser", "mesh", "compressor", "accusure", "dr org"],
  },
  {
    id: "resp-oxygen-concentrator",
    slug: "oxygen-concentrator",
    category: "respiratory-therapy",
    name: {
      en: "Home Oxygen Concentrator (5 LPM)",
      hi: "होम ऑक्सीजन कॉन्सेंट्रेटर (5 LPM)",
    },
    image: "/images/products/oxygen-concentrator.jpg",
    imageAlt: {
      en: "Stationary 5 LPM home oxygen concentrator on caster wheels with humidifier bottle",
      hi: "ह्यूमिडिफायर बोतल और पहियों वाला 5 LPM होम ऑक्सीजन कॉन्सेंट्रेटर",
    },
    description: {
      en: "Electric stationary oxygen concentrator with flow-meter gauge, humidifier bottle port, and four swivel casters.",
      hi: "फ्लो-मीटर, ह्यूमिडिफायर बोतल पोर्ट और पहियों के साथ इलेक्ट्रिक ऑक्सीजन कॉन्सेंट्रेटर।",
    },
    unitSpec: {
      en: "Check available models",
      hi: "उपलब्ध मॉडल की जानकारी लें",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Confirm availability & accessories",
      hi: "स्टॉक व एक्सेसरीज़ की पुष्टि करें",
    },
    searchKeywords: ["oxygen concentrator", "oxygen machine", "5 lpm", "respiratory"],
  },
  {
    id: "resp-exerciser",
    slug: "respiratory-exerciser-3-ball",
    category: "respiratory-therapy",
    name: {
      en: "3-Ball Respiratory Exerciser",
      hi: "थ्री-बॉल रेस्पिरेटरी एक्सरसाइज़र",
    },
    image: "/images/products/respiratory-exerciser.jpg",
    imageAlt: {
      en: "Three-chamber incentive spirometer exerciser with teal, navy, and amber balls and breathing tube",
      hi: "तीन रंगीन बॉल व ब्रीदिंग ट्यूब के साथ थ्री-चैंबर रेस्पिरेटरी एक्सरसाइज़र",
    },
    description: {
      en: "Three-chamber clear volumetric incentive exerciser with colour-coded indicator balls and detachable corrugated tube.",
      hi: "रंगीन इंडिकेटर बॉल्स और अलग होने वाली ट्यूब के साथ तीन-चैंबर रेस्पिरेटरी एक्सरसाइज़र।",
    },
    unitSpec: {
      en: "Single unit · 600–1200 cc/sec",
      hi: "सिंगल यूनिट · 600–1200 cc/sec",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["respiratory exerciser", "spirometer", "lung exerciser", "3 ball"],
  },
  {
    id: "resp-heating-pad",
    slug: "electric-heating-pad",
    category: "respiratory-therapy",
    name: {
      en: "Electric Heating Pad & Gel Warm Bag",
      hi: "इलेक्ट्रिक हीटिंग पैड व हॉट जेल बैग",
    },
    brandModel: "Tynor Ortho Heating Gel Bag / Electric Hot Water Bag",
    brand: "Tynor",
    image: "/images/products/tynor-heating-pad.jpg",
    imageAlt: {
      en: "Tynor electric ortho heating gel bag in retail box",
      hi: "बॉक्स पैक में टायनोर इलेक्ट्रिक ऑर्थो हीटिंग जेल बैग",
    },
    description: {
      en: "Insulated electric gel heating pouch and flat multi-setting orthopaedic heating pads for localized warmth.",
      hi: "इंसुलेटेड इलेक्ट्रिक जेल हीटिंग बैग और मल्टी-सेटिंग ऑर्थोपेडिक हीटिंग पैड।",
    },
    unitSpec: {
      en: "Gel bag or belt heating pad",
      hi: "जेल बैग या बेल्ट हीटिंग पैड",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Available on enquiry",
      hi: "पूछताछ पर उपलब्ध",
    },
    searchKeywords: ["heating pad", "hot water bag", "tynor", "heat bag", "cool pack"],
  },

  // 5. Wound Care & Consumables
  {
    id: "wc-gelonet-gauze",
    slug: "paraffin-gauze-dressing",
    category: "wound-care-consumables",
    name: {
      en: "Paraffin & Sterile Gauze Dressings",
      hi: "पैराफिन व स्टराइल गॉज ड्रेसिंग",
    },
    brandModel: "Gelonet Paraffin Gauze Dressing",
    brand: "Gelonet",
    image: "/images/products/gelonet-gauze.png",
    imageAlt: {
      en: "Gelonet sterile soft paraffin gauze dressing tin and pouch pack",
      hi: "जेलोनेट स्टराइल सॉफ्ट पैराफिन गॉज ड्रेसिंग बॉक्स व टिन पैक",
    },
    description: {
      en: "Sterile soft-paraffin impregnated leno-weave gauze sheets along with standard surgical gauze swabs and cotton rolls.",
      hi: "स्टराइल सॉफ्ट पैराफिन गॉज शीट्स, सर्जिकल गॉज स्वैब और शुद्ध कॉटन रोल।",
    },
    unitSpec: {
      en: "10 cm × 10 cm tins & packs",
      hi: "10×10 सेमी टिन व क्लिनिक पैक",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Box & bulk clinic packs",
      hi: "बॉक्स व बल्क क्लिनिक पैक",
    },
    searchKeywords: ["gauze", "gelonet", "paraffin dressing", "cotton roll", "bandage"],
  },
  {
    id: "wc-gdress",
    slug: "surgiwear-g-dress-pad",
    category: "wound-care-consumables",
    name: {
      en: "Adhesive Post-Op Dressing Pads",
      hi: "एडहेसिव ड्रेसिंग पैड (G-Dress)",
    },
    brandModel: "Surgiwear G-Dress",
    brand: "Surgiwear",
    image: "/images/products/surgiwear-gdress.jpg",
    imageAlt: {
      en: "Surgiwear G-Dress sterile adhesive dressing pack",
      hi: "सर्जीवेयर जी-ड्रेस स्टराइल एडहेसिव ड्रेसिंग पैक",
    },
    description: {
      en: "Individually pouched non-woven adhesive dressing strips with central absorbent non-adherent pad.",
      hi: "सेंट्रल अब्जॉर्बेंट पैड के साथ अलग-अलग पाउच में नॉन-वोवन एडहेसिव ड्रेसिंग स्ट्रिप्स।",
    },
    unitSpec: {
      en: "Multiple dressing sizes",
      hi: "विभिन्न ड्रेसिंग साइज",
    },
    enquiryCta: "check-availability",
    availabilityLabel: {
      en: "Retail & clinic box supply",
      hi: "रिटेल व क्लिनिक बॉक्स सप्लाई",
    },
    searchKeywords: ["g dress", "surgiwear", "dressing pad", "wound care", "adhesive"],
  },
  {
    id: "wc-surgical-gloves",
    slug: "surgical-examination-gloves",
    category: "wound-care-consumables",
    name: {
      en: "Surgical & Examination Gloves",
      hi: "सर्जिकल व एग्जामिनेशन ग्लव्स",
    },
    brandModel: "Surgicare Surgical Gloves",
    brand: "Surgicare",
    image: "/images/products/surgicare-gloves.jpg",
    imageAlt: {
      en: "Surgicare sterile disposable latex surgical gloves pair pouch",
      hi: "सर्जीकेयर स्टराइल डिस्पोजेबल सर्जिकल ग्लव्स पाउच",
    },
    description: {
      en: "Sterile anatomical latex surgical gloves in standard pair sizes alongside non-sterile examination glove boxes.",
      hi: "मानक जोड़ी साइज में स्टराइल लैटेक्स सर्जिकल ग्लव्स और नॉन-स्टराइल एग्जामिनेशन ग्लव्स बॉक्स।",
    },
    unitSpec: {
      en: "Sizes 6.5 / 7 / 7.5 · Box & single",
      hi: "साइज 6.5 / 7 / 7.5 · बॉक्स व सिंगल",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Wholesale cartons & boxes",
      hi: "होलसेल कार्टन व बॉक्स",
    },
    searchKeywords: ["gloves", "surgical gloves", "examination gloves", "surgicare", "latex"],
  },
  {
    id: "wc-head-cap-ppe",
    slug: "disposable-head-caps-and-ppe",
    category: "wound-care-consumables",
    name: {
      en: "Disposable Head Caps & PPE Supplies",
      hi: "डिस्पोजेबल हेड कैप व पीपीई सामग्री",
    },
    image: "/images/products/disposable-head-cap.jpg",
    imageAlt: {
      en: "Blue non-woven pleated disposable surgical bouffant head caps",
      hi: "नीले नॉन-वोवन डिस्पोजेबल सर्जिकल हेड कैप बंडल",
    },
    description: {
      en: "Spun-bond non-woven pleated bouffant caps, 3-ply masks, shoe covers, and disposable protective aprons.",
      hi: "नॉन-वोवन बफैंट हेड कैप, 3-प्लाई मास्क, शू कवर और डिस्पोजेबल सुरक्षा एप्रन।",
    },
    unitSpec: {
      en: "Packs of 50 / 100 & clinic bulk",
      hi: "50 / 100 के पैक व बल्क सप्लाई",
    },
    enquiryCta: "ask-price",
    availabilityLabel: {
      en: "Bulk & clinic supply",
      hi: "बल्क व क्लिनिक सप्लाई",
    },
    searchKeywords: ["head cap", "bouffant", "ppe", "disposable", "mask", "apron", "shoe cover"],
  },
];
