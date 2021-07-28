import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
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
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    padding: "18px 5%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgb(235,235,235)",
  },
  title: {
    cursor: "pointer",
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
    },
  },
  mobileLinks: {
    position: "absolute",
    right: "0",
    width: "80%",
    minHeight: "300px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
    borderRadius: "0 0 0 8px",
  },
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  const handleNav = (url) => {
    onToggle();
    router.push(url);
  };

  return (
    <nav className={classes.navbar}>
      <Box position="relative">
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
          <div className={classes.mobileMenu}>
            <IconButton onClick={onToggle} size="sm">
              {isOpen ? (
                <CloseIcon fontSize="xs" />
              ) : (
                <HamburgerIcon fontSize="xs" />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse in={isOpen} animateOpacity>
          <Box className={classes.mobileLinks}>
            <Menu>
              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                fontWeight="normal"
                bg="#F6F8FA"
                borderBottom="1px solid #EEEEEE"
                p="4px 16px"
                onClick={() => handleNav("/about")}
              >
                About
              </MenuButton>
              <Divider />
              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                bg="#F6F8FA"
                fontWeight="normal"
                borderBottom="1px solid #EEEEEE"
                p="4px 16px"
                onClick={() => handleNav("/component-page")}
              >
                Components
              </MenuButton>

              <Divider />
              <MenuButton
                as={Button}
                width="100%"
                rightIcon={<ChevronRightIcon />}
                borderRadius="none"
                textAlign="start"
                fontSize="xs"
                bg="#F6F8FA"
                fontWeight="normal"
                p="4px 16px"
                borderBottom="1px solid #EEEEEE"
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
