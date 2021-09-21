import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  useDisclosure,
  Collapse,
  Button,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import HoverMenu from "./HoverMenu";

const useStyles = createUseStyles({
  navbarShow: {
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    height: "64px",
    backgroundColor: "white",
    opacity: "1",
    boxShadow: "0 4px 12px -4px rgb(0 0 0 / 10%)",
    transition: "opacity 0.3s",
  },
  navbarHide: {
    height: "0",
    opacity: "0",
    transition: "opacity 0.3s",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    margin: "auto",
    maxWidth: "var(--max-width)",
  },
  title: {
    fontFamily: "var(--title-font)",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    "@media screen and (max-width: 1000px)": {
      marginLeft: "5%",
    },
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

const Navbar = (props) => {
  const { alwaysVisible } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [showNavbar, setShowNavbar] = useState(alwaysVisible || false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) setShowNavbar(true);
    if (position <= 50) setShowNavbar(false);
  };

  useEffect(() => {
    if (!alwaysVisible) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleNav = (url) => {
    onClose();
    router.push(url);
  };

  return (
    <Box className={showNavbar ? classes.navbarShow : classes.navbarHide}>
      {showNavbar && (
        <Box position="relative" h="100%">
          <div className={classes.nav}>
            <Text
              className={classes.title}
              onClick={() => handleNav("/")}
              color="brand.600"
            >
              AfterWork
            </Text>
            <div className={classes.menuLinks}>
              <Menu>
                <HoverMenu title="Home" mainUrl="/" />

                <HoverMenu title="About us" mainUrl="/about" />

                <HoverMenu
                  title="Organize"
                  items={[
                    { name: "Our partners", url: "/" },
                    { name: "Why partner with us?", url: "/" },
                  ]}
                />

                <HoverMenu
                  title="Corporate"
                  items={[
                    { name: "Why join us?", url: "/" },
                    {
                      name: "Employee benefits program",
                      url: "/",
                    },
                  ]}
                />
              </Menu>
            </div>

            <Box
              className={classes.mobileMenu}
              bg={isOpen ? "teal.500" : "none"}
            >
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
                  onClick={() => handleNav("/")}
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
                  onClick={() => handleNav("/")}
                >
                  Sections
                </MenuButton>
              </Menu>
            </Box>
          </Collapse>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
