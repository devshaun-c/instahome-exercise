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

const useStyles = createUseStyles({
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
    },
  },
  // imageSection: {
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   padding: "40px 0",
  //   position: "relative",

  //   "&:before": {
  //     content: '""',
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     width: "100%",
  //     height: "100%",
  //     backgroundColor: "rgba(0,0,0,0.3)",
  //   },
  // },
});

const WorkshopEnquiry = (props) => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();
  const [data, setData] = useState([]);

  const dataFromServer = JSON.parse(props.data);

  useEffect(() => {
    if (dataFromServer) {
      setData([...shuffle(dataFromServer)]);
    }
  }, []);

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Partner Enquiry",
        description: "",
      }}
      showNav={false}
    >
      <Container>
        <Stack w="100%" direction={["column", "row", "row"]} spacing="32px">
          <Flex direction="column" w="100%">
            <Text
              pt={4}
              pb={4}
              color="primary"
              fontFamily="var(--title-font)"
              fontSize="x-large"
            >
              AfterWork
            </Text>
            <Box mt="80px">
              <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.400">
                Why be a partner?
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Flex
                  flexDirection="column"
                  boxShadow="var(--card-shadow)"
                  p={8}
                  borderRadius="32px"
                >
                  <Flex justifyContent="center" alignItems="center" p={6}>
                    <CheckIcon fontSize="32px" color="brand.600" />
                  </Flex>
                  <Text textAlign="center" fontWeight="bold" mb={4}>
                    Increase visibility
                  </Text>
                  <Text textAlign="center" color="gray.500">
                    Gain more visibility from our community who are looking for
                    new activities to explore.
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  boxShadow="var(--card-shadow)"
                  p={8}
                  borderRadius="var(--border-radius)"
                >
                  <Flex justifyContent="center" alignItems="center" p={6}>
                    <CheckIcon fontSize="32px" color="brand.600" />
                  </Flex>
                  <Text textAlign="center" fontWeight="bold" mb={4}>
                    More features as you grow
                  </Text>
                  <Text textAlign="center" color="gray.500">
                    It is free to get started. We offer various services to grow
                    your business as you need them.
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  boxShadow="var(--card-shadow)"
                  p={8}
                  borderRadius="var(--border-radius)"
                >
                  <Flex justifyContent="center" alignItems="center" p={6}>
                    <CheckIcon fontSize="32px" color="brand.600" />
                  </Flex>
                  <Text textAlign="center" fontWeight="bold" mb={4}>
                    Corporate business
                  </Text>
                  <Text textAlign="center" color="gray.500">
                    We help you reach out to corporations who are looking for
                    team building and workshop events
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  boxShadow="var(--card-shadow)"
                  p={8}
                  borderRadius="var(--border-radius)"
                >
                  <Flex justifyContent="center" alignItems="center" p={6}>
                    <CheckIcon fontSize="32px" color="brand.600" />
                  </Flex>
                  <Text textAlign="center" fontWeight="bold" mb={4}>
                    Build a community
                  </Text>
                  <Text textAlign="center" color="gray.500">
                    It is all about connecting like-minded individuals together.
                  </Text>
                </Flex>
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

export const getServerSideProps = async (context) => {
  //API request

  return {
    props: {
      data: null,
    },
  };
};
