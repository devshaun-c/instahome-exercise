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
} from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";
import { createUseStyles } from "react-jss";
import { RepeatIcon } from "@chakra-ui/icons";
import BackToTop from "../components/BackToTop";
import { useTheme } from "@emotion/react";

import { GetSnapshotFromFirebase } from "../lib/firebase";
import ContentContainer from "../components/ContentContainer";
import { searchParameters } from "../constants/dropdowns";
import {
  convertToNai,
  convertToPlain,
  convertToTa,
} from "../utils/conjugation";
import { wordType } from "../constants/wordType";

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

  useEffect(async () => {
    const results = JSON.parse(props.words);
    if (results.length) {
      setWords(results);
    }
  }, []);

  const handleSearch = (e) => {
    let target = e.target;
    setSearchValue(target.value);
  };

  useEffect(() => {
    if (searchValue) {
      const timeoutId = setTimeout(() => {
        var filteredWords = [];
        const exactMatch = words.filter((word) => {
          if (word[searchType]) {
            return word[searchType].toLowerCase() === searchValue;
          }
        });
        const filter = words.filter((word) => {
          if (word[searchType]) {
            return word[searchType].toLowerCase().includes(searchValue);
          }
        });
        if (exactMatch.length) {
          filteredWords = [...exactMatch];
        } else {
          filteredWords = [...filter];
        }
        setFiltered(filteredWords);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      setFiltered(words.slice(0, arrayLength));
    }
  }, [searchValue, words, arrayLength]);

  const handleSearchType = (e) => {
    const { name, value } = e.target;
    setSearchType(value);
    setSearchValue("");
    setFiltered(words);
  };

  return (
    <div>
      <Head>
        <title>
          Vocabulary - GOJISHO | Search for translation and conjugations of
          Japanese words
        </title>
        <meta
          name="description"
          content="meet japanese speaking friends and learn and improve your japanese vocabulary together"
        />
      </Head>
      <ContentContainer>
        <div className={classes.header}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text as="h1" className={classes.headerTitle}>
                VERBS
              </Text>
              <Text color="grey">[ 動詞 ] どうし</Text>
            </Box>
            <Box>
              <Select
                size="sm"
                variant="outline"
                color="white"
                bg="primary"
                borderColor="primary"
                focusBorderColor="none"
                borderRadius="8px"
                cursor="pointer"
              >
                <option style={{ color: "black" }} value="verb">
                  verbs
                </option>
                <option style={{ color: "black" }} value="noun">
                  nouns
                </option>
                <option style={{ color: "black" }} value="adj">
                  adjectives
                </option>
              </Select>
            </Box>
          </Box>
          <Box marginTop="16px">
            <Text fontSize="sm">
              List of commonly used verbs and its translation, conjugations and
              sample sentences
            </Text>
          </Box>
        </div>
        <Box className={classes.accordionTableWrapper}>
          <SearchBox
            handleChange={handleSearch}
            handleSelect={handleSearchType}
            options={searchParameterOptions}
            defaultSearch={searchParameters.ro}
            placeholder="Search a word"
            value={searchValue}
          />
          {filtered.length ? (
            <Box display="flex" flexDir="column" alignItems="center">
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
                                    {word.word}
                                  </Text>
                                  <Text fontSize="sm">
                                    {word.hiragana || "-"}
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
                            <Table variant="unstyled" size="sm">
                              <colgroup>
                                <col className={classes.firstCol} />
                                <col className={classes.secondCol} />
                              </colgroup>
                              <Tbody>
                                <Tr>
                                  <Td padding="4px 16px">
                                    <Text fontSize="xs">Romaji</Text>
                                    <Text className={classes.tinyDescription}>
                                      ローマ字
                                    </Text>
                                  </Td>
                                  <Td padding="4px 16px">{word.romaji}</Td>
                                </Tr>
                                {word.type === wordType.verb && (
                                  <>
                                    <Tr>
                                      <Td padding="4px 16px">
                                        <Text fontSize="xs">Plain</Text>
                                        <Text
                                          className={classes.tinyDescription}
                                        >
                                          じしょ
                                        </Text>
                                      </Td>
                                      <Td padding="4px 16px">
                                        {convertToPlain(word)}
                                      </Td>
                                    </Tr>
                                    <Tr>
                                      <Td padding="4px 16px">
                                        <Text fontSize="xs">TA / TE</Text>
                                        <Text
                                          className={classes.tinyDescription}
                                        >
                                          た / て
                                        </Text>
                                      </Td>
                                      <Td padding="4px 16px">
                                        {convertToTa(word)}
                                      </Td>
                                    </Tr>
                                    <Tr>
                                      <Td padding="4px 16px">
                                        <Text fontSize="xs">Negative</Text>
                                        <Text
                                          className={classes.tinyDescription}
                                        >
                                          ない
                                        </Text>
                                      </Td>
                                      <Td padding="4px 16px">
                                        {convertToNai(word)}
                                      </Td>
                                    </Tr>
                                    <Tr>
                                      <Td padding="4px 16px">
                                        <Text fontSize="xs">Verb Group</Text>
                                        <Text
                                          className={classes.tinyDescription}
                                        ></Text>
                                      </Td>
                                      <Td padding="4px 16px">{word.group}</Td>
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
                              Here's some common phrases
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
                                    ここ の いざかや の やきたて の ほっけ
                                    は、み が ほくほく で とても おいしい。
                                  </Text>
                                  <Text fontSize="xs" color="blackAlpha.500">
                                    Translation of generated text from above
                                  </Text>
                                </Box>
                                <Button
                                  size="xs"
                                  style={{ marginLeft: "16px" }}
                                >
                                  <RepeatIcon />
                                </Button>
                              </Box>
                            </div>
                          </div>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  }
                })}
              </Accordion>
              <Button
                size="xs"
                marginTop="16px"
                fontWeight="normal"
                variant="outline"
                _focus={{ outline: "0" }}
                _hover={{ bg: "white" }}
                onClick={() => setArrayLength((prevState) => prevState + 20)}
              >
                load more
              </Button>
            </Box>
          ) : (
            <Box>
              <Text fontSize="xs" color="grey">
                No search results found.
              </Text>
              <Text fontSize="xs" color="grey">
                Please check if search filter is set correctly.
              </Text>
            </Box>
          )}
        </Box>
        <BackToTop show={true} />
      </ContentContainer>
    </div>
  );
};

export async function getServerSideProps(_context) {
  const words = await GetSnapshotFromFirebase("words");
  //   const data = quiz.map((singleQuiz: any) => {
  //     return {
  //       ...singleQuiz,
  //       user: users.find((user) => user.id === singleQuiz.userId),
  //     };
  //   });
  return { props: { words: JSON.stringify(words) } };
}

export default Vocabulary;
