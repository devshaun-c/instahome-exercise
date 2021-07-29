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
      <Box mb={5}>
        {tag && (
          <Text fontSize={["xs", "xs"]} mb={[1, 2, 2]}>
            {tag}
          </Text>
        )}
        <Heading
          fontSize={["md", "x-large"]}
          fontWeight="bold"
          lineHeight="1.3"
        >
          {header}
        </Heading>
      </Box>
      <Box>
        <Carousel slidesPerView={"auto"} freeMode={true} {...others}>
          {children}
        </Carousel>
      </Box>
    </Section>
  );
};

export default CardCarouselSection;
