import { Box } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stickyDiv: {
    position: "sticky",
    top: 60,
    background: "white",
    // boxShadow: "0 0 2px 0 rgb(46 62 72 / 12%), 0 2px 4px 0 rgb(46 62 72 / 12%)",
  },
  bottom: {
    bottom: 0,
  },
});

const StickyBox = (props) => {
  const { children, position, onTopAll, ...params } = props;
  const classes = useStyles();

  return (
    <Box
      zIndex={onTopAll ? 900 : 500}
      className={`${classes.stickyDiv} ${
        position === "bottom" ? classes.bottom : ""
      }`}
      {...params}
    >
      {children}
    </Box>
  );
};

export default StickyBox;
