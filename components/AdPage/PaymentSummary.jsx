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
import { AD_TYPES } from "../../constants/adType";
import {
  getAdPrice,
  getTotalPrice,
  getDealInText,
} from "../../utils/functions";

const AdSummaryRow = ({ count, adType, offer }) => {
  return (
    <Flex flexDirection="column" mb={3} color="gray.500">
      <Flex justifyContent="space-between">
        <Flex fontWeight="bold">
          <Text textTransform="capitalize">{`${adType} Ad `}</Text>
          <Text ml={2}>x {count[adType]}</Text>
        </Flex>

        <Flex flexDirection="column">
          <Text>{getAdPrice(count[adType], adType, offer)}</Text>
        </Flex>
      </Flex>

      <Text>{getDealInText(adType, offer)}</Text>
    </Flex>
  );
};

const PaymentSummary = ({ companyId, listing, offer }) => {
  const [count, setCount] = useState({ standard: 0, featured: 0, premium: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  }, [companyId, listing]);

  const handleCheckout = () => {
    setIsSubmitting(true);

    //This timeout is jsut for demo purpose (replace with ASYNC function)
    setTimeout(() => {
      alert("Checkout complete");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Flex
      flexDirection="column"
      bg="brand.50"
      p="24px"
      borderRadius="var(--border-radius)"
    >
      <Text fontWeight="bold" fontSize="md" mb={4}>
        Order Payment Summary (in RM)
      </Text>
      {count.standard > 0 && (
        <AdSummaryRow
          count={count}
          adType={AD_TYPES.standard.value}
          offer={offer}
        />
      )}

      {count.featured > 0 && (
        <AdSummaryRow
          count={count}
          adType={AD_TYPES.featured.value}
          offer={offer}
        />
      )}

      {count.premium > 0 && (
        <AdSummaryRow
          count={count}
          adType={AD_TYPES.premium.value}
          offer={offer}
        />
      )}

      <Divider borderColor="brand.500" />
      <Flex justifyContent="space-between" fontWeight="bold" py={2}>
        <Text>Total</Text>
        <Text>{getTotalPrice(count, offer)}</Text>
      </Flex>

      <StandardButton
        colorScheme="brand"
        mt={6}
        onClick={handleCheckout}
        isLoading={isSubmitting}
      >
        Checkout
      </StandardButton>
    </Flex>
  );
};

export default PaymentSummary;
