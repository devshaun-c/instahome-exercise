import React, { useState, useEffect } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";

const ParticipantInfoForm = (props) => {
  const { quantity, participants, handleParticipants, ...others } = props;

  useEffect(() => {
    const participantArray = [];
    for (var i = 1; i <= quantity; i++) {
      const info = {
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
      };
      participantArray.push(info);
    }
    handleParticipants(participantArray);
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...participants];
    list[index][name] = value;
    handleParticipants(list);
  };

  return (
    <Box {...others}>
      {participants.map((participant, index) => (
        <Box mb={8} key={index}>
          <Text fontWeight="bold" mb={2}>
            {`Participant ${index + 1}`}
          </Text>
          <Stack direction="row">
            <CustomInput
              name="firstName"
              label="First name"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.firstName}
              placeholder="First name"
              required
            />
            <CustomInput
              name="lastName"
              label="Last name"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.lastName}
              placeholder="Last name"
              required
            />
          </Stack>
          <Box>
            <CustomInput
              name="contact"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.contact}
              label="Contact number"
              placeholder="(555) 555-5555"
              required
            />
            <CustomInput
              name="email"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.email}
              label="Email"
              placeholder="participant@email.com"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ParticipantInfoForm;
