import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({});

const TabsPanel = ({ children, tabs, ...others }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Tabs>
      <TabList>
        <Tab _focus={{ outline: "none" }}>One</Tab>
        <Tab _focus={{ outline: "none" }}>Two</Tab>
        <Tab _focus={{ outline: "none" }}>Three</Tab>
      </TabList>

      <TabPanels>{children}</TabPanels>
    </Tabs>
  );
};

export default TabsPanel;
