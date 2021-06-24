import React from "react";
import { createUseStyles } from "react-jss";
import { Box } from "@chakra-ui/layout";

const useStyles = createUseStyles({
  contentWrapper: {
    backgroundColor: "white",
    padding: "4px",
    borderRadius: "8px",
    marginTop: "64px",
  },
  imgWrapper: {
    width: "20px",
    marginRight: "8px",
  },
});

const BuyMeCoffee = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contentWrapper}>
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/gojisho"
        rel="noopener noreferrer"
      >
        <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" />
      </a>
    </Box>
  );
};

export default BuyMeCoffee;
