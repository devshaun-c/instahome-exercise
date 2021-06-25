import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

const useStyles = createUseStyles({
  contentWrapper: {
    position: "flex",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media screen and (max-width: 800px)": {
      padding: "0 32px",
    },
  },
});

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    router.push("/maintenancepage");
  }, []);

  return <div></div>;
};

export default Home;
