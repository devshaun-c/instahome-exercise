import React from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
    padding: "24px",
  },
});

const SquareCard = ({ width, height = "100%", bg, children, action }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={classes.card}
      bg={bg || "white"}
      minHeight={height}
      maxHeight={height}
      minWidth={width}
      maxWidth={width}
      onClick={action}
      cursor={action ? "pointer" : "default"}
    >
      {children}
    </Box>
  );
};

export default SquareCard;
