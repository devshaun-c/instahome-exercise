import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";
import StandardButton from "../components/Buttons/StandardButton";
import AdForm from "../components/AdPage/AdForm";
import NewAdForm from "../components/AdPage/NewAdForm";

const useStyles = createUseStyles({});

const Home = (props) => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();
  const [selectedCompany, setSelectedCompany] = useState("default");

  const handleCustomerSelect = (companyId) => {
    setSelectedCompany(companyId);
  };

  return (
    <Box>
      <Flex
        flexDirection="column"
        px="16px"
        bgColor="brand.50"
        height="100vh"
        position="fixed"
        left="0"
        top="0"
        py="32px"
        width="250px"
      >
        <Text>Sample Customers</Text>
        <Stack direction="column" mt={4}>
          <StandardButton
            isFullWidth
            variant="solid"
            colorScheme="brand"
            onClick={() => handleCustomerSelect("default")}
          >
            Default
          </StandardButton>
          <StandardButton
            isFullWidth
            variant="solid"
            colorScheme="brand"
            onClick={() => handleCustomerSelect("uem_sunrise")}
          >
            UEM Sunrise
          </StandardButton>
          <StandardButton
            isFullWidth
            variant="solid"
            colorScheme="brand"
            onClick={() => handleCustomerSelect("sime_darby_property_bhd")}
          >
            Sime Darby Property Bhd.
          </StandardButton>
          <StandardButton
            isFullWidth
            variant="solid"
            colorScheme="brand"
            onClick={() => handleCustomerSelect("igb_berhad")}
          >
            IGB Berhad
          </StandardButton>
          <StandardButton
            isFullWidth
            variant="solid"
            colorScheme="brand"
            onClick={() => handleCustomerSelect("mah_sing_group")}
          >
            Mah Sing Group
          </StandardButton>
        </Stack>
      </Flex>

      <Box ml="250px">
        <Flex flexDirection="column" minH="100vh" p="32px">
          <AdForm companyId={selectedCompany} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  //API request

  return {
    props: {
      data: null,
    },
  };
};
