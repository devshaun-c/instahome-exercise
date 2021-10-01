import React from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({});

const LoadingOverlay = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);

  return (
    <Flex
      position="absolute"
      top="0"
      left="0"
      background="rgba(255,255,255,0.7)"
      w="100%"
      h="100%"
      zIndex="10"
      justifyContent="center"
      alignItems="center"
    >
      <Flex position="relative" w="100%" h="100%" justifyContent="center">
        <CircularProgress
          color="brand.700"
          isIndeterminate
          position="absolute"
          top="200px"
        />
      </Flex>
    </Flex>
  );
};

export default LoadingOverlay;
