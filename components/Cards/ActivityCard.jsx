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
    right: "16px",
    borderRadius: "50%",
    background: "white",
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
      h={["100%", "380px", "420px"]}
      className={classes.card}
      bg="white"
      maxWidth={width}
      position="relative"
      boxShadow={["none", "var(--card-shadow)"]}
      _hover={{ boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%);" }}
    >
      <Box
        minH={["150px", "150px", "150px"]}
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
        {type === ACTIVITY_TYPE.online && (
          <Text
            position="absolute"
            top={1}
            left={1}
            bg="rgba(100,100,100,0.6)"
            p="4px 6px"
            color="white"
            fontSize="xs"
            borderRadius="var(--border-radius)"
          >
            Online
          </Text>
        )}
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
          >
            <Text
              fontWeight="bold"
              fontSize={["lg", "md", "md"]}
              isTruncated
              mb={1}
            >
              {activityName}
            </Text>
          </Link>

          <Box marginTop={3}>
            <Text fontSize={["sm", "sm", "sm"]} noOfLines={[2, 3, 3]}>
              {shortSummary}
            </Text>
          </Box>
        </Box>
        <Flex flexDirection="column" mt={8}>
          {type === ACTIVITY_TYPE.inPerson ? (
            <Flex alignItems="center">
              {/* <BsGeoAlt color="grey" fontSize="16px" /> */}
              <Text
                fontSize={["md", "xs", "xs"]}
                isTruncated
                color="grey"
                // ml={2}
              >
                {locationMaps}
              </Text>
            </Flex>
          ) : (
            <Flex alignItems="center">
              <BsCameraVideo color="grey" fontSize="16px" />
              <Text fontSize={["md", "xs", "xs"]} color="grey" ml={2}>
                Online activity
              </Text>
            </Flex>
          )}
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize={["md", "xs", "xs"]} fontWeight="bold">
              By {orgName}
            </Text>
            <Text fontSize={["md", "xs", "xs"]}>{`RM ${defaultPrice}`}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box
        className={classes.scheduleButton}
        width={["64px", "48px"]}
        height={["64px", "48px"]}
        top={["112px", "128px"]}
        onClick={() => setScheduleOpen(true)}
      >
        <CalendarIcon />
      </Box>

      <ScheduleModal
        showClose={false}
        isOpen={scheduleOpen}
        handleToggle={setScheduleOpen}
        activity={activity}
      />
    </Box>
  );
};

export default ActivityCard;
