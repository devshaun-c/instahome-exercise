import React, { useState } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";

const PayeeInfoForm = (props) => {
  const { payeeInfo, handlePayeeInfo, ...others } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handlePayeeInfo({
      ...payeeInfo,
      [name]: value,
    });
  };

  return (
    <Box {...others}>
      <Text fontWeight="bold" mb={2}>
        Payee Information
      </Text>
      <Stack direction="row">
        <CustomInput
          name="firstName"
          label="First name"
          placeholder="Bruce"
          onChange={handleInputChange}
          value={payeeInfo.firstName}
          required
        />
        <CustomInput
          name="lastName"
          label="Last name"
          placeholder="Wayne"
          onChange={handleInputChange}
          value={payeeInfo.lastName}
          required
        />
      </Stack>
      <Box>
        <CustomInput
          name="email"
          label="Email"
          placeholder="bruce@batcave.com"
          onChange={handleInputChange}
          value={payeeInfo.email}
          required
        />
      </Box>
    </Box>
  );
};

export default PayeeInfoForm;
