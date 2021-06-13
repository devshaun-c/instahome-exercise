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
import { GetSnapshotFromFirebase } from "../lib/firebase";
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
  const [words, setWords] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchType, setSearchType] = useState(searchParameters.ro);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [arrayLength, setArrayLength] = useState(20);
  const [noResults, setNoResults] = useState(false);
  const [filterBy, setFilterBy] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(async () => {
    const results = JSON.parse(props.words);
    if (results && results.length) {
      setWords(results);
    }
  }, []);

  const handleSearch = (e) => {
    let target = e.target;
    setSearchValue(target.value);
  };

  useEffect(() => {
    var filteredWords = [...words];

    if (filterBy != "all") {
      filteredWords = filteredWords.filter((word) => {
        if (word.type) {
          return word.type.toLowerCase() == filterBy;
        }
      });
    }

    if (searchValue) {
      setIsLoading(true);
      setNoResults(false);

      const timeoutId = setTimeout(async () => {
        if (
          searchType === searchParameters.ro ||
          searchType === searchParameters.hi
        ) {
          // setSearchData(true);
          // getData(searchValue);
          const firstTwoCharacters = searchValue.substring(0, 2);
          const filterFirstTwoCharacters = filteredWords.filter((word) => {
            if (word[searchType]) {
              return (
                word[searchType].toLowerCase().substring(0, 2) ===
                firstTwoCharacters
              );
            }
          });
          if (filterFirstTwoCharacters.length > 0) {
            filteredWords = filterFirstTwoCharacters;
          }
        }
        const exactMatch = filteredWords.filter((word) => {
          if (word[searchType]) {
            return (
              word[searchType].toLowerCase().replace(/ /g, "") === searchValue
            );
          }
        });
        const filter = filteredWords.filter((word) => {
          if (word[searchType]) {
            return word[searchType]
              .toLowerCase()
              .replace(/ /g, "")
              .includes(searchValue);
          }
        });
        if (exactMatch.length) {
          filteredWords = [...exactMatch];
        } else {
          filteredWords = [...filter];
        }
        if (filteredWords.length) {
          setNoResults(false);
        } else {
          setNoResults(true);
        }

        setFiltered(filteredWords);
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      setNoResults(false);
      setIsLoading(false);
      setFiltered([]);
    }
  }, [searchValue, arrayLength, filterBy]);

  const handleSearchType = (e) => {
    const { name, value } = e.target;
    setSearchType(value);
    setSearchValue("");
  };

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <Container
      title=" Vocabulary - GOJISHO | Japanese word translation and verb conjugation"
      description="meet japanese speaking friends and learn and improve your japanese vocabulary together"
    >
      <div className={classes.header}>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Text as="h1" className={classes.headerTitle}>
              VOCAB LIBRARY
            </Text>
            <Text color="grey">[ 語彙 ] ごい</Text>
          </div>
          <div>
            <Select
              size="sm"
              variant="outline"
              color="white"
              bg="primary"
              borderColor="primary"
              focusBorderColor="none"
              borderRadius="8px"
              cursor="pointer"
              onChange={handleFilter}
            >
              <option style={{ color: "black" }} value="all">
                all
              </option>
              <option style={{ color: "black" }} value={wordType.verb}>
                verb
              </option>
              <option style={{ color: "black" }} value={wordType.noun}>
                noun
              </option>
              <option style={{ color: "black" }} value={wordType.adjective}>
                adjective
              </option>
              <option style={{ color: "black" }} value={wordType.adverb}>
                adverb
              </option>
            </Select>
          </div>
        </Box>
        <Box marginTop="16px">
          <Text fontSize="xs">
            Simply search for Japanese words in our ever-growing library.
          </Text>
          <Text fontSize="xs">{`Current word count : ${words.length} words`}</Text>
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
            {filtered.length > 0 && (
              <Box display="flex" flexDir="column" alignItems="center">
                <Text
                  fontSize="xs"
                  width="100%"
                  mb="4px"
                  padding="0 16px"
                >{`${filtered.length} word(s) found`}</Text>
                <Accordion allowToggle w="100%">
                  {filtered.map((word, index) => {
                    if (word.hiragana) {
                      return (
                        <AccordionItem key={word.id} borderColor="primaryLight">
                          <h2>
                            <AccordionButton
                              userSelect="text"
                              _expanded={{ bg: "primaryLight" }}
                              _focus={{ outline: "0" }}
                              _hover={{ bg: "primaryLight" }}
                            >
                              <Box className={classes.accordionButtonContent}>
                                <Box display="flex">
                                  <Text className={classes.kanjiWrapper}>
                                    {word.kanji || "-"}
                                  </Text>
                                  <Box className={classes.hiraganaTextWrapper}>
                                    <Text
                                      fontSize="sm"
                                      className={classes.verbWrapper}
                                    >
                                      {word.romaji}
                                    </Text>
                                    <Text fontSize="sm">
                                      {word.word || word.hiragana}
                                    </Text>
                                  </Box>
                                </Box>
                                <Text
                                  fontSize="sm"
                                  className={classes.englishTextWrapper}
                                >
                                  {word.englishTranslate}
                                </Text>
                                <Text
                                  fontSize="xs"
                                  className={classes.verbGroupTextWrapper}
                                >
                                  {word.type}
                                </Text>
                              </Box>
                              <AccordionIcon color="primary" />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel padding="0 0 32px 0">
                            <div className={classes.tableWrapper}>
                              <Box position="absolute" right="8px" top="8px">
                                <Tooltip
                                  label="report error"
                                  fontSize="xs"
                                  hasArrow
                                  bg="red.600"
                                >
                                  <Button
                                    variant="unstyled"
                                    color="red.600"
                                    size="sm"
                                    leftIcon={<MdReport fontSize="24px" />}
                                    display="flex"
                                    alignItems="center"
                                    _focus={{ outline: "0" }}
                                  ></Button>
                                </Tooltip>
                              </Box>
                              <Table variant="unstyled" size="sm">
                                <colgroup>
                                  <col className={classes.firstCol} />
                                  <col className={classes.secondCol} />
                                </colgroup>
                                <Tbody>
                                  {word.explanation && (
                                    <Tr>
                                      <Td padding="8px 16px">
                                        <Text fontSize="xs">Explanation</Text>
                                        <Text
                                          className={classes.tinyDescription}
                                        >
                                          じしょ
                                        </Text>
                                      </Td>
                                      <Td padding="8px 16px">
                                        <Text fontSize="xs">
                                          {word.explanation}
                                        </Text>
                                      </Td>
                                    </Tr>
                                  )}
                                  {word.type === wordType.verb && (
                                    <>
                                      <Tr>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">Plain</Text>
                                          <Text
                                            className={classes.tinyDescription}
                                          >
                                            じしょ
                                          </Text>
                                        </Td>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">
                                            {convertToPlain(word)}
                                          </Text>
                                          <Text fontSize="xs">
                                            {ConvertToRomaji(
                                              convertToPlain(word)
                                            )}
                                          </Text>
                                        </Td>
                                      </Tr>
                                      <Tr>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">TA / TE</Text>
                                          <Text
                                            className={classes.tinyDescription}
                                          >
                                            た / て
                                          </Text>
                                        </Td>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">
                                            {convertToTa(word)}
                                          </Text>
                                          <Text fontSize="xs">
                                            {ConvertToRomaji(convertToTa(word))}
                                          </Text>
                                        </Td>
                                      </Tr>
                                      <Tr>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">Negative</Text>
                                          <Text
                                            className={classes.tinyDescription}
                                          >
                                            ない
                                          </Text>
                                        </Td>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">
                                            {convertToNai(word)}
                                          </Text>
                                          <Text fontSize="xs">
                                            {ConvertToRomaji(
                                              convertToNai(word)
                                            )}
                                          </Text>
                                        </Td>
                                      </Tr>
                                      <Tr>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">Verb Group</Text>
                                          <Text
                                            className={classes.tinyDescription}
                                          ></Text>
                                        </Td>
                                        <Td padding="8px 16px">
                                          <Text fontSize="xs">
                                            {word.group}
                                          </Text>
                                        </Td>
                                      </Tr>
                                    </>
                                  )}
                                </Tbody>
                              </Table>

                              <Text
                                fontSize="xs"
                                color="teal"
                                style={{ margin: "16px 20px 4px 20px" }}
                              >
                                Sample sentences
                              </Text>

                              <div
                                style={{
                                  padding: "16px 20px ",
                                  margin: "0 20px 16px 20px",
                                  border: "1px solid teal",
                                  borderRadius: "8px",
                                }}
                              >
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Box display="flex" flexDirection="column">
                                    <Text fontSize="xs" color="grey">
                                      Coming soon..
                                    </Text>
                                    <Text
                                      fontSize="xs"
                                      color="blackAlpha.500"
                                    ></Text>
                                  </Box>
                                </Box>
                              </div>
                            </div>
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    }
                  })}
                </Accordion>
                <Box
                  display="inline-block"
                  width="100%"
                  mt="48px"
                  padding="0 16px"
                >
                  <Text
                    fontSize="xs"
                    color="grey"
                    display="inline-block"
                    mr="4px"
                  >
                    Not the word you're looking for?
                  </Text>
                  <Text fontSize="xs" color="grey" display="inline-block">
                    Submit a word request
                  </Text>
                  <TextButton
                    text="here"
                    color="primary"
                    onClick={() => setModalOpen(!modalOpen)}
                  />
                </Box>
              </Box>
            )}
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

export default Vocabulary;
