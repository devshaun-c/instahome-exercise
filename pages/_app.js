import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
  },
  content: {
    marginLeft: "300px",
    width: "100%",
    "@media screen and (max-width: 1000px)": {
      marginLeft: "0",
    },
  },
});

const theme = extendTheme({
  colors: {
    primary: "#D22326",
    primaryMedium: "#f18183",
    primaryLight: "#ffd9d9",
    secondary: "",
    highlight: "",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Button: {
      baseStyle: {
        // ...define your base styles
        background: "primary",
        color: "white",
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
        base: {},
        secondary: {
          //...define other variants
        },
        outline: {
          background: "white",
          borderColor: "primary",
          color: "primary",
          focus: "none",
        },
      },
      defaultProps: {
        // Then here we set the base variant as the default
        variant: "base",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <ChakraProvider theme={theme}>
      <div className={classes.main}>
        <Sidebar />
        <div className={classes.content}>
          <Component {...pageProps} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
