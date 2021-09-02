import React from "react";
import { Button, useBreakpointValue } from "@chakra-ui/react";

const StandardButton = (props) => {
  const {
    children,
    isLoading = false,
    loadingText = "",
    onClick,
    variant,
    colorScheme,
    leftIcon,
    rightIcon,
    size = "md",
    ...others
  } = props;

  // const buttonSize = useBreakpointValue(["md", "md", "md"]);

  return (
    <Button
      size={size}
      isLoading={isLoading}
      loadingText={loadingText}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      variant={variant}
      onClick={onClick}
      fontSize={["xs", "xs", "sm"]}
      _focus={{ outline: "0" }}
      {...others}
      // _hover={{
      //   filter: variant == "outline" ? "none" : "brightness(90%)",
      //   _disabled: { bg: "default" },
      // }}
    >
      {children}
    </Button>
  );
};

export default StandardButton;
