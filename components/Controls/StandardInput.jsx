import React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  InputLeftElement,
  InputRightAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
});

const StandardInput = (props) => {
  const classes = useStyles();
  const {
    label,
    name,
    required,
    handleChange,
    value,
    size,
    type,
    variant,
    placeholder,
    leftAddOn,
    rightAddOn,
    leftElement,
    rightElement,
    helperText,
    errorText,
  } = props;
  return (
    <FormControl isRequired={required} isInvalid={errorText}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {leftAddOn && <InputLeftAddon children={leftAddOn} />}
        {leftElement && (
          <InputLeftElement
            // w="auto"
            children={leftElement}
          />
        )}
        <Input
          name={name}
          value={value}
          type={type}
          className={classes.root}
          variant={variant}
          placeholder={placeholder}
        ></Input>
        {rightAddOn && <InputRightAddon children={rightAddOn} />}
        {rightElement && <InputRightElement children={rightElement} />}
      </InputGroup>
      {helperText && (
        <FormHelperText ml={4} fontSize="sm" color="gray.400">
          {helperText}
        </FormHelperText>
      )}
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </FormControl>
  );
};

export default StandardInput;
