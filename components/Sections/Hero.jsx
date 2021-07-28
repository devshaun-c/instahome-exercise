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
import placeholderImg from "../../public/static/images/placeholder.png";
import Container from "../Page/Container";
import Image from "next/image";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({});

const Hero = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    heroImg,
    primaryButtonText,
    secondaryButtonText,
    alt,
    header,
    description,
    callToAction,
    secondaryAction,
    hasImage = false,
    height = "600px",
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Stack
        direction={["column", "row", "row"]}
        spacing="40px"
        height={["80vh", "100%", "100%"]}
      >
        <Box h="100%" w="100%" mt={[4, 0, 0]}>
          <Heading w={["100%", "100%", "80%"]}>{header}</Heading>
          <Text fontSize="sm" mt={[6, 6, 10]} mb={6}>
            {description}
          </Text>
          <Stack direction={"row"}>
            <StandardButton colorScheme="teal" onClick={callToAction}>
              {primaryButtonText}
            </StandardButton>
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
          >
            <Image
              src={heroImg || placeholderImg}
              alt={alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </Box>
        )}
      </Stack>
    </Section>
  );
};

export default Hero;
