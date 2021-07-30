import { Box } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import Container from "./Container";

const useStyles = createUseStyles({
  stickyDiv: {
    position: "sticky",
    top: 0,
    zIndex: 500,
    boxShadow: "0 0 2px 0 rgb(46 62 72 / 12%), 0 2px 4px 0 rgb(46 62 72 / 12%)",
  },
  bottom: {
    bottom: 0,
  },
});

const StickyBox = (props) => {
  const { children, position, ...params } = props;
  const classes = useStyles();

  return (
    <Box
      className={`${classes.stickyDiv} ${
        position === "bottom" ? classes.bottom : ""
      }`}
      {...params}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default StickyBox;
