import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

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
        <Box width={["100%", "100%", "50%"]}>
          <Heading>Get involved. Stay active.</Heading>
          <Text mt={4}>
            Join our newsletter to stay updated on upcoming workshops, events,
            and community activities in Kuala Lumpur, Selangor and more to come!
          </Text>
        </Box>
        <Box width="50%" display="flex" alignItems="center" mt={4}>
          <CustomInput placeholder="Email" mr={2} variant="filled" />
          <StandardButton
            text="Subscribe"
            pl="32px"
            pr="32px"
            colorScheme="teal"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default Newsletter;
