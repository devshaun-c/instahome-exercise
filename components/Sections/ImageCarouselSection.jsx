import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import Container from "../Page/Container";
import { useTheme } from "@emotion/react";
import ResponsiveCarousel from "../Grouping/ResponsiveCarousel";

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

const ImageCarouselSection = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    tag,
    header,
    children,
    fullView = false,
    height = "600px",
    ...others
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      height={height}
      position="relative"
      fullView={fullView}
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
        <ResponsiveCarousel {...others}>{children}</ResponsiveCarousel>
      </Box>
    </Section>
  );
};

export default ImageCarouselSection;
