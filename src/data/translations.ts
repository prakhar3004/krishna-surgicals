/** Bilingual UI dictionary (English default + accurate Hindi translation). */

export type Locale = "en" | "hi";

export interface UIStrings {
  nav: {
    products: string;
    categories: string;
    about: string;
    contact: string;
    callNow: string;
    whatsapp: string;
    enquiryTray: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    browseProducts: string;
    startEnquiry: string;
    servingLine: string;
    showroomCardTitle: string;
    showroomCardBody: string;
    heroImageAlt: string;
  };
  categories: {
    eyebrow: string;
    heading: string;
    subheading: string;
    diagramTitle: string;
    diagramSubtitle: string;
    itemCountLabel: (n: number) => string;
    viewCategory: string;
    activeFilterHint: string;
  };
  catalog: {
    eyebrow: string;
    heading: string;
    subheading: string;
    searchLabel: string;
    searchPlaceholder: string;
    clearSearch: string;
    allCategories: string;
    allBrands: string;
    brandConfirmedPrefix: string;
    askTodaysPrice: string;
    checkAvailability: string;
    addedToEnquiry: string;
    addMore: string;
    showingCount: (visible: number, total: number) => string;
    emptyTitle: string;
    emptyBody: string;
    resetFilters: string;
  };
  enquiry: {
    eyebrow: string;
    heading: string;
    subheading: string;
    selectedItemsTitle: string;
    emptyListPrompt: string;
    quickAddLabel: string;
    quickAddPlaceholder: string;
    addItemButton: string;
    customItemLabel: string;
    customItemPlaceholder: string;
    addCustomButton: string;
    quantityLabel: string;
    removeItem: string;
    buyerTypeLabel: string;
    buyerHome: string;
    buyerClinic: string;
    notesLabel: string;
    notesPlaceholder: string;
    previewLabel: string;
    channelNoticeVerified: (waDisplay: string) => string;
    channelNoticeUnverified: string;
    sendWhatsApp: string;
    copyMessage: string;
    copied: string;
    callInstead: string;
    clearList: string;
    floatingLabel: (count: number) => string;
    floatingAction: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    factsTitle: string;
    facts: {
      establishedLabel: string;
      establishedValue: string;
      roleLabel: string;
      roleValue: string;
      proprietorLabel: string;
      proprietorValue: string;
      gstLabel: string;
      locationLabel: string;
      locationValue: string;
    };
    brandsHeading: string;
    noticeLine: string;
  };
  visit: {
    eyebrow: string;
    heading: string;
    subheading: string;
    addressLabel: string;
    landmarkPrefix: string;
    directionsCta: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappSub: string;
    hoursLabel: string;
    hoursPendingTitle: string;
    hoursPendingNote: string;
    mapCardBadge: string;
    mapCardTitle: string;
    mapCardNote: string;
  };
  footer: {
    navigationTitle: string;
    storeTitle: string;
    enquiryNoteTitle: string;
    enquiryNoteBody: string;
    copyright: (year: number) => string;
    establishedNote: string;
  };
}

export const uiStrings: Record<Locale, UIStrings> = {
  en: {
    nav: {
      products: "Products",
      categories: "Categories",
      about: "About",
      contact: "Contact",
      callNow: "Call",
      whatsapp: "WhatsApp",
      enquiryTray: "Enquiry list",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    hero: {
      eyebrow: "Kakadeo, Kanpur · Wholesaler & Retail Medical Supplies",
      headline: "Medical and home-care essentials in Kanpur.",
      subheadline:
        "Orthopaedic supports, mobility equipment, bedside monitors, respiratory devices, and wound-care consumables for local households, clinics, and hospitals — available for single-unit pickup or bulk enquiry.",
      browseProducts: "Browse products",
      startEnquiry: "Prepare WhatsApp enquiry",
      servingLine: "Established 2020 · Avon Market, Kakadeo · Single-piece & wholesale enquiries",
      showroomCardTitle: "Direct Showroom & WhatsApp Desk",
      showroomCardBody:
        "Confirm today's price, size availability, and clinic bulk rates directly before visiting.",
      heroImageAlt:
        "Assortment of home-care medical supplies including a digital blood pressure monitor, pulse oximeter, folded knee support, portable nebulizer, and sterile gauze packs on an oak showroom table",
    },
    categories: {
      eyebrow: "Product Range",
      heading: "Browse by care category",
      subheading:
        "Select a category card or use the care-area guide to jump straight to relevant items in the catalogue.",
      diagramTitle: "Home & Clinic Assortment Map",
      diagramSubtitle: "Tap any area to filter the product list below",
      itemCountLabel: (n) => `${n} items`,
      viewCategory: "Filter catalogue",
      activeFilterHint: "Currently selected",
    },
    catalog: {
      eyebrow: "Product Catalogue",
      heading: "Search & shortlist items for enquiry",
      subheading:
        "Prices, pack sizes, and current shelf availability change regularly. Select the items you need and ask for today's rate on WhatsApp or by phone.",
      searchLabel: "Search products or brands",
      searchPlaceholder: "Search e.g. Tynor, wheelchair, BP monitor, nebulizer, gloves…",
      clearSearch: "Clear search",
      allCategories: "All categories",
      allBrands: "All brands",
      brandConfirmedPrefix: "Model / Brand:",
      askTodaysPrice: "Ask for today's price",
      checkAvailability: "Check availability",
      addedToEnquiry: "In enquiry list",
      addMore: "Add to enquiry",
      showingCount: (visible, total) => `Showing ${visible} of ${total} listed products`,
      emptyTitle: "No matching items found in this filter",
      emptyBody:
        "Try clearing a filter, or add any custom surgical or medical item directly in the enquiry builder below.",
      resetFilters: "Show all products",
    },
    enquiry: {
      eyebrow: "Price & Availability Desk",
      heading: "Prepare your WhatsApp enquiry",
      subheading:
        "Build a shortlist with quantities and notes. You can review the full message before opening WhatsApp.",
      selectedItemsTitle: "Your enquiry shortlist",
      emptyListPrompt:
        "No items selected yet. Use “Ask for today's price” on any product card above, or pick an item below.",
      quickAddLabel: "Quick-add a listed product",
      quickAddPlaceholder: "Choose an item to add…",
      addItemButton: "Add item",
      customItemLabel: "Looking for another size, brand, or surgical item?",
      customItemPlaceholder: "Type product name or specification…",
      addCustomButton: "Add custom item",
      quantityLabel: "Qty",
      removeItem: "Remove item",
      buyerTypeLabel: "Enquiry type",
      buyerHome: "Home / Family Care",
      buyerClinic: "Clinic / Hospital / Wholesale",
      notesLabel: "Sizes, brand preference, or message (optional)",
      notesPlaceholder: "e.g., Need LS belt size XL, or checking bulk box availability for clinic…",
      previewLabel: "Message preview",
      channelNoticeVerified: (waDisplay) =>
        `Opens WhatsApp (${waDisplay}) in a new tab/app with this message prefilled. No online checkout or automated order is placed.`,
      channelNoticeUnverified:
        "WhatsApp number is awaiting owner confirmation. Copy your list below or call the store directly.",
      sendWhatsApp: "Open in WhatsApp",
      copyMessage: "Copy message",
      copied: "Copied",
      callInstead: "Call store",
      clearList: "Clear list",
      floatingLabel: (count) =>
        count === 1 ? "1 item in enquiry list" : `${count} items in enquiry list`,
      floatingAction: "Review & send",
    },
    about: {
      eyebrow: "About Krishna Surgicals",
      heading: "Trusted Kanpur medical & surgical supply counter since 2020",
      lead: "Established in 2020 in Kanpur, Uttar Pradesh, Krishna Surgicals operates as a wholesaler, distributor, and local retail supply counter in Kakadeo.",
      paragraphs: [
        "Families caring for loved ones at home, physiotherapy patients, clinics, and nursing homes visit our Avon Market counter for everyday medical devices, orthopaedic bracing, patient-room equipment, and sterile dressings.",
        "Rather than listing outdated online rates or unconfirmed stock counts, we encourage callers and visitors to confirm current model variants, sizing, and today's wholesale or retail pricing directly with our desk.",
      ],
      factsTitle: "Verified Business Profile",
      facts: {
        establishedLabel: "Established",
        establishedValue: "2020 (Kanpur, UP)",
        roleLabel: "Business Role",
        roleValue: "Wholesaler, Distributor & Retail Counter",
        proprietorLabel: "Firm Type",
        proprietorValue: "Proprietorship · Lavi Vishnani",
        gstLabel: "GSTIN",
        locationLabel: "Showroom Area",
        locationValue: "Avon Market, Kakadeo, Kanpur",
      },
      brandsHeading: "Brands observed in store listings",
      noticeLine:
        "Product images are representative of listed items; please confirm exact pack size, variant, and suitability with your clinician or store staff.",
    },
    visit: {
      eyebrow: "Visit & Contact",
      heading: "Find our Kakadeo showroom in Kanpur",
      subheading:
        "Drop by Avon Market near Ashok Jewellers, or call and WhatsApp ahead to check stock and pricing before you travel.",
      addressLabel: "Showroom Address",
      landmarkPrefix: "Landmark:",
      directionsCta: "Get Directions on Google Maps",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp Business",
      whatsappSub: "Verified Business Account · Product & price enquiries",
      hoursLabel: "Opening Hours",
      hoursPendingTitle: "Call or WhatsApp to confirm today's store hours",
      hoursPendingNote:
        "Published hours are awaiting direct confirmation on the store's Google Business Profile.",
      mapCardBadge: "Kakadeo · Kanpur",
      mapCardTitle: "Avon Market Location Guide",
      mapCardNote:
        "117/N/39, N Block, Avon Market (Near Ashok Jewellers). Tap directions to open live navigation in Google Maps.",
    },
    footer: {
      navigationTitle: "Navigation",
      storeTitle: "Showroom Details",
      enquiryNoteTitle: "Enquiry First",
      enquiryNoteBody:
        "Inventory, sizes, and daily wholesale/retail rates are confirmed directly over phone or WhatsApp.",
      copyright: (year) => `© ${year} Krishna Surgicals, Kakadeo, Kanpur. All rights reserved.`,
      establishedNote: "Established 2020 · Kanpur, Uttar Pradesh",
    },
  },
  hi: {
    nav: {
      products: "उत्पाद",
      categories: "श्रेणियाँ",
      about: "हमारे बारे में",
      contact: "संपर्क",
      callNow: "कॉल करें",
      whatsapp: "व्हाट्सऐप",
      enquiryTray: "पूछताछ सूची",
      openMenu: "नेविगेशन मेन्यू खोलें",
      closeMenu: "नेविगेशन मेन्यू बंद करें",
    },
    hero: {
      eyebrow: "काकादेव, कानपुर · होलसेल व रिटेल मेडिकल सप्लाई",
      headline: "कानपुर में मेडिकल और होम-केयर की विश्वसनीय सामग्री।",
      subheadline:
        "परिवारों, क्लिनिकों और अस्पतालों के लिए ऑर्थोपेडिक सपोर्ट, व्हीलचेयर व मोबिलिटी उपकरण, मॉनिटरिंग डिवाइस, श्वसन उपकरण और वुंड-केयर सामग्री — सिंगल यूनिट या बल्क पूछताछ के लिए उपलब्ध।",
      browseProducts: "उत्पाद देखें",
      startEnquiry: "व्हाट्सऐप पूछताछ तैयार करें",
      servingLine: "स्थापित 2020 · एवन मार्केट, काकादेव · सिंगल-पीस व होलसेल सप्लाई",
      showroomCardTitle: "सीधा शोरूम व व्हाट्सऐप डेस्क",
      showroomCardBody:
        "आने से पहले आज की कीमत, साइज की उपलब्धता और क्लिनिक रेट की सीधी जानकारी प्राप्त करें।",
      heroImageAlt:
        "डिजिटल बीपी मॉनिटर, पल्स ऑक्सीमीटर, नी सपोर्ट, पोर्टेबल नेबुलाइज़र और स्टराइल गॉज पैक सहित होम-केयर मेडिकल सामग्री",
    },
    categories: {
      eyebrow: "उत्पाद रेंज",
      heading: "श्रेणी के अनुसार उत्पाद देखें",
      subheading:
        "किसी भी श्रेणी कार्ड या केयर-एरिया गाइड पर टैप करें और नीचे कैटलॉग में संबंधित उत्पाद देखें।",
      diagramTitle: "होम व क्लिनिक सामग्री गाइड",
      diagramSubtitle: "नीचे उत्पादों को फ़िल्टर करने के लिए किसी भी भाग पर टैप करें",
      itemCountLabel: (n) => `${n} उत्पाद`,
      viewCategory: "उत्पाद फ़िल्टर करें",
      activeFilterHint: "चयनित श्रेणी",
    },
    catalog: {
      eyebrow: "उत्पाद कैटलॉग",
      heading: "पूछताछ के लिए उत्पाद खोजें और चुनें",
      subheading:
        "कीमतें, पैक साइज और स्टॉक समय-समय पर बदलते हैं। आवश्यक उत्पाद चुनें और व्हाट्सऐप या फोन पर आज का रेट पूछें।",
      searchLabel: "उत्पाद या ब्रांड खोजें",
      searchPlaceholder: "खोजें जैसे Tynor, व्हीलचेयर, BP मॉनिटर, नेबुलाइज़र, ग्लव्स…",
      clearSearch: "खोज साफ़ करें",
      allCategories: "सभी श्रेणियाँ",
      allBrands: "सभी ब्रांड",
      brandConfirmedPrefix: "मॉडल / ब्रांड:",
      askTodaysPrice: "आज का रेट पूछें",
      checkAvailability: "उपलब्धता जांचें",
      addedToEnquiry: "सूची में जुड़ा",
      addMore: "सूची में जोड़ें",
      showingCount: (visible, total) => `${total} में से ${visible} उत्पाद दिख रहे हैं`,
      emptyTitle: "इस फ़िल्टर में कोई उत्पाद नहीं मिला",
      emptyBody:
        "फ़िल्टर साफ़ करके देखें, या नीचे पूछताछ बॉक्स में अपना वांछित मेडिकल आइटम सीधे लिखकर जोड़ें।",
      resetFilters: "सभी उत्पाद दिखाएं",
    },
    enquiry: {
      eyebrow: "रेट व स्टॉक डेस्क",
      heading: "अपनी व्हाट्सऐप पूछताछ तैयार करें",
      subheading:
        "मात्रा और नोट के साथ सूची बनाएं। व्हाट्सऐप खोलने से पहले आप पूरा संदेश यहाँ देख सकते हैं।",
      selectedItemsTitle: "आपकी पूछताछ सूची",
      emptyListPrompt:
        "अभी कोई आइटम नहीं चुना गया है। ऊपर उत्पाद कार्ड पर “आज का रेट पूछें” दबाएं या नीचे से उत्पाद जोड़ें।",
      quickAddLabel: "लिस्ट से उत्पाद तुरंत जोड़ें",
      quickAddPlaceholder: "जोड़ने के लिए उत्पाद चुनें…",
      addItemButton: "जोड़ें",
      customItemLabel: "कोई अन्य साइज, ब्रांड या सर्जिकल आइटम चाहिए?",
      customItemPlaceholder: "उत्पाद का नाम या विवरण लिखें…",
      addCustomButton: "कस्टम आइटम जोड़ें",
      quantityLabel: "मात्रा",
      removeItem: "हटाएं",
      buyerTypeLabel: "पूछताछ प्रकार",
      buyerHome: "घरेलू / व्यक्तिगत उपयोग",
      buyerClinic: "क्लिनिक / अस्पताल / होलसेल",
      notesLabel: "साइज, ब्रांड या संदेश (वैकल्पिक)",
      notesPlaceholder: "जैसे LS बेल्ट साइज XL चाहिए, या क्लिनिक के लिए बल्क बॉक्स रेट जानना है…",
      previewLabel: "संदेश पूर्वावलोकन",
      channelNoticeVerified: (waDisplay) =>
        `यह बटन आपके चुने गए संदेश के साथ नए टैब/ऐप में WhatsApp (${waDisplay}) खोलेगा। यहाँ कोई ऑनलाइन पेमेंट या ऑटो-ऑर्डर नहीं होता।`,
      channelNoticeUnverified:
        "व्हाट्सऐप नंबर की पुष्टि शेष है। नीचे से संदेश कॉपी करें या सीधे शोरूम पर कॉल करें।",
      sendWhatsApp: "WhatsApp में खोलें",
      copyMessage: "संदेश कॉपी करें",
      copied: "कॉपी हो गया",
      callInstead: "शोरूम पर कॉल करें",
      clearList: "सूची साफ़ करें",
      floatingLabel: (count) => `पूछताछ सूची में ${count} आइटम`,
      floatingAction: "देखें व भेजें",
    },
    about: {
      eyebrow: "कृष्णा सर्जिकल्स के बारे में",
      heading: "2020 से कानपुर का विश्वसनीय मेडिकल व सर्जिकल सप्लाई काउंटर",
      lead: "2020 में कानपुर, उत्तर प्रदेश में स्थापित, कृष्णा सर्जिकल्स काकादेव में एक होलसेलर, डिस्ट्रीब्यूटर और स्थानीय रिटेल मेडिकल सप्लाई काउंटर है।",
      paragraphs: [
        "घर पर देखभाल करने वाले परिवार, फिजियोथेरेपी मरीज़, स्थानीय क्लिनिक और नर्सिंग होम रोज़मर्रा के मेडिकल डिवाइस, ऑर्थोपेडिक बेल्ट-ब्रेसेज़, पेशेंट-रूम उपकरण और स्टराइल ड्रेसिंग के लिए हमारे एवन मार्केट काउंटर पर आते हैं।",
        "अपुष्ट या पुरानी ऑनलाइन कीमतें दिखाने के बजाय, हम ग्राहकों को फोन या व्हाट्सऐप पर सीधे उपलब्ध मॉडल, साइज और आज के होलसेल व रिटेल रेट की जानकारी देते हैं।",
      ],
      factsTitle: "सत्यापित व्यवसाय विवरण",
      facts: {
        establishedLabel: "स्थापना वर्ष",
        establishedValue: "2020 (कानपुर, उत्तर प्रदेश)",
        roleLabel: "व्यवसाय प्रकार",
        roleValue: "होलसेलर, डिस्ट्रीब्यूटर एवं रिटेल काउंटर",
        proprietorLabel: "फर्म",
        proprietorValue: "प्रोप्राइटरशिप · लवी विष्णानी",
        gstLabel: "जीएसटीआईएन (GSTIN)",
        locationLabel: "शोरूम क्षेत्र",
        locationValue: "एवन मार्केट, काकादेव, कानपुर",
      },
      brandsHeading: "स्टोर सूची में उपलब्ध प्रमुख ब्रांड",
      noticeLine:
        "प्रदर्शित चित्र केवल संदर्भ के लिए हैं; कृपया सटीक साइज, मॉडल और उपयोग की उपयुक्तता अपने डॉक्टर या स्टोर स्टाफ से जांचें।",
    },
    visit: {
      eyebrow: "पता और संपर्क",
      heading: "काकादेव, कानपुर में हमारे शोरूम पर आएं",
      subheading:
        "अशोक ज्वैलर्स के पास एवन मार्केट स्थित काउंटर पर आएं, या आने से पहले फोन/व्हाट्सऐप पर उपलब्धता व रेट की पुष्टि करें।",
      addressLabel: "शोरूम पता",
      landmarkPrefix: "पहचान (लैंडमार्क):",
      directionsCta: "Google Maps पर रास्ता देखें",
      phoneLabel: "फोन",
      whatsappLabel: "व्हाट्सऐप बिज़नेस",
      whatsappSub: "सत्यापित बिज़नेस अकाउंट · उत्पाद व कीमत पूछताछ",
      hoursLabel: "खुलने का समय",
      hoursPendingTitle: "आने से पहले फोन या व्हाट्सऐप पर समय की पुष्टि करें",
      hoursPendingNote:
        "शोरूम के सटीक समय की पुष्टि Google Business Profile पर स्वामी द्वारा की जानी शेष है।",
      mapCardBadge: "काकादेव · कानपुर",
      mapCardTitle: "एवन मार्केट लोकेशन गाइड",
      mapCardNote:
        "117/N/39, N ब्लॉक, एवन मार्केट (अशोक ज्वैलर्स के पास)। लाइव नेविगेशन के लिए Google Maps बटन दबाएं।",
    },
    footer: {
      navigationTitle: "नेविगेशन",
      storeTitle: "शोरूम विवरण",
      enquiryNoteTitle: "सीधी पूछताछ",
      enquiryNoteBody:
        "स्टॉक, साइज और दैनिक होलसेल/रिटेल कीमतों की पुष्टि सीधे फोन या व्हाट्सऐप द्वारा की जाती है।",
      copyright: (year) => `© ${year} कृष्णा सर्जिकल्स, काकादेव, कानपुर। सर्वाधिकार सुरक्षित।`,
      establishedNote: "स्थापित 2020 · कानपुर, उत्तर प्रदेश",
    },
  },
};
