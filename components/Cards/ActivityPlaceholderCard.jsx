import React, { useState } from "react";
import { Box, Text, Badge, Link, Flex, Button } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { CalendarIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "var(--border-radius)",
  },
  shimmer: {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.4) 100%,rgba(255,255,255,0) 100%)",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "-5000px 0",
    animation: "shimmerBackground 1.5s linear infinite",
  },
});

const ActivityPlaceholderCard = (props) => {
  const classes = useStyles(props);

  return (
    <Box
      h={["100%", "350px", "350px"]}
      className={classes.card}
      maxWidth="300px"
      position="relative"
    >
      <Box
        minH="150px"
        borderRadius="8px 8px 0 0"
        bg="whitesmoke"
        className={classes.shimmer}
      ></Box>
      <Box h="100%" p="16px" w="100%" paddingTop="24px">
        <Box
          bg="whitesmoke"
          width="80%"
          h="10%"
          mb={1}
          className={classes.shimmer}
        ></Box>

        <Box
          bg="whitesmoke"
          width="50%"
          h="10%"
          mb={3}
          className={classes.shimmer}
        ></Box>

        <Box
          bg="whitesmoke"
          width="100%"
          h="50%"
          mb={4}
          className={classes.shimmer}
        ></Box>

        <Box
          bg="whitesmoke"
          width="40%"
          h="10%"
          mb={1}
          className={classes.shimmer}
        ></Box>
      </Box>
    </Box>
  );
};

export default ActivityPlaceholderCard;
