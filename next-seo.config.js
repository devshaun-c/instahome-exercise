const title = "gojisho";
const description = "gojisho";

const SEO = {
  title,
  description,
  canonical: "https://gojisho.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://gojisho.com",
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
    handle: "@gojisho",
    site: "@gojisho",
    cardType: "summary_large_image",
  },
};

export default SEO;
