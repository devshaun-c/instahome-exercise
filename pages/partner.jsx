import React, { useState, useEffect, useRef } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import EnquiryForm from "../components/EnquiryPage/EnquiryForm";
import PartnerHero from "../components/EnquiryPage/PartnerHero";
import Offerings from "../components/EnquiryPage/Offerings";
import Faq from "../components/EnquiryPage/Faq";
import OverlayModal from "../components/Page/OverlayModal";

const useStyles = createUseStyles({});

const PartnerEnquiry = () => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Partner Enquiry",
        description: "",
      }}
      showNav={true}
      alwaysVisible
    >
      <PartnerHero handlePrimary={onOpen} />
      <Offerings handlePrimary={onOpen} />
      <Faq handleEnquire={onOpen} />

      <OverlayModal
        isOpen={isOpen}
        onClose={onClose}
        modalBody={<EnquiryForm />}
        modalHeader={
          <Box>
            <Text fontSize="xs" color="gray.600">
              START FREE
            </Text>
            <Text color="brand.600" fontSize="x-large" fontWeight="bold">
              Partner with us.
            </Text>
          </Box>
        }
      />
    </Page>
  );
};

export default PartnerEnquiry;
