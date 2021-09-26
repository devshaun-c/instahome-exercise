import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  Image,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { BsGeoAlt } from "react-icons/bs";
import Container from "../Page/Container";
import NotificationModal from "../LandingPage/NotificationModal";
import CustomInput from "../Controls/CustomInput";
import StandardButton from "../Buttons/StandardButton";
import locationHero from "../../public/static/images/location-hero.svg";

const useStyles = createUseStyles({
  locationWrapper: {},
  locationBar: {
    // position: "absolute",
    // top: "10%",
    // right: "0",
    background: "transparent",
    // borderRadius: "var(--border-radius)",
    // boxShadow: "var(--card-shadow)",
    cursor: "pointer",
    // zIndex: "10",
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
      <Flex pt={6} pb={[0, 4, 4]}>
        <Tooltip label="More locations coming soon" bg="brand.500" hasArrow>
          <Box className={classes.locationBar}>
            <Flex alignItems="center" justify="flex-end">
              <BsGeoAlt fontSize="24px" color={theme.colors.brand[600]} />
              <Text
                display={["none", "block"]}
                fontSize={["md", "md", "large"]}
                fontWeight="bold"
                ml={2}
                color="grey"
              >
                Things to do in
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
          <Flex flexDirection="column" p={["16px 0", 4, 4]} alignItems="center">
            <Text fontSize="lg" textAlign="center" fontWeight="bold">
              More locations coming soon!
            </Text>
            <Box h={["200px", "300px"]}>
              <Image
                src={locationHero}
                boxSize={["200px", "300px"]}
                objectFit="cover"
              />
            </Box>
            <Text textAlign="center" mb={[4, 4, 4]}>
              We will be expanding to other cities in Malaysia and beyond. Sign
              up to our newsletter to get notified.
            </Text>
            <CustomInput placeholder="Email" mb={2} size="md" />
            <StandardButton colorScheme="brand" isFullWidth>
              Join the community!
            </StandardButton>
          </Flex>
        }
      />
    </Container>
  );
};

export default LocationBar;
