import React from "react";
import { Avatar, Badge, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import placeholderImg from "../../public/static/images/404-image.svg";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
    // alignItems: "center",
  },
});

const VerticalImageCard = ({
  width,
  title,
  bg,
  subtitle,
  image,
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
      maxWidth={width}
      onClick={action}
      cursor={action ? "pointer" : "default"}
    >
      <Box w="100%" h="180px" overflow="hidden" borderRadius="8px 8px 0 0">
        <Image
          src={image || placeholderImg}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
        />
      </Box>
      <Box p="4">
        {badgeObj && (
          <Badge mb="2" colorScheme={badgeObj.color}>
            {badgeObj.text}
          </Badge>
        )}
        <Text fontWeight="bold" fontSize="md">
          {title}
        </Text>
        <Text fontSize="xs">{subtitle}</Text>
        <Box marginTop="16px">{children}</Box>
      </Box>
    </Box>
  );
};

export default VerticalImageCard;
