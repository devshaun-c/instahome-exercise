import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import Carousel from "../Grouping/Carousel";

const useStyles = createUseStyles({});

const CardCarouselSection = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    tag,
    header,
    children,
    height = "600px",
    ...others
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      {tag && (
        <Text fontSize={["xx-small", "xs"]} mb={2}>
          {tag}
        </Text>
      )}
      <Heading
        fontSize={["large", "x-large"]}
        fontWeight="bold"
        maxW="380px"
        lineHeight="1.3"
      >
        {header}
      </Heading>
      <Box mt={5} mb={3}>
        <Carousel slidesPerView={"auto"} {...others}>
          {children}
        </Carousel>
      </Box>
    </Section>
  );
};

export default CardCarouselSection;
