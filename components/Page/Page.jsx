import React from "react";
import Head from "next/head";
import Navbar from "../Navigations/Navbar";
import { Box } from "@chakra-ui/react";

const Page = (props) => {
  const {
    children,
    alwaysShowNav = false,
    pageMeta = { title: "", description: "" },
  } = props;

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="shortcut icon" href="/static/images/sushi.svg" />
        <meta content={pageMeta.description} name="description" />
        {/* <meta property="og:url" content={`${pageMeta.webUrl}${router.asPath}`} /> */}
        {/* <meta property="og:type" content={pageMeta.type} /> */}
        {/* <meta property="og:site_name" content={pageMeta.name} /> */}
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:title" content={pageMeta.title} />
        {/* <meta property="og:image" content={pageMeta.image} /> */}
        <meta name="twitter:title" content={pageMeta.title} />
        <meta name="twitter:description" content={pageMeta.description} />
      </Head>
      <div>
        <Navbar alwaysVisible={alwaysShowNav} />
        <Box pt={alwaysShowNav ? "60px" : "0px"}>{children}</Box>
      </div>
    </>
  );
};

export default Page;
