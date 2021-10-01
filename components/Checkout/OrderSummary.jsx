import React from "react";
import { Box, Text, Flex, Divider, Image } from "@chakra-ui/react";
import stripeImg from "../../public/static/images/stripe.svg";

const OrderSummary = (props) => {
  const { unitPrice, quantity, ...others } = props;

  const serviceFee = quantity * Math.ceil(unitPrice * 0.02);
  const totalPrice = quantity * unitPrice + serviceFee;

  return (
    <Box bg="whitesmoke" p={4} borderRadius="var(--border-radius)" {...others}>
      <Text fontWeight="bold">Order summary</Text>
      <Flex justifyContent="space-between" p={2} mt={2}>
        <Text>Online Booking</Text>
        <Text>{`${quantity} x RM ${unitPrice}.00`}</Text>
      </Flex>

      <Flex justifyContent="space-between" p={2}>
        <Text>Service fee</Text>
        <Text>{`RM ${serviceFee}.00`}</Text>
      </Flex>

      <Divider />

      <Flex
        justifyContent="space-between"
        p={2}
        fontWeight="bold"
        fontSize="sm"
      >
        <Text>Total (MYR)</Text>
        <Text>{`RM ${totalPrice}.00`}</Text>
      </Flex>
      <Flex justifyContent="center" mt={2}>
        <Image src={stripeImg} w="150px" h="40px" objectFit="cover" />
      </Flex>
    </Box>
  );
};

export default OrderSummary;
