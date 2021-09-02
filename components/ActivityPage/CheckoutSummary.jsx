import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import CustomSelect from "../Controls/CustomSelect";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import { loadStripe } from "@stripe/stripe-js";
import { fetchPostJSON } from "../../lib/api-helpers";
import getStripe from "../../lib/get-stripe";
import { quantityDropdown } from "../../constants/dropdowns";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const useStyles = createUseStyles({
  activityDetails: {},
});

const CheckoutSummary = (props) => {
  const { info, selectedDate } = props;
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    defaultPrice,
    paymentNotes,
    partnerId,
    activityId,
    locationMaps,
    hostEmail,
    hostContact,
  } = info;

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (selectedDate) {
      setIsLoading(true);
      const response = await fetchPostJSON("/api/checkout_sessions", {
        redirectUrl: `activity/${partnerId}/${activityId}`,
        productId: activityId,
        quantity: quantity,
        metadata: {
          bookedSession: selectedDate.date,
          scheduleId: selectedDate.scheduleId,
          organizer: partnerId,
          organizerEmail: hostEmail,
          organizerContact: hostContact,
          location: locationMaps,
        },
      });

      if (response.statusCode === 500) {
        console.error(response.message);
        return;
      }

      // Redirect to Checkout.
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.id,
      });
      console.warn(error.message);
    } else {
      setNoSelect(true);
    }
  };

  return (
    <Flex flexDirection="column" fontSize="sm">
      <Box>
        <Text>Contact information</Text>
        <Stack direction="row" spacing={2}>
          <CustomInput placeholder="First name" required />
          <CustomInput placeholder="Last name" required />
        </Stack>
        <Stack direction="row" spacing={2} mt={2}>
          <CustomInput placeholder="Email" required />
          <CustomInput placeholder="Contact" required />
        </Stack>
      </Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Box mt={2}>
          <Text fontWeight="bold">General admission</Text>
          <Text fontWeight="bold" fontSize="xs">{`RM ${defaultPrice}`}</Text>
          <Text fontSize="xs">{selectedDate.date}</Text>
        </Box>
        <Box>
          <CustomSelect
            options={quantityDropdown}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Box>
      </Flex>
      <Box mt={6} mb={10} fontSize="xs">
        <Text>Notes</Text>
        <Text>{paymentNotes}</Text>
      </Box>
      <Box mb={6} bg="whitesmoke" p={4} borderRadius="var(--border-radius)">
        <Text fontWeight="bold">Order summary</Text>
        <Flex justifyContent="space-between" p={2} mt={2}>
          <Text>{`${quantity} x General admission`}</Text>
          <Text>{`RM ${defaultPrice * quantity}`}</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" p={2} fontWeight="bold">
          <Text>Total</Text>
          <Text>{`RM ${defaultPrice * quantity}`}</Text>
        </Flex>
      </Box>
      <StandardButton
        colorScheme="brand"
        onClick={handleCheckout}
        isLoading={isLoading}
      >
        Register
      </StandardButton>
    </Flex>
  );
};

export default CheckoutSummary;
