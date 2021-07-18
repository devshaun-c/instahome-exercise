import React from "react";
import {
  FormControl,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  Select,
  Spinner,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    display: "flex",
    marginBottom: "16px",
    // maxWidth: "600px",
    "@media screen and (max-width: 1000px)": {
      padding: "0 16px",
    },
  },
  input: {
    // minWidth: "80%",
  },
  selectStyle: {
    minWidth: "100px",
    maxWidth: "130px",
  },
});

const SearchBox = (props) => {
  const classes = useStyles();
  const {
    handleChange,
    value,
    size,
    handleSelect,
    defaultSearch,
    options = [],
    placeholder,
    isLoading = false,
  } = props;
  return (
    <div className={classes.root}>
      {options.length > 0 && (
        <FormControl className={classes.selectStyle}>
          <Select
            size={size || "md"}
            variant="filled"
            color="primary"
            bg="primaryLight"
            borderColor="primaryMedium"
            border="1px"
            borderRight="none"
            cursor="pointer"
            _focus={{ outline: "0", bg: "primaryLight", color: "black" }}
            _hover={{ outline: "0", bg: "primaryLight" }}
            fontSize={["md", "sm"]}
            onChange={handleSelect}
            defaultValue={defaultSearch}
            borderRadius="8px 0 0 8px"
          >
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.title}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
      <InputGroup size={size || "md"} className={classes.input}>
        <InputLeftElement>
          {isLoading ? (
            <Spinner
              speed="0.65s"
              emptyColor="gray.200"
              color="primary"
              size="sm"
            />
          ) : (
            <IconButton
              type="submit"
              variant="unstyled"
              _focus={{ outline: "0" }}
            >
              <SearchIcon color="primaryMedium" />
            </IconButton>
          )}
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          borderColor="primaryMedium"
          color="black"
          borderRadius={options.length ? "0 8px 8px 0" : "8px"}
          _focus={{ borderColor: "primary" }}
          _hover={{ borderColor: "primary" }}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBox;
