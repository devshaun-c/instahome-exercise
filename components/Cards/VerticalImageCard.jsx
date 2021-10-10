import React from "react";
import { Box, Text, Badge, Link } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { BADGES } from "../../constants/badges";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "var(--border-radius)",
    boxShadow: "var(--card-shadow)",
  },
});

const VerticalImageCard = (props) => {
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
    alt,
    url,
    action,
    ...others
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
      badgeObj = { color: "gray", text: badgeType };
      break;
  }

  return (
    <Link
      h={height}
      className={classes.card}
      bg={bg || "white"}
      maxWidth={width}
      href={url}
      cursor={url ? "pointer" : "default"}
      _hover={{ outline: "none" }}
      rel="noopener,noreferrer"
      // target="_blank"
      {...others}
    >
      <Box
        minH={["150px", "200px"]}
        overflow="hidden"
        borderRadius="8px 8px 0 0"
        position="relative"
      >
        <Image
          src={image || placeholderImg}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box p="8px 16px 16px 16px">
        {badgeObj && (
          <Badge mb={[1, 2]} colorScheme={badgeObj.color} fontSize="0.6em">
            {badgeObj.text}
          </Badge>
        )}
        <Text fontWeight="bold" fontSize="md" isTruncated>
          {title}
        </Text>
        <Text fontSize="sm" isTruncated>
          {subtitle}
        </Text>
        <Box marginTop="16px">
          <Text fontSize="sm" noOfLines={[2, 3, 3]}>
            {text}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default VerticalImageCard;
