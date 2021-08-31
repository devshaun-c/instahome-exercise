import React from "react";
import { Avatar, Box, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { GetClickableLink } from "../../lib/utils";

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
    orgDescription,
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
        href={GetClickableLink(url)}
        target="_blank"
        rel="noopener,noreferrer"
      />
    );
  };

  const mailTo = (email, subject, body) => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject) || ""}&body=${
        encodeURIComponent(body) || ""
      }`
    );
  };

  return (
    <Box {...others} className={classes.organizerInfo}>
      <Avatar mr={6} size="lg" src={partnerImage} />
      <Box>
        <Text fontSize="sm" fontWeight="bold">
          {orgName}
        </Text>
        <Text fontSize="xs" mt={1} mb={2}>
          {orgDescription}
        </Text>

        <HStack color="lightgrey" spacing={1}>
          {orgWebsite && <LinkIconButton icon={<FaHome />} url={orgWebsite} />}
          {orgContact && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<FaWhatsapp />}
              size="sm"
              onClick={() => window.open(`https://wa.me/${orgContact}`)}
            />
          )}
          {publicEmail && (
            <IconButton
              variant="ghost"
              fontSize="24px"
              icon={<BsEnvelope />}
              size="sm"
              onClick={() => mailTo(publicEmail, `Contact Us - ${orgName}`, "")}
            />
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default OrganizerInfo;
