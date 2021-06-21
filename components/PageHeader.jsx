import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  header: {
    paddingBottom: "32px",
    "@media screen and (max-width: 800px)": {
      padding: "0 16px 32px 16px",
    },
  },
  headerTitle: {
    fontSize: "32px",
    fontWeight: "bold",
  },
});

const PageHeader = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { title, subtitle, description } = props;

  return (
    <div className={classes.header}>
      <Box display="flex" justifyContent="space-between">
        <div>
          <Text as="h1" className={classes.headerTitle}>
            {title}
          </Text>
          <Text color="grey">{subtitle}</Text>
        </div>
      </Box>
      <Box marginTop="16px">
        <Text fontSize="xs">{description}</Text>
      </Box>
    </div>
  );
};

export default PageHeader;
