import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Text, Spinner, IconButton, Tooltip } from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";
import { createUseStyles } from "react-jss";
import BackToTop from "../components/BackToTop";
import { useTheme } from "@emotion/react";
import Container from "../components/Container";
import { searchParameters } from "../constants/dropdowns";
import typewriter from "../public/static/images/Typewriter-bro.svg";
import TextButton from "../components/TextButton";
import OverlayModal from "../components/OverlayModal";

import PageHeader from "../components/PageHeader";

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

const Vocabulary = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErorMessage] = useState("");

  const WordText = () => {
    var filteredData = [...filtered];

    const convertArrayToSemiColonString = (array) => {
      var wordString = array.join("; ");
      return wordString;
    };

    const convertArrayToCommaString = (array) => {
      var wordString = array.join(", ");
      return wordString;
    };

    return (
      <>
        {filteredData.map((word, index) => {
          return (
            <Box key={index}>
              <Box className={classes.wordWrap}>
                <Text className={classes.kanjiText}>{word.slug}</Text>
                <Text fontSize={["lg", "md"]} className={classes.hiraganaText}>
                  {word.japanese[0].reading}
                </Text>
                {/* <Text fontSize="sm">{word.jlpt[0]}</Text> */}
                {word.senses.map((sense, index) => (
                  <Box key={index} mt="16px">
                    <Text fontSize={["xs", "x-small"]}>
                      {convertArrayToCommaString(sense.parts_of_speech)}
                    </Text>
                    <Box display="flex">
                      <Text
                        fontSize={["md", "sm"]}
                        mr="8px"
                        color="GrayText"
                      >{`${index + 1}.`}</Text>
                      <Text fontSize={["md", "sm"]}>
                        {convertArrayToSemiColonString(
                          sense.english_definitions
                        )}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </>
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue) {
      setIsLoading(true);
      setNoResults(false);

      const timeoutId = setTimeout(() => {
        getData(searchValue);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      setNoResults(false);
      setIsLoading(false);
      setFiltered([]);
    }
  };

  const getData = async (searchValue) => {
    var filteredData = [];
    try {
      const response = await fetch(`/api/vocab/${searchValue}`);
      const json = await response.json();
      if (json && json.data.length) {
        filteredData = json.data.filter((obj) => obj.jlpt.length > 0);
      } else {
        setNoResults(true);
      }
      setFiltered(filteredData);
      setIsLoading(false);
    } catch {
      (err) => {
        setIsLoading(false);
        console.log(err);
      };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue) {
      setNoResults(false);
    } else {
      setNoResults(false);
      setIsLoading(false);
      setFiltered([]);
    }
  }, [searchValue]);

  return (
    <Container
      title=" Word Search - GOJISHO | Japanese word search for translations and verb conjugation"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <PageHeader
        title="WORD SEARCH"
        subtitle="[ 語彙 ] ごい"
        description="Simply search for Japanese words in our ever-growing library."
      />

      <form action={() => alert("hi")}>
        <input type="text" id="name" title="Search" />
      </form>

      <form onSubmit={() => alert("hi")}>
        <input type="text" id="name2" title="Search" />
      </form>

      <form onSubmit={handleSearch}>
        <Box display="flex" flexDir="column" alignItems="center">
          <SearchBox
            handleChange={handleInputChange}
            options={[]}
            defaultSearch={searchParameters.ro}
            placeholder="Search a word"
            value={searchValue}
          />
          {!isLoading && filtered.length == 0 && !noResults && (
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
          )}
        </Box>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary"
            size="md"
            ml="16px"
          />
        ) : (
          <>
            <WordText />
          </>
        )}
        {noResults && (
          <Box p="16px">
            <Text fontSize="xs" color="grey">
              No search results found
            </Text>
            <Box display="flex">
              <Text fontSize="xs" color="grey">
                Please check for mispellings and try again.
              </Text>
            </Box>
          </Box>
        )}
      </form>
      <OverlayModal isOpen={modalOpen} handleToggle={setModalOpen} />
      <BackToTop show={filtered.length > 5} />
    </Container>
  );
};

export default Vocabulary;
