import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
import coffeeCup from "../public/static/images/bmc.png";
import sushi from "../public/static/images/sushi.svg";

const useStyles = createUseStyles({
  contentWrapper: {
    position: "fixed",
    left: "32px",
    bottom: "32px",
    padding: "4px 16px",
    borderRadius: "8px",
    background: "",
  },
  imgWrapper: {
    width: "40px",
    marginRight: "8px",
  },
});

const BuyMeCoffee = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contentWrapper} bg="whiteAlpha.800">
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/gojisho"
        rel="noopener noreferrer"
      >
        <Box display="flex" alignItems="center">
          <div className={classes.imgWrapper}>
            <img src={sushi} />
          </div>
          <Text fontSize="xs" color="black">
            Buy me a sushi?
          </Text>
        </Box>
      </a>
    </Box>
  );
};

export default BuyMeCoffee;
