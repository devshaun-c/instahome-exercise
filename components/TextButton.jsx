import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonStyle: {
    margin: "0",
    padding: "0 4px",
    height: "auto",
    fontSize: "12px",
  },
});

const TextButton = (props) => {
  const { text, onClick, color } = props;
  const classes = useStyles();
  return (
    <button className={classes.buttonStyle} onClick={onClick}>
      <Text fontSize="xs" color={color} textDecor="underline">
        {text}
      </Text>
    </button>
  );
};

export default TextButton;
