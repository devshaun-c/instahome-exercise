import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import Container from "../components/Container";

const useStyles = createUseStyles({
  contentWrapper: {
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "1000",
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});

const MaintenancePage = () => {
  const classes = useStyles();

  return (
    <Container title="Website currently under maintenance." description="">
      <div className={classes.contentWrapper}>
        <Text>We are currently adding more content to our website.</Text>
      </div>
    </Container>
  );
};

export default MaintenancePage;
