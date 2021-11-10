import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Stepper = ({ step }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" m="16px 0 24px 0">
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        border={step >= 1 ? "2px solid" : "1px solid"}
        borderColor={step >= 1 ? "brand.300" : "gray.300"}
        color={step >= 1 ? "brand.300" : "gray.300"}
        h="24px"
        minW="24px"
      >
        <Text fontSize="xs" fontWeight="bold">
          1
        </Text>
      </Flex>
      <Box
        w="100%"
        h="1px"
        bg={step >= 2 ? "brand.300" : "gray.300"}
        m="0 8px"
      ></Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        border={step >= 2 ? "2px solid" : "1px solid"}
        borderColor={step >= 2 ? "brand.300" : "gray.300"}
        color={step >= 2 ? "brand.300" : "gray.300"}
        h="24px"
        minW="24px"
      >
        <Text fontSize="xs" fontWeight="bold">
          2
        </Text>
      </Flex>
      <Box
        w="100%"
        h="1px"
        bg={step === 3 ? "brand.300" : "gray.300"}
        m="0 8px"
      ></Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        border={step === 3 ? "2px solid" : "1px solid"}
        borderColor={step === 3 ? "brand.300" : "gray.300"}
        color={step === 3 ? "brand.300" : "gray.300"}
        h="24px"
        minW="24px"
      >
        <Text fontSize="xs" fontWeight="bold">
          3
        </Text>
      </Flex>
    </Flex>
  );
};

export default Stepper;
