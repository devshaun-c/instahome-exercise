import React from "react";
import { Select } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

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
    <Select
      options={options}
      value={value}
      defaultValue={defaultValue}
      cursor="pointer"
      fontSize="xs"
      style={{ paddingInlineStart: "10px" }}
      border="none"
      height="auto"
      padding="0"
      fontSize="large"
      fontWeight="bold"
      color="primary"
      _focus={{ outline: "none" }}
      {...params}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
