import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../components/Sections/Section";
import Page from "../components/Page/Page";

const useStyles = createUseStyles({});

const PageTemplate = () => {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Page
      pageMeta={{
        title: "",
        description: "",
      }}
    >
      <Section fullView={false}>Section 1</Section>
      <Section fullView={false}>Section 2</Section>
      <Section fullView={false}>Section 3</Section>
    </Page>
  );
};

export default PageTemplate;
