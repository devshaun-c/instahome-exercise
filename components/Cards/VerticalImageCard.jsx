import React from "react";
import { Avatar, Badge, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import placeholderImg from "../../public/static/images/placeholder.png";
import { BADGES } from "../../constants/badges";

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
  badgeType,
  children,
  action,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  var badgeObj = null;
  switch (badgeType) {
    case BADGES.new:
      badgeObj = { color: "green", text: "new" };
      break;

    case BADGES.popular:
      badgeObj = { color: "purple", text: "Popular" };
      break;

    case BADGES.featured:
      badgeObj = { color: "red", text: "Featured" };
      break;

    default:
      badgeObj = { color: "red", text: "" };
      break;
  }

  return (
    <Box
      className={classes.card}
      bg={bg || "white"}
      maxWidth={width}
      onClick={action}
      cursor={action ? "pointer" : "default"}
    >
      <Box w="100%" h="200px" overflow="hidden" borderRadius="8px 8px 0 0">
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
          <Badge mb="2" colorScheme={badgeObj.color} fontSize="0.6em">
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
