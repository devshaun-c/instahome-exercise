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
  root: { background: "rgba(255,255,255,0.5)" },
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
    ...others
  } = props;

  const inputSize = useBreakpointValue(["md", "md", "md"]);

  return (
    <FormControl isRequired={required} isInvalid={errorText} {...others}>
      {label && <FormLabel fontSize={["xs", "sm", "sm"]}>{label}</FormLabel>}
      <InputGroup size={inputSize}>
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
          _focus={{ background: "white" }}
          _hover={{ background: "white" }}
        ></Input>
        {rightAddOn && <InputRightAddon children={rightAddOn} />}
        {rightElement && <InputRightElement children={rightElement} />}
      </InputGroup>
      {helperText && (
        <FormHelperText
          ml={[2, 2, 4]}
          fontSize={["xs", "sm", "sm"]}
          color="gray.400"
        >
          {helperText}
        </FormHelperText>
      )}
      {errorText && (
        <FormErrorMessage fontSize={["xs", "sm", "sm"]}>
          {errorText}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default StandardInput;
