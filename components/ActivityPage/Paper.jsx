import React from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  paper: {
    padding: "24px 32px",
    background: "white",
    borderRadius: "var(--border-radius)",
  },
});

const Paper = (props) => {
  const classes = useStyles();
  const { children, ...others } = props;

  return (
    <Box {...others} className={classes.paper}>
      {children}
    </Box>
  );
};

export default Paper;
