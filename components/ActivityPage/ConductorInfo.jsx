import React from "react";
import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Subheader from "./Subheader";
import Subsection from "./Subsection";

const useStyles = createUseStyles({});

const ConductorInfo = (props) => {
  const classes = useStyles();
  const { conductorName, conductorImage, conductorSummary, ...others } = props;

  return (
    <Subsection title="Your host">
      <Flex alignItems="center">
        <Avatar mr={[3, 6, 6]} size="lg" src={conductorImage} />
        <Box>
          <Text fontSize="sm" mt={1} mb={2}>
            <span style={{ fontWeight: "bold" }}>{conductorName}</span> -{" "}
            {conductorSummary || ""}
          </Text>
        </Box>
      </Flex>
    </Subsection>
  );
};

export default ConductorInfo;
