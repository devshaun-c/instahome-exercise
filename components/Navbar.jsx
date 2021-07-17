import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Container from "../components/Container";
import { BsList } from "react-icons/bs";

const useStyles = createUseStyles({
  navbar: {
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    borderBottom: "1px solid rgb(235,235,235)",
    padding: "18px 0",
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  mobileLinks: {
    display: "none",
    "@media screen and (max-width: 1000px)": {
      display: "flex",
    },
  },
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (url) => {
    setIsOpen(false);
    router.push(url);
  };

  return (
    <nav className={classes.navbar}>
      <Container>
        <div className={classes.nav}>
          <div className={classes.title} onClick={() => handleNav("/")}>
            Title
          </div>
          <div className={classes.menuLinks}>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    mr="24px"
                    fontSize={["md", "sm"]}
                    onClick={() => handleNav("/about")}
                  >
                    About
                  </MenuButton>
                  <MenuButton
                    isActive={isOpen}
                    mr="24px"
                    fontSize={["md", "sm"]}
                    onClick={() => handleNav("/first-page")}
                  >
                    Demo page
                  </MenuButton>
                  {/* <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem onClick={() => alert("Kagebunshin")}>
                      Create a Copy
                    </MenuItem>
                  </MenuList> */}
                </>
              )}
            </Menu>
          </div>
          <div className={classes.mobileLinks}>
            <BsList />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
