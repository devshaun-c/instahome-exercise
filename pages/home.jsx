import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import Container from "../components/Container";
import imgHero2 from "../public/static/images/diary-writing.svg";
import Layout from "../components/Layout";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { VscWholeWord } from "react-icons/vsc";
import { BsBook, BsVolumeUp, BsPencil } from "react-icons/bs";

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

  const CartoonButton = (props) => {
    const { selected, text, subtext, icon, onClick } = props;
    return (
      <Button
        h="100px"
        bg={selected ? theme.colors.primaryLight : "white"}
        w="100%"
        maxWidth={["100%", "80%"]}
        color={selected ? "white" : "black"}
        whiteSpace="normal"
        onClick={onClick}
        leftIcon={icon}
        boxShadow={`5px 5px ${theme.colors.primaryLight}, 5px 5px 0px 2px black`}
        border="2px solid black"
        borderRadius="10px"
        mb={4}
        _hover={{
          backgroundColor: theme.colors.primaryLight,
          boxShadow: `5px 5px ${theme.colors.primaryMedium}, 5px 5px 0px 2px black`,
          color: "black",
        }}
        _selected={{
          backgroundColor: theme.colors.primaryLight,
          boxShadow: `5px 5px ${theme.colors.primaryMedium}, 5px 5px 0px 2px black`,
          color: "black",
        }}
      >
        <Box
          display="flex"
          flexDir="column"
          w={["100%", "70%"]}
          pl="32px"
          alignItems="start"
        >
          <Text textAlign="left">{text} </Text>
          <Text fontSize="16px" mt="8px" color="grey" textAlign="left">
            {subtext}
          </Text>
        </Box>
      </Button>
    );
  };

  return (
    <Container
      title="About - GOJISHO | Resources and community for learning Japanese"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <div className={classes.contentWrapper}>
        <div className={classes.header}>
          <Text fontSize="x-large" fontWeight="bold" textAlign="center">
            Resources to help you in learning <u>Japanese</u>
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            margin="auto"
            mt={["md", "sm"]}
            width="90%"
          >
            Making Japanese learning accessible, easier and fun for everyone
          </Text>
          <div className={classes.heroImage}>
            <img src={imgHero2} />
          </div>
        </div>

        <CartoonButton
          text="Word search"
          subtext="Translations and Conjugations"
          onClick={() => router.push("/search")}
          icon={<VscWholeWord fontSize="42px" />}
        />

        <CartoonButton
          text="Textbook Audio clips"
          subtext="Practice your listening skills"
          onClick={() => router.push("/audiolibrary")}
          icon={<BsVolumeUp fontSize="42px" />}
        />

        <CartoonButton
          text="Stories for all levels"
          subtext="Practice your listening skills"
          onClick={() => router.push("/stories")}
          icon={<BsBook fontSize="42px" />}
        />

        <CartoonButton
          text="Start a learning diary"
          subtext="Practice writing new sentences"
          onClick={() => router.push("/diary")}
          icon={<BsPencil fontSize="42px" />}
        />

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
