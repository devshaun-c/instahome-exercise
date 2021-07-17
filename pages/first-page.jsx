import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Container from "../components/Container";
import imgHero2 from "../public/static/images/404-image.svg";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media screen and (max-width: 800px)": {
      padding: "0 32px",
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
});

const DemoPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container
      title="Page - WEBSITE |SITE DESCRIPTION"
      description="meta description"
    >
      <div className={classes.contentWrapper}>
        <div className={classes.header}>
          <Text fontSize="x-large" fontWeight="bold" textAlign="center">
            More content
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
        </div>
      </div>
    </Container>
  );
};

export default DemoPage;
