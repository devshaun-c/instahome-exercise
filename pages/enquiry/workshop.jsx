import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Page from "../../components/Page/Page";
import { useRouter } from "next/router";
import { shuffle } from "../../utils/functions";
import EnquiryForm from "../../components/EnquiryPage/EnquiryForm";
import img from "../../public/static/images/partner-hero.svg";
import { CheckIcon } from "@chakra-ui/icons";
import Container from "../../components/Page/Container";
import Image from "next/image";
import { FaRocket, FaUnlock, FaToolbox, FaBuilding } from "react-icons/fa";
import Hero from "../../components/EnquiryPage/Hero";
import Offerings from "../../components/EnquiryPage/Offerings";
import Faq from "../../components/EnquiryPage/Faq";

const useStyles = createUseStyles({});

const WorkshopEnquiry = () => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();

  const BenefitCard = ({ header, icon, description }) => {
    return (
      <Flex
        flexDirection="column"
        boxShadow="var(--card-shadow)"
        p={6}
        borderRadius="32px"
      >
        <Flex justifyContent="center" alignItems="center" p={6}>
          <Box fontSize="24px" color="brand.500">
            {icon}
          </Box>
        </Flex>
        <Text textAlign="center" fontWeight="bold" mb={4}>
          {header}
        </Text>
        <Text textAlign="center" color="gray.500">
          {description}
        </Text>
      </Flex>
    );
  };

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Partner Enquiry",
        description: "",
      }}
      showNav={true}
      alwaysVisible
    >
      <Hero />
      <Offerings />
      <Faq />
      <Container>
        <EnquiryForm />
      </Container>
    </Page>
  );
};

export default WorkshopEnquiry;
