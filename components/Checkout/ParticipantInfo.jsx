import React, { useState, useEffect } from "react";
import { Box, Text, Stack, Tooltip } from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const ParticipantInfo = (props) => {
  const { quantity, participants, handleParticipants, ...others } = props;

  useEffect(() => {
    const participantArray = [];
    for (var i = 1; i <= quantity; i++) {
      const info = {
        pName: "",
        pContact: "",
        pEmail: "",
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
              name="pName"
              type="text"
              label="Name"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.pName}
              placeholder="Name"
              required
            />
          </Stack>
          <Box>
            <CustomInput
              name="pContact"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.pContact}
              label="Contact number"
              placeholder="123 456-7890"
              required
            />
            <CustomInput
              name="pEmail"
              type="email"
              onChange={(e) => handleInputChange(e, index)}
              value={participant.pEmail}
              label="Email"
              placeholder="participant@email.com (optional)"
              rightElement={
                <Tooltip
                  hasArrow
                  closeOnClick={false}
                  label="A confirmation email will be sent to this participant"
                >
                  <QuestionOutlineIcon />
                </Tooltip>
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ParticipantInfo;
