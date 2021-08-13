import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
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

const Headliner = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    header,
    description,
    buttonLabel,
    handleClick,
    textColor,
    height,
    minHeight = "600px",
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Box
        h="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        minH={minHeight}
        color={textColor}
      >
        <Heading
          maxW={["80%", "70%"]}
          fontSize={["xx-large"]}
          textAlign="center"
        >
          {header}
        </Heading>
        <Text
          maxW={["100%", "80%", "70%"]}
          textAlign="center"
          fontSize={["sm", "sm", "md"]}
          mt={10}
          mb={8}
        >
          {description}
        </Text>
        <StandardButton colorScheme="teal" size="lg" onClick={handleClick}>
          {buttonLabel}
        </StandardButton>
      </Box>
    </Section>
  );
};

export default Headliner;
