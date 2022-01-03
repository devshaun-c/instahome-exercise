import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex, Stack, IconButton } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import StandardButton from "../components/Buttons/StandardButton";
import AdListing from "../components/AdPage/AdListing";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const useStyles = createUseStyles({});

const Home = (props) => {
  const [selectedCompany, setSelectedCompany] = useState("default");
  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleCustomerSelect = (companyId) => {
    setSelectedCompany(companyId);
  };

  const toggleSidebar = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <Box>
      <Flex
        flexDirection="column"
        px="16px"
        bgColor="gray.100"
        height="100vh"
        position="fixed"
        left="0"
        top="0"
        py="32px"
        width={expandSidebar ? "250px" : "80px"}
      >
        <IconButton
          variant="ghost"
          colorScheme="blackAlpha"
          onClick={() => toggleSidebar()}
          width="40px"
        >
          {expandSidebar ? <FaAngleLeft /> : <FaAngleRight />}
        </IconButton>
        {expandSidebar && (
          <Box mt={6}>
            <Text>Sample Customers</Text>
            <Stack direction="column" mt={4}>
              <StandardButton
                isFullWidth
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => handleCustomerSelect("default")}
              >
                Default
              </StandardButton>
              <StandardButton
                isFullWidth
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => handleCustomerSelect("uem_sunrise")}
              >
                UEM Sunrise
              </StandardButton>
              <StandardButton
                isFullWidth
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => handleCustomerSelect("sime_darby")}
              >
                Sime Darby Property Bhd.
              </StandardButton>
              <StandardButton
                isFullWidth
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => handleCustomerSelect("igb_berhad")}
              >
                IGB Berhad
              </StandardButton>
              <StandardButton
                isFullWidth
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => handleCustomerSelect("mah_sing")}
              >
                Mah Sing Group
              </StandardButton>
            </Stack>
          </Box>
        )}
      </Flex>

      <Box ml={expandSidebar ? "250px" : "80px"}>
        <Flex flexDirection="column" minH="100vh" p="32px">
          <AdListing companyId={selectedCompany} />
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
