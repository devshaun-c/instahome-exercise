import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    width: "90%",
    margin: "auto",
    maxWidth: "1400px",
    "@media screen and (max-width: 800px)": {},
  },
});

const Container = (props) => {
  const { children, fullView } = props;
  const classes = useStyles();

  return <div className={fullView ? null : classes.container}>{children}</div>;
};

export default Container;
