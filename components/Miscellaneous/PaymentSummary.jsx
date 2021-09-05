import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ConvertEpochToDate } from "../../lib/utils";
import ReactToPrint from "react-to-print";
import { useRouter } from "next/router";

const useStyles = createUseStyles({});

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

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="650px"
      margin="auto"
      boxShadow="var(--card-shadow)"
      p={5}
    >
      <Box ref={componentRef} p="32px 0">
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="x-large" color="brand.600" fontWeight="bold">
            Thank you for your purchase!
          </Text>
          <Text mt={2}>
            You will receive a confirmation receipt via email shortly.
          </Text>
        </Flex>

        <Table mt={8} fontSize="sm" size="sm">
          <Tbody>
            <Tr>
              <Td>Email</Td>
              <Td fontWeight="bold">{data.customer_details.email}</Td>
            </Tr>
            <Tr>
              <Td>Payment number</Td>
              <Td fontWeight="bold">{data.payment_intent}</Td>
            </Tr>
            <Tr>
              <Td>Payment date</Td>
              <Td fontWeight="bold">
                {ConvertEpochToDate(data.line_items.data[0].price.created)}
              </Td>
            </Tr>
            <Tr>
              <Td>Organizer</Td>
              <Td>
                <Flex flexDirection="column">
                  <Text fontWeight="bold" mt={1}>
                    {organizerInfo?.name}
                  </Text>
                  <Text mt={1}>{organizerInfo?.contact}</Text>
                  <Text mt={1}>{organizerInfo?.email}</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>Location</Td>
              <Td fontWeight="bold">
                <Text>{data.metadata?.location}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>Schedule</Td>
              <Td fontWeight="bold">
                <Text>{data.metadata?.bookedSession}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Table mt={8} fontSize="sm">
          <TableCaption placement="top">Your purchase summary</TableCaption>
          <Tbody>
            <Tr>
              <Td>
                <Flex flexDirection="column">
                  <Text fontWeight="bold">
                    {data.line_items?.data[0].description}
                  </Text>
                  <Text>By {organizerInfo?.name}</Text>
                </Flex>
              </Td>
              <Td>
                <Text>{` X ${data.line_items.data[0].quantity}`}</Text>
              </Td>
              <Td>{`RM ${data.line_items?.data[0].amount_total / 100}`}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <ButtonGroup>
        <Button colorScheme="brand" onClick={() => router.push("/")}>
          Home
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button variant="outline" colorScheme="brand">
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default PaymentSummary;
