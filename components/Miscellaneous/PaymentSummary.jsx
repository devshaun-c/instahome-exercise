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
  Divider,
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

  const InfoRow = ({ children }) => {
    return <Box p="8px 0">{children}</Box>;
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="650px"
      margin="auto"
      boxShadow="var(--card-shadow)"
      p={5}
    >
      <Box ref={componentRef} p="32px ">
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="x-large" color="brand.600" fontWeight="bold">
            Thank you for your purchase!
          </Text>
          <Text mt={2} textAlign="center">
            You will receive a confirmation receipt via email shortly.
          </Text>
        </Flex>

        <Table mt={8} size="xs" fontSize="xs">
          <Tbody>
            <Tr>
              <Td>Email</Td>
              <Td>
                <InfoRow>
                  <Text>{data.customer_details.email}</Text>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Payment number</Td>

              <Td>
                <InfoRow>
                  <Text>{data.payment_intent}</Text>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Payment date</Td>
              <Td>
                <InfoRow>
                  <Text>
                    {ConvertEpochToDate(data.line_items.data[0].price.created)}
                  </Text>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Organizer</Td>
              <Td>
                <InfoRow>
                  <Flex flexDirection="column">
                    <Text>{organizerInfo?.name}</Text>
                    <Text>{organizerInfo?.contact}</Text>
                    <Text>{organizerInfo?.email}</Text>
                  </Flex>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Location</Td>
              <Td>
                <InfoRow>
                  <Text fontWeight="bold">{data.metadata?.location}</Text>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Schedule</Td>
              <Td>
                <InfoRow>
                  <Text fontWeight="bold">{data.metadata?.bookedDate}</Text>
                  <Text>{data.metadata?.bookedTime}</Text>
                </InfoRow>
              </Td>
            </Tr>
            <Tr>
              <Td>Participants</Td>
              <Td>
                <InfoRow>
                  {participantList.map((participant, index) => (
                    <Flex key={index} alignItems="center" mb={2}>
                      <Text mr={6}>{index + 1}</Text>
                      <Box>
                        <Text fontWeight="bold">{`${participant.firstName} ${participant.lastName}`}</Text>
                        <Text>{participant.email}</Text>
                        <Text>{participant.contact}</Text>
                      </Box>
                    </Flex>
                  ))}
                </InfoRow>
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
