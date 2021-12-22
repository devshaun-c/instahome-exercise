import React, { useState, useEffect, useRef } from "react";
import { Box, Text, CircularProgress, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import { shuffle } from "../utils/functions";
import { CheckIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
    },
  },
  imageSection: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "40px 0",
    position: "relative",

    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  },
});

const Home = (props) => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();
  const [data, setData] = useState([]);

  const dataFromServer = JSON.parse(props.data);

  useEffect(() => {
    setTimeout(() => {
      router.push("/partner");
    }, 2000);
  }, []);

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Partner Enquiry",
        description: "",
      }}
      showNav={true}
    >
      <Flex
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          isIndeterminate
          color="brand.500"
          size="120px"
          thickness="6px"
        />
        <Text mt={4}>Loading content...</Text>
      </Flex>
    </Page>
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
