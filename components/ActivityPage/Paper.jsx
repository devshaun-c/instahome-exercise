import React from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  paper: {
    // padding: "24px 32px",
    // background: "white",
    borderRadius: "var(--border-radius)",
  },
});

const Paper = (props) => {
  const classes = useStyles();
  const { children, bgColor = "white", ...others } = props;

  return (
    <Box
      className={classes.paper}
      p={["24px 16px", "24px 32px"]}
      background={bgColor}
      {...others}
    >
      {children}
    </Box>
  );
};

export default Paper;
