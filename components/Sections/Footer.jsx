import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import StandardButton from "../Buttons/StandardButton";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const useStyles = createUseStyles({
  footer: {
    color: "gray",
    paddingTop: "40px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
});

const Footer = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { bgColor, bgImg, height = "100%" } = props;

  const footerList = [
    {
      title: "Products",
      links: [
        { text: "Product updates", url: "" },
        { text: "Email Marketing", url: "" },
        { text: "Websites", url: "" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Guides & Tutorials", url: "" },
        { text: "Marketing Tips", url: "" },
      ],
    },
    { title: "Community", links: [{ text: "Events", url: "" }] },
  ];

  const colSpan = 12 / footerList.length;

  return (
    <Section
      bgColor="gray.800"
      backgroundImage={bgImg}
      h={height}
      position="relative"
      className={classes.footer}
    >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(12, 1fr)",
        ]}
        height="100%"
        gap={[0, 0, "100px"]}
      >
        <GridItem colSpan={4} mb={[6]}>
          <Box>
            <Text
              fontWeight="bold"
              mb={2}
              fontFamily="var(--title-font)"
              fontSize="x-large"
            >
              AfterWork
            </Text>
            <Text fontSize={["xs", "sm"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(12, 1fr)",
            ]}
          >
            {footerList.map((item, index) => (
              <GridItem
                key={index}
                colSpan={colSpan}
                className={classes.gridItem}
                mb={6}
              >
                <Text
                  color="whiteAlpha.800"
                  fontWeight="bold"
                  mb={[2, 2, 4]}
                  fontSize={["sm", "md"]}
                >
                  {item.title}
                </Text>
                <List spacing={[1, 2, 2]} fontSize={["xs", "sm"]}>
                  {item.links.map((link, index) => (
                    <ListItem
                      key={index}
                      _hover={{
                        color: "whiteAlpha.800",
                        textDecoration: "underline",
                      }}
                    >
                      <a href={link.url}>{link.text}</a>
                    </ListItem>
                  ))}
                </List>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Divider mb={4} mt={6} />
      <Box display="flex" justifyContent="space-between" pb="48px">
        <Text fontSize={["xs", "sm"]}>&copy; 2021 Company</Text>
        <HStack spacing={3}>
          <FaInstagram fontSize="24px" />
          <FaFacebookSquare fontSize="24px" />
        </HStack>
      </Box>
    </Section>
  );
};

export default Footer;
