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
    padding: "4px",
    borderRadius: "8px",
    background: "",
  },
  imgWrapper: {
    width: "20px",
    marginRight: "8px",
  },
});

const BuyMeCoffee = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contentWrapper} bg="white">
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/gojisho"
        rel="noopener noreferrer"
      >
        <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" />
        {/* <Box display="flex" alignItems="center">
          <div className={classes.imgWrapper}>
            <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" />
          </div>
          <Text fontSize="xs" color="black">
            Buy me a Coffee
          </Text>
        </Box> */}
      </a>
    </Box>
  );
};

export default BuyMeCoffee;
