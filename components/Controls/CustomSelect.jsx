import React from "react";
import Select from "react-select";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  control: { background: "red" },
});

const CustomSelect = (props) => {
  const classes = useStyles();
  const { isRequired, options, label, helperText, errorText, ...params } =
    props;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      // state.isFocused can display different borderColor if you need it
      borderColor: state.isFocused ? "#ddd" : errorText ? "#e53e3e" : "#ddd",
      boxShadow: errorText ? "0 0 0 1px #e53e3e" : "",
      borderRadius: "0.375rem",
      height: "2.5rem",
      paddingLeft: "6px",
      // overwrittes hover style
      "&:hover": {
        borderColor: state.isFocused ? "#ddd" : errorText ? "#e53e3e" : "#ddd",
      },
    }),
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={errorText}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select options={options} styles={customStyles} {...params} />
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
