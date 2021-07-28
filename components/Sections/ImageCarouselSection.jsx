import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import Carousel from "../Grouping/Carousel";

const useStyles = createUseStyles({});

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
    height = "100%",
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
      {header && (
        <Box mb={7}>
          {tag && (
            <Text fontSize={["xx-small", "xs"]} mb={2}>
              {tag}
            </Text>
          )}
          <Heading
            fontSize={["sm", "x-large"]}
            fontWeight="bold"
            lineHeight="1.3"
          >
            {header}
          </Heading>
        </Box>
      )}
      <Box>
        <Carousel
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          {...others}
        >
          {children}
        </Carousel>
      </Box>
    </Section>
  );
};

export default ImageCarouselSection;
