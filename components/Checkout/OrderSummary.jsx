import React from "react";
import { Box, Text, Flex, Divider } from "@chakra-ui/react";

const OrderSummary = (props) => {
  const { unitPrice, quantity, ...others } = props;

  const serviceFee = quantity * Math.ceil(unitPrice * 0.02);
  const totalPrice = quantity * unitPrice + serviceFee;

  return (
    <Box bg="whitesmoke" p={4} borderRadius="var(--border-radius)" {...others}>
      <Text fontWeight="bold">Order summary</Text>
      <Flex justifyContent="space-between" p={2} mt={2}>
        <Text>{`${quantity} x Online Booking`}</Text>
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
    </Box>
  );
};

export default OrderSummary;
