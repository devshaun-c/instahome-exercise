import React from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Subheader from "./Subheader";

const useStyles = createUseStyles({});

const Subsection = (props) => {
  const classes = useStyles();
  const { title, children } = props;

  return (
    <Box alignItems="center" pt={6} pb={6}>
      <Subheader title={title} />
      {children}
    </Box>
  );
};

export default Subsection;
