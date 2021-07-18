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
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "64px",
  },
  container: {
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
    marginTop: "16px",
  },
  linkStyle: {
    margin: "8px 0",
    width: "100%",
    fontSize: "18px",
    height: "20px",
  },
});

const menuItemFields = {
  title: "",
  icon: null,
  fcn: () => {},
  nested: [
    {
      title: "",
      icon: "",
      fcn: () => {
        alert("clicked");
      },
    },
  ],
};

const Sidebar = (props) => {
  const { width, header, menuItems } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();

  const handleNav = (url) => {
    router.push(url);
  };

  const MenuLinks = () => {
    return (
      <div className={classes.menuLinks}>
        <Accordion allowToggle w="100%">
          {menuItems.map((item, index) => (
            <AccordionItem key={index} border="none" padding="4px 0">
              <h2>
                <AccordionButton
                  _expanded={{}}
                  _focus={{ outline: "0" }}
                  _hover={{ background: "none" }}
                  padding="4px 0"
                >
                  <Box
                    onClick={item.fcn}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.linkStyle}
                  >
                    <Box display="flex" alignItems="center">
                      {item.icon && <Box marginRight="8px">{item.icon}</Box>}
                      <Text>{item.title}</Text>
                    </Box>
                    {item.nested.length > 0 && <AccordionIcon />}
                  </Box>
                </AccordionButton>
              </h2>
              {item.nested.length > 0 && (
                <AccordionPanel padding="0 0 0 32px">
                  <Box display="flex" flexDir="column">
                    {item.nested.map((nestedItem, index) => (
                      <Box key={index} margin="4px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          cursor="pointer"
                          onClick={nestedItem.fcn}
                        >
                          <Text fontSize="sm">{nestedItem.title}</Text>
                          <Text fontSize="xx-small" ml="12px">
                            {nestedItem.subtitle}
                          </Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </AccordionPanel>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };

  return (
    <div className={classes.sidebar}>
      <Box className={classes.container} w={width}>
        <Text fontWeight="bold" fontSize={["sm", "md"]}>
          {header}
        </Text>
        <MenuLinks />
      </Box>
    </div>
  );
};

export default Sidebar;
