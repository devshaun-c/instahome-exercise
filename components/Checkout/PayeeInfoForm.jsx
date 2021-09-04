import React, { useState } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";

const PayeeInfoForm = (props) => {
  const { formValues, handleInputChange, ...others } = props;

  return (
    <Box {...others}>
      <Text fontWeight="bold" mb={2}>
        Contact information
      </Text>
      <Stack direction="row">
        <CustomInput
          name="pFirstName"
          label="First name"
          placeholder="First name"
          onChange={handleInputChange}
          value={formValues.pFirstName}
          required
        />
        <CustomInput
          name="pLastName"
          label="Last name"
          placeholder="Last name"
          onChange={handleInputChange}
          value={formValues.pLastName}
          required
        />
      </Stack>
      <Box>
        <CustomInput
          name="pEmail"
          label="Email"
          placeholder="Email"
          onChange={handleInputChange}
          value={formValues.pEmail}
          required
        />
      </Box>
    </Box>
  );
};

export default PayeeInfoForm;
