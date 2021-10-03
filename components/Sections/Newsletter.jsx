import React, { useState } from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import { useTheme } from "@emotion/react";
import calendarHero from "../../public/static/images/calendar-hero.svg";

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

  const handleSignUpNewsletter = (e) => {
    e.preventDefault();
  };

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <form onSubmit={handleSignUpNewsletter}>
        <Flex justifyContent="center" alignItems="center" pt={10} pb={10}>
          <Flex flexDir="column" justifyContent="center">
            <Box width={["100%", "100%", "90%"]}>
              <Heading>Get involved. </Heading>
              <Heading>Stay active.</Heading>
              <Text mt={[4, 6, 8]} fontSize="md">
                Join our newsletter to stay updated on upcoming events,
                workshops, and community activities near you.
              </Text>
            </Box>
            <Box
              width={["100%", "100%", "90%"]}
              display="flex"
              flexDir={["column", "column", "row"]}
              alignItems="center"
              mt={[6, 6, 6]}
            >
              <CustomInput
                size="md"
                type="email"
                placeholder="Email"
                mr={[0, 0, 2]}
                mb={[2, 2, 0]}
                variant="outline"
                required
              />
              <StandardButton
                pl="32px"
                pr="32px"
                colorScheme="brand"
                w={["100%", "100%", "60%"]}
                type="submit"
              >
                Join the community!
              </StandardButton>
            </Box>
          </Flex>

          <Box h="100%" w="80%" ml={8} display={["none", "none", "block"]}>
            <Image src={calendarHero} boxSize="100%" objectFit="contain" />
          </Box>
        </Flex>
      </form>
    </Section>
  );
};

export default Newsletter;
