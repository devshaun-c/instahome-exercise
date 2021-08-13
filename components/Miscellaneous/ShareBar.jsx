import React from "react";
import {
  LineShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { Box, Text, Flex, Stack, IconButton, useToast } from "@chakra-ui/react";
import { BsLink } from "react-icons/bs";
import { FaLine, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    padding: "8px !important",
    background: "whitesmoke !important",
    borderRadius: "var(--border-radius)",
  },
});

const ShareBar = ({ url, ...others }) => {
  const classes = useStyles();
  const toast = useToast();

  const handleCopytoClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
    toast({
      title: "Copied link",
      //   status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex alignItems="center" justify="space-between" {...others}>
      <Text fontSize="sm">Share this:</Text>
      <Stack direction="row" color="grey">
        <button className={classes.button} onClick={handleCopytoClipboard}>
          <BsLink />
        </button>
        <WhatsappShareButton
          url={url}
          title="Check out this activity"
          separator=" "
          className={classes.button}
        >
          <FaWhatsapp />
        </WhatsappShareButton>
        <TelegramShareButton className={classes.button} url={url}>
          <FaTelegramPlane />
        </TelegramShareButton>
        <LineShareButton className={classes.button} url={url}>
          <FaLine />
        </LineShareButton>
      </Stack>
    </Flex>
  );
};

export default ShareBar;
