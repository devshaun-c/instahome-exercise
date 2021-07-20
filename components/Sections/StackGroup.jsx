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

const useStyles = createUseStyles({
  content: {},
  heroImg: {},
});

const StackGroup = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgColor, bgImg, children, height = "600px" } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Stack direction={["column", "column", "row"]} spacing="24px" h="100%">
        {children}
      </Stack>
    </Section>
  );
};

export default StackGroup;
