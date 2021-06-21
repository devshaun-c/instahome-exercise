import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import BackToTop from "../components/BackToTop";
import { useTheme } from "@emotion/react";
import { GetSnapshotFromFirebase } from "../lib/firebase";
import Container from "../components/Container";
import ReactAudioPlayer from "react-audio-player";
import audioFile from "../public/assets/audio.mp3";
import PageHeader from "../components/PageHeader";
import { BsCardText, BsEye, BsTextarea } from "react-icons/bs";

const useStyles = createUseStyles({
  audioWrapper: {
    border: "1px solid grey",
    borderRadius: "8px",
    padding: "16px",
  },
});

const AudioLibrary = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [filtered, setFiltered] = useState([]);

  useEffect(async () => {
    const results = JSON.parse(props.words);
    if (results && results.length) {
      //   setAudioFiles(results);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <Container
      title=" Audio Library - GOJISHO | Practice your listening skills"
      description=""
    >
      <PageHeader
        title="AUDIO LIBRARY"
        subtitle="[ 語彙 ] ごい"
        description="Audio files are based on Minna no Nihongo"
      />
      <Text mb="8px">Lesson audio #1</Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        className={classes.audioWrapper}
      >
        <GridItem colSpan={1}>
          <ReactAudioPlayer src={audioFile} controls />
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            size="sm"
            backgroundColor={theme.colors.primary}
            variant="solid"
            leftIcon={<BsCardText />}
          >
            View text
          </Button>
          <Box>
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ut auctor nisl. Pellentesque nec urna quis eros accumsan
              malesuada. Donec sodales id turpis a consequat.
            </Text>
            <Text fontSize="xs">
              Suspendisse commodo nec purus eu rutrum. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <BackToTop show={filtered.length > 5} />
    </Container>
  );
};

export async function getStaticProps(_context) {
  const words = await GetSnapshotFromFirebase("words");
  //   const data = quiz.map((singleQuiz: any) => {
  //     return {
  //       ...singleQuiz,
  //       user: users.find((user) => user.id === singleQuiz.userId),
  //     };
  //   });
  return { props: { words: JSON.stringify(words) }, revalidate: 60 };
}

export default AudioLibrary;
