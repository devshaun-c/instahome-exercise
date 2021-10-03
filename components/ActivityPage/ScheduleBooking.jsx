import React, { useState, useEffect } from "react";
import { Box, Divider, Flex, Text, Avatar } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import moment from "moment";
import {
  convertFirebaseTimestamp,
  ConvertToDate,
  ConvertToDayDate,
  GetClickableLink,
  GetTimeSummary,
  SortByDate,
} from "../../utils/functions";
import { GetAllPartnerSchedules } from "../../utils/firebase.js";
import StandardButton from "../Buttons/StandardButton";
import TextButton from "../Buttons/TextButton.jsx";
import CustomSelect from "../Controls/CustomSelect.jsx";
import OverlayModal from "../Page/OverlayModal";
import InterestForm from "./InterestForm";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useTheme } from "@emotion/react";
import CheckoutSummary from "../Checkout/CheckoutForm";

const useStyles = createUseStyles({
  scheduleBooking: {},
  booking: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: "var(--border-radius)",
  },
  priceBox: {
    flexDirrection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "16px",
    color: (props) => props.colors.brand[700],
    borderRadius: "var(--border-radius) var(--border-radius) 0 0",
    background: (props) => props.colors.brand[50],
  },
});

const ScheduleBooking = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { info, schedules, handleSchedules, ...others } = props;
  const { defaultPrice, bookingLink, paymentNotes, activityName } = info;
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [noSelect, setNoSelect] = useState(false);

  const scheduleOptions = [];
  const allSchedules = SortByDate(schedules);

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

  var displayedSchedules = [];
  if (!showAll) {
    displayedSchedules = allSchedules.slice(0, 3);
  } else {
    displayedSchedules = allSchedules;
  }

  const handleSelectDate = async (e) => {
    if (e.target.value) {
      const selectedId = e.target.value;

      const scheduleInfo = allSchedules.find(
        (schedule) => schedule.scheduleId === selectedId
      );
      const { scheduledStartDate, scheduledEndDate } = scheduleInfo;

      const date = ConvertToDayDate(scheduledStartDate);
      const time = GetTimeSummary(scheduledStartDate, scheduledEndDate);

      setNoSelect(false);
      if (selectedId) {
        setSelectedDate({ scheduleId: selectedId, date, time });
      } else {
        setSelectedDate(null);
      }
    }
  };

  const handleBook = async (e) => {
    e.preventDefault();
    if (selectedDate) {
      setIsOpen(true);
    } else {
      setNoSelect(true);
    }
  };

  const showAllSchedules = async (e) => {
    e.preventDefault();
    if (!showAll) {
      const schedules = await GetAllPartnerSchedules(
        info.partnerId,
        info.activityId,
        undefined
      );
      handleSchedules(schedules);
      setShowAll(true);
    } else {
      const slicedArray = schedules.slice(0, 5);
      handleSchedules(slicedArray);
      setShowAll(false);
    }
  };

  const PriceBox = () => {
    return (
      <Flex mt={4} className={classes.priceBox}>
        {defaultPrice <= 0 ? (
          <Text fontSize="lg" fontWeight="bold">
            FREE
          </Text>
        ) : (
          <Flex flexDir="column">
            <Text fontWeight="bold" fontSize="sm" mr={1}>
              RM
            </Text>
            <Box display="flex">
              <Text fontSize="x-large" fontWeight="bold" lineHeight="1.1">
                {defaultPrice}
              </Text>
              <Text fontSize="sm" ml={1}>
                / participant
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
          <Text fontSize="md" fontWeight="bold">
            {`Upcoming Sessions (${allSchedules.length})`}
          </Text>
          <Flex mt={4} flexDir="column" alignItems="flex-start">
            {displayedSchedules.map((schedule, index) => {
              var isAnotherDay = true;
              if (index > 0) {
                const currentDate = ConvertToDate(
                  allSchedules[index].scheduledStartDate
                );
                const previousDate = ConvertToDate(
                  allSchedules[index - 1].scheduledStartDate
                );

                if (currentDate === previousDate) {
                  isAnotherDay = false;
                }
              }

              return (
                <Flex
                  key={index}
                  flexDirection={["column", "row", "row"]}
                  justify="space-between"
                  fontSize="sm"
                  w="100%"
                  mb={4}
                >
                  <Box>
                    {isAnotherDay && (
                      <Flex flexDirection={["row", "column", "column"]}>
                        <Text fontWeight="bold" mr={[2, 0, 0]}>
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
                      </Flex>
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
          {scheduleOptions.length > 5 && (
            <TextButton onClick={showAllSchedules} color="grey">
              {showAll ? "see less" : "see all"}
              {showAll ? (
                <ChevronUpIcon fontSize="lg" ml={2} />
              ) : (
                <ChevronDownIcon fontSize="lg" ml={2} />
              )}
            </TextButton>
          )}
        </Flex>
      ) : (
        <Box fontSize="sm" mt={4} className={classes.booking}>
          <Text fontSize="sm">
            Looks like we have not set a date for this activity yet. Show your
            interest and get updated when it is available.
          </Text>
          <PriceBox />
          <StandardButton
            colorScheme="brand"
            onClick={setIsOpen}
            borderRadius="0 0 var(--border-radius) var(--border-radius)"
          >
            I'm Interested !
          </StandardButton>
        </Box>
      )}
      {bookingLink == false && allSchedules.length > 0 ? (
        <Box mt={10}>
          <PriceBox />
          <StandardButton
            colorScheme="brand"
            variant="outline"
            size="sm"
            borderRadius="0 0 var(--border-radius) var(--border-radius)"
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
                  label=""
                  options={scheduleOptions}
                  onChange={handleSelectDate}
                  value={selectedDate?.selectedId}
                  placeholder="Select date"
                  borderColor="brand.200"
                  backgroundColor="white"
                />
                {noSelect && (
                  <Text fontSize="xs" color="red.500">
                    Please select a date
                  </Text>
                )}
                <PriceBox />
                <StandardButton
                  mt={0}
                  borderRadius="0 0 var(--border-radius) var(--border-radius)"
                  onClick={handleBook}
                  colorScheme="brand"
                >
                  Book now
                </StandardButton>
              </Box>
            </Flex>
          )}
        </Box>
      )}

      <Divider mt={8} />

      <OverlayModal
        size="lg"
        isOpen={isOpen}
        handleToggle={setIsOpen}
        modalHeader={
          selectedDate ? (
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="md" mb={2}>
                  {activityName}
                </Text>
                <Text fontSize="sm" fontWeight="normal">
                  {selectedDate.date}
                </Text>
                <Text fontSize="sm" fontWeight="normal">
                  {selectedDate.time}
                </Text>
              </Box>
              <Box>
                <Avatar mr={6} size="lg" src={info.coverImage[0].url} />
              </Box>
            </Flex>
          ) : (
            <Text>Get notified !</Text>
          )
        }
        modalBody={
          selectedDate ? (
            <CheckoutSummary
              info={info}
              selectedDate={selectedDate}
              handleToggle={setIsOpen}
            />
          ) : (
            <InterestForm handleToggle={setIsOpen} info={info} />
          )
        }
      />
    </Box>
  );
};

export default ScheduleBooking;
