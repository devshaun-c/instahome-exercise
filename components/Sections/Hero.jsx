import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import StandardButton from "../Buttons/StandardButton";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import img from "../../public/static/images/hero.jpg";

const useStyles = createUseStyles({});

const Hero = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    heroImg = "",
    primaryButtonText,
    secondaryButtonText,
    alt,
    callToAction,
    secondaryAction,
    hasImage = false,
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg || img}
      height={["100%", "500px", "600px"]}
      position="relative"
      backgroundPosition="top"
    >
      <Stack
        pt={10}
        direction={["column", "row", "row"]}
        spacing="80px"
        height={["80vh", "100%", "100%"]}
        display="flex"
        justify="center"
        alignItems="center"
      >
        <Box h="100%" w="100%" mt={[4, 0, 0]}>
          <Heading
            w={["100%", "100%", "80%"]}
            color="white"
            fontSize="xxx-large"
            maxWidth="800px"
          >
            It's a Big World Out There. Go Explore!
          </Heading>
          {/* <Text fontSize="sm" mt={[6, 6, 10]} mb={6}>
            {description}
          </Text> */}
          <Stack direction={"row"}>
            {primaryButtonText && (
              <StandardButton colorScheme="teal" onClick={callToAction}>
                {primaryButtonText}
              </StandardButton>
            )}
            {secondaryButtonText && (
              <StandardButton
                variant="ghost"
                colorScheme="teal"
                onClick={secondaryAction}
              >
                {secondaryButtonText}
              </StandardButton>
            )}
          </Stack>
        </Box>

        {hasImage && (
          <Box
            height="100%"
            w="100%"
            overflow="hidden"
            borderRadius="8px"
            position="relative"
            // bg="white"
          >
            <Image
              src={heroImg}
              alt={alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={heroImg}
            />
          </Box>
        )}
      </Stack>
    </Section>
  );
};

export default Hero;
