import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  organizerInfo: {
    display: "flex",
    flexDirection: "row",
  },
});

const ConductorInfo = (props) => {
  const classes = useStyles();
  const { conductorName, conductorImage, conductorSummary, ...others } = props;

  return (
    <Box {...others} className={classes.organizerInfo}>
      <Avatar mr={6} size="xl" src={conductorImage} />
      <Box>
        <Text fontSize="xs" mb={2} color="grey">
          Your host for this activity
        </Text>
        <Text fontSize="md" fontWeight="bold">
          {conductorName || "Host not confirmed yet"}
        </Text>
        <Text fontSize="xs" mt={1} mb={2}>
          {conductorSummary || ""}
        </Text>
      </Box>
    </Box>
  );
};

export default ConductorInfo;
