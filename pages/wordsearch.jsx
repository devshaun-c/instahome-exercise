import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Button,
  Select,
  Spinner,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";
import { createUseStyles } from "react-jss";
import BackToTop from "../components/BackToTop";
import { useTheme } from "@emotion/react";
import Container from "../components/Container";
import { searchParameters } from "../constants/dropdowns";
import {
  convertToNai,
  convertToPlain,
  convertToTa,
} from "../utils/conjugation";
import { wordType } from "../constants/wordType";
import typewriter from "../public/static/images/Typewriter-bro.svg";
import TextButton from "../components/TextButton";
import OverlayModal from "../components/OverlayModal";
import { ConvertToRomaji } from "../utils/hiraganaToRomaji";
import { MdReport } from "react-icons/md";

const useStyles = createUseStyles({
  header: {
    paddingBottom: "32px",
    "@media screen and (max-width: 800px)": {
      padding: "0 16px 32px 16px",
    },
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  accordionTableWrapper: {
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 800px)": {},
  },
  accordionButtonContent: {
    flex: "1",
    textAlign: "left",
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "4px 0",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      alignItems: "normal",
      paddingBottom: "16px",
    },
  },
  verbWrapper: {
    color: (props) => props.colors.primary,
  },
  englishTextWrapper: {
    width: "250px",
    "@media screen and (max-width: 800px)": {
      marginLeft: "100px",
      width: "auto",
    },
  },
  hiraganaTextWrapper: {
    padding: "0 16px",
    width: "250px",
    "@media screen and (max-width: 800px)": {
      // padding: "0 16px",
      width: "auto",
    },
  },
  verbGroupTextWrapper: {
    color: "grey",
    "@media screen and (max-width: 800px)": {
      marginLeft: "100px",
    },
  },
  kanjiWrapper: {
    fontSize: "24px",
    backgroundColor: (props) => props.colors.primaryMedium,
    color: "white",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    width: "80px",

    "@media screen and (max-width: 800px)": {
      padding: "8px 16px",
    },
  },
  firstCol: {
    width: "20%",
    "@media screen and (max-width: 800px)": {
      width: "40%",
    },
  },
  secondCol: {
    width: "80%",
    "@media screen and (max-width: 800px)": {
      width: "60%",
    },
  },
  tableWrapper: {
    position: "relative",
    border: "1px solid #ececff",
    borderTop: "none",
    borderRadius: "0 0 8px 8px",
    padding: "8px",
    "@media screen and (max-width: 800px)": {
      border: "none",
    },
  },
  tinyDescription: {
    fontSize: "10px",
    color: "grey",
  },
  imgWrapper: {
    padding: "32px",
    maxWidth: "500px",
  },
});

const searchParameterOptions = [
  {
    value: searchParameters.en,
    title: "English",
  },
  {
    value: searchParameters.ro,
    title: "Romaji",
  },
  {
    value: searchParameters.hi,
    title: "Hiragana",
  },
];

const Vocabulary = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [filtered, setFiltered] = useState([]);
  const [searchType, setSearchType] = useState(searchParameters.ro);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const WordText = () => {
    var filteredData = [...filtered];

    return (
      <>
        {filteredData.map((word, index) => {
          return (
            <Box key={index}>
              <Box display="flex">
                <Text>{word.slug}</Text>
                <Text>{word.japanese[0].reading}</Text>
                <Text>{word.jlpt[0]}</Text>
                <Text>{word.senses[0].parts_of_speech[0]}</Text>
              </Box>
              <Box>
                <Text>{word.senses[0].english_definitions}</Text>
              </Box>
            </Box>
          );
        })}
      </>
    );
  };

  useEffect(async () => {}, []);

  const handleSearch = (e) => {
    let target = e.target;
    setSearchValue(target.value);
  };

  const getData = async (searchValue) => {
    var filteredData = [];
    const response = await fetch(`/api/vocab/${searchValue}`);
    const json = await response.json();
    if (json.data.length) {
      filteredData = json.data.filter((obj) => obj.jlpt.length > 0);
    }
    setFiltered(filteredData);
    setIsLoading(false);
  };

  useEffect(() => {
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
  }, [searchValue]);

  const handleSearchType = (e) => {
    const { name, value } = e.target;
    setSearchType(value);
    setSearchValue("");
  };

  return (
    <Container
      title=" Word Search - GOJISHO | Japanese word search for translations and verb conjugation"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <div className={classes.header}>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Text as="h1" className={classes.headerTitle}>
              WORD SEARCH
            </Text>
            <Text color="grey">[ 語彙 ] ごい</Text>
          </div>
        </Box>
        <Box marginTop="16px">
          <Text fontSize="xs">
            Simply search for Japanese words in our ever-growing library.
          </Text>
        </Box>
      </div>
      <div className={classes.accordionTableWrapper}>
        <Box
          display="flex"
          flexDir="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <SearchBox
            handleChange={handleSearch}
            handleSelect={handleSearchType}
            options={searchParameterOptions}
            defaultSearch={searchParameters.ro}
            placeholder="Search a word"
            value={searchValue}
          />
          {searchValue == "" && (
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
          <div>
            <Text fontSize="xs" color="grey">
              No search results found in our library
            </Text>
            <Box display="flex">
              <Text fontSize="xs" color="grey">
                Help us by submitting a new word request
              </Text>
              <TextButton
                text="here"
                color="primary"
                onClick={() => setModalOpen(!modalOpen)}
              />
            </Box>
          </div>
        )}
      </div>
      <OverlayModal isOpen={modalOpen} handleToggle={setModalOpen} />
      <BackToTop show={filtered.length > 5} />
    </Container>
  );
};

export default Vocabulary;
