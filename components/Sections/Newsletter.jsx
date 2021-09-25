import React, { useState } from "react";
import { Box, Heading, Text, Input } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
});

const Newsletter = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgColor, bgImg, height = "100%" } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Box
        height="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Box width={["100%", "100%", "60%"]}>
          <Heading w="90%">Get involved. Stay active.</Heading>
          <Text mt={[4, 6, 8]} fontSize={["md", "sm", "md"]}>
            Join our newsletter to stay updated on upcoming workshops, events,
            and community activities in Kuala Lumpur, Selangor and more to come!
          </Text>
        </Box>
        <Box
          width={["100%", "100%", "60%"]}
          display="flex"
          flexDir={["column", "column", "row"]}
          alignItems="center"
          mt={[6, 6, 6]}
        >
          <CustomInput
            size="md"
            placeholder="Email"
            mr={[0, 0, 2]}
            mb={[2, 2, 0]}
            variant="filled"
          />
          <StandardButton
            pl="32px"
            pr="32px"
            colorScheme="teal"
            w={["100%", "100%", "60%"]}
          >
            Join the community!
          </StandardButton>
        </Box>
      </Box>
    </Section>
  );
};

export default Newsletter;
