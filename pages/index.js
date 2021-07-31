import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";
import Page from "../components/Page/Page";
import Section from "../components/Sections/Section";

const useStyles = createUseStyles({});

const Home = () => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    // router.push("/maintenancepage");
  }, []);

  return (
    <Page
      pageMeta={{ title: "Landing page - NextJS Template", description: "" }}
    >
      <Section>
        <Box mt={10}>TEST TEST</Box>
      </Section>
    </Page>
  );
};

export default Home;
