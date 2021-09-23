import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../Sections/Section";
import { useTheme } from "@emotion/react";
import { BsGeoAlt } from "react-icons/bs";
import AutosizeInput from "react-input-autosize";
import LocationSelect from "../Controls/LocationSelect";
import Container from "../Page/Container";

const useStyles = createUseStyles({
  locationWrapper: {},
  locationBar: {
    position: "absolute",
    top: "20%",
    right: "0",
    background: "white",
    padding: "16px 32px",
    borderRadius: "25px",
    boxShadow: "var(--card-shadow)",
    cursor: "pointer",
    zIndex: "10",
  },
});

const LocationBar = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {} = props;
  const [location, setLocation] = useState("SGR");

  return (
    <Flex position="relative">
      <Tooltip label="More locations coming soon" bg="brand.500" hasArrow>
        <Box
          className={classes.locationBar}
          onClick={() => console.log("CLICK")}
        >
          <Flex alignItems="center" justify="flex-end">
            <BsGeoAlt
              fontSize={["md", "large"]}
              color={theme.colors.brand[600]}
            />
            <Text
              display={["none", "block"]}
              fontSize={["md", "large"]}
              fontWeight="bold"
              ml={2}
              color="grey"
            >
              Things to do near
            </Text>
            <Text
              fontSize={["md", "large"]}
              color="brand.600"
              fontWeight="bold"
              ml={2}
              textDecoration="underline"
            >
              Selangor
            </Text>
          </Flex>
        </Box>
      </Tooltip>
    </Flex>
  );
};

export default LocationBar;
