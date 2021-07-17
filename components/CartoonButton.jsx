import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const CartoonButton = (props) => {
  const { selected, text, subtext, icon, onClick } = props;
  const theme = useTheme();

  return (
    <Button
      h="100px"
      bg={selected ? theme.colors.primaryLight : "white"}
      w="100%"
      maxWidth={["100%", "80%"]}
      color={selected ? "white" : "black"}
      whiteSpace="normal"
      onClick={onClick}
      leftIcon={icon}
      boxShadow={`5px 5px ${theme.colors.primaryLight}, 5px 5px 0px 2px black`}
      border="2px solid black"
      borderRadius="10px"
      mb={4}
      _hover={{
        backgroundColor: theme.colors.primaryLight,
        boxShadow: `5px 5px ${theme.colors.primaryMedium}, 5px 5px 0px 2px black`,
        color: "black",
      }}
      _selected={{
        backgroundColor: theme.colors.primaryLight,
        boxShadow: `5px 5px ${theme.colors.primaryMedium}, 5px 5px 0px 2px black`,
        color: "black",
      }}
    >
      <Box
        display="flex"
        flexDir="column"
        w={["100%", "70%"]}
        pl="32px"
        alignItems="start"
      >
        <Text textAlign="left">{text} </Text>
        <Text fontSize="16px" mt="8px" color="grey" textAlign="left">
          {subtext}
        </Text>
      </Box>
    </Button>
  );
};

export default CartoonButton;
