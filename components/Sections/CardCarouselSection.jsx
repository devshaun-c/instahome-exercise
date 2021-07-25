import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import Carousel from "../Grouping/Carousel";

const useStyles = createUseStyles({
  tag: {
    marginBottom: "16px",
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: "8px",
  },
});

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
        <Text
          fontSize="xx-small"
          bg={`${theme.colors.primaryLight}`}
          className={classes.tag}
        >
          {tag}
        </Text>
      )}
      <Text fontSize="x-large" fontWeight="bold" lineHeight="1.4">
        {header}
      </Text>
      <Box mt="40px" mb="24px">
        <Carousel slidesPerView={"auto"} {...others}>
          {children}
        </Carousel>
      </Box>
    </Section>
  );
};

export default CardCarouselSection;
