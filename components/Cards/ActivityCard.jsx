import React, { useState } from "react";
import { Box, Text, Badge, Link, Flex, Button } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import placeholderImg from "../../public/static/images/placeholder.png";
import Image from "next/image";
import { BADGES } from "../../constants/badges";
import { CalendarIcon } from "@chakra-ui/icons";
import ScheduleModal from "../LandingPage/ScheduleModal";
import { ACTIVITY_TYPE } from "../../constants/activity";
import { BsCameraVideo, BsGeoAlt } from "react-icons/bs";

const useStyles = createUseStyles({
  activityTitle: {
    "&:hover": {
      color: "var(--primary-color)",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "var(--border-radius)",
  },
  cardButton: {
    background: "white",
    color: " var(--primary-color)",
    border: "1px solid var(--primary-color)",
    borderRadius: "var(--border-radius)",
    textAlign: "center",
    padding: "8px 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  scheduleButton: {
    position: "absolute",
    top: "124px",
    right: "16px",
    borderRadius: "50%",
    background: "white",
    width: "48px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "var(--card-shadow)",
    color: "darkgray",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },
});

const ActivityCard = (props) => {
  const classes = useStyles(props);
  const { width, badgeType, activity } = props;
  const [scheduleOpen, setScheduleOpen] = useState(false);

  var badgeObj = null;
  switch (badgeType) {
    case BADGES.new:
      badgeObj = { color: "green", text: "new" };
      break;

    case BADGES.popular:
      badgeObj = { color: "purple", text: "Popular" };
      break;

    case BADGES.featured:
      badgeObj = { color: "red", text: "Featured" };
      break;

    default:
      badgeObj = { color: "gray", text: badgeType };
      break;
  }

  const {
    activityName,
    activityId,
    coverImage,
    shortSummary,
    partnerId,
    orgName,
    defaultPrice,
    locationDescription,
    locationMaps,
    type,
    tags,
  } = activity;

  const url = `/activity/${partnerId}/${activityId}`;

  return (
    <Box
      h={["380px", "420px"]}
      className={classes.card}
      bg="white"
      maxWidth={width}
      position="relative"
      boxShadow={["none", "var(--card-shadow)"]}
    >
      <Box
        minH={["150px", "150px"]}
        overflow="hidden"
        borderRadius="8px 8px 0 0"
        position="relative"
      >
        <Image
          src={coverImage[0].url || placeholderImg}
          alt={coverImage[0].name}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={coverImage[0].url}
        />
      </Box>
      <Flex
        h="100%"
        p="16px"
        paddingTop="24px"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Link
            className={classes.activityTitle}
            href={url}
            cursor={url ? "pointer" : "default"}
            _hover={{ outline: "none" }}
            rel="noopener,noreferrer"
            position="relative"
            target="_blank"
          >
            <Text fontWeight="bold" fontSize="md" isTruncated>
              {activityName}
            </Text>
          </Link>

          {type === ACTIVITY_TYPE.inPerson ? (
            <Flex alignItems="center">
              <BsGeoAlt color="grey" fontSize="16px" />
              <Text fontSize="xs" isTruncated color="grey" ml={2}>
                {locationMaps}
              </Text>
            </Flex>
          ) : (
            <Flex alignItems="center">
              <BsCameraVideo color="grey" fontSize="16px" />
              <Text fontSize="xs" isTruncated color="grey" ml={2}>
                Online activity
              </Text>
            </Flex>
          )}

          <Box marginTop="16px">
            <Text fontSize="xs" noOfLines={[2, 3, 3]}>
              {shortSummary}
            </Text>
          </Box>
        </Box>
        <Flex flexDirection="column">
          <Flex justifyContent="space-between">
            <Text fontSize="xs" fontWeight="bold">
              By {orgName}
            </Text>
            {/* <Text>{`RM ${defaultPrice}`}</Text> */}
          </Flex>
          {/* <Link
            className={classes.cardButton}
            href={url}
            cursor={url ? "pointer" : "default"}
            _hover={{ outline: "none" }}
            rel="noopener,noreferrer"
            position="relative"
          >
            Check it out
          </Link> */}
        </Flex>
      </Flex>

      <Box
        className={classes.scheduleButton}
        onClick={() => setScheduleOpen(true)}
      >
        <CalendarIcon />
      </Box>

      <ScheduleModal
        isOpen={scheduleOpen}
        handleToggle={setScheduleOpen}
        activity={activity}
      />
    </Box>
  );
};

export default ActivityCard;
