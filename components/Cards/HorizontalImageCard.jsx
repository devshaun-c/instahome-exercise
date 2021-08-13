import React from "react";
import { Box, Text, Badge } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { BADGES } from "../../constants/badges";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    borderRadius: "var(--border-radius)",
    boxShadow: "var(--card-shadow)",
  },
});

const HorizontalImageCard = (props) => {
  const classes = useStyles(props);
  const {
    width,
    title,
    height = "100%",
    bg,
    subtitle,
    image,
    badgeType,
    text,
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
      flexDir={["column", "column", "row"]}
    >
      <Box
        minH={["150px", "150px"]}
        w="100%"
        m={[0, 0, "16px"]}
        overflow="hidden"
        borderRadius={["8px 8px 0 0", "8px 8px 0 0", "8px"]}
        position="relative"
      >
        <Image
          src={image || placeholderImg}
          alt={alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image || placeholderImg}
        />
      </Box>
      <Box p="16px">
        <Box display="flex" alignItems="center">
          <Text fontWeight="bold" fontSize="md" isTruncated>
            {title}
          </Text>
          {badgeObj && (
            <Badge ml={4} colorScheme={badgeObj.color} fontSize="0.6em">
              {badgeObj.text}
            </Badge>
          )}
        </Box>
        <Text fontSize="xs" isTruncated>
          {subtitle}
        </Text>
        <Box marginTop="16px">
          <Text fontSize="xs" noOfLines={[2, 4, 4]}>
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HorizontalImageCard;
