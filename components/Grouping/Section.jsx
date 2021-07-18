import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 0 80px 0",
  },
});

const Section = ({ children, ...props }) => {
  const classes = useStyles(props);

  return (
    <Box
      className={classes.section}
      bgColor={props.bgColor}
      backgroundImage={props.bgImg}
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
