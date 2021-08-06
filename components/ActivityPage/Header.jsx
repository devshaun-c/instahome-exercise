import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  pageHeader: {},
});

const Header = (props) => {
  const classes = useStyles();
  const { title, ...others } = props;

  return (
    <Box className={classes.pageHeader} {...others}>
      <Heading fontSize={["x-large", "x-large"]}>{title}</Heading>
    </Box>
  );
};

export default Header;
