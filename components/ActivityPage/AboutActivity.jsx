import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Subsection from "./Subsection";
import draftToHtml from "draftjs-to-html";

const useStyles = createUseStyles({
  paragraph: {
    "& p": {
      marginBottom: "16px",
    },
  },
});

const AboutActivity = (props) => {
  const classes = useStyles();
  const { aboutActivity, ...others } = props;

  return (
    <Subsection title="About" {...others}>
      <Box fontSize="sm">
        {aboutActivity && (
          <div
            className={classes.paragraph}
            dangerouslySetInnerHTML={{
              __html: draftToHtml(JSON.parse(aboutActivity)),
            }}
          />
        )}
      </Box>
    </Subsection>
  );
};

export default AboutActivity;
