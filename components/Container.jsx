import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Head from "next/head";

const useStyles = createUseStyles({
  container: {},
  main: {
    width: "90%",
    maxWidth: "1200px",
    margin: "32px auto",
    padding: "32px 16px",
    "@media screen and (max-width: 800px)": {
      margin: "32px 0",
      width: "100%",
      padding: "32px 0",
    },
  },
});

const Container = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const classes = useStyles();

  const meta = {
    title: "Gojisho - All things Japanese",
    webUrl: "https://gojisho.com",
    description: `Japanese learning resources`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.webUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gojisho" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Container;
