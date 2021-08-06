import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import {
  convertFirebaseTimestamp,
  ConverToDate,
  GetTimeSummary,
} from "../../lib/utils";
import StandardButton from "../Buttons/StandardButton";
import TextButton from "../Buttons/TextButton.jsx";
import CustomSelect from "../Controls/CustomSelect.jsx";
import OverlayModal from "../Page/OverlayModal";
import CustomInput from "../Controls/CustomInput.jsx";

const useStyles = createUseStyles({
  scheduleBooking: {},
  booking: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey",
    padding: "24px",
    width: "100%",
    borderRadius: "var(--border-radius)",
  },
  priceBox: {
    flexDirrection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border: "1px solid whitesmoke",
    borderRadius: "var(--border-radius)",
  },
});

const tempSchedules = [
  {
    scheduledEndDate: { seconds: 1625662800, nanoseconds: 0 },
    scheduledStartDate: { seconds: 1625662800, nanoseconds: 0 },
  },
  {
    scheduledEndDate: { seconds: 1625670000, nanoseconds: 0 },
    scheduledStartDate: { seconds: 1625865500, nanoseconds: 0 },
  },
  {
    scheduledEndDate: { seconds: 1625670000, nanoseconds: 0 },
    scheduledStartDate: { seconds: 1625865500, nanoseconds: 0 },
  },
];

const ScheduleBooking = (props) => {
  const classes = useStyles();
  const { info, schedules, ...others } = props;
  const { defaultPrice, bookingLink, activityName } = info;
  const [isOpen, setIsOpen] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState({
    name: "",
    email: "",
    dayPreference: "",
    timePreference: "",
  });

  const scheduleOptions = [];
  var allSchedules = schedules;
  allSchedules = [...allSchedules, ...tempSchedules];
  allSchedules.forEach((schedule) => {
    const date = moment(
      convertFirebaseTimestamp(schedule.scheduledStartDate)
    ).format("D MMM");

    const time = GetTimeSummary(
      schedule.scheduledStartDate,
      schedule.scheduledEndDate
    );

    const optionSummary = `${date} : ${time}`;

    if (schedule.activityId) {
      scheduleOptions.push({
        value: schedule.activityId,
        label: optionSummary,
      });
    }
  });

  const PriceBox = () => {
    return (
      <Flex
        mt={4}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        padding={2}
        border="1px solid whitesmoke"
        borderRadius="var(--border-radius)"
      >
        {defaultPrice <= 0 ? (
          <Text fontSize="lg" fontWeight="bold">
            FREE
          </Text>
        ) : (
          <Flex flexDir="column" color="teal">
            <Text fontWeight="bold" fontSize="sm" mr={1}>
              RM
            </Text>
            <Box display="flex">
              <Text fontSize="x-large" fontWeight="bold" lineHeight="1.1">
                {defaultPrice}
              </Text>
              <Text fontSize="sm" ml={1}>
                / person
              </Text>
            </Box>
          </Flex>
        )}
      </Flex>
    );
  };

  const handleNotify = (e) => {
    e.preventDefault();

    //Submit notificationDetails to Firebase (partner Object)
    setIsOpen(false);
  };

  return (
    <Box className={classes.scheduleBooking} {...others}>
      {bookingLink == "0" ? (
        <Box mt={6}>
          <Text fontSize="md" fontWeight="bold">
            Schedule & Booking
          </Text>
          <PriceBox />
          <Text mt={4} fontSize="xs">
            Our latest schedule is available in the link below
          </Text>
          <StandardButton
            colorScheme="teal"
            variant="outline"
            size="sm"
            mt={2}
            isFullWidth
            onClick={() => window.open(bookingLink, "_blank")}
          >
            Schedule and book here
          </StandardButton>
        </Box>
      ) : (
        <Box mt={6}>
          {allSchedules.length < 0 ? (
            <Flex direction="column">
              <Text fontSize="md" fontWeight="bold">
                Upcoming Sessions
              </Text>
              <Flex mt={4} flexDir="column" alignItems="flex-start">
                {allSchedules.map((schedule, index) => {
                  var isAnotherDay = true;
                  if (index > 0) {
                    const currentDate = ConverToDate(
                      allSchedules[index].scheduledStartDate
                    );
                    const previousDate = ConverToDate(
                      allSchedules[index - 1].scheduledStartDate
                    );

                    if (currentDate === previousDate) {
                      isAnotherDay = false;
                    }
                  }

                  return (
                    <Flex
                      key={index}
                      justify="space-between"
                      fontSize="sm"
                      w="100%"
                      mb={4}
                    >
                      <Box>
                        {isAnotherDay && (
                          <>
                            <Text fontWeight="bold">
                              {moment(
                                convertFirebaseTimestamp(
                                  schedule.scheduledStartDate
                                )
                              ).format("ddd")}
                            </Text>
                            <Text>
                              {moment(
                                convertFirebaseTimestamp(
                                  schedule.scheduledStartDate
                                )
                              ).format("D MMM, YYYY")}
                            </Text>
                          </>
                        )}
                      </Box>
                      <Box>
                        <Text>
                          {GetTimeSummary(
                            schedule.scheduledStartDate,
                            schedule.scheduledEndDate
                          )}
                        </Text>
                        <Text color="teal.400">5 spots left</Text>
                      </Box>
                    </Flex>
                  );
                })}
              </Flex>
              <Box fontSize="sm" mt={4} className={classes.booking}>
                <CustomSelect
                  label="Select Date"
                  defaultValue="1"
                  options={scheduleOptions}
                />
                <PriceBox />
                <StandardButton mt={4}>Book now</StandardButton>
              </Box>
            </Flex>
          ) : (
            <Box fontSize="sm" mt={4} className={classes.booking}>
              <Text fontSize="sm">
                Looks like we have not set a date for this activity yet. Show
                your interest and get updated when it is available.
              </Text>
              <PriceBox />
              <StandardButton mt={4} onClick={setIsOpen}>
                I'm Interested !
              </StandardButton>
            </Box>
          )}
        </Box>
      )}
      <Divider mt={8} />
      <Box mt={2} w="100%">
        <Text fontSize="xs">Can't find a suitable date?</Text>
        <TextButton fontSize="xs" color="teal.500" mt={1}>
          Request date
        </TextButton>
        <TextButton fontSize="xs" color="teal.500">
          Request private class
        </TextButton>
      </Box>

      <OverlayModal
        isOpen={isOpen}
        handleToggle={setIsOpen}
        modalHeader={<Box>Get notified !</Box>}
        modalBody={
          <form onSubmit={handleNotify}>
            <Text fontSize="sm" mb={2}>
              You will be notified by email when a new schedule is created
            </Text>
            <CustomInput placeholder="name" required />
            <CustomInput placeholder="email" type="email" mt={2} required />
            <Text fontSize="sm" mt={6} mb={2}>
              When would you like this session?
            </Text>
            <HStack spacing={2}>
              <CustomSelect
                options={[
                  { value: "weekdays", label: "Any weekday" },
                  { value: "weekends", label: "Weekends" },
                  { value: "mon", label: "Monday" },
                  { value: "tue", label: "Tuesday" },
                  { value: "wed", label: "Wednesday" },
                  { value: "thu", label: "Thursday" },
                  { value: "fri", label: "Friday" },
                  { value: "sat", label: "Saturday" },
                  { value: "sun", label: "Sunday" },
                ]}
              />
              <CustomSelect
                options={[
                  { value: "no preferrence", label: "Anytime" },
                  { value: "morning", label: "Morning " },
                  { value: "afternoon", label: "Afternoon " },
                  { value: "evening", label: "Evening " },
                  { value: "night", label: "Night " },
                ]}
              />
            </HStack>
            <ButtonGroup mt={4}>
              <StandardButton colorScheme="teal" type="submit">
                Submit
              </StandardButton>
              <StandardButton variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </StandardButton>
            </ButtonGroup>
          </form>
        }
      />
    </Box>
  );
};

export default ScheduleBooking;
