import React from "react";
import Head from "next/head";

const Page = (props) => {
  const { children, pageMeta = { title: "", description: "" } } = props;

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
      <div>{children}</div>
    </>
  );
};

export default Page;
