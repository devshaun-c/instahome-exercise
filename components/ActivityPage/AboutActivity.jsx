import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { EditorState, convertFromRaw } from "draft-js";
import { convertToHTML } from "draft-convert";
import Subheader from "./Subheader";
import Subsection from "./Subsection";

const useStyles = createUseStyles({});

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
    <Subsection title="About" {...others}>
      <Box fontSize="sm">
        <div
          dangerouslySetInnerHTML={{
            __html: convertedContent,
          }}
        />
      </Box>
    </Subsection>
  );
};

export default AboutActivity;
