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
import { BsBook, BsQuestionCircle, BsSearch, BsVolumeUp } from "react-icons/bs";
import BuyMeCoffee from "./BuyMeCoffee";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    zIndex: "1000",
    paddingRight: "64px",
  },
  container: {
    width: "250px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    color: "black",
    "@media screen and (max-width: 1000px)": {},
  },
  menuLinks: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  linkStyle: {
    margin: "8px 0",
    width: "100%",
    fontSize: "18px",
    height: "20px",
  },
});

const Sidebar = () => {
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
                <Box width="100%">
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
                <Box width="100%">
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
            <AccordionPanel padding="0 0 0 32px">
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
        </Accordion>
      </div>
    );
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <Text fontWeight="bold" fontSize={["sm", "md"]}>
          Sidebar header
        </Text>
        <MenuLinks />
      </div>
    </div>
  );
};

export default Sidebar;
