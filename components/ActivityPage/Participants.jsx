import React from "react";
import { Avatar, AvatarGroup, Box, Flex, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = createUseStyles({
  participantSection: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
  },
});

const tempParticipants = [
  { name: "bob lee" },
  { name: "John smith" },
  { name: "Akira Satomi" },
  { name: "James Bond" },
  { name: "bob lee" },
  { name: "John smith" },
  { name: "Akira Satomi" },
  { name: "James Bond" },
  { name: "bob lee" },
  { name: "John smith" },
  { name: "Akira Satomi" },
  { name: "James Bond" },
  { name: "bob lee" },
  { name: "John smith" },
  { name: "Akira Satomi" },
  { name: "James Bond" },
  { name: "bob lee" },
  { name: "John smith" },
  { name: "Akira Satomi" },
  { name: "James Bond" },
];

const Participants = (props) => {
  const classes = useStyles();
  const { participants = tempParticipants } = props;

  return (
    <Box className={classes.participantSection} mt={4}>
      <Flex align="center">
        <Text fontSize="md" fontWeight="bold">
          Participants
        </Text>
        <Text fontSize="md" ml={2}>
          (24)
        </Text>
      </Flex>

      <AvatarGroup
        mt={4}
        spacing={2}
        max={10}
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        {participants.map((participant, index) => (
          <Avatar key={index} bg="teal" name={participant.name} mt={2} />
        ))}
      </AvatarGroup>
    </Box>
  );
};

export default Participants;
