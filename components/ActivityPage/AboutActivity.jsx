import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { EditorState, convertFromRaw } from "draft-js";
import { convertToHTML } from "draft-convert";

const useStyles = createUseStyles({
  aboutSection: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
    borderRadius: "var(--border-radius)",
  },
});

const AboutActivity = (props) => {
  const classes = useStyles();
  const { aboutActivity, ...others } = props;

  var convertedContent = "";
  if (aboutActivity) {
    convertedContent = convertToHTML(
      EditorState.createWithContent(
        convertFromRaw(JSON.parse(aboutActivity))
      ).getCurrentContent()
    );
  }

  return (
    <Box className={classes.aboutSection} {...others}>
      <Text fontSize="sm" fontWeight="bold">
        About
      </Text>
      <Box mt={4} mb={6} fontSize="sm">
        <div
          dangerouslySetInnerHTML={{
            __html: convertedContent,
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutActivity;
