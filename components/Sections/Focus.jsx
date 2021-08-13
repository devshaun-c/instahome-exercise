import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
});

const Focus = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    image,
    alt,
    tag,
    header,
    description,
    hasImage = false,
    height = "600px",
    children,
    imageSide = "right",
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Stack direction={["column", "row", "row"]} spacing="40px" height="100%">
        {imageSide === "right" && (
          <Box display="flex" flexDir="column" w="100%" h="100%">
            <Box>
              {tag && (
                <Text fontSize={["xs", "xs"]} mb={2}>
                  {tag}
                </Text>
              )}
              <Heading
                fontSize={["x-large", "x-large"]}
                fontWeight="bold"
                maxW="380px"
                lineHeight="1.3"
              >
                {header}
              </Heading>
              <Text fontSize={["sm", "md"]} mt={4} mb={6}>
                {description}
              </Text>
              {children}
            </Box>
          </Box>
        )}

        {hasImage && (
          <Box
            w="100%"
            h="100%"
            minH="150px"
            overflow="hidden"
            borderRadius="8px"
            position="relative"
          >
            <Image
              src={image || placeholderImg}
              alt={alt}
              layout="fill"
              objectFit="cover"
              // placeholder="blur"
              // blurDataURL={placeholderImg}
            />
          </Box>
        )}

        {imageSide === "left" && (
          <Box display="flex" flexDir="column" w="100%">
            {tag && (
              <Text fontSize={["xs", "xs"]} mb={2}>
                {tag}
              </Text>
            )}
            <Heading
              fontSize={["x-large", "x-large"]}
              fontWeight="bold"
              maxW="380px"
              lineHeight="1.3"
            >
              {header}
            </Heading>
            <Text fontSize={["sm", "md"]} mt={4} mb={6}>
              {description}
            </Text>
            {children}
          </Box>
        )}
      </Stack>
    </Section>
  );
};

export default Focus;
