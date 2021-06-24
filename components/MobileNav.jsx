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
import { VscWholeWord } from "react-icons/vsc";
import {
  BsBook,
  BsListUl,
  BsPen,
  BsPeople,
  BsQuestionCircle,
  BsSearch,
  BsSoundwave,
  BsUpload,
  BsVolumeUp,
} from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import BuyMeCoffee from "./BuyMeCoffee";

const useStyles = createUseStyles({
  container: {
    width: "300px",
    height: "100%",
    position: "fixed",
    left: "0",
    backgroundColor: "#D22326",
    color: "white",
    "@media screen and (max-width: 1000px)": {
      display: "none",
      width: "0",
      padding: "0",
    },
  },
  linkWrap: {
    display: "flex",
    flexDirection: "column",
  },
  titleWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "32px",
  },
  linkStyle: {
    margin: "8px 0",
    width: "100%",
    fontSize: "12px",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.titleWrap}>
        <FaBookOpen fontSize="42px" />
        <Text fontSize="xs" mt="8px">
          GOJISHO
        </Text>
      </div>
      <div className={classes.linkWrap}>
        <Accordion allowToggle>
          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/about" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsQuestionCircle />
                      <Text fontSize="sm" ml="16px">
                        About
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0 32px"
                >
                  <Link href="/vocabulary" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <VscWholeWord />
                      <Text fontSize="sm" ml="16px">
                        Vocabulary
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0 32px"
                >
                  <Box display="flex" alignItems="center">
                    <BsBook />
                    <Text fontSize="sm" ml="16px">
                      Study
                    </Text>
                  </Box>
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel padding="0 0 0 72px">
              <Box display="flex" flexDir="column">
                <Box margin="4px 0">
                  <Link href="/study/topic">
                    <Box display="flex" alignItems="center" cursor="pointer">
                      <Text fontSize="sm">by Topics </Text>
                      <Text fontSize="xx-small" ml="12px">
                        トピック
                      </Text>
                    </Box>
                  </Link>
                </Box>

                <Box margin="4px 0">
                  <Link href="/study/story">
                    <Box display="flex" alignItems="center" cursor="pointer">
                      <Text fontSize="sm">by Stories</Text>
                      <Text fontSize="xx-small" ml="12px">
                        ものがたり
                      </Text>
                    </Box>
                  </Link>
                </Box>

                <Box margin="4px 0">
                  <Link href="/study/quiz">
                    <Box display="flex" alignItems="center" cursor="pointer">
                      <Text fontSize="sm">by Quiz </Text>
                      <Text fontSize="xx-small" ml="12px">
                        クイズ
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          {/* <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/community" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsPeople />
                      <Text fontSize="sm" ml="16px">
                        Community
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem> */}

          {/* <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/resources" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsListUl />
                      <Text fontSize="sm" ml="16px">
                        Resources
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem> */}

          {/* <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/excelreader" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsPen />
                      <Text fontSize="sm" ml="16px">
                        Pen pals
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem> */}

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/search" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsSearch />
                      <Text fontSize="sm" ml="16px">
                        Word Search
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/audiolibrary" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsVolumeUp />
                      <Text fontSize="sm" ml="16px">
                        Audio Library
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 32px"
                >
                  <Link href="/excelreader" className={classes.linkStyle}>
                    <Box display="flex" alignItems="center">
                      <BsUpload />
                      <Text fontSize="sm" ml="16px">
                        Upload words
                      </Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
