import React from "react";
import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Container from "../Page/Container";
import { isMobile } from "react-device-detect";

const useStyles = createUseStyles({});

const TabsPanel = ({ children, tabIndex, handleTabChange, ...others }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (index) => {
    handleTabChange(index);
  };

  const CustomTab = ({ children }) => {
    return (
      <Tab
        fontWeight="bold"
        borderBottom="2px solid transparent"
        color="gray.400"
        fontSize={["sm", "md"]}
        _focus={{ outline: "none" }}
        p={["16px", "16px 24px"]}
        whiteSpace="nowrap"
        marginBottom="8px"
        _selected={{
          color: "brand.700",
          borderColor: "brand.700",
          borderBottom: "2px solid ",
        }}
      >
        {children}
      </Tab>
    );
  };

  return (
    <Tabs
      defaultIndex={0}
      index={tabIndex}
      mt={2}
      variant="unstyled"
      onChange={(index) => handleChange(index)}
      isLazy
    >
      <Container>
        <TabList overflowX={["scroll", "hidden"]}>
          <CustomTab>All</CustomTab>
          <CustomTab>Events</CustomTab>
          <CustomTab>Workshops</CustomTab>
          <CustomTab>Community</CustomTab>
        </TabList>

        <TabPanels>{children}</TabPanels>
      </Container>
    </Tabs>
  );
};

export default TabsPanel;
