import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../components/Sections/Section";
import Page from "../components/Page/Page";
import { fetchGetJSON } from "../lib/api-helpers";
import useSWR from "swr";

const useStyles = createUseStyles({});

const SuccessPage = () => {
  const classes = useStyles();
  const router = useRouter();

  console.log(router.query.id);

  const { data, error } = useSWR(
    router.query.id ? `/api/checkout_sessions/${router.query.id}` : null,
    fetchGetJSON
  );

  const { email } = data.customer_details;
  const { description, amount_total, quantity } = data.line_items.data[0];

  return (
    <Page
      pageMeta={{
        title: "About - This website",
        description: "Explain the goal and objective of this website",
      }}
    >
      <Section>
        <Box>
          <Text>{email}</Text>
          <Text>{description}</Text>
          <Text>{`Quantity: x${quantity}`}</Text>
          <Text>{`RM ${amount_total / 100}`}</Text>
          <Text>Thank you for your purchase!</Text>
          <Text>You will receive a confirmation receipt shortly.</Text>
          <Text>If you have any questions, please email</Text>
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </Box>
      </Section>
    </Page>
  );
};

export default SuccessPage;
