import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Select,
  Textarea,
  ButtonGroup,
  Flex,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { UilMessage } from "@iconscout/react-unicons";
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = createUseStyles({
  formWrapper: {
    margin: "auto",
    position: "relative",
  },
});

const CustomInput = ({
  label,
  name,
  value,
  required,
  handleInputChange,
  ...others
}) => {
  return (
    <Box mb={6}>
      <Flex>
        <Text fontSize="xs" fontWeight="bold">
          {label}
        </Text>
        {required && (
          <Text color="red.400" fontSize="xs" fontWeight="bold" ml={1}>
            *
          </Text>
        )}
      </Flex>
      <Input
        borderRadius="var(--border-radius)"
        name={name}
        _placeholder={{ color: "gray.300", fontSize: "12px" }}
        color="gray.500"
        size="sm"
        onChange={handleInputChange}
        value={value}
        required={required}
        {...others}
      />
    </Box>
  );
};

const CustomSelect = ({
  label,
  name,
  placeholder,
  value,
  handleInputChange,
  children,
  required,
  ...others
}) => {
  return (
    <Box mb={6}>
      <Flex>
        <Text fontSize="xs" fontWeight="bold">
          {label}
        </Text>
        {required && (
          <Text color="red.400" fontSize="xs" fontWeight="bold" ml={1}>
            *
          </Text>
        )}
      </Flex>
      <Select
        borderRadius="var(--border-radius)"
        size="sm"
        fontSize="14px"
        color="gray.500"
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        {...others}
      >
        {children}
      </Select>
    </Box>
  );
};

const initialFormValues = {
  name: "",
  email: "",
  contact: "",
  city: "",
  orgName: "",
  orgWebsite: "",
  orgDescription: "",
  frequency: "",
  participants: "",
  features: [],
};

const EnquiryForm = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialFormValues);
  const [recaptcha, setRecaptcha] = useState(false);

  console.log(recaptcha);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_PARTNER_ENQUIRY_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      template_params: values,
    };

    var emailSuccess = false;

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then(
        (result) => {
          emailSuccess = true;
        },
        (error) => {
          console.log(error);
          emailSuccess = false;
        }
      );
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      if (emailSuccess) {
        setValues(initialFormValues);
        setStep(1);
        setRecaptcha(false);
      }
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    var currentFeatures = [...values.features];
    if (checked) {
      currentFeatures.push(name);
    } else {
      currentFeatures = currentFeatures.filter((type) => type != name);
    }

    setValues({ ...values, features: currentFeatures });
  };

  const handleBack = (e) => {
    setRecaptcha(false);
    setStep(step - 1);
  };

  return (
    <Flex
      className={classes.formWrapper}
      width={["100%", "100%", "50%"]}
      padding={["20px", "20px", "24px 5%"]}
      minHeight="100vh"
      flexDirection="column"
      justifyContent={["flex-start", "flex-start", "flex-start"]}
    >
      <Box>
        <Box>
          <Text fontSize="xs" color="gray.600">
            START FREE
          </Text>
          <Text
            color="brand.600"
            fontSize="x-large"
            fontWeight="bold"
            margin="0 0 16px 0"
          >
            Partner with us.
          </Text>
        </Box>

        <Text fontSize="sm">
          It is easy to get started! Just tell us a little about you and your
          organization and we will be in touch.
        </Text>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          m="16px 0 24px 0"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            border={step >= 1 ? "2px solid" : "1px solid"}
            borderColor={step >= 1 ? "brand.300" : "gray.300"}
            color={step >= 1 ? "brand.300" : "gray.300"}
            h="24px"
            minW="24px"
          >
            <Text fontSize="xs" fontWeight="bold">
              1
            </Text>
          </Flex>
          <Box
            w="100%"
            h="1px"
            bg={step >= 2 ? "brand.300" : "gray.300"}
            m="0 8px"
          ></Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            border={step >= 2 ? "2px solid" : "1px solid"}
            borderColor={step >= 2 ? "brand.300" : "gray.300"}
            color={step >= 2 ? "brand.300" : "gray.300"}
            h="24px"
            minW="24px"
          >
            <Text fontSize="xs" fontWeight="bold">
              2
            </Text>
          </Flex>
          <Box
            w="100%"
            h="1px"
            bg={step === 3 ? "brand.300" : "gray.300"}
            m="0 8px"
          ></Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            border={step === 3 ? "2px solid" : "1px solid"}
            borderColor={step === 3 ? "brand.300" : "gray.300"}
            color={step === 3 ? "brand.300" : "gray.300"}
            h="24px"
            minW="24px"
          >
            <Text fontSize="xs" fontWeight="bold">
              3
            </Text>
          </Flex>
        </Flex>
      </Box>

      {step === 1 && (
        <form onSubmit={() => setStep(step + 1)}>
          <CustomInput
            label="Your name"
            name="name"
            placeholder="full name"
            value={values?.name}
            handleInputChange={handleInputChange}
            required
          />
          <CustomInput
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            value={values?.email}
            handleInputChange={handleInputChange}
            type="email"
            required
          />
          <CustomInput
            label="Contact"
            name="contact"
            placeholder="012-3456789"
            type="number"
            value={values?.contact}
            handleInputChange={handleInputChange}
            required
          />

          <CustomSelect
            label="City"
            name="city"
            placeholder="Select city"
            handleInputChange={handleInputChange}
            value={values.city}
            required
          >
            <option value="petaling-jaya">Petaling Jaya</option>
            <option value="subang-jaya">Subang Jaya</option>
            <option value="kuala-lumpur">Kuala Lumpur</option>
            <option value="shah-alam">Shah Alam</option>
            <option value="klang">Klang</option>
            <option value="putrajaya">Putrajaya</option>
            <option value="cyberjaya">Cyberjaya</option>
          </CustomSelect>

          <ButtonGroup w="100%" justifyContent="flex-end">
            <Button colorScheme="brand" type="submit" fontSize="sm">
              Next
            </Button>
          </ButtonGroup>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={() => setStep(step + 1)}>
          <CustomInput
            label="Organization name"
            name="orgName"
            value={values?.orgName}
            handleInputChange={handleInputChange}
            required
          />
          <CustomInput
            label="Website / Social Media"
            name="orgWebsite"
            value={values?.orgWebsite}
            handleInputChange={handleInputChange}
          />

          <Box mb={6}>
            <Text fontSize="xs" fontWeight="bold">
              Description of your business
            </Text>
            <Textarea
              color="gray.500"
              size="sm"
              name="orgDescription"
              value={values?.orgDescription}
              onChange={handleInputChange}
            />
          </Box>

          <ButtonGroup w="100%" justifyContent="space-between">
            <Button
              variant="outline"
              onClick={handleBack}
              colorScheme="brand"
              fontSize="sm"
            >
              Back
            </Button>
            <Button type="submit" colorScheme="brand" fontSize="sm">
              Next
            </Button>
          </ButtonGroup>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <CustomSelect
            label="How often do you organize an activity?"
            name="frequency"
            handleInputChange={handleInputChange}
            value={values?.frequency}
            placeholder="Select"
            required
          >
            <option value="1">{`Once per month`}</option>
            <option value="8">{`Up to 8 sessions per month`}</option>
            <option value="16">{`Up to 16 sessions per month`}</option>
            <option value="24">{`Up to 24 sessions per month`}</option>
            <option value="24+">{`More than 24 sessions per month`}</option>
          </CustomSelect>
          <CustomSelect
            label="What is the typical number of participants per session?"
            name="participants"
            handleInputChange={handleInputChange}
            value={values?.participants}
            placeholder="Select"
            required
          >
            <option value="private">{`Private sessions only`}</option>
            <option value="ut5">{`Up to 5 per session`}</option>
            <option value="ut10">{`Up to 10 per session`}</option>
            <option value="ut20">{`Up to 20 per session`}</option>
            <option value="mt20">{`More than 20 per session`}</option>
          </CustomSelect>

          <Box pb="64px">
            <Text fontSize="xs" fontWeight="bold">
              Which of the following optional services would you be interested
              in?
            </Text>
            <Text color="gray.400" fontSize="xs">
              Please select atleast one
            </Text>
            <CheckboxGroup colorScheme="brand">
              <Stack alignItems="flex-start" mt={2}>
                <Box>
                  <Checkbox
                    name="onlinePayment"
                    onChange={handleCheckboxChange}
                  >
                    <Text fontSize={["sm", "xs"]} w="200px">
                      Accept online payments
                    </Text>
                  </Checkbox>
                  <Checkbox
                    name="bookingSystem"
                    onChange={handleCheckboxChange}
                  >
                    <Text fontSize={["sm", "xs"]} w="200px">
                      Integrated booking system
                    </Text>
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    name="digitalMarketing"
                    onChange={handleCheckboxChange}
                  >
                    <Text fontSize={["sm", "xs"]} w="200px">
                      Digital marketing
                    </Text>
                  </Checkbox>
                  <Checkbox name="promo" onChange={handleCheckboxChange}>
                    <Text fontSize={["sm", "xs"]} w="200px">
                      Promotions and vouchers
                    </Text>
                  </Checkbox>
                </Box>
              </Stack>
            </CheckboxGroup>
          </Box>

          <ReCAPTCHA
            sitekey="6Lf3dNAcAAAAAD37USfS1gjeBqxUV__Te2CJsII5"
            onChange={() => setRecaptcha(true)}
          />

          <ButtonGroup w="100%" justifyContent="space-between" mt={4}>
            <Button
              variant="outline"
              onClick={handleBack}
              colorScheme="brand"
              fontSize="sm"
            >
              Back
            </Button>

            <Button
              type="submit"
              colorScheme="brand"
              fontSize="sm"
              isDisabled={!recaptcha}
            >
              <Text mr={2}>Send enquiry</Text>
              <UilMessage size="16" />
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Flex>
  );
};

export default EnquiryForm;
