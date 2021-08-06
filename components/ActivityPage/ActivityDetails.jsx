import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Paper from "./Paper";
import {
  BsCameraVideo,
  BsClock,
  BsPeople,
  BsPersonCheck,
  BsGeo,
  BsTag,
} from "react-icons/bs";

const useStyles = createUseStyles({
  activityDetails: {},
});

const ActivityDetails = (props) => {
  const classes = useStyles();
  const { activityDetails, duration, ...others } = props;

  const {
    type,
    ageRestriction,
    participantLimit,
    locationDescription,
    locationMaps,
    defaultPrice,
  } = activityDetails;

  return (
    <Box className={classes.activityDetails} {...others}>
      <Text fontSize="md" fontWeight="bold">
        Activity Details
      </Text>
      <Flex align="center" mt={4}>
        <BsClock fontSize="24px" color="lightgrey" />
        <Box fontSize="xs" ml={4}>
          <Text>{duration}</Text>
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
              : "No age limit"}
          </Text>
        </Box>
      </Flex>
      <Flex align="center" mt={4}>
        {type === "inPerson" ? (
          <>
            <BsGeo fontSize="24px" color="lightgrey" />
            <Box fontSize="xs" ml={4}>
              <Text> {locationDescription || ""}</Text>
              <Text>{locationMaps || "TBC"}</Text>
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
