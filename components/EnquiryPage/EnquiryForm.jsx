import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Select,
  Textarea,
  ButtonGroup,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const useStyles = createUseStyles({
  formWrapper: {
    width: "50%",
    padding: "20px 40px",
    maxWidth: "500px",
    margin: "24px auto",
    minHeight: "100vh",
    // boxShadow: "var(--card-shadow)",
  },
});

const CustomInput = ({ label, register, ...others }) => {
  return (
    <Box mb={4}>
      <Text fontSize="xs" fontWeight="bold">
        {label}
      </Text>
      <Input color="gray.500" size="sm" {...register} {...others} />
    </Box>
  );
};

const EnquiryForm = () => {
  const classes = useStyles();
  const [next, setNext] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrapper}>
      <Box>
        <Text fontSize="xs" color="gray.600">
          START FOR FREE
        </Text>
        <Text
          color="brand.600"
          fontSize="x-large"
          fontWeight="bold"
          margin="4px 0 16px 0"
        >
          Partner with us.
        </Text>
      </Box>

      <Text mb={4} fontSize="sm">
        It is easy to get started! Just tell us a little about you and your
        organization and we will help you get started.
      </Text>

      {!next ? (
        <Box>
          <CustomInput
            label="Name"
            register={{ ...register("name", { required: true }) }}
            required
          />
          <CustomInput
            label="Email"
            type="email"
            register={{
              ...register("email", { required: true, maxLength: 20 }),
            }}
            required
          />
          <CustomInput
            label="Contact"
            type="number"
            register={{
              ...register("contact", { required: true, maxLength: 20 }),
            }}
            required
          />
          <Box mb={4}>
            <Text fontSize="xs" fontWeight="bold">
              City
            </Text>
            <Select
              size="sm"
              color="gray.500"
              {...register("city")}
              placeholder="Select city"
              required
            >
              <option value="option1">Petaling Jaya</option>
              <option value="option2">Subang Jaya</option>
              <option value="option3">Kuala Lumpur</option>
              <option value="option3">Shah Alam</option>
              <option value="option3">Klang</option>
            </Select>
          </Box>
          <Button
            mt={4}
            colorScheme="brand"
            onClick={() => setNext(true)}
            fontSize="sm"
          >
            Next
          </Button>
        </Box>
      ) : (
        <Box>
          <CustomInput
            label="Organization name"
            register={{
              ...register("orgName", { required: true, maxLength: 30 }),
            }}
            required
          />
          <CustomInput
            label="Website / Social Media"
            register={{
              ...register("orgWebsite", {}),
            }}
          />

          <Box mb={4}>
            <Text fontSize="xs" fontWeight="bold">
              Description of your business
            </Text>
            <Textarea
              color="gray.500"
              size="sm"
              {...register("orgDescription", { required: true })}
            />
          </Box>

          <ButtonGroup>
            <Button
              mt={4}
              variant="outline"
              onClick={() => setNext(false)}
              colorScheme="brand"
              fontSize="sm"
            >
              Back
            </Button>
            <Button mt={4} type="submit" colorScheme="brand" fontSize="sm">
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </form>
  );
};

export default EnquiryForm;
