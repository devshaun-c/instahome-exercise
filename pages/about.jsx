import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import ContentContainer from "../components/ContentContainer";

const useStyles = createUseStyles({
  header: {},
});

const About = () => {
  const classes = useStyles();
  return (
    <ContentContainer>
      <div className={classes.header}>
        <Text fontSize="x-large">ABOUT GOJISHO 語辞書</Text>
      </div>
      <div>
        Making Japanese learning accessible, easier and fun for everyone
      </div>

      <div>
        <Text fontSize="md">Who is this for</Text>
        <Text fontSize="xs">
          If you aren't surrounded in a Japanese speaking environment
        </Text>
        <Text fontSize="xs">
          If you are looking for resources to help with your Japanese studies
        </Text>
        <Text fontSize="xs">
          If you are looking for Japanese-speaking friends
        </Text>
        <Text fontSize="xs">
          If you simply want to practice your Japanese with others and have fun
        </Text>
      </div>
      <div>
        <Text fontSize="md">Our aim</Text>
        <Text fontSize="xs">
          To create a community of Japanese learners from everywhere and to
          simply make learning Japanese more fun.
        </Text>
      </div>

      <div>
        <Text fontSize="md">What we offer?</Text>
        <Text fontSize="xs">
          We strive to introduce more Japanese learning resources to help
          improve your Japanese vocabulary, kanji recognition and familiarity
          with how daily conversations in Japanese is like.
        </Text>
        <Text fontSize="xs">
          A place for you to practice your Japanese through our daily community
          games where you can also interact with other students
        </Text>
        <Text fontSize="xs">
          Our ever-growing community-driven repository of Japanese words and
          sentences will also ensure that everyone can participate and
          contribute to grow with us
        </Text>
      </div>
      <div>
        <Text fontSize="md">Support us</Text>
        <Text fontSize="xs">
          Our resources are all free for you to use. If you wish to support us
          and the growth of this community, you may Buy Me A Coffee or simply
          share our website on social media and with your fellow Japanese
          learning friends
        </Text>
      </div>
    </ContentContainer>
  );
};

export default About;
