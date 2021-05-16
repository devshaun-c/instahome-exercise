import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import ContentContainer from "../components/ContentContainer";
import imgHero1 from "../public/static/images/online-friends.svg";
import imgHero2 from "../public/static/images/diary-writing.svg";
import Layout from "../components/Layout";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    "@media screen and (max-width: 800px)": {
      padding: "0 16px",
    },
  },
  header: {
    paddingBottom: "32px",
    width: "50%",
    "@media screen and (max-width: 800px)": {
      width: "100%",
    },
  },
  topicWrapper: {
    marginBottom: "32px",
    maxWidth: "50%",
    "@media screen and (max-width: 800px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
  topicHeader: {},
  topicText: {
    marginTop: "8px",
    marginLeft: "16px",
    "@media screen and (max-width: 800px)": {
      marginTop: "4px",
      marginLeft: "0",
    },
  },
  heroImage: {
    position: "fixed",
    right: "10%",
    top: "0",
    width: "450px",
    padding: "32px",
    "@media screen and (max-width: 1400px)": {
      right: "32px",
      width: "350px",
      padding: "0",
    },
    "@media screen and (max-width: 800px)": {
      display: "none",
    },
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>
          About - GOJISHO | How we help you learn and improve your Japanese
        </title>
        <meta
          name="description"
          content="meet japanese speaking friends and learn and improve your japanese vocabulary together"
        />
      </Head>
      <ContentContainer>
        <div className={classes.contentWrapper}>
          <div>
            <div className={classes.header}>
              <Text fontSize="x-large" fontWeight="bold">
                ABOUT GOJISHO 語辞書
              </Text>
              <Text fontSize="sm">
                making Japanese learning accessible, easier and fun for everyone
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="md">What is our goal</Text>
              <Text fontSize="xs" className={classes.topicText}>
                To create a community of Japanese learners from everywhere and
                to simply make learning Japanese more fun.
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="md">Who is this for</Text>
              <Text fontSize="xs" className={classes.topicText}>
                If you are learning Japanese
              </Text>
              <Text fontSize="xs" className={classes.topicText}>
                If you are looking to meet Japanese-speaking friends
              </Text>
              <Text fontSize="xs" className={classes.topicText}>
                If you are looking for resources to help with your Japanese
                studies
              </Text>
              <Text fontSize="xs" className={classes.topicText}>
                If you simply want to practice your Japanese with others and
                have fun
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="md">How we can help</Text>
              <Text fontSize="xs" className={classes.topicText}>
                We strive to introduce more Japanese learning tools and
                resources to help with your studies
              </Text>
              <Text fontSize="xs" className={classes.topicText}>
                You can practice your Japanese through our weekly community
                activities and also interact with other students of different
                levels
              </Text>
              <Text fontSize="xs" className={classes.topicText}>
                Explore our ever-growing community-driven library of everyday
                Japanese words and conversations
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="md">How you can contribute</Text>
              <Text fontSize="xs" className={classes.topicText}>
                We rely on contribution from everyone to grow and improve our
                content. You can help us help you by simply participating in our
                community activities, provide content feedback or simply tell
                your fellow Japanese learning friends about us
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="md">Support Us</Text>
              <Text fontSize="xs" className={classes.topicText}>
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
              <Text fontSize="md">Contact Us</Text>
              <Text fontSize="xs" className={classes.topicText}>
                If you're interested in our organization, feel free to reach out
                to us at{" "}
                <span style={{ textDecoration: "underline" }}>
                  contact.gojisho@gmail.com
                </span>
              </Text>
            </div>

            <div className={classes.topicWrapper}>
              <Text fontSize="xs" className={classes.topicText}>
                illustrations from{" "}
                <a target="_blank" href="https://storyset.com/">
                  Storyset.com
                </a>
              </Text>
            </div>
          </div>
          <div className={classes.heroImage}>
            {/* <img src={imgHero1} /> */}
            <img src={imgHero2} />
          </div>
        </div>
      </ContentContainer>
    </Layout>
  );
};

export default About;
