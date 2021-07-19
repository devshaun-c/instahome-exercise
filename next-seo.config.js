const title = "Webpage Name";
const description = "template description";

const SEO = {
  title,
  description,
  canonical: "https://xxxxxxx.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://xxxxxx.com",
    title,
    description,
    images: [
      {
        url: "",
        alt: title,
        width: 1200,
        height: 700,
      },
    ],
  },
  twitter: {
    handle: "@xxxxxx",
    site: "@xxxxxx",
    cardType: "summary_large_image",
  },
};

export default SEO;
