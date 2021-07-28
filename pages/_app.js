import "../styles/globals.css";
import "../styles/theme.styles.css";
import "../styles/daypickerstyles.css";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navigations/Navbar";
import AlwaysOnTop from "../components/Page/AlwaysOnTop";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginTop: "64px",
    width: "100%",
    "@media screen and (max-width: 1000px)": {},
  },
});

const theme = extendTheme({
  colors: {
    primary: "teal",
    primaryMedium: "#f18183",
    primaryLight: "#ffd9d9",
    secondary: "",
    highlight: "",
  },
  fonts: {
    body: "Montserrat, Comfortaa, system-ui, sans-serif",
    heading: "Raleway,Montserrat,Comfortaa,Georgia, serif",
    mono: "Montserrat,Comfortaa, Menlo, monospace",
  },
  components: {
    Button: {
      baseStyle: {
        // ...define your base styles
        // background: "primary",
        // color: "white",
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
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
      <div className={classes.main}>
        <Navbar />
        <div className={classes.content}>
          <Component {...pageProps} />
        </div>
        <AlwaysOnTop text="Hello" left="5%" />
      </div>
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
