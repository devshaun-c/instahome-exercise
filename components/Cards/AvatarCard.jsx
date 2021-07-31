import React from "react";
import { Avatar, Badge, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    padding: "16px 24px",
    alignItems: "center",
    borderRadius: "var(--border-radius)",
    boxShadow: "var(--card-shadow)",
  },
});

const AvatarCard = ({ title, bg, subtitle, width, avatar, badgeObj }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.card} bg={bg || "white"} maxWidth={width}>
      <Avatar src={avatar} />
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
      </Box>
    </Box>
  );
};

export default AvatarCard;
