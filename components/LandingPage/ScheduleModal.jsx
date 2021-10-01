import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Text,
  Box,
  Flex,
  Link,
  Button,
  Progress,
  Avatar,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { GetAllPartnerSchedules } from "../../utils/firebase";
import {
  convertFirebaseTimestamp,
  GetTimeSummary,
} from "../../utils/functions";
import { CalendarIcon } from "@chakra-ui/icons";
import StandardButton from "../Buttons/StandardButton";
import Image from "next/image";

const useStyles = createUseStyles({
  cardButton: {
    background: "var(--primary-color)",
    color: "white",
    borderRadius: "var(--border-radius)",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "32px",
  },
});

const ScheduleModal = (props) => {
  const classes = useStyles();
  const { isOpen, handleToggle, showClose = true, activity } = props;
  const [schedules, setSchedules] = useState([]);
  const [noDates, setNoDates] = useState(false);
  const [showHasMore, setShowHasMore] = useState(false);

  const {
    activityName,
    activityId,
    orgName,
    partnerId,
    defaultPrice,
    locationMaps,
    coverImage,
  } = activity;

  console.log(activity);

  const url = `activity/${partnerId}/${activityId}`;

  useEffect(() => {
    if (isOpen && activity) {
      setTimeout(() => {
        GetActiveSchedules();
      }, 500);
    }

    async function GetActiveSchedules() {
      const scheduleFromDb = await GetAllPartnerSchedules(
        partnerId,
        activityId,
        6
      );
      if (scheduleFromDb) {
        if (scheduleFromDb > 6) {
          //Removes the 6th element so that we can show "More dates available"
          //Only 5 elements will be shown at Modal
          scheduleFromDb.pop();
          setShowHasMore(true);
        }
        setSchedules(scheduleFromDb);
      } else {
        setNoDates(true);
      }
    }
  }, [isOpen]);

  const closeModal = () => {
    setSchedules([]);
    handleToggle(false);
  };

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={closeModal}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent ml={2} mr={2}>
        <ModalHeader>
          <Flex
            flexDirection={["column-reverse", "row"]}
            justifyContent={["center", "space-between"]}
            alignItems="center"
          >
            <Text>{activityName}</Text>
            <Avatar src={coverImage[0].url} size="lg" mb={[2, 0]} />
          </Flex>
        </ModalHeader>
        {showClose && <ModalCloseButton />}
        <ModalBody>
          <Box mb={8}>
            <Flex mb={1}>
              <Text fontSize="sm" width="50%">
                Organizer
              </Text>
              <Text fontSize="sm">{orgName}</Text>
            </Flex>
            <Flex mb={1}>
              <Text fontSize="sm" width="50%">
                Price
              </Text>
              <Text fontSize="sm">{`RM ${defaultPrice}`}</Text>
            </Flex>
            <Flex mb={1}>
              <Text fontSize="sm" width="50%">
                Location
              </Text>
              <Text fontSize="sm">{locationMaps}</Text>
            </Flex>
          </Box>

          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <CalendarIcon />
              <Text fontSize="sm" ml={2}>
                Current Schedule
              </Text>
            </Flex>
          </Flex>
          {schedules.length > 0 ? (
            <Box mt={4}>
              {schedules.map((schedule) => (
                <Flex
                  key={schedule.scheduleId}
                  mb={1}
                  boxShadow="var(--card-shadow)"
                  p={2}
                >
                  <Text fontSize="sm" width="64px">
                    {moment(
                      convertFirebaseTimestamp(schedule.scheduledStartDate)
                    ).format("ddd")}
                  </Text>
                  <Text fontSize="sm" width="88px">
                    {moment(
                      convertFirebaseTimestamp(schedule.scheduledStartDate)
                    ).format("D MMM")}
                  </Text>
                  <Text fontSize="sm" ml={3}>
                    {GetTimeSummary(
                      schedule.scheduledStartDate,
                      schedule.scheduledEndDate
                    )}
                  </Text>
                </Flex>
              ))}
              {showHasMore && (
                <Text textAlign="center" mt={4} fontSize={["md", "sm", "sm"]}>
                  More dates available
                </Text>
              )}
            </Box>
          ) : noDates ? (
            <Text fontSize="sm" mt={4}>
              See activity details for more information on schedule
            </Text>
          ) : (
            <Progress size="xs" isIndeterminate mt={4} colorScheme="brand" />
          )}
          <Box>
            <Link
              href={url}
              cursor={url ? "pointer" : "default"}
              _hover={{ outline: "none" }}
              rel="noopener,noreferrer"
            >
              <StandardButton colorScheme="brand" isFullWidth mt={4}>
                See Details
              </StandardButton>
            </Link>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Box></Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleModal;
