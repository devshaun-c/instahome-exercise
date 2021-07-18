import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@chakra-ui/react";

const useStyles = createUseStyles({
  buttonStyle: {},
});

const StandardButton = (props) => {
  const theme = useTheme();
  const {
    text = "Click",
    isLoading = false,
    loadingText = "Submitting",
    onClick = () => alert("Hi"),
    variant,
    colorScheme,
    leftIcon,
    rightIcon,
    size = "md",
  } = props;

  const classes = useStyles();
  return (
    <Button
      size={size}
      isLoading={isLoading}
      loadingText={loadingText}
      className={classes.buttonStyle}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      variant={variant}
      onClick={onClick}
      // _hover={{
      //   filter: variant == "outline" ? "none" : "brightness(90%)",
      //   _disabled: { bg: "default" },
      // }}
    >
      {text}
    </Button>
  );
};

export default StandardButton;
