import React from "react";
import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

const ConductorInfo = (props) => {
  const classes = useStyles();
  const { conductorName, conductorImage, conductorSummary, ...others } = props;

  return (
    <Flex
      {...others}
      flexDirection={["column", "row", "row"]}
      alignItems={["center", "start", "start"]}
    >
      <Avatar mr={[0, 6, 6]} size="lg" src={conductorImage} />
      <Box textAlign={["center", "start", "start"]}>
        <Text fontSize="sm" color="grey" mt={[2, 0, 0]}>
          Your host for this activity
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          {conductorName}
        </Text>
        <Text fontSize="sm" mt={1} mb={2}>
          {conductorSummary || ""}
        </Text>
      </Box>
    </Flex>
  );
};

export default ConductorInfo;
