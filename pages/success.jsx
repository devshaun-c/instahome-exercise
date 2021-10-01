import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Progress } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../components/Sections/Section";
import Page from "../components/Page/Page";
import { fetchGetJSON } from "../utils/api-helpers";
import useSWR from "swr";
import PaymentSummary from "../components/Checkout/PaymentSummary";

const useStyles = createUseStyles({});

const SuccessPage = () => {
  const classes = useStyles();
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id ? `/api/checkout_sessions/${router.query.id}` : null,
    fetchGetJSON
  );

  return (
    <Page
      pageMeta={{
        title: "Payment success - AfterWork",
        description: "",
      }}
      alwaysVisible
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
