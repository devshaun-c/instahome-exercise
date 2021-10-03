import React from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Subheader from "./Subheader";

const useStyles = createUseStyles({});

const Subsection = (props) => {
  const classes = useStyles();
  const { title, children } = props;

  return (
    <Box alignItems="center" mt={6} mb={4}>
      <Subheader title={title} />
      {children}
    </Box>
  );
};

export default Subsection;
