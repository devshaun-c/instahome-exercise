import React, { useState } from "react";
import { Box, Text, Badge } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../Sections/Section";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";
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

const TestCard = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    width,
    title,
    height = "500px",
    bg,
    subtitle,
    image,
    badgeType,
    children,
    action,
    alt,
  } = props;

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
      h={height}
      className={classes.card}
      bg={bg || "white"}
      maxWidth={width}
      onClick={action}
      cursor={action ? "pointer" : "default"}
    >
      <Box
        minH="200px"
        overflow="hidden"
        borderRadius="8px 8px 0 0"
        position="relative"
      >
        <Image
          src={image || placeholderImg}
          alt={alt}
          layout="fill"
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

export default TestCard;
