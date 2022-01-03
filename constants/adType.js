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

export const AD_TEXT_LIMIT = {
  standard: 75,
  featured: 150,
  premium: 150,
};

export const AD_SPECS = {
  standard: {
    adType: AD_TYPES.standard.value,
    pricePerAd: AD_DEFAULT_PRICING.standard,
    currency: "RM",
    adText: { text: "", charLimit: AD_TEXT_LIMIT.standard },
    adSpecs: ["No company logo", `Character limit: ${AD_TEXT_LIMIT.standard}`],
  },
  featured: {
    adType: AD_TYPES.featured.value,
    pricePerAd: AD_DEFAULT_PRICING.featured,
    currency: "RM",
    adText: { text: "", charLimit: AD_TEXT_LIMIT.featured },
    logoUrl: "",
    adSpecs: [
      "Company logo included in Ad",
      `Character limit: ${AD_TEXT_LIMIT.featured}`,
    ],
  },
  premium: {
    adType: AD_TYPES.premium.value,
    pricePerAd: AD_DEFAULT_PRICING.premium,
    currency: "RM",
    adText: { text: "", charLimit: AD_TEXT_LIMIT.premium },
    logoUrl: "",
    adSpecs: [
      "High visibility ad",
      "Company logo included in Ad",
      `Character limit: ${AD_TEXT_LIMIT.premium}`,
    ],
  },
};
