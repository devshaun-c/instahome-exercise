import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../Sections/Section";
import placeholderImg from "../../public/static/images/coding.svg";
import Image from "next/image";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({});

const NotFound = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgColor, bgImg, height, image, minHeight = "600px" } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Flex flexDirection={["column", "column", "row"]} alignItems="center">
        <Box
          w="350px"
          maxW={["100%", "350px"]}
          h={["200px", "350px"]}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={image || placeholderImg}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={image}
          />
        </Box>
        <Box p={4} textAlign={["center", "start"]}>
          <Text>
            Hmm... Looks like there's no activities for this category yet.
          </Text>
        </Box>
      </Flex>
    </Section>
  );
};

export default NotFound;
