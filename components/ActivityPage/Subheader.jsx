import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    margin: "4px 0 16px 0",
  },
  lineStyle: {
    width: "6px",
    height: "20px",
    marginRight: "12px",
    borderRadius: "4px",
  },
});

const Subheader = (props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.wrapper}>
      <Box className={classes.lineStyle} backgroundColor="primary"></Box>
      <Text fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </div>
  );
};

export default Subheader;
