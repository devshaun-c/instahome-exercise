import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import ActivityPlaceholderCard from "../Cards/ActivityPlaceholderCard";

const useStyles = createUseStyles({});

const ActivitiesPlaceholder = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);

  const list = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <Section h="100%">
      <Grid
        pt={8}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={3}
        rowGap={7}
      >
        {list.length > 0 &&
          list.map((x, index) => <ActivityPlaceholderCard key={index} />)}
      </Grid>
    </Section>
  );
};

export default ActivitiesPlaceholder;
