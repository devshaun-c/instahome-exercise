import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Divider,
  Stack,
  Checkbox,
  ButtonGroup,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import CustomSelect from "../Controls/CustomSelect";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import { loadStripe } from "@stripe/stripe-js";
import { fetchPostJSON } from "../../lib/api-helpers";
import getStripe from "../../lib/get-stripe";
import { quantityDropdown } from "../../constants/dropdowns";
import PayeeInfoForm from "./PayeeInfoForm";
import OrderSummary from "./OrderSummary";
import ParticipantInfoForm from "./ParticipantInfoForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const useStyles = createUseStyles({});

const CheckoutSummary = (props) => {
  const { info, selectedDate, handleToggle } = props;
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [formValues, setFormValues] = useState({
    quantity: "1",
    pFirstName: "",
    pLastName: "",
    pEmail: "",
  });

  const {
    defaultPrice,
    paymentNotes,
    partnerId,
    activityId,
    locationMaps,
    hostEmail,
    hostContact,
  } = info;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (selectedDate) {
      setIsLoading(true);
      const response = await fetchPostJSON("/api/checkout_sessions", {
        redirectUrl: `activity/${partnerId}/${activityId}`,
        productId: activityId,
        quantity: formValues.quantity,
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

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setCheckout(true);
      setIsLoading(false);
    }, 1000);
  };

  console.log(formValues);

  return (
    <Flex flexDirection="column" fontSize="xs" mb="60px" mt={6}>
      {!checkout ? (
        <>
          <Flex alignItems="center" justifyContent="space-between" mb={10}>
            <Box>
              <Text fontWeight="bold">Online Booking</Text>
              <Text>{`RM ${defaultPrice}`}</Text>
            </Box>
            <Box>
              <CustomSelect
                name="quantity"
                options={quantityDropdown}
                onChange={handleInputChange}
                value={formValues.quantity}
                width="100px"
              />
            </Box>
          </Flex>
          <OrderSummary
            quantity={formValues.quantity}
            unitPrice={defaultPrice}
          />
        </>
      ) : (
        <>
          <OrderSummary
            quantity={formValues.quantity}
            unitPrice={defaultPrice}
            mb={10}
          />
          <PayeeInfoForm
            formValues={formValues}
            handleInputChange={handleInputChange}
            mb={6}
          />

          <ParticipantInfoForm
            formValues={formValues}
            handleInputChange={handleInputChange}
          />
          {/* {Array.from({ length: quantity }, (item, index) => (
            <Box mb={8} key={index}>
              <Text fontWeight="bold" mb={2}>
                {`Participant ${index + 2}`}
              </Text>
              <Stack direction="row">
                <CustomInput
                  label="First name"
                  placeholder="First name"
                  required
                />
                <CustomInput
                  label="Last name"
                  placeholder="Last name"
                  required
                />
              </Stack>
              <Box>
                <CustomInput
                  label="Cell phone"
                  placeholder="Cell phone"
                  required
                />
                <CustomInput label="Email" placeholder="Email" />
              </Box>
            </Box>
          ))} */}
        </>
      )}

      <Flex
        position="absolute"
        bottom="0"
        left="0"
        bg="white"
        w="100%"
        p="16px 32px"
        // boxShadow="0 -2px 4px 0 rgb(0 0 0 / 12%)"
        borderRadius="0 0 var(--border-radius) var(--border-radius)"
        justifyContent="flex-end"
      >
        <ButtonGroup>
          <StandardButton
            variant="outline"
            colorScheme="brand"
            onClick={() => {
              checkout ? setCheckout(false) : handleToggle(false);
            }}
          >
            {checkout ? "Back" : "Cancel"}
          </StandardButton>
          <StandardButton
            colorScheme="brand"
            onClick={checkout ? handleCheckout : handleRegister}
            isLoading={isLoading}
          >
            {checkout ? "Checkout" : "Register"}
          </StandardButton>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default CheckoutSummary;
