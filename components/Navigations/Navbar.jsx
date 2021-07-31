import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  useDisclosure,
  Collapse,
  Divider,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Container from "../../components/Page/Container";
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  navbar: {
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    height: "64px",
    backgroundColor: "white",
    borderBottom: "1px solid rgb(235,235,235)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    cursor: "pointer",
    marginLeft: "5%",
    // padding: "18px 0",
  },
  menuLinks: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
  mobileMenu: {
    display: "none",
    "@media screen and (max-width: 1000px)": {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      width: "50px",
    },
  },
  menuButton: {
    borderRadius: "0px",
    background: "none",
  },
  mobileLinks: {
    position: "absolute",
    right: "0",
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
  },
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleNav = (url) => {
    onClose();
    router.push(url);
  };

  return (
    <nav className={classes.navbar}>
      <Box position="relative" h="100%">
        <div className={classes.nav}>
          <div className={classes.title} onClick={() => handleNav("/")}>
            Title
          </div>
          <div className={classes.menuLinks}>
            <Menu>
              <MenuButton
                mr="24px"
                fontSize={["md", "sm"]}
                onClick={() => handleNav("/about")}
              >
                About
              </MenuButton>
              <MenuButton
                mr="24px"
                fontSize={["md", "sm"]}
                onClick={() => handleNav("/component-page")}
              >
                Components
              </MenuButton>
              <MenuButton
                mr="24px"
                fontSize={["md", "sm"]}
                onClick={() => handleNav("/sections-page")}
              >
                Sections
              </MenuButton>
            </Menu>
          </div>
          <Box className={classes.mobileMenu} bg={isOpen ? "teal.500" : "none"}>
            <IconButton
              onClick={onToggle}
              className={classes.menuButton}
              size="sm"
              h="100%"
              w="100%"
              color={isOpen ? "white" : ""}
              _focus={{ outline: "none", bg: "none" }}
              _selected={{ outline: "none", bg: "none" }}
              _active={{ outline: "none", bg: "none" }}
              _hover={{ bg: "none" }}
            >
              {isOpen ? (
                <CloseIcon fontSize="xs" />
              ) : (
                <HamburgerIcon fontSize="md" />
              )}
            </IconButton>
          </Box>
        </div>

        <Collapse in={isOpen}>
          <Box className={classes.mobileLinks}>
            <Menu>
              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon fontSize="md" />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                fontWeight="normal"
                colorScheme="teal"
                p="4px 16px"
                onClick={() => handleNav("/about")}
              >
                About
              </MenuButton>
              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon fontSize="md" />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                colorScheme="teal"
                fontWeight="normal"
                p="4px 16px"
                onClick={() => handleNav("/component-page")}
              >
                Components
              </MenuButton>

              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon fontSize="md" />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                colorScheme="teal"
                fontWeight="normal"
                p="4px 16px"
                onClick={() => handleNav("/sections-page")}
              >
                Sections
              </MenuButton>
            </Menu>
          </Box>
        </Collapse>
      </Box>
    </nav>
  );
};

export default Navbar;
