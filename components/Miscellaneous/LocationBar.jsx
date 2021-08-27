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
  locationBar: {
    position: "absolute",
    right: "18%",
    top: "560px",
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
    <Tooltip label="More locations coming soon" bg="primary" hasArrow>
      <Box className={classes.locationBar} onClick={() => console.log("CLICK")}>
        <Flex alignItems="center" justify="flex-end">
          <BsGeoAlt fontSize="large" color={theme.colors.primary} />
          <Text fontSize="large" fontWeight="bold" ml={2} color="grey">
            Things to do near
          </Text>
          {/* <LocationSelect
            value={location}
            options={[
              { value: "SGR", label: "Selangor" },
              { value: "PNG", label: "Penang" },
            ]}
            onChange={handleLocationChange}
          /> */}
          <Text fontSize="large" color="primary" fontWeight="bold" ml={2}>
            Selangor
          </Text>
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default LocationBar;
