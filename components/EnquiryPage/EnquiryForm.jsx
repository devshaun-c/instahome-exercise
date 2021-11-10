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
  Link,
  Divider,
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
  required = false,
  handleInputChange,
  ...others
}) => {
  return (
    <Box mb={6}>
      <Flex>
        <Text fontSize="xs">{label}</Text>
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
        <Text fontSize="xs">{label}</Text>
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
  const [values, setValues] = useState(initialFormValues);
  const [recaptcha, setRecaptcha] = useState(false);
  const [tnc, setTnc] = useState(false);

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
      width="100%"
      maxWidth="600px"
      padding={["20px", "20px", "20px"]}
      minHeight="100vh"
      flexDirection="column"
      justifyContent={["flex-start", "flex-start", "flex-start"]}
    >
      <Box mb="48px">
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
      </Box>

      <form onSubmit={handleSubmit}>
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

        <CustomInput
          label="Organization name"
          name="orgName"
          value={values?.orgName}
          handleInputChange={handleInputChange}
          placeholder="What is the name of your business?"
          required
        />
        <CustomInput
          label="Website / Social Media (optional)"
          name="orgWebsite"
          value={values?.orgWebsite}
          handleInputChange={handleInputChange}
          placeholder="How do people find out about you?"
        />

        <Box mb={6}>
          <Text fontSize="xs">Tell us a little about your business</Text>
          <Textarea
            color="gray.500"
            size="sm"
            name="orgDescription"
            value={values?.orgDescription}
            onChange={handleInputChange}
            borderRadius="var(--border-radius)"
            placeholder="Write something about what your business does (up to 300 characters)"
            _placeholder={{ color: "gray.300", fontSize: "12px" }}
          />
        </Box>

        <CustomSelect
          label="How often do you organize an activity?"
          name="frequency"
          handleInputChange={handleInputChange}
          value={values?.frequency}
          placeholder="Select"
          required
        >
          <option value="1">{`Once per month`}</option>
          <option value="2">{`Less than 10 times per week`}</option>
          <option value="3">{`At least 10 times per week`}</option>
          <option value="4">{`Varies depending on season`}</option>
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

        {/* <Box pb="32px">
          <Text fontSize="xs" fontWeight="bold">
            Which of the following optional services would you be interested in?
          </Text>
          <Text color="gray.400" fontSize="xs">
            Please select atleast one
          </Text>
          <CheckboxGroup colorScheme="brand">
            <Stack mt={2}>
              <Checkbox name="onlinePayment" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>Corporate teambuilding</Text>
              </Checkbox>
              <Checkbox name="onlinePayment" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>Accept online payments</Text>
              </Checkbox>
              <Checkbox name="bookingSystem" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>Integrated booking system</Text>
              </Checkbox>
              <Checkbox name="digitalMarketing" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>On-demand digital marketing</Text>
              </Checkbox>
              <Checkbox name="promo" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>
                  Promotion and voucher offering
                </Text>
              </Checkbox>
              <Checkbox name="venue" onChange={handleCheckboxChange}>
                <Text fontSize={["sm", "xs"]}>On-demand venue for events</Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box> */}

        <Divider mb={4} />

        <Flex mb={4}>
          <Checkbox
            name="tnc"
            onChange={() => setTnc(!tnc)}
            colorScheme="brand"
          />
          <Text fontSize={["sm", "xs"]} ml={2}>
            I agree to the{" "}
            <Link
              href="/"
              textDecoration="underline"
              target="_blank"
              rel="noopener,noreferrer"
            >
              terms and conditions
            </Link>
          </Text>
        </Flex>

        <ReCAPTCHA
          sitekey="6Lf3dNAcAAAAAD37USfS1gjeBqxUV__Te2CJsII5"
          onChange={() => setRecaptcha(true)}
          onExpired={() => setRecaptcha(false)}
        />

        <ButtonGroup w="100%" justifyContent="flex-end" mt={6}>
          <Button
            type="submit"
            colorScheme="brand"
            fontSize="sm"
            isDisabled={tnc && recaptcha ? false : true}
          >
            <Text mr={2}>Send enquiry</Text>
            <UilMessage size="16" />
          </Button>
        </ButtonGroup>
      </form>
    </Flex>
  );
};

export default EnquiryForm;
