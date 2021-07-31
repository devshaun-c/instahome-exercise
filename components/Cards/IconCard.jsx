import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import StandardButton from "../Buttons/StandardButton";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    padding: "24px",
    borderRadius: "var(--border-radius)",
  },
});

const IconCard = ({
  icon,
  bg,
  title,
  hasShadow,
  width,
  description,
  action,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.card}
      boxShadow={hasShadow ? "0 2px 4px 0 rgb(0 0 0 / 12%)" : ""}
      bg={bg || "white"}
      maxWidth={width}
    >
      <Box w="20%" mr={1}>
        <Box
          minW="40px"
          minH="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={icon ? "" : "lightgrey"}
        >
          <Image src={icon} />
        </Box>
      </Box>

      <Box display="flex" flexDir="column" w="80%">
        <Text fontWeight="bold" fontSize="md" mb={2}>
          {title}
        </Text>
        <Text fontSize="xs" color="grey">
          {description}
        </Text>
        {action && (
          <Box display="inline-block" mt={2}>
            <StandardButton
              variant="link"
              text="learn more"
              size="sm"
              colorScheme="teal"
              onClick={action}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default IconCard;
