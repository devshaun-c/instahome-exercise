import React, { useEffect, useState } from "react";
import { Box, Text, Flex, ButtonGroup, Stack } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import CustomSelect from "../Controls/CustomSelect";
import StandardButton from "../Buttons/StandardButton";
import { loadStripe } from "@stripe/stripe-js";
import { fetchPostJSON } from "../../utils/api-helpers";
import getStripe from "../../utils/get-stripe";
import { quantityDropdown } from "../../constants/dropdowns";
import PayeeInfoForm from "./PayeeInfoForm";
import OrderSummary from "./OrderSummary";
import ParticipantInfoForm from "./ParticipantInfoForm";
import Timer from "./Timer";

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
  const [participants, setParticipants] = useState([]);
  const [payeeInfo, setPayeeInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [quantity, setQuantity] = useState(1);

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

    const participantsJSON = JSON.stringify(participants);
    const payeeJSON = JSON.stringify(payeeInfo);
    const organizerJSON = JSON.stringify({
      name: partnerId,
      email: hostEmail,
      contact: hostContact,
    });

    setIsLoading(true);
    const response = await fetchPostJSON("/api/checkout_sessions", {
      redirectUrl: `activity/${partnerId}/${activityId}`,
      productId: activityId,
      quantity: quantity,
      metadata: {
        bookedDate: selectedDate.date,
        bookedTime: selectedDate.time,
        scheduleId: selectedDate.scheduleId,
        location: locationMaps,
        organizer: organizerJSON,
        payee: payeeJSON,
        participants: participantsJSON,
      },
    });

    if (response.statusCode === 500) {
      setIsLoading(false);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setCheckout(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={checkout ? handleCheckout : handleRegister}>
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
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  width="100px"
                />
              </Box>
            </Flex>
            <OrderSummary quantity={quantity} unitPrice={defaultPrice} />
          </>
        ) : (
          <>
            <OrderSummary
              quantity={quantity}
              unitPrice={defaultPrice}
              mb={10}
            />

            <PayeeInfoForm
              payeeInfo={payeeInfo}
              handlePayeeInfo={setPayeeInfo}
              mb={6}
            />

            <ParticipantInfoForm
              quantity={quantity}
              participants={participants}
              handleParticipants={setParticipants}
            />
          </>
        )}

        <Flex
          position="absolute"
          bottom="0"
          left="0"
          bg="white"
          w="100%"
          p="16px 32px"
          borderTop="1px solid whitesmoke"
          borderRadius="0 0 var(--border-radius) var(--border-radius)"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box fontSize="sm" fontWeight="bold">
            {checkout && (
              <Stack direction="row">
                <Text fontWeight="normal">Time left:</Text>
                <Timer
                  initialMinute={8}
                  initialSeconds={0}
                  handleTimesup={() => setCheckout(false)}
                />
              </Stack>
            )}
          </Box>

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
            <StandardButton colorScheme="brand" type="submit" isLoading={true}>
              {checkout ? "Checkout" : "Register"}
            </StandardButton>
          </ButtonGroup>
        </Flex>
      </Flex>
    </form>
  );
};

export default CheckoutSummary;
