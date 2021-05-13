import Head from "next/head";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    position: "fixed",
    left: "0",
    width: "100%",
    height: "100%",
    background: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    width: "100%",
    "@media screen and (max-width: 1000px)": {
      marginLeft: "0",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>GOJISHO - Resources and community for learning Japanese</title>
        <meta
          name="description"
          content="Resources and community for learning Japanese"
        />
      </Head>

      <main className={classes.main}>
        <div className={classes.content}>
          This website is currently under maintenance.
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
