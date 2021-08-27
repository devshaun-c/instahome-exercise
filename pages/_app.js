import "../styles/globals.css";
import "../styles/theme.styles.css";
import "../styles/daypickerstyles.css";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navigations/Navbar";
import AlwaysOnTop from "../components/Page/AlwaysOnTop";
import Footer from "../components/Sections/Footer";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    // marginTop: "64px",
  },
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "var(--default-font-color)",
      },
    },
  },
  colors: {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    brand: {
      50: "#FF712F",
      100: "#FF712F",
      200: "#FF712F",
      300: "#FF712F",
      400: "#FF712F",
      500: "#FF712F",
      600: "#FF712F",
      700: "#FF712F",
      800: "#FF712F",
      900: "#FF712F",
    },
  },
  fonts: {
    body: "var(--body-font)",
    heading: "var(--heading-font)",
    title: "var(--title-font)",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "var(--border-radius)",
      },
      variants: {
        base: {
          // background: "primary",
          // color: "white",
        },
        secondary: {
          // background: "secondary",
          // color: "white",
        },
        outline: {
          // background: "white",
          // borderColor: "primary",
          // color: "primary",
          // focus: "none",
        },
      },
      defaultProps: {
        // Then here we set the base variant as the default
        // variant: "base",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.main}>
          <Component {...pageProps} />
        </main>
        <Footer bgColor="whitesmoke" />
        <AlwaysOnTop text="Hello" left="5%" />
      </div>
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
