import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import imgHero2 from "../public/static/images/404-image.svg";
import Section from "../components/Sections/Section";
import Page from "../components/Page/Page";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    // padding: "32px 0",
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
  heroImage: {
    width: "300px",
    margin: "auto",
  },
});

const About = () => {
  const classes = useStyles();

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
    <Page
      pageMeta={{
        title: "About - This website",
        description: "Explain the goal and objective of this website",
      }}
    >
      <Section>
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
              <Text fontSize="sm" mt={[2, 4, 4]}>
                {topic.description}
              </Text>
              {topic.children}
            </div>
          ))}

          <Box mt="64px">
            <Text fontSize="xs">
              illustrations from{" "}
              <u>
                <a target="_blank" href="https://storyset.com/">
                  Storyset.com
                </a>
              </u>
            </Text>
          </Box>
        </div>
      </Section>
    </Page>
  );
};

export default About;
