import React, { useState } from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import img from "../../public/static/images/hero.jpg";
import Container from "../Page/Container";
import { isMobile } from "react-device-detect";

const useStyles = createUseStyles({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "40px 0",
    position: "relative",

    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
});

const Hero = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgImg, heroImg = "", alt, hasImage = false } = props;

  return (
    <Box
      className={classes.section}
      backgroundImage={bgImg || img}
      height={["400px", "400px", "600px"]}
      position="relative"
      backgroundPosition="top"
    >
      <Container>
        <Stack
          height="100%"
          display="flex"
          justify="center"
          alignItems="center"
        >
          <Box h="100%" w="100%">
            {isMobile && (
              <Heading
                fontSize="x-large"
                fontFamily="var(--title-font)"
                color="whiteAlpha.700"
                mb={10}
              >
                AfterWork
              </Heading>
            )}
            <Heading
              w={["100%", "100%", "80%"]}
              color="white"
              fontSize={["50px", "50px", "80px"]}
              maxWidth="800px"
              lineHeight={[1.1, 1.2, 1.2]}
            >
              It's a Big World Out There. Go Explore!
            </Heading>
          </Box>

          {hasImage && (
            <Box
              height="100%"
              w="100%"
              overflow="hidden"
              borderRadius="8px"
              position="relative"
            >
              <Image
                src={heroImg}
                alt={alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={heroImg}
              />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
