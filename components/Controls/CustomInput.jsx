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
  useBreakpointValue,
} from "@chakra-ui/react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    background: "rgba(255,255,255,0.5)",
  },
});

const StandardInput = (props) => {
  const classes = useStyles();
  const {
    label,
    name,
    required,
    onChange,
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
    disabled,
    ...others
  } = props;

  // const inputSize = useBreakpointValue(["md", "md", "md"]);

  return (
    <FormControl isRequired={required} isInvalid={errorText} mb={label ? 6 : 0}>
      {label && (
        <FormLabel mb={0} fontSize="xs" fontWeight="bold">
          {label}
        </FormLabel>
      )}
      <InputGroup size={size}>
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
          fontSize="sm"
          _focus={{ background: "white" }}
          _hover={{ background: "white" }}
          _disabled={{ background: "whitesmoke" }}
          onChange={onChange}
          {...others}
        />
        {rightAddOn && <InputRightAddon children={rightAddOn} />}
        {rightElement && <InputRightElement children={rightElement} />}
      </InputGroup>
      {helperText && (
        <FormHelperText fontSize="xs" color="gray.400">
          {helperText}
        </FormHelperText>
      )}
      {errorText && (
        <FormErrorMessage fontSize="xs">{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default StandardInput;
