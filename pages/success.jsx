import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Progress,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../components/Sections/Section";
import Page from "../components/Page/Page";
import { fetchGetJSON } from "../lib/api-helpers";
import useSWR from "swr";
import Navbar from "../components/Navigations/Navbar";
import PaymentSummary from "../components/Miscellaneous/PaymentSummary";

const useStyles = createUseStyles({});

const SuccessPage = () => {
  const classes = useStyles();
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id ? `/api/checkout_sessions/${router.query.id}` : null,
    fetchGetJSON
  );

  console.log(data);

  return (
    <Page
      pageMeta={{
        title: "About - This website",
        description: "Explain the goal and objective of this website",
      }}
      alwaysShowNav
    >
      <Section>
        {data ? (
          <PaymentSummary data={data} />
        ) : (
          <Box minH="600px">
            <Progress isIndeterminate colorScheme="brand" />
          </Box>
        )}
      </Section>
    </Page>
  );
};

export default SuccessPage;
