import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import Container from "../components/Container";
import imgHero1 from "../public/static/images/online-friends.svg";
import imgHero2 from "../public/static/images/diary-writing.svg";
import Layout from "../components/Layout";
import { BsSearch } from "react-icons/bs";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media screen and (max-width: 800px)": {
      padding: "0 16px",
    },
  },
  header: {
    padding: "32px 0",
    "@media screen and (max-width: 800px)": {
      width: "100%",
    },
  },
  topicWrapper: {
    marginBottom: "32px",
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

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  return (
    <Container
      title="About - GOJISHO | Resources and community for learning Japanese"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <div className={classes.contentWrapper}>
        <div className={classes.header}>
          <Text fontSize="x-large" fontWeight="bold" textAlign="center">
            Learn, Listen, Speak & Practice <u>Japanese</u>
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            margin="auto"
            mt="16px"
            width="90%"
          >
            Making Japanese learning accessible, easier and fun for everyone
          </Text>
          <div className={classes.heroImage}>
            <img src={imgHero2} />
          </div>
        </div>

        <div className={classes.topicWrapper}>
          <Text fontSize="lg">What is our goal</Text>
          <Text fontSize={["md", "sm"]} className={classes.topicText}>
            To create a community of Japanese learners from everywhere.
          </Text>
        </div>

        <div className={classes.topicWrapper}>
          <Text fontSize="lg">Tools and Features</Text>
          <Text fontSize={["md", "sm"]} className={classes.topicText}>
            We strive to introduce more Japanese learning tools and resources to
            help with your studies
          </Text>
        </div>

        <SimpleGrid columns={[2, 2, 2, 4]} spacing="20px" m="16px 0 32px 0">
          <Box mb={2}>
            <Button
              bg={theme.colors.primaryMedium}
              w="200px"
              h="200px"
              whiteSpace="normal"
              onClick={() => router.push("/search")}
            >
              Translations and Conjugations
            </Button>
          </Box>
          <Box mb={2}>
            <Button
              bg={theme.colors.primary}
              w="200px"
              h="200px"
              whiteSpace="normal"
              onClick={() => router.push("/audiolibrary")}
            >
              Japanese Textbook Audio clips
            </Button>
          </Box>
          <Box mb={2}>
            <Button
              bg={theme.colors.primaryMedium}
              w="200px"
              h="200px"
              whiteSpace="normal"
              onClick={() => router.push("/stories")}
            >
              Japanese Stories for all levels
            </Button>
          </Box>
          <Box mb={2}>
            <Button
              bg={theme.colors.primary}
              w="200px"
              h="200px"
              whiteSpace="normal"
              onClick={() => router.push("/diary")}
            >
              Start a daily diary
            </Button>
          </Box>
        </SimpleGrid>

        <div className={classes.topicWrapper}>
          <Text fontSize="lg">Support Us</Text>
          <Text fontSize={["md", "sm"]} className={classes.topicText}>
            Our resources are all free for you to use. But if you wish to
            support us and the growth of this community, you may{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://www.buymeacoffee.com/gojisho"
              target="_blank"
            >
              Buy Me A Coffee
            </a>
          </Text>
        </div>

        <div className={classes.topicWrapper}>
          <Text fontSize="lg">Contact Us</Text>
          <Text fontSize={["md", "sm"]} className={classes.topicText}>
            If you're interested in our organization, feel free to reach out to
            us at{" "}
            <span style={{ textDecoration: "underline" }}>
              contact.gojisho@gmail.com
            </span>
          </Text>
        </div>

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
  );
};

export default Home;
