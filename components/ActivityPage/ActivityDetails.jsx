import React from "react";
import { Box, Text, Flex, Link, AspectRatio } from "@chakra-ui/react";
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
      <Flex align="center" mt={4} fontSize="sm">
        {type === "inPerson" ? (
          <>
            <BsGeo fontSize="24px" color="lightgrey" />
            <Box ml={4}>
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
            <Box ml={4}>
              <Text>Online event</Text>
            </Box>
          </>
        )}
      </Flex>

      {type === "inPerson" && (
        <AspectRatio ratio={16 / 9} mt={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1132286215056!2d101.57979701475716!3d3.064390797768449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4dff4e20a07d%3A0x58aebbbff123c6d3!2sBase%20Studio!5e0!3m2!1sen!2smy!4v1632652908712!5m2!1sen!2smy"
            loading="lazy"
          />
        </AspectRatio>
      )}
    </Box>
  );
};

export default ActivityDetails;
