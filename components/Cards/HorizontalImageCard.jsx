import React from "react";
import { Avatar, Badge, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Image from "next/image";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    padding: "16px 24px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
    // alignItems: "center",
  },
});

const HorizontalImageCard = ({
  title,
  width,
  subtitle,
  image,
  bg,
  alt,
  badgeObj,
  children,
  action,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={classes.card}
      bg={bg || "white"}
      // minW={width}
      maxW={width}
      cursor={action ? "pointer" : "default"}
    >
      <Box w="100%" borderRadius="8px" overflow="hidden">
        <Image
          src={image}
          alt={alt}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
        />
      </Box>
      <Box ml="6">
        <Text fontWeight="bold">
          {title}
          {badgeObj && (
            <Badge ml="4" colorScheme={badgeObj.color}>
              {badgeObj.text}
            </Badge>
          )}
        </Text>
        <Text fontSize="sm">{subtitle}</Text>
        <Box marginTop="16px">{children}</Box>
      </Box>
    </Box>
  );
};

export default HorizontalImageCard;
