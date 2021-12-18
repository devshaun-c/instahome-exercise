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
      <Container>
        <Stack w="100%" direction={["column", "column", "row"]} spacing="32px">
          <Flex direction="column" w="100%">
            <Box mt="32px">
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <BenefitCard
                  header="Increase visibility"
                  icon={<FaRocket />}
                  description="Gain more visibility from our community who are looking for new activities to explore."
                />
                <BenefitCard
                  header="More features as you grow"
                  icon={<FaToolbox />}
                  description="It is free to get started. We offer various services to grow your business as you need them."
                />
                <BenefitCard
                  header="Corporate business"
                  icon={<FaBuilding />}
                  description="We help you to reach out and organize company team building events"
                />
                <BenefitCard
                  header="No strings attached"
                  icon={<FaUnlock />}
                  description="Don't think you need our services anymore? Cancel anytime at no additional cost."
                />
              </Grid>
            </Box>
          </Flex>
          <Box w="80%">
            <EnquiryForm />
          </Box>
        </Stack>
      </Container>
    </Page>
  );
};

export default WorkshopEnquiry;
