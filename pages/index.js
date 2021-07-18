import React, { useState, useEffect } from "react";
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
      <div className={classes.contentWrapper}></div>
    </Container>
  );
};

export default Home;
