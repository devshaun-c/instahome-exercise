import {
  Box,
  Text,
  Input,
  Modal,
  ModalBody,
  Select,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { wordType } from "../constants/wordType";
import { CreateNewDocInFirebase } from "../lib/firebase";

const initialFieldValues = {
  newWord: "",
  wordType: "unknown",
  wordDescription: "",
};

const OverlayModal = ({ isOpen, handleToggle }) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState();
  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("newWord" in fieldValues) {
      temp.newWord = fieldValues.newWord ? "" : "This field is required";
    }

    setErrors({ ...temp });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    validate({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      //   const submitResult = await CreateNewDocInFirebase(values, "word-request");
      const submitResult = true;
      if (submitResult) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    }
  };

  const closeModal = () => {
    handleToggle(false);
    setSuccess(false);
    setErrors(null);
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {success ? (
              <Box>
                <Text>Thank you for your word submission!</Text>
                <Text fontSize="xs" mt="16px">
                  We will review the word and update our Database
                </Text>
              </Box>
            ) : (
              <Box display="flex" flexDir="column">
                <Text fontSize="xs">new word</Text>
                <FormControl isInvalid={errors && errors.newWord} mb="16px">
                  <Input
                    size="sm"
                    fontSize="xs"
                    placeholder="kanji / romaji / hiragana / english"
                    name="newWord"
                    onChange={handleInputChange}
                  />
                  {errors && errors.newWord && (
                    <FormErrorMessage fontSize="xs">
                      {errors.newWord}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <Text fontSize="xs">word type</Text>
                <Select
                  size="sm"
                  fontSize="xs"
                  variant="outline"
                  focusBorderColor="none"
                  cursor="pointer"
                  onChange={handleInputChange}
                  name="wordType"
                  mb="16px"
                >
                  <option style={{ color: "black" }} value="unknown">
                    not sure?
                  </option>
                  <option style={{ color: "black" }} value={wordType.verb}>
                    verb
                  </option>
                  <option style={{ color: "black" }} value={wordType.noun}>
                    noun
                  </option>
                  <option style={{ color: "black" }} value={wordType.adjective}>
                    adjective
                  </option>
                  <option style={{ color: "black" }} value={wordType.adverb}>
                    adverb
                  </option>
                </Select>
                <Text fontSize="xs">
                  meaning / description of the word [optional]
                </Text>

                <Input
                  size="sm"
                  fontSize="xs"
                  placeholder="to help us with word identification"
                  name="wordDescription"
                  onChange={handleInputChange}
                />
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            {success ? (
              <Button
                size="sm"
                variant="outline"
                colorScheme="primary"
                _focus={{ outline: "none" }}
                onClick={closeModal}
              >
                close
              </Button>
            ) : (
              <Button
                size="xs"
                colorScheme="primary"
                _focus={{ outline: "none" }}
                onClick={handleSubmit}
              >
                submit word
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OverlayModal;
