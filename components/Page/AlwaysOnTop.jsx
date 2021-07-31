import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  onTop: {
    position: "fixed",
    bottom: "3%",
    zIndex: "1000",
    fontSize: "16px",
    background: "white",
    boxShadow: "var(--card-shadow)",
    borderRadius: "var(--border-radius)",
    padding: "8px 20px",
  },
});

const AlwaysOnTop = ({ text, handleClick, right, left, ...others }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? (
        <Box className={classes.onTop} right={right} left={left}>
          {text}
        </Box>
      ) : null}
    </>
  );
};

export default AlwaysOnTop;
