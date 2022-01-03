import { AD_SPECS, AD_TYPES } from "../constants/adType";

//Function used to get price of AdType
//Assuming the offers do not stack (i.e. each adType only has one offering)
export const getAdPrice = (count, adType, offer) => {
  var price = 0;
  if (offer) {
    const obj = offer[adType];

    if (obj) {
      const keys = Object.keys(obj);

      if (keys.includes("pricePerAd")) {
        price = obj.pricePerAd * count;
      } else {
        price = AD_SPECS[adType].pricePerAd * count;
      }

      if (keys.includes("deal")) {
        if (count >= obj.deal[0]) {
          price = AD_SPECS[adType].pricePerAd * obj.deal[1];
        } else {
          price = AD_SPECS[adType].pricePerAd * count;
        }
      }

      if (keys.includes("bulkDiscount")) {
        if (count >= obj.bulkDiscount.qty) {
          price = obj.bulkDiscount.pricePerAd * count;
        } else {
          price = AD_SPECS[adType].pricePerAd * count;
        }
      }
    } else {
      price = AD_SPECS[adType].pricePerAd * count;
    }
  } else {
    price = AD_SPECS[adType].pricePerAd * count;
  }

  return price;
};

export const getTotalPrice = (totalCount, offer) => {
  var total = 0;
  const standardCount = totalCount.standard;
  const featuredCount = totalCount.featured;
  const premiumCount = totalCount.premium;

  if (standardCount > 0) {
    total += getAdPrice(standardCount, AD_TYPES.standard.value, offer);
  }

  if (featuredCount > 0) {
    total += getAdPrice(featuredCount, AD_TYPES.featured.value, offer);
  }

  if (premiumCount > 0) {
    total += getAdPrice(premiumCount, AD_TYPES.premium.value, offer);
  }

  return Math.round(total * 100) / 100;
};

export const getDealInText = (adType, offer) => {
  var text = "";

  if (!offer || !(adType in offer)) return;

  const keys = Object.keys(offer[adType]);

  if (keys.includes("pricePerAd")) {
    text = `Offer: Discounted price`;
  }

  if (keys.includes("deal")) {
    const buyAmount = offer[adType].deal[0];
    const givenAmount = offer[adType].deal[1];

    text = `Offer: Get ${buyAmount} for ${givenAmount}`;
  }

  if (keys.includes("bulkDiscount")) {
    const qtyForOffer = offer[adType].bulkDiscount.qty;
    const bulkPrice = offer[adType].bulkDiscount.pricePerAd;

    text = `Offer: Buy ${qtyForOffer} or more and get RM ${bulkPrice} / ad`;
  }

  return text;
};
