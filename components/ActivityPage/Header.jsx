import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { getCategory } from "../../constants/activity";

const useStyles = createUseStyles({
  pageHeader: {},
});

const Header = (props) => {
  const classes = useStyles();
  const { title, type, ...others } = props;

  return (
    <Box className={classes.pageHeader} {...others}>
      <Text>{type ? getCategory(type) : ""}</Text>
      <Heading fontSize="xl">{title}</Heading>
    </Box>
  );
};

export default Header;
