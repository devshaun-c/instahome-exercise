import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Stack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  OrderedList,
  Image,
} from "@chakra-ui/react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import Container from "../Page/Container";
import faqImage from "../../public/static/images/faq.svg";
import TextButton from "../Buttons/TextButton";

const Faq = ({ handleEnquire }) => {
  let router = useRouter();

  const AccordionTitle = ({ title }) => {
    return (
      <h2>
        <AccordionButton
          color="gray.500"
          _expanded={{ bg: "whitesmoke" }}
          _focus={{ outline: "none" }}
        >
          <Box
            flex="1"
            fontSize="sm"
            textAlign="left"
            fontWeight="normal"
            p={2}
            pl={0}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
    );
  };

  const Paragraph = ({ children }) => {
    return <Text mb={3}>{children}</Text>;
  };

  const CustomAccordionPanel = ({ children }) => {
    return (
      <AccordionPanel pb={8} fontSize={["xs", "sm"]}>
        {children}
      </AccordionPanel>
    );
  };

  return (
    <Container>
      <Box mt="100px" mb="100px">
        <Box mb="64px">
          <Text
            fontSize="42px"
            fontWeight="bold"
            lineHeight="1.4"
            textAlign="center"
            color="brand.500"
            fontFamily="var(--special-font)"
          >
            Have Questions?
          </Text>
          <Text textAlign="center" fontSize="sm">
            No worries. We are here for you.
          </Text>
        </Box>
        <Stack direction={["column", "column", "row"]} spacing="64px">
          <Box
            w={["100%", "100%", "40%"]}
            // p={6}
            // boxShadow="var(--box-shadow)"
            // borderRadius="var(--border-radius)"
            h="100%"
          >
            <Box mb={8}>
              <Text fontSize="md" fontWeight="bold">
                Contact us
              </Text>
              <Text fontSize="xs" color="gray.500">
                Our customer support will be in touch ASAP.
              </Text>
            </Box>
            <Flex alignItems="center" mb={2}>
              <FaWhatsapp fontSize="18px" />
              <Flex ml={3} alignItems="center">
                <Text>+6016-3682519</Text>
                <Text fontSize="xs" color="gray.400" ml={3}>
                  (9am - 11pm MYT)
                </Text>
              </Flex>
            </Flex>

            <Flex alignItems="center">
              <FaRegEnvelope />
              <Text ml={3}>hello@afterwork.my</Text>
            </Flex>

            <Image src={faqImage} mt="64px" />
          </Box>
          <Box w={["100%", "100%", "60%"]}>
            <Text fontWeight="bold" mb={4} fontSize="md">
              Frequently Asked Questions
            </Text>
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionTitle title="How can I become a partner?" />
                <CustomAccordionPanel>
                  <Text>It's simple!</Text>
                  <Paragraph>
                    Just{" "}
                    <TextButton
                      fontSize={["xs", "sm"]}
                      textDecoration="underline"
                      onClick={handleEnquire}
                    >
                      enquire
                    </TextButton>{" "}
                    with us and share a little about your
                    organization/business/activity.
                  </Paragraph>
                  <Paragraph>
                    We will review your enquiry within 1-2 days and get you
                    started.
                  </Paragraph>
                  <OrderedList mt={2}>
                    <ListItem>
                      At least one of the organizing committee must be a
                      Malaysian citizen.
                    </ListItem>
                    <ListItem>
                      For businesses, a valid registration with SSM is required.
                    </ListItem>
                    <ListItem>
                      Adhere to all of our Activity Guidelines and Terms &
                      Conditions.
                    </ListItem>
                  </OrderedList>
                </CustomAccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle title="How does AfterWork help promote my activities and events?" />
                <CustomAccordionPanel>
                  <Paragraph>
                    We are NOT just a marketplace. We focus on growing a
                    community of people who are interested to explore and
                    discover new interests.
                  </Paragraph>
                  <Paragraph>
                    By partnering with us, all activities and events you share
                    with us will be seen by our community.
                  </Paragraph>
                  <Paragraph>
                    For organizations and businesses looking to tap into the
                    corporate team building or CSR, we are in touch with
                    companies who we can connect you too.
                  </Paragraph>
                </CustomAccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle title="How much do I have to pay?" />
                <CustomAccordionPanel>
                  <Paragraph>
                    It is <b>FREE</b> to be a partner and start promoting your
                    activities with us.
                  </Paragraph>
                  <Paragraph>
                    We also offer additional on-demand services that may require
                    additional payments or commissions as follows:
                  </Paragraph>
                  <OrderedList mt={2}>
                    <ListItem>
                      Organizing of corporate team building events
                    </ListItem>
                    <ListItem>
                      Affordable professional photography/videography services
                    </ListItem>
                    <ListItem>Digital marketing services</ListItem>
                    <ListItem>Booking & Online payment integration</ListItem>
                    <ListItem>
                      Weekly featuring on our site and social media
                    </ListItem>
                  </OrderedList>
                </CustomAccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle title="What kind of activities and events can I promote?" />
                <CustomAccordionPanel>
                  <Paragraph>
                    We prioritize growth and personal development of our
                    community and the betterment of our environment.
                  </Paragraph>
                  <Paragraph>
                    But ofcourse, what's life without some fun! Check out the
                    list below for some examples that we are promoting as well.
                  </Paragraph>
                  <OrderedList my={2}>
                    <ListItem>Arts & Craft workshops</ListItem>
                    <ListItem>Coding workshops</ListItem>
                    <ListItem>Volunteering activities</ListItem>
                    <ListItem>Sports and Wellness</ListItem>
                    <ListItem>Music events</ListItem>
                    <ListItem>Outdoor adventure activities</ListItem>
                  </OrderedList>
                  <Paragraph>
                    All activities and events must adhere to our Guidelines and
                    Terms & Conditions.
                  </Paragraph>
                </CustomAccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle title="I already have my own website. Can I still use AfterWork?" />
                <CustomAccordionPanel>
                  <Paragraph>Ofcourse!</Paragraph>
                  <Paragraph>
                    Our main purpose is simply to share your activities with our
                    community and for them to learn more about you.
                  </Paragraph>
                </CustomAccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle title="Is there any partnership cancellation policy?" />
                <CustomAccordionPanel>
                  You may cancel anytime. There are no additional charges.
                  However, any outstanding payments must be paid.
                </CustomAccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle title="How can I learn more about AfterWork?" />
                <CustomAccordionPanel>
                  We are always happy to get to know our potential partners.
                  Feel free to contact us at +6016-6319214 or drop us an email
                  at hello@afterwork.my!
                </CustomAccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Faq;
