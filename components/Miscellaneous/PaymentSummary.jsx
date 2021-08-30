import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ConvertEpochToDate } from "../../lib/utils";

const useStyles = createUseStyles({});

const PaymentSummary = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { data } = props;

  return (
    <Flex p="40px 0" flexDirection="column" alignItems="center">
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize="x-large" color="brand.600" fontWeight="bold">
          Thank you for your purchase!
        </Text>
        <Text mt={2}>
          You will receive a confirmation receipt via email shortly.
        </Text>
      </Flex>
      <Table mt={8} fontSize="sm" w="600px">
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
        </Tbody>
      </Table>
      <Table w="600px" mt={8} fontSize="sm">
        <TableCaption placement="top">Your purchase summary</TableCaption>
        <Tbody>
          <Tr fontWeight="bold">
            <Td>{data.line_items?.data[0].description}</Td>
            <Td>{` X ${data.line_items.data[0].quantity}`}</Td>
            <Td>{`RM ${data.line_items?.data[0].amount_total / 100}`}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

export default PaymentSummary;
