import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Container from "../components/Page/Container";

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
    <Container>
      <div className={classes.contentWrapper}>
        <Text>We are currently adding more content to our website.</Text>
      </div>
    </Container>
  );
};

export default MaintenancePage;
