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
      <Grid templateColumns="repeat(12, 1fr)" height="100%" gap={10}>
        {imageSide === "right" && (
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
              <Heading
                fontSize="x-large"
                fontWeight="bold"
                maxW="380px"
                lineHeight="1.3"
              >
                {header}
              </Heading>
              <Text fontSize="sm" mt={4} mb={6}>
                {description}
              </Text>
              {children}
            </Box>
          </GridItem>
        )}

        <GridItem colSpan={6} className={classes.gridItem}>
          {hasImage && (
            <Box
              height="80%"
              overflow="hidden"
              borderRadius="8px"
              position="relative"
            >
              <Image
                src={image || placeholderImg}
                alt={alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </Box>
          )}
        </GridItem>

        {imageSide === "left" && (
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
              <Heading
                fontSize="x-large"
                fontWeight="bold"
                maxW="380px"
                lineHeight="1.3"
              >
                {header}
              </Heading>
              <Text fontSize="sm" mt={4} mb={6}>
                {description}
              </Text>
              {children}
            </Box>
          </GridItem>
        )}
      </Grid>
    </Section>
  );
};

export default Focus;
