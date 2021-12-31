export const AD_TYPES = {
  standard: { value: "standard", label: "Standard Ad" },
  featured: { value: "featured", label: "Featured Ad" },
  premium: { value: "premium", label: "Premium Ad" },
};

export const AD_DEFAULT_PRICING = {
  standard: 269.99,
  featured: 322.99,
  premium: 394.99,
};

export const AD_SPECS = {
  standard: {
    adType: AD_TYPES.standard.value,
    pricePerAd: AD_DEFAULT_PRICING.standard,
    currency: "RM",
    adText: { text: "", charLimit: 150 },
    adSpecs: ["Basic ad only", "No company logo", "Character limit: 150"],
  },
  featured: {
    adType: AD_TYPES.featured.value,
    pricePerAd: AD_DEFAULT_PRICING.featured,
    currency: "RM",
    adText: { text: "", charLimit: 500 },
    logoUrl: "",
    adSpecs: ["Basic ad only", "Company logo included", "Character limit: 500"],
  },
  premium: {
    adType: AD_TYPES.premium.value,
    pricePerAd: AD_DEFAULT_PRICING.premium,
    currency: "RM",
    adText: { text: "", charLimit: 500 },
    logoUrl: "",
    adSpecs: [
      "High visibility ad",
      "Company logo included",
      "Character limit: 500",
    ],
  },
};

export const PRIVELAGE_CUSTOMERS = [
  {
    companyId: "uem_sunrise",
    companyName: "UEM Sunrise",
    offers: {
      standard: {
        pricePerAd: 209.99,
        deal: [3, 2],
        bulkDiscount: { qty: 3, pricePerAd: 389.99 },
      },
    },
  },
];

// export const PRIVELAGE_CUSTOMERS = [
//   {
//     companyId: "uem_sunrise",
//     companyName: "UEM Sunrise",
//     offers: {
//       pricePerAd: null,
//       deal: {
//         standard: [3, 2],
//       },
//       bulkDiscount: null,
//     },
//   },
//   {
//     companyId: "sime_darby_property_bhd",
//     companyName: "Sime Darby Property Bhd.",
//     offers: {
//       pricerPerAd: { featured: 299.99 },
//       deal: {},
//       bulkDiscount: {},
//     },
//   },
//   {
//     companyId: "igb_berhad",
//     companyName: "IGB Berhad",
//     offers: {
//       pricerPerAd: {},
//       deal: {},
//       bulkDiscount: { premium: { qty: 4, pricePerAd: 379.99 } },
//     },
//   },
//   {
//     companyId: "mah_sing_group",
//     companyName: "Mah Sing Group",
//     offers: {
//       pricerPerAd: { featured: 309.99 },
//       deal: { standard: [5, 4] },
//       bulkDiscount: { premium: { qty: 3, pricePerAd: 389.99 } },
//     },
//   },
// ];
