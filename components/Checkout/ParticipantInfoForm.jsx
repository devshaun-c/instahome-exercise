import React, { useState } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";

const participantInfo = {
  firstName: "",
  lastName: "",
  contact: "",
  email: "",
};

const ParticipantInfoForm = (props) => {
  const { formValues, handleInputChange, ...others } = props;
  const participantArray = [];

  const quantity = formValues.quantity;

  for (var i = 1; i <= quantity; i++) {
    participantArray.push({ [i]: participantInfo });
  }

  console.log(participantArray);

  const ParticipantObj = ({ participant }) => {
    const participantNum = Object.keys(participant)[0];

    return (
      <>
        <Text fontWeight="bold" mb={2}>
          {`Participant ${participantNum}`}
        </Text>
        <Stack direction="row">
          <CustomInput label="First name" placeholder="First name" required />
          <CustomInput label="Last name" placeholder="Last name" required />
        </Stack>
        <Box>
          <CustomInput label="Cell phone" placeholder="Cell phone" required />
          <CustomInput label="Email" placeholder="Email" />
        </Box>
      </>
    );
  };

  return (
    <Box {...others}>
      {participantArray.map((participant, index) => (
        <ParticipantObj key={index} participant={participant} />
      ))}
    </Box>
  );
};

export default ParticipantInfoForm;
