import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonStyle: {
    display: "block",
    margin: "0",
    height: "auto",
    fontSize: "12px",
    "&:hover": {
      fontWeight: "bold",
    },
  },
});

const TextButton = (props) => {
  const { children, onClick, color, ...others } = props;
  const classes = useStyles();
  return (
    <button className={classes.buttonStyle} onClick={onClick}>
      <Text fontSize={["md", "sm"]} color={color} {...others}>
        {children}
      </Text>
    </button>
  );
};

export default TextButton;
