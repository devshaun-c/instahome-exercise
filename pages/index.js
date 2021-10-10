import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Hero from "../components/Sections/Hero";
import Newsletter from "../components/Sections/Newsletter";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import { shuffle } from "../utils/functions";

const useStyles = createUseStyles({
  home: {
    position: "relative",
  },
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
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
    if (dataFromServer) {
      setData([...shuffle(dataFromServer)]);
    }
  }, []);

  const scrollToPos = () => scrollRef.current.scrollIntoView();

  return (
    <Page
      pageMeta={{
        title: "Title - Summary",
        description: "",
      }}
      alwaysVisible
    >
      <div className={classes.home}>
        <Hero />

        <Newsletter />
      </div>
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
