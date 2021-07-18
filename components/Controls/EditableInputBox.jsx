import React from "react";
import {
  ButtonGroup,
  Button,
  IconButton,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

import { createUseStyles } from "react-jss";
import StandardInput from "./StandardInput";

const useStyles = createUseStyles({
  root: {},
});

const EditableInputBox = (props) => {
  const { label, handleConfirm, value } = props;
  const classes = useStyles();

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" ml={4}>
        <IconButton
          colorScheme="green"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          variant="ghost"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" ml={4}>
        <IconButton
          variant="ghost"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Editable
        onSubmit={handleConfirm}
        display="flex"
        alignItems="center"
        w="100%"
        defaultValue={value || ""}
        isPreviewFocusable={false}
      >
        <EditablePreview
          minH="50px"
          w="100%"
          p={2}
          bg="whitesmoke"
          color="gray.400"
        />
        <EditableInput w="90%" p={2} />
        <EditableControls />
      </Editable>
    </FormControl>
  );
};

export default EditableInputBox;
