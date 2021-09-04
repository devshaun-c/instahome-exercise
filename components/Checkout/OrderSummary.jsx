import React from "react";
import { Box, Text, Flex, Divider } from "@chakra-ui/react";

const OrderSummary = (props) => {
  const { unitPrice, quantity, ...others } = props;

  return (
    <Box bg="whitesmoke" p={4} borderRadius="var(--border-radius)" {...others}>
      <Text fontWeight="bold">Order summary</Text>
      <Flex justifyContent="space-between" p={2} mt={2}>
        <Text>{`${quantity} x Online Booking`}</Text>
        <Text>{`${quantity} x RM ${unitPrice}`}</Text>
      </Flex>
      <Divider />
      <Flex
        justifyContent="space-between"
        p={2}
        fontWeight="bold"
        fontSize="sm"
      >
        <Text>Total</Text>
        <Text>{`RM ${unitPrice * quantity}`}</Text>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
