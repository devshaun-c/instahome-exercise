import React from "react";
import { Avatar, Box, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
    orgDescription,
    orgInstagram,
    orgFacebook,
    partnerImage,
    publicEmail,
  } = info;

  return (
    <Box {...others} className={classes.organizerInfo}>
      <Avatar mr={6} size="lg" src={partnerImage} />
      <Box>
        <Text fontSize="md" fontWeight="bold">
          {orgName}
        </Text>
        <Text fontSize="xs" mt={2} mb={1}>
          {orgDescription}
        </Text>
        {orgWebsite && (
          <Text fontSize="xs" mt={1} mb={2}>
            <Link color="teal.500" href={orgWebsite}>
              {orgWebsite}
            </Link>
          </Text>
        )}
        <HStack color="lightgrey" spacing={3}>
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
