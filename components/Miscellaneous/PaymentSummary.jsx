import React, { useState, useEffect, useRef } from "react";
import { Flex, Text, Box, Button, Stack, Link } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ConvertEpochToDate } from "../../utils/functions";
import ReactToPrint from "react-to-print";
import { useRouter } from "next/router";
import { FiPrinter } from "react-icons/fi";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  receiptWrapper: {
    padding: "16px 32px",

    "@media screen and (max-width: 1000px)": {
      padding: "16px",
    },
  },
});

const PaymentSummary = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { data } = props;
  const router = useRouter();
  const componentRef = useRef();

  const { organizer, participants, payee } = data.metadata;
  const organizerInfo = JSON.parse(organizer);
  const participantList = JSON.parse(participants);
  const payeeInfo = JSON.parse(payee);

  const InfoRow = ({ title, children }) => {
    return (
      <Stack
        direction={["column", "row"]}
        size="xs"
        fontSize="xs"
        spacing={0}
        mb={3}
      >
        <Text color="gray.400" width="200px">
          {title}
        </Text>
        {children}
      </Stack>
    );
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      maxW="650px"
      margin="auto"
      boxShadow={["none", "var(--card-shadow)"]}
      p={[0, 5]}
    >
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        <Link
          href="/"
          cursor="pointer"
          _focus={{ outline: "none" }}
          rel="noopener,noreferrer"
        >
          <ChevronLeftIcon fontSize="32px" color="brand.600" />
        </Link>
        <ReactToPrint
          trigger={() => (
            <Button variant="ghost" colorScheme="brand" size="sm">
              <FiPrinter fontSize="32px" />
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Flex>

      <Box ref={componentRef} className={classes.receiptWrapper}>
        <Text
          fontSize="x-large"
          fontFamily="var(--title-font)"
          mb={4}
          textAlign="center"
          fontWeight="bold"
        >
          AfterWork
        </Text>
        <Flex flexDirection="column" alignItems="center" mb={6}>
          <Text
            fontSize="large"
            color="brand.600"
            fontWeight="bold"
            textAlign="center"
          >
            Your booking is complete!
          </Text>

          <Text textAlign="center" fontSize="sm">
            An email confirmation will be sent to you shortly.
          </Text>
        </Flex>

        <InfoRow title="Email">
          <Text>{data.customer_details.email}</Text>
        </InfoRow>

        <InfoRow title="Payment number">
          <Text>{data.payment_intent}</Text>
        </InfoRow>

        <InfoRow title="Payment date">
          <Text>
            {ConvertEpochToDate(data.line_items.data[0].price.created)}
          </Text>
        </InfoRow>

        <InfoRow title="Organizer">
          <Flex flexDirection="column">
            <Text>{organizerInfo?.name}</Text>
            <Text>{organizerInfo?.contact}</Text>
            <Text>{organizerInfo?.email}</Text>
          </Flex>
        </InfoRow>

        <InfoRow title="Location address">
          <Text>{data.metadata?.location}</Text>
        </InfoRow>

        <InfoRow title="Booked date">
          <Flex flexDirection="column">
            <Text>{data.metadata?.bookedDate}</Text>
            <Text>{data.metadata?.bookedTime}</Text>
          </Flex>
        </InfoRow>

        <InfoRow title="Participants">
          <Flex flexDirection="column">
            {participantList.map((participant, index) => (
              <Flex key={index} alignItems="center" mb={2}>
                <Text mr={6}>{index + 1}</Text>
                <Box>
                  <Text>{`${participant.pName} `}</Text>
                  <Text>{participant.pEmail}</Text>
                  <Text>{participant.pContact}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </InfoRow>

        <Box mt={8} fontSize="sm">
          <Text textAlign="center">Your purchase summary</Text>
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Box>
              <Text fontWeight="bold">
                {data.line_items?.data[0].description}
              </Text>
              <Text>By {organizerInfo?.name}</Text>
            </Box>
            <Text>{` X ${data.line_items.data[0].quantity}`}</Text>
            <Text>{`RM ${data.line_items?.data[0].amount_total / 100}`}</Text>
          </Flex>
        </Box>
        <Text fontSize="sm" mt={10} textAlign="center">
          If you have any questions or concerns on your purchase, please reach
          out to us at <u>support@afterwork.my</u>
        </Text>
      </Box>
    </Flex>
  );
};

export default PaymentSummary;
