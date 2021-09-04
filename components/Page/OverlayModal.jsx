import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";

const OverlayModal = (props) => {
  const {
    isOpen,
    handleToggle,
    modalHeader,
    modalBody,
    modalFooter,
    size = "lg",
  } = props;

  const closeModal = () => {
    handleToggle(false);
  };

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={closeModal}
      size={size}
      scrollBehavior="inside"
      position="relative"
    >
      <ModalOverlay />
      <ModalContent ml={2} mr={2}>
        <ModalHeader boxShadow="var(--card-shadow)">{modalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>

        <ModalFooter>{modalFooter}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OverlayModal;
