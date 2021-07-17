import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { VscWholeWord } from "react-icons/vsc";
import {
  BsBook,
  BsList,
  BsQuestionCircle,
  BsSearch,
  BsVolumeUp,
} from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import BuyMeCoffee from "./BuyMeCoffee";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    flexDirection: "column",
    zIndex: "1000",
  },
  mobileNav: {
    display: "none",
    padding: "16px",
    position: "fixed",
    left: "0",
    height: "80px",
    width: "100%",
    color: "white",
    backgroundColor: (props) => `${props.colors.primary}`,

    "@media screen and (max-width: 1000px)": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  mobileLinks: {
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "fixed",
    top: "80px",
    left: "0",
    width: "100%",
    height: "100%",
  },
  container: {
    position: "fixed",
    left: "0",
    width: "300px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D22326",
    color: "white",
    "@media screen and (max-width: 1000px)": {
      display: "none",
      width: "0",
      padding: "0",
    },
  },
  menuLinks: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    "@media screen and (max-width: 1000px)": {
      backgroundColor: (props) => `${props.colors.primary}`,
      position: "fixed",
      right: "0",
      top: "80px",
      width: "60%",
      maxWidth: "400px",
      height: "100%",
      padding: "16px 0",
    },
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
    fontSize: "18px",
    height: "20px",
  },
});

const VerticalNavBar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (url) => {
    setIsOpen(false);
    router.push(url);
  };

  const MenuLinks = () => {
    return (
      <div className={classes.menuLinks}>
        <Accordion allowToggle w="100%">
          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box width="100%" padding="0 32px">
                  <Box
                    onClick={() => handleNav("/")}
                    className={classes.linkStyle}
                  >
                    <Box display="flex" alignItems="center">
                      <BsQuestionCircle />
                      <Text ml="16px">About</Text>
                    </Box>
                  </Box>
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
                <Box width="100%" padding="0 32px">
                  <Box
                    onClick={() => handleNav("/vocabulary")}
                    className={classes.linkStyle}
                  >
                    <Box display="flex" alignItems="center">
                      <VscWholeWord />
                      <Text ml="16px">Word Book</Text>
                    </Box>
                  </Box>
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
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0 32px"
                  className={classes.linkStyle}
                >
                  <Box display="flex" alignItems="center">
                    <BsBook />
                    <Text ml="16px">Study</Text>
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

          <AccordionItem border="none" padding="4px 0">
            <h2>
              <AccordionButton
                _expanded={{}}
                _focus={{ outline: "0" }}
                padding="4px 0"
              >
                <Box width="100%" padding="0 32px">
                  <Box
                    onClick={() => handleNav("/search")}
                    className={classes.linkStyle}
                  >
                    <Box display="flex" alignItems="center">
                      <BsSearch />
                      <Text ml="16px">Word Search</Text>
                    </Box>
                  </Box>
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
                <Box width="100%" padding="0 32px">
                  <Box
                    onClick={() => handleNav("/audiolibrary")}
                    className={classes.linkStyle}
                  >
                    <Box display="flex" alignItems="center">
                      <BsVolumeUp />
                      <Text ml="16px">Audio Library</Text>
                    </Box>
                  </Box>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>

        <BuyMeCoffee />
      </div>
    );
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.mobileNav}>
        <Box display="flex" alignItems="center">
          <FaBookOpen fontSize="24px" />
          <Text fontSize="sm" fontWeight="bold" ml="12px">
            GOJISHO
          </Text>
        </Box>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <BsList fontSize="32px" />
        </IconButton>

        {isOpen && (
          <div className={classes.mobileLinks}>
            <Box
              w="40%"
              h="100%"
              cursor="pointer"
              onClick={() => setIsOpen(false)}
            />
            <MenuLinks />
          </div>
        )}
      </div>

      <div className={classes.container}>
        <div className={classes.titleWrap}>
          <FaBookOpen fontSize="42px" />
          <Text fontSize="xs" mt="8px">
            GOJISHO
          </Text>
        </div>

        <MenuLinks />
      </div>
    </div>
  );
};

export default VerticalNavBar;
