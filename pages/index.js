import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex, Stack, Grid, GridItem } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";
import StandardButton from "../components/Buttons/StandardButton";
import AdForm from "../components/AdPage/AdForm";

const useStyles = createUseStyles({});

const Home = (props) => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();

  useEffect(() => {}, []);

  const handleCustomerSelect = () => {};

  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap="32px">
        <GridItem colSpan={3}>
          <Flex
            flexDirection="column"
            px="16px"
            bgColor="brand.50"
            height="100vh"
            py="32px"
          >
            <Text>Customers</Text>
            <Stack direction="column" mt={4}>
              <StandardButton isFullWidth variant="solid" colorScheme="brand">
                Default
              </StandardButton>
              <StandardButton isFullWidth variant="solid" colorScheme="brand">
                UEM Sunrise
              </StandardButton>
              <StandardButton isFullWidth variant="solid" colorScheme="brand">
                Sime Darby Property Bhd.
              </StandardButton>
              <StandardButton isFullWidth variant="solid" colorScheme="brand">
                IGB Berhad
              </StandardButton>
              <StandardButton isFullWidth variant="solid" colorScheme="brand">
                Mah Sing Group
              </StandardButton>
            </Stack>
          </Flex>
        </GridItem>

        <GridItem colSpan={9}>
          <Flex flexDirection="column" px="16px" height="100vh" py="32px">
            <AdForm />
          </Flex>
        </GridItem>
      </Grid>
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
