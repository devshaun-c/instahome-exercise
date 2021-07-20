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
import StandardButton from "../Buttons/StandardButton";
import { useTheme } from "@emotion/react";
import { CheckIcon, MinusIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import IconCard from "../Cards/IconCard";
import emailIcon from "../../public/static/images/email.svg";

const useStyles = createUseStyles({
  header: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px",
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
      <div className={classes.header}>
        <Heading fontSize={["lg", "lg", "xx-large"]} textAlign="center">
          {header}
        </Heading>
        <Text
          textAlign="center"
          fontSize={["md", "md", "lg"]}
          mt={2}
          color="grey"
        >
          {description}
        </Text>
      </div>
      {offerings.map((offer) => (
        <Grid templateColumns="repeat(12, 1fr)" height="100%" gap={5} mb="80px">
          <GridItem colSpan={4} mt={4}>
            <Text fontSize="x-large" fontWeight="bold">
              {offer.topic}
            </Text>
          </GridItem>
          <GridItem colSpan={8}>
            <Grid templateColumns="repeat(4, 1fr)">
              {offer.offerings.map((item) => (
                <GridItem colSpan={2}>
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
