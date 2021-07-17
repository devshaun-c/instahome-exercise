import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {},
  },
});

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    // router.push("/maintenancepage");
  }, []);

  return (
    <Container>
      <div className={classes.contentWrapper}>
        <Sidebar />
        <Text>Home page</Text>
      </div>
    </Container>
  );
};

export default Home;
