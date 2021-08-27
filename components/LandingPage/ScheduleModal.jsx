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
  Button,
  Link,
  Progress,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { GetAllPartnerSchedules } from "../../lib/firebase";
import { convertFirebaseTimestamp, GetTimeSummary } from "../../lib/utils";
import { CalendarIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  cardButton: {
    background: "white",
    color: " var(--primary-color)",
    border: "1px solid var(--primary-color)",
    borderRadius: "var(--border-radius)",
    textAlign: "center",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "bold",
  },
});

const ScheduleModal = (props) => {
  const classes = useStyles();
  const { isOpen, handleToggle, activity } = props;
  const [schedules, setSchedules] = useState([]);
  const [noDates, setNoDates] = useState(false);

  const { activityName, activityId, partnerId, defaultPrice, locationMaps } =
    activity;

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
        activityId
      );
      if (scheduleFromDb) {
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
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent ml={2} mr={2}>
        <ModalHeader>
          <Text>{activityName}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={8}>
            <Flex mb={1}>
              <Text fontSize="xs" width="30%">
                Organizer
              </Text>
              <Text fontSize="xs">{partnerId}</Text>
            </Flex>
            <Flex mb={1}>
              <Text fontSize="xs" width="30%">
                Price
              </Text>
              <Text fontSize="xs">{`RM ${defaultPrice}`}</Text>
            </Flex>
            <Flex mb={1}>
              <Text fontSize="xs" width="30%">
                Location
              </Text>
              <Text fontSize="xs">{locationMaps}</Text>
            </Flex>
          </Box>

          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <CalendarIcon />
              <Text fontSize="sm" ml={2}>
                Current Schedule
              </Text>
            </Flex>
            <Link
              className={classes.cardButton}
              href={url}
              cursor={url ? "pointer" : "default"}
              _hover={{ outline: "none" }}
              rel="noopener,noreferrer"
              position="relative"
            >
              See Details
            </Link>
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
            </Box>
          ) : noDates ? (
            <Text fontSize="sm" mt={4}>
              See activity details for more information on schedule
            </Text>
          ) : (
            <Progress size="xs" isIndeterminate mt={4} colorScheme="brand" />
          )}
        </ModalBody>

        <ModalFooter>
          <Box></Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleModal;
