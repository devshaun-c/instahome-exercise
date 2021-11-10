import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    width: "90%",
    margin: "auto",
    maxWidth: "var(--max-width)",
    position: "relative",
  },
});

const Container = (props) => {
  const { children, fullView } = props;
  const classes = useStyles();

  return <div className={fullView ? null : classes.container}>{children}</div>;
};

export default Container;
