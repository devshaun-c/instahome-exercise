import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import IconCard from "../Cards/IconCard";
import emailIcon from "../../public/static/images/email.svg";

const useStyles = createUseStyles({
  header: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 6px 0 rgb(0 0 0 / 20%)",
    borderRadius: "8px",
    padding: "32px",
    "&:hover": {
      boxShadow: "0 20px 24px 0 rgb(0 0 0 / 20%)",
    },
  },
});

const Offerings = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    textColor,
    bgImg,
    height = "100%",
    header,
    description,
  } = props;

  const offerings = [
    {
      topic: "Reach out and be visible to your customers",
      offerings: [
        {
          title: "Email Services",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
        {
          title: "SMS marketing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
        {
          title: "Quick chat",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
      ],
    },
    {
      topic: "Turn your visitors into customers.",
      offerings: [
        {
          title: "Landing pages",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
        {
          title: "Instagram Ads",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
        {
          title: "Easy sign-up",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
          fcn: () => {},
          icon: emailIcon,
        },
      ],
    },
  ];

  return (
    <Section
      bgColor={bgColor}
      color={textColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Box className={classes.header} p={["40px 0 0 0", "80px 0"]}>
        <Heading
          fontSize={["x-large", "x-large", "xx-large"]}
          // textAlign="center"
          pr={["48px", "0"]}
        >
          {header}
        </Heading>
        <Text
          // textAlign="center"
          fontSize={["sm", "sm", "md"]}
          mt={4}
          color="grey"
        >
          {description}
        </Text>
      </Box>
      {offerings.map((offer, index) => (
        <Grid
          key={index}
          templateColumns={["repeat(1, 1fr)", "repeat(12, 1fr)"]}
          height="100%"
          gap={5}
          mb={["32 px", "80px"]}
        >
          <GridItem colSpan={[12, 4]} mt={4}>
            <Text
              w="100%"
              fontSize={["md", "md", "x-large"]}
              fontWeight="bold"
              textAlign={["start", "start", "start"]}
            >
              {offer.topic}
            </Text>
          </GridItem>
          <GridItem colSpan={[12, 8]}>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(4, 1fr)",
              ]}
            >
              {offer.offerings.map((item, index) => (
                <GridItem key={index} colSpan={2}>
                  <IconCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    action={item.fcn}
                  />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      ))}
    </Section>
  );
};

export default Offerings;
