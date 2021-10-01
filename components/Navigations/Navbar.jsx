import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  Menu,
  useDisclosure,
  Collapse,
  Flex,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import HoverMenu from "./HoverMenu";
import { isMobile } from "react-device-detect";

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
    width: "90%",
    maxWidth: "var(--max-width)",
    "@media screen and (max-width: 1000px)": {
      width: "100%",
    },
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
    display: "none",
    "@media screen and (max-width: 1000px)": {
      position: "absolute",
      right: "0",
      width: "100%",
      background: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
    },
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
    if (isMobile || alwaysVisible) {
      setShowNavbar(true);
    } else if (!alwaysVisible) {
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

  const navList = [
    { title: "Explore", mainUrl: "/", items: [] },
    { title: "About", mainUrl: "/about", items: [] },
    {
      title: "Organize",
      mainUrl: "",
      items: [
        { name: "Our partners", url: "/" },
        { name: "Why partner with us?", url: "/" },
      ],
    },
    {
      title: "Corporate",
      mainUrl: "",
      items: [
        { name: "Why join us?", url: "/" },
        {
          name: "Employee benefits program",
          url: "/",
        },
      ],
    },
  ];

  return (
    <Box className={showNavbar ? classes.navbarShow : classes.navbarHide}>
      {showNavbar && (
        <Box position="relative" h="100%">
          <div className={classes.nav}>
            <Link
              href="/"
              cursor="pointer"
              _hover={{ outline: "none" }}
              rel="noopener,noreferrer"
              className={classes.title}
            >
              <Text color="brand.600">AfterWork</Text>
            </Link>

            <div className={classes.menuLinks}>
              <Menu>
                {navList.map((item, index) => (
                  <HoverMenu
                    key={index}
                    title={item.title}
                    mainUrl={item.mainUrl}
                    items={item.items}
                  />
                ))}
              </Menu>
            </div>

            <Box className={classes.mobileMenu}>
              <IconButton
                onClick={onToggle}
                className={classes.menuButton}
                size="sm"
                h="100%"
                w="100%"
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
              <Accordion
                allowToggle
                width="100%"
                borderColor="whitesmoke"
                bg="white"
                pb={4}
              >
                {navList.map((item, index) => (
                  <AccordionItem key={index}>
                    <AccordionButton
                      _expanded={{ background: "gray.100" }}
                      _focus={{ outline: "none" }}
                      bg="whitesmoke"
                      // onClick={() =>
                      //   item.mainUrl ? handleNav(item.mainUrl) : {}
                      // }
                    >
                      <Link
                        href={item.mainUrl}
                        cursor="pointer"
                        _hover={{ outline: "none" }}
                        rel="noopener,noreferrer"
                      >
                        <Text flex="1" textAlign="left" fontSize="sm">
                          {item.title}
                        </Text>
                      </Link>

                      {item.mainUrl ? null : <AccordionIcon />}
                    </AccordionButton>
                    <AccordionPanel p={0} bg="white">
                      <Flex flexDirection="column">
                        {item.items.map((subItem, index) => (
                          <Button
                            key={index}
                            variant="unstyled"
                            textAlign="left"
                            fontSize="sm"
                            fontWeight="normal"
                            pl={8}
                            _focus={{ outline: "none" }}
                            borderBottom="1px solid whitesmoke"
                            onClick={() => handleNav(subItem.url)}
                          >
                            {subItem.name}
                          </Button>
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Collapse>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
