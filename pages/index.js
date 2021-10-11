import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import { shuffle } from "../utils/functions";
import EnquiryForm from "../components/EnquiryPage/EnquiryForm";
import img from "../public/static/images/explore.jpg";
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
      <Flex w="100%" flexDirection={["column", "column", "row"]}>
        <Box
          w={["100%", "100%", "50%"]}
          h={["100px", "100px", "auto"]}
          className={classes.imageSection}
          backgroundImage={img}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            position="absolute"
            top="16px"
            left="5%"
            color="white"
            fontFamily="var(--title-font)"
            fontSize="x-large"
          >
            AfterWork
          </Text>
          {false && (
            <Box
              position="absolute"
              w="80%"
              margin="auto"
              color="white"
              borderRadius="var(--border-radius)"
              p={4}
            >
              <Text fontSize="md" mb={4}>
                Why be a partner?
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckIcon} />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          )}
        </Box>
        <EnquiryForm />
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
