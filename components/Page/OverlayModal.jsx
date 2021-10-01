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
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  overlay: {
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
});

const OverlayModal = (props) => {
  const classes = useStyles();
  const {
    isOpen,
    handleToggle,
    modalHeader,
    modalBody,
    modalFooter,
    hasClose = false,
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
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent ml={2} mr={2}>
        <ModalHeader boxShadow="var(--card-shadow)">{modalHeader}</ModalHeader>
        {hasClose && <ModalCloseButton />}
        <ModalBody className={classes.overlay}>{modalBody}</ModalBody>

        {modalFooter && <ModalFooter zIndex="500">{modalFooter}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default OverlayModal;
