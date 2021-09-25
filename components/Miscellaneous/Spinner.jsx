import { Box } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  spinner: {
    left: "50%",
    top: "50%",
    position: "absolute",
    zIndex: "19 !important",
    animation: "loading-bar-spinner 400ms linear infinite",
  },
  spinnerIcon: {
    border: "solid 2px transparent",
    borderRadius: "50%",
  },
});

const getSize = { sm: 24, md: 40, lg: 50 };

const Spinner = (props) => {
  const { size, color = "white" } = props;
  const classes = useStyles();

  const renderSize = getSize[size || "md"];

  return (
    <Box
      className={classes.spinner}
      marginLeft={`-${renderSize / 2}px`}
      marginTop={`-${renderSize / 2}px`}
    >
      <Box
        className={classes.spinnerIcon}
        width={`${renderSize}px`}
        height={`${renderSize}px`}
        borderTopColor={`${color} !important`}
        borderLeftColor={`${color} !important`}
      ></Box>
    </Box>
  );
};

export default Spinner;
