import React from "react";
import { Avatar, Box, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import {
  FaFacebookSquare,
  FaHome,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const useStyles = createUseStyles({
  organizerInfo: {
    display: "flex",
    flexDirection: "row",
  },
});

const OrganizerInfo = (props) => {
  const classes = useStyles();
  const { info, ...others } = props;

  const {
    orgName,
    orgContact,
    orgWebsite,
    orgSummary,
    orgInstagram,
    orgFacebook,
    partnerImage,
    publicEmail,
  } = info;

  const LinkIconButton = ({ url, icon }) => {
    return (
      <IconButton
        as={Link}
        variant="ghost"
        fontSize="24px"
        icon={icon}
        size="sm"
        href={url}
        target="_blank"
        rel="noopener,noreferrer"
      />
    );
  };

  return (
    <Box {...others} className={classes.organizerInfo}>
      <Avatar mr={6} size="lg" src={partnerImage} />
      <Box>
        <Text fontSize="md" fontWeight="bold">
          {orgName}
        </Text>
        <Text fontSize="xs" mt={1} mb={2}>
          {orgSummary}
        </Text>

        <HStack color="lightgrey" spacing={1}>
          {orgWebsite && <LinkIconButton icon={<FaHome />} url={orgWebsite} />}
          {orgContact && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<FaWhatsapp />}
              size="sm"
            />
          )}
          {publicEmail && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<BsEnvelope />}
              size="sm"
            />
          )}
          {orgInstagram && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<FaInstagram />}
              size="sm"
            />
          )}
          {orgFacebook && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<FaFacebookSquare />}
              size="sm"
            />
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default OrganizerInfo;
