import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  OrderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import StandardButton from "../Buttons/StandardButton";
import {
  AD_DEFAULT_PRICING,
  AD_SPECS,
  AD_TYPES,
  PRIVELAGE_CUSTOMERS,
} from "../../constants/adType";

//Function used to get price of AdType
//Assuming the offers do not stack (i.e. each adType only has one offering)
const getAdPrice = (count, adType, offer) => {
  var price = 0;
  if (offer) {
    console.log(offer);
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

const getTotalPrice = (totalCount, offer) => {
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

const PaymentSummary = ({ companyId, listing, offer }) => {
  const [count, setCount] = useState({ standard: 0, featured: 0, premium: 0 });

  useEffect(() => {
    if (!listing) return;

    var standardCount = 0;
    var featuredCount = 0;
    var premiumCount = 0;

    listing.forEach((el) => {
      switch (el.adType) {
        case AD_TYPES.standard.value:
          standardCount++;
          break;
        case AD_TYPES.featured.value:
          featuredCount++;
          break;
        case AD_TYPES.premium.value:
          premiumCount++;
          break;
      }
    });

    setCount({
      standard: standardCount,
      featured: featuredCount,
      premium: premiumCount,
    });
  }, [companyId, offer, listing]);

  return (
    <Flex flexDirection="column">
      <Text fontWeight="bold" fontSize="md" mb={4}>
        Order Payment Summary (in RM)
      </Text>
      {count.standard > 0 && (
        <Flex justifyContent="space-between">
          <Flex>
            <Text>Standard Ad </Text>
            <Text ml={2}>x {count.standard}</Text>
          </Flex>

          <Flex>
            <Text>
              {getAdPrice(count.standard, AD_TYPES.standard.value, offer)}
            </Text>
          </Flex>
        </Flex>
      )}

      {count.featured > 0 && (
        <Flex justifyContent="space-between">
          <Flex>
            <Text>Featured Ad </Text>
            <Text ml={2}>x {count.featured}</Text>
          </Flex>

          <Flex>
            <Text>
              {getAdPrice(count.featured, AD_TYPES.featured.value, offer)}
            </Text>
          </Flex>
        </Flex>
      )}

      {count.premium > 0 && (
        <Flex justifyContent="space-between">
          <Flex>
            <Text>Premium Ad </Text>
            <Text ml={2}>x {count.premium}</Text>
          </Flex>

          <Flex>
            <Text>
              {getAdPrice(count.premium, AD_TYPES.premium.value, offer)}
            </Text>
          </Flex>
        </Flex>
      )}

      <Divider />
      <Flex justifyContent="space-between" fontWeight="bold" py={2}>
        <Text>Total</Text>
        <Text>{getTotalPrice(count, offer)}</Text>
      </Flex>

      <StandardButton colorScheme="brand" mt={6}>
        Checkout
      </StandardButton>
    </Flex>
  );
};

export default PaymentSummary;
