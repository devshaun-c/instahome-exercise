import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contentContainer: {
    width: "90%",
    maxWidth: "1200px",
    margin: "32px auto",
    padding: "32px 16px 0 16px",
    "@media screen and (max-width: 800px)": {
      margin: "32px 0",
      width: "100%",
      padding: "32px 0",
    },
  },
});

const ContentContainer = (props) => {
  const classes = useStyles();
  return <div className={classes.contentContainer}>{props.children}</div>;
};

export default ContentContainer;
