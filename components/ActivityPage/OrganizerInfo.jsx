import React from "react";
import {
  Avatar,
  Box,
  HStack,
  IconButton,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { GetClickableLink } from "../../utils/functions";
import Subheader from "./Subheader";
import Subsection from "./Subsection";

const useStyles = createUseStyles({});

const OrganizerInfo = (props) => {
  const classes = useStyles();
  const { orgInfo, activityInfo, ...others } = props;

  const { orgName, orgContact, orgWebsite, publicEmail } = orgInfo;
  const { hostName, hostContact, hostEmail } = activityInfo;

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
    <Subsection title="Contact information">
      <HStack color="lightgrey" spacing={1}>
        {orgWebsite && <LinkIconButton icon={<FaHome />} url={orgWebsite} />}
        {(hostContact || orgContact) && (
          <IconButton
            variant="ghost"
            fontSize="24px"
            icon={<FaWhatsapp />}
            size="sm"
            onClick={() => window.open(`https://wa.me/${orgContact}`)}
          />
        )}
        {(hostEmail || publicEmail) && (
          <IconButton
            variant="ghost"
            fontSize="24px"
            icon={<BsEnvelope />}
            size="sm"
            onClick={() => mailTo(publicEmail, `Contact Us - ${orgName}`, "")}
          />
        )}
      </HStack>
    </Subsection>
  );
};

export default OrganizerInfo;
