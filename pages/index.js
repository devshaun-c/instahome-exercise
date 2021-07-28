import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {},
  },
});

const Home = () => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    // router.push("/maintenancepage");
  }, []);

  return (
    <Container>
      <div className={classes.contentWrapper}>
        <Box mt={10}>TEST TEST</Box>
      </div>
    </Container>
  );
};

export default Home;
