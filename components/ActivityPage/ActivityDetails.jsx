import React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import {
  BsCameraVideo,
  BsClock,
  BsPeople,
  BsPersonCheck,
  BsGeo,
} from "react-icons/bs";
import { GetDurationText } from "../../utils/functions";

const useStyles = createUseStyles({
  activityDetails: {},
});

const searchGoogle = (e) => {
  e.preventDefault();
  const term = "SS18/3e";
  window.open("//" + "google.com/search?q=" + term, "_blank");
};

const ActivityDetails = (props) => {
  const classes = useStyles();
  const { activityDetails, ...others } = props;

  const {
    type,
    ageRestriction,
    participantLimit,
    locationDescription,
    locationMaps,
    durationInSeconds,
  } = activityDetails;

  return (
    <Box className={classes.activityDetails} {...others}>
      <Flex align="center" mt={4}>
        <BsClock fontSize="24px" color="lightgrey" />
        <Box fontSize="xs" ml={4}>
          <Text>{GetDurationText(durationInSeconds)}</Text>
        </Box>
      </Flex>
      <Flex align="center" mt={4}>
        <BsPeople fontSize="24px" color="lightgrey" />
        <Box fontSize="xs" ml={4}>
          <Text>
            {participantLimit > 0
              ? `Max. participants : ${participantLimit}`
              : "No participant limit"}
          </Text>
        </Box>
      </Flex>
      <Flex align="center" mt={4}>
        <BsPersonCheck fontSize="24px" color="lightgrey" />
        <Box fontSize="xs" ml={4}>
          <Text>
            {ageRestriction > 0
              ? `Age group : ${ageRestriction} and above`
              : "For any ages"}
          </Text>
        </Box>
      </Flex>
      <Flex align="center" mt={4}>
        {type === "inPerson" ? (
          <>
            <BsGeo fontSize="24px" color="lightgrey" />
            <Box fontSize="xs" ml={4}>
              <Text> {locationDescription || ""}</Text>

              <Link
                href={`//google.com/search?q=${locationMaps}`}
                cursor="pointer"
                _hover={{ outline: "none" }}
                textDecoration="underline"
                rel="noopener,noreferrer"
                position="relative"
                target="_blank"
              >
                <Text>{locationMaps || "TBC"}</Text>
              </Link>
            </Box>
          </>
        ) : (
          <>
            <BsCameraVideo fontSize="24px" color="lightgrey" />
            <Box fontSize="xs" ml={4}>
              <Text>Online event</Text>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default ActivityDetails;
