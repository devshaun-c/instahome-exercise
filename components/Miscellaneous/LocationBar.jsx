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
import NotificationModal from "../LandingPage/NotificationModal";
import CustomInput from "../Controls/CustomInput";
import CustomSelect from "../Controls/CustomSelect";
import { getAreaCollection } from "../../constants/activity";
import StandardButton from "../Buttons/StandardButton";

const useStyles = createUseStyles({
  locationWrapper: {},
  locationBar: {
    position: "absolute",
    // top: "10%",
    // right: "0",
    background: "white",
    borderRadius: "var(--border-radius)",
    // boxShadow: "var(--card-shadow)",
    cursor: "pointer",
    zIndex: "10",
  },
});

const LocationBar = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {} = props;
  const [location, setLocation] = useState("SGR");
  const [showNotification, setShowNotification] = useState(false);

  return (
    <Container>
      <Flex pt={8} pb={[0, 4, 4]}>
        <Tooltip label="More locations coming soon" bg="brand.500" hasArrow>
          <Box
            className={classes.locationBar}
            onClick={() => console.log("CLICK")}
          >
            <Flex alignItems="center" justify="flex-end">
              <BsGeoAlt
                fontSize={["md", "md", "large"]}
                color={theme.colors.brand[600]}
              />
              <Text
                display={["none", "block"]}
                fontSize={["md", "md", "large"]}
                fontWeight="bold"
                ml={2}
                color="grey"
              >
                Things to do near
              </Text>
              <Text
                fontSize={["md", "md", "large"]}
                color="brand.600"
                fontWeight="bold"
                ml={2}
                textDecoration="underline"
                onClick={() => setShowNotification(true)}
              >
                Selangor
              </Text>
            </Flex>
          </Box>
        </Tooltip>
      </Flex>
      <NotificationModal
        handleToggle={setShowNotification}
        hasClose={false}
        isOpen={showNotification}
        modalBody={
          <Box p={["16px 0", 4, 4]}>
            <Text fontSize="lg" textAlign="center" fontWeight="bold" mb={8}>
              More locations coming soon!
            </Text>
            <Text textAlign="center" mb={[2, 4, 4]}>
              We will be expanding to other cities in Malaysia and beyond. Sign
              up to our newsletter to get notified.
            </Text>
            <CustomInput placeholder="Email" mb={2} />
            <StandardButton colorScheme="brand" isFullWidth>
              Join the community!
            </StandardButton>
          </Box>
        }
      />
    </Container>
  );
};

export default LocationBar;
