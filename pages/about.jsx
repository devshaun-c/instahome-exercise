import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Container from "../components/Container";
import imgHero2 from "../public/static/images/404-image.svg";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Section from "../components/Grouping/Section";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media screen and (max-width: 800px)": {
      // padding: "0 32px",
    },
  },
  header: {
    padding: "32px 0",
    "@media screen and (max-width: 800px)": {
      width: "100%",
    },
  },
  topicWrapper: {
    margin: "32px 0",
    width: "100%",
    maxWidth: "80%",
    "@media screen and (max-width: 800px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
  topicHeader: {},
  topicText: {
    marginTop: "8px",
    "@media screen and (max-width: 800px)": {
      marginTop: "4px",
      marginLeft: "0",
    },
  },
  heroImage: {
    width: "300px",
    margin: "auto",
    // padding: "32px",
    // "@media screen and (max-width: 800px)": {
    //   display: "none",
    // },
  },
});

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const topics = [
    {
      header: "Topic header",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in. Phasellus rutrum nisl magna. Etiam sed enim finibus, gravida sapien sed, varius velit. Nullam in facilisis ante. Sed nisi felis, sagittis at odio at, aliquet placerat eros. Morbi elementum elementum rutrum. Sed eu urna quis velit fermentum dignissim in vehicula ligula. Cras et enim id purus bibendum congue. Sed scelerisque tortor vel lorem tempor dapibus. Donec feugiat arcu a sapien hendrerit ullamcorper. Nullam a aliquam magna, dapibus molestie turpis. Fusce congue sapien a a",
    },
    {
      header: "Topic header",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in. Phasellus rutrum nisl magna. Etiam sed enim finibus, gravida sapien sed, varius velit. Nullam in facilisis ante. Sed nisi felis, sagittis at odio at, aliquet placerat eros. Morbi elementum elementum rutrum. Sed eu urna quis velit fermentum dignissim in vehicula ligula. Cras et enim id purus bibendum congue. Sed scelerisque tortor vel lorem tempor dapibus. Donec feugiat arcu a sapien hendrerit ullamcorper. Nullam a aliquam magna, dapibus molestie turpis. Fusce congue sapien a a",
    },
  ];

  return (
    <Section>
      <Container
        title="About - WEBSITE |SITE DESCRIPTION"
        description="meta description"
      >
        <div className={classes.contentWrapper}>
          <div className={classes.header}>
            <Text fontSize="x-large" fontWeight="bold" textAlign="center">
              About Us
            </Text>
            <Text
              fontSize="sm"
              textAlign="center"
              margin="auto"
              mt={["md", "sm"]}
              width="90%"
            >
              Subtitle
            </Text>
            <div className={classes.heroImage}>
              <img src={imgHero2} />
            </div>
          </div>

          {topics.map((topic, index) => (
            <div key={index} className={classes.topicWrapper}>
              <Text fontSize="lg">{topic.header}</Text>
              <Text fontSize={["md", "sm"]} className={classes.topicText}>
                {topic.description}
              </Text>
              {topic.children}
            </div>
          ))}

          <Box mt="64px">
            <Text fontSize="xs" className={classes.topicText}>
              illustrations from{" "}
              <u>
                <a target="_blank" href="https://storyset.com/">
                  Storyset.com
                </a>
              </u>
            </Text>
          </Box>
        </div>
      </Container>
    </Section>
  );
};

export default About;
