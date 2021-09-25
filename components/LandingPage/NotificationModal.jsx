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

const NotificationModal = (props) => {
  const {
    isOpen,
    handleToggle,
    modalHeader,
    modalBody,
    modalFooter,
    hasClose = true,
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
        {modalHeader && (
          <ModalHeader boxShadow="var(--card-shadow)">
            {modalHeader}
          </ModalHeader>
        )}
        {hasClose && <ModalCloseButton />}
        <ModalBody>{modalBody}</ModalBody>

        {modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default NotificationModal;
