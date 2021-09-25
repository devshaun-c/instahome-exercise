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

const useStyles = createUseStyles({});

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
    <Flex
      {...others}
      flexDirection={["column", "row", "row"]}
      alignItems={["center", "start", "start"]}
    >
      <Avatar mr={[0, 6, 6]} size="lg" src={partnerImage} />
      <Box textAlign={["center", "start", "start"]}>
        <Text fontSize="sm" fontWeight="bold" mt={[2, 0, 0]}>
          {orgName}
        </Text>
        <Text fontSize="xs" mt={1} mb={2}>
          {orgDescription}
        </Text>

        <HStack
          color="lightgrey"
          spacing={1}
          justifyContent={["center", "flex-start", "flex-start"]}
        >
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
    </Flex>
  );
};

export default OrganizerInfo;
