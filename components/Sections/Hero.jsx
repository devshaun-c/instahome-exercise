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

const Hero = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    heroImg,
    primaryButtonText,
    secondaryButtonText,
    alt,
    tag,
    header,
    description,
    callToAction,
    secondaryAction,
    hasImage = false,
    height = "600px",
  } = props;

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Grid templateColumns="repeat(12, 1fr)" height="100%" gap={10}>
        <GridItem colSpan={6} className={classes.gridItem}>
          <Box>
            {tag && (
              <Text
                fontSize="xx-small"
                bg={`${theme.colors.primaryLight}`}
                className={classes.tag}
              >
                {tag}
              </Text>
            )}
            <Heading>{header}</Heading>
            <Text fontSize="sm" mt={10} mb={6}>
              {description}
            </Text>
            <ButtonGroup>
              <StandardButton
                colorScheme="teal"
                text={primaryButtonText}
                onClick={callToAction}
              />
              {secondaryButtonText && (
                <StandardButton
                  variant="ghost"
                  colorScheme="teal"
                  text={secondaryButtonText}
                  onClick={secondaryAction}
                />
              )}
            </ButtonGroup>
          </Box>
        </GridItem>

        <GridItem colSpan={6} className={classes.gridItem}>
          {hasImage && (
            <Box
              height="80%"
              overflow="hidden"
              borderRadius="8px"
              position="relative"
            >
              <Image
                src={heroImg || placeholderImg}
                alt={alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </Box>
          )}
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Hero;
