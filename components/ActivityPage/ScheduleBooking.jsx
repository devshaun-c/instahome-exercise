import React, { useState } from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import {
  convertFirebaseTimestamp,
  ConverToDate,
  GetClickableLink,
  GetTimeSummary,
  SortByDate,
} from "../../lib/utils";
import StandardButton from "../Buttons/StandardButton";
import TextButton from "../Buttons/TextButton.jsx";
import CustomSelect from "../Controls/CustomSelect.jsx";
import OverlayModal from "../Page/OverlayModal";
import InterestForm from "./InterestForm";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

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

const ScheduleBooking = (props) => {
  const classes = useStyles();
  const { info, schedules, ...others } = props;
  const { defaultPrice, bookingLink, paymentNotes } = info;
  const [isOpen, setIsOpen] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState({
    name: "",
    email: "",
    dayPreference: "",
    timePreference: "",
  });
  const [showAll, setShowAll] = useState(false);

  const scheduleOptions = [];
  var allSchedules = SortByDate(schedules);
  var displayedSchedules = [];
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
        value: schedule.scheduleId,
        label: optionSummary,
      });
    }
  });

  if (!showAll) {
    displayedSchedules = allSchedules.slice(0, 3);
  } else {
    displayedSchedules = allSchedules;
  }

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

  return (
    <Box className={classes.scheduleBooking} {...others}>
      {allSchedules.length > 0 ? (
        <Flex flexDirection="column">
          <Text fontSize="sm" fontWeight="bold">
            {`Upcoming Sessions (${allSchedules.length})`}
          </Text>
          <Flex mt={4} flexDir="column" alignItems="flex-start">
            {displayedSchedules.map((schedule, index) => {
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
                    {/* <Text color="teal.400">5 spots left</Text> */}
                  </Box>
                </Flex>
              );
            })}
          </Flex>
          <TextButton onClick={() => setShowAll(!showAll)} color="grey">
            {showAll ? "see less" : "see more"}
            {showAll ? (
              <ChevronUpIcon fontSize="lg" ml={2} />
            ) : (
              <ChevronDownIcon fontSize="lg" ml={2} />
            )}
          </TextButton>
        </Flex>
      ) : (
        <Box fontSize="sm" mt={4} className={classes.booking}>
          <Text fontSize="sm">
            Looks like we have not set a date for this activity yet. Show your
            interest and get updated when it is available.
          </Text>
          <PriceBox />
          <StandardButton mt={4} onClick={setIsOpen}>
            I'm Interested !
          </StandardButton>
        </Box>
      )}
      {bookingLink && allSchedules.length > 0 ? (
        <Box mt={10}>
          {/* <Text fontSize="sm" fontWeight="bold">
            Schedule & Booking
          </Text> */}
          <PriceBox />
          {/* <Text mt={4} fontSize="xs">
            Our latest schedule is available in the link below
          </Text> */}
          <StandardButton
            colorScheme="teal"
            variant="outline"
            size="sm"
            mt={4}
            isFullWidth
            onClick={() => window.open(GetClickableLink(bookingLink), "_blank")}
          >
            Schedule and book here
          </StandardButton>
        </Box>
      ) : (
        <Box mt={2}>
          {allSchedules.length > 0 && (
            <Flex direction="column">
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
          )}
        </Box>
      )}
      {paymentNotes && (
        <Flex flexDirection="column" mt={4}>
          <Text fontSize="xs">Notes:</Text>
          <Text fontSize="xs">{paymentNotes}</Text>
        </Flex>
      )}
      <Divider mt={8} />
      {/* <Box mt={2} w="100%">
        <Text fontSize="xs">Can't find a suitable date?</Text>
        <TextButton fontSize="xs" color="teal.500" mt={1}>
          Request date
        </TextButton>
        <TextButton fontSize="xs" color="teal.500">
          Request private class
        </TextButton>
      </Box> */}

      <OverlayModal
        isOpen={isOpen}
        handleToggle={setIsOpen}
        modalHeader={<Text>Get notified !</Text>}
        modalBody={<InterestForm handleToggle={setIsOpen} />}
      />
    </Box>
  );
};

export default ScheduleBooking;
