import "../styles/globals.css";
import "../styles/theme.styles.css";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

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
      50: "#ffeee9",
      100: "#ffcdbd",
      200: "#ffab91",
      300: "#ff9a7a",
      400: "#ff8964",
      500: "#ff794e",
      600: "#ff6838",
      700: "#ff5722",
      800: "#e64e1f",
      900: "#cc461b",
    },
  },
  fonts: {
    body: "var(--body-font)",
    heading: "var(--heading-font)",
    title: "var(--title-font)",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "24px",
    xl: "30px",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "var(--border-radius)",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <ChakraProvider theme={theme}>
      <div className={classes.root}>
        <main className={classes.main}>
          <Component {...pageProps} />
        </main>
      </div>
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
