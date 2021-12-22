import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonStyle: {
    display: "inline",
    margin: "0",
    height: "auto",
    fontSize: "12px",
    "&:hover": {
      color: "black",
    },
  },
});

const TextButton = (props) => {
  const { children, onClick, ...others } = props;
  const classes = useStyles();
  return (
    <button className={classes.buttonStyle} onClick={onClick}>
      <Text fontSize={["md", "sm"]} {...others}>
        {children}
      </Text>
    </button>
  );
};

export default TextButton;
