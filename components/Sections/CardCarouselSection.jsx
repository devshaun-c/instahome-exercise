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
import SlickCarousel from "../Grouping/SlickCarousel";

const useStyles = createUseStyles({
  content: {},
  heroImg: {},
  tag: {
    marginBottom: "16px",
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: "8px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const CardCarouselSection = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgColor, bgImg, tag, header, children, height = "600px" } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      {tag && (
        <Text
          fontSize="xx-small"
          bg={`${theme.colors.primaryLight}`}
          className={classes.tag}
        >
          {tag}
        </Text>
      )}
      <Heading fontSize="x-large" fontWeight="bold" lineHeight="1.4">
        {header}
      </Heading>
      <Box mt="40px" mb="24px">
        <SlickCarousel dots={false}>{children}</SlickCarousel>
      </Box>
    </Section>
  );
};

export default CardCarouselSection;
