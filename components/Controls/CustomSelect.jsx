import React from "react";
// import Select from "react-select";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  control: {},
});

const CustomSelect = (props) => {
  const classes = useStyles();
  const {
    isRequired,
    options,
    value,
    label,
    helperText,
    errorText,
    defaultValue,
    children,
    ...params
  } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={errorText}>
      {label && <FormLabel fontSize="xs">{label}</FormLabel>}
      <Select
        options={options}
        value={value}
        defaultValue={defaultValue}
        // fontSize="md"
        size="md"
        {...params}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {helperText && (
        <FormHelperText ml={4} fontSize="sm" color="gray.400">
          {helperText}
        </FormHelperText>
      )}
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomSelect;
