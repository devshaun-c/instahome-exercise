import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import SearchBox from "../../components/SearchBox";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Container from "../../components/Container";
import { searchParameters } from "../../constants/dropdowns";
import typewriter from "../../public/static/images/Typewriter-bro.svg";
import OverlayModal from "../../components/OverlayModal";

import PageHeader from "../../components/PageHeader";

const useStyles = createUseStyles({
  imgWrapper: {
    padding: "32px",
    maxWidth: "500px",
    "@media screen and (max-width: 800px)": {
      maxWidth: "250px",
    },
  },
  wordWrap: {
    flex: "1",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    borderTop: (props) => `1px solid ${props.colors.primaryLight}`,
    padding: "16px 0",
    "@media screen and (max-width: 800px)": {
      padding: "16px",
    },
  },
  kanjiText: {
    fontSize: "32px",
    color: (props) => props.colors.primaryMedium,
  },
});

const WordSearch = (props) => {
  const theme = useTheme();
  const router = useRouter();
  const classes = useStyles(theme);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue) {
      setIsSearching(true);

      const timeoutId = setTimeout(() => {
        router.push(`/search/${searchValue}`);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      setIsSearching(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue) {
    } else {
      setIsSearching(false);
    }
  }, [searchValue]);

  return (
    <Container
      title=" Word Search - GOJISHO | Japanese word search for translations and verb conjugation"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <PageHeader
        title="WORD SEARCH"
        subtitle="[単語検索] たんごけんさく"
        description="Simply search for Japanese-English translations"
      />

      <form onSubmit={handleSearch}>
        <Box display="flex" flexDir="column" alignItems="center">
          <SearchBox
            handleChange={handleInputChange}
            options={[]}
            defaultSearch={searchParameters.ro}
            placeholder="English, Hiragana, Romaji, Kanji"
            value={searchValue}
            isLoading={isSearching}
          />
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            className={classes.imgWrapper}
          >
            <img src={typewriter} />
            <Text fontSize="sm" textAlign="center">
              Type something in the search box to find a word
            </Text>
          </Box>
        </Box>
      </form>
      <OverlayModal isOpen={modalOpen} handleToggle={setModalOpen} />
    </Container>
  );
};

export default WordSearch;
