import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import StandardButton from "../Buttons/StandardButton";
import CustomSelect from "../Controls/CustomSelect.jsx";
import CustomInput from "../Controls/CustomInput.jsx";
import { CreateNewInterest, SignUpWithPopup } from "../../lib/firebase";

const useStyles = createUseStyles({});

const DAY_PREFERENCE = {
  anyday: "anyday",
  weekdays: "weekdays",
  weekends: "weekends",
  mon: "mon",
  tue: "tue",
  wed: "wed",
  thu: "thu",
  fri: "fri",
  sat: "sat",
  sun: "sun",
};

const TIME_PREFERENCE = {
  anytime: "anytime",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

const InterestForm = (props) => {
  const classes = useStyles();
  const toast = useToast();
  const { handleToggle, info, ...others } = props;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    dayPreference: DAY_PREFERENCE.anyday,
    timePreference: TIME_PREFERENCE.anytime,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLoggedIn = true; //Temporarily disable signup

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleNotify = async (e) => {
    e.preventDefault();
    const { activityId, activityName, partnerId } = info;
    const { name, email, dayPreference, timePreference } = formValues;
    const obj = {
      activityId,
      activityName,
      name,
      email,
      dayPreference,
      timePreference,
    };
    const isSuccess = await CreateNewInterest(obj, partnerId);

    if (isSuccess) {
      toast({
        title: "Thanks for your interest!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitted(true);
      if (isLoggedIn) {
        handleToggle(false);
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    // alert(`${email} user is created`);
    handleToggle(false);
  };

  return (
    <>
      {!isSubmitted && (
        <form onSubmit={handleNotify}>
          <Text fontSize="sm" mb={4}>
            You will be notified by email when a new schedule is created for
            this activity
          </Text>
          <CustomInput
            placeholder="Bruce Wayne"
            name="name"
            label="Your name"
            value={formValues.name}
            onChange={handleInputChange}
            required
            mt={1}
          />
          <CustomInput
            label="Emaill address"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="bruce@wayne.com"
            type="email"
            required
            mt={1}
          />
          <Text fontSize="sm" mt={6} mb={2}>
            When would you like this session?
          </Text>
          <HStack spacing={2}>
            <CustomSelect
              name="dayPreference"
              onChange={handleInputChange}
              options={[
                { value: DAY_PREFERENCE.anyday, label: "Any day" },
                { value: DAY_PREFERENCE.weekdays, label: "Any weekday" },
                { value: DAY_PREFERENCE.weekends, label: "Weekends" },
                { value: DAY_PREFERENCE.mon, label: "Monday" },
                { value: DAY_PREFERENCE.tue, label: "Tuesday" },
                { value: DAY_PREFERENCE.wed, label: "Wednesday" },
                { value: DAY_PREFERENCE.thu, label: "Thursday" },
                { value: DAY_PREFERENCE.fri, label: "Friday" },
                { value: DAY_PREFERENCE.sat, label: "Saturday" },
                { value: DAY_PREFERENCE.sun, label: "Sunday" },
              ]}
            />
            <CustomSelect
              name="timePreference"
              onChange={handleInputChange}
              options={[
                { value: TIME_PREFERENCE.anytime, label: "Anytime" },
                { value: TIME_PREFERENCE.morning, label: "Morning " },
                { value: TIME_PREFERENCE.afternoon, label: "Afternoon " },
                { value: TIME_PREFERENCE.evening, label: "Evening " },
                { value: TIME_PREFERENCE.night, label: "Night " },
              ]}
            />
          </HStack>
          <ButtonGroup mt={4}>
            <StandardButton colorScheme="teal" type="submit">
              Submit
            </StandardButton>
            <StandardButton variant="ghost" onClick={() => handleToggle(false)}>
              Cancel
            </StandardButton>
          </ButtonGroup>
        </form>
      )}

      {isSubmitted && !isLoggedIn && (
        <form onSubmit={handleSignUp}>
          <Flex flexDir="column">
            <Text fontSize="sm" fontWeight="bold">
              Join the AfterWork community?
            </Text>
            <Text fontSize="sm" mb={4} mt={2}>
              Never miss out on any fun and exciting activities and events
              happening near you.
            </Text>
            <CustomInput
              name="name"
              label="Your public name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <CustomInput
              type="email"
              label="Email address"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <CustomInput
              type="password"
              label="Password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="At least 6 characters"
              minLength="6"
              required
            />
            <StandardButton colorScheme="teal" type="submit" isFullWidth>
              Create account
            </StandardButton>
            <Text fontSize="xs" textAlign="center" mt={2}>
              By creating an account with us, you agree to our Terms of Service
              and Privacy Policy.
            </Text>
          </Flex>
        </form>
      )}
    </>
  );
};

export default InterestForm;
