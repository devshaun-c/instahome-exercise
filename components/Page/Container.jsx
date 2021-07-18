import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import Head from "next/head";

const useStyles = createUseStyles({
  container: {},
  main: {
    width: "90%",
    margin: "auto",
    maxWidth: "1200px",
    "@media screen and (max-width: 800px)": {},
  },
});

const Container = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const classes = useStyles();

  const meta = {
    title: "Website - Site short description",
    webUrl: "https://sitename.com",
    description: `site description`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="shortcut icon" href="/static/images/sushi.svg" />
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
