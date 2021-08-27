import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Container from "../Page/Container";

const useStyles = createUseStyles({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    padding: "40px 0",
  },
});

const Section = ({ children, fullView = false, ...props }) => {
  const classes = useStyles(props);

  return (
    <Box
      className={classes.section}
      bgColor={props.bgColor}
      backgroundImage={props.bgImg}
      backgroundPosition="center"
      {...props}
    >
      <Container fullView={fullView}>{children}</Container>
    </Box>
  );
};

export default Section;
