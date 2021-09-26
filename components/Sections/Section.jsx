import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Container from "../Page/Container";

const useStyles = createUseStyles({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px 0 40px 0",
    position: "relative",
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
