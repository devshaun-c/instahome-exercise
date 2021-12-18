import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Container from "../Page/Container";
import { RiMailSendLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { CgToolbox } from "react-icons/cg";

const Offerings = () => {
  const OfferingBox = ({ title, icon, text }) => {
    return (
      <Flex
        boxShadow="var(--default-box-shadow)"
        p="32px"
        borderRadius="var(--default-border-radius)"
        h="300px"
      >
        <Flex flexDir="column">
          <Box fontSize="48px" mb={4} color="brand.400">
            {icon}
          </Box>
          <Text fontWeight="bold">{title}</Text>
          <Divider mt={2} mb={6} w="80px" borderBottomWidth="2px" />
          <Text>{text}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box position="relative" mt={["0px", "64px"]} p="64px 0">
      <Container>
        <Box>
          <Heading
            fontSize="42px"
            fontWeight="bold"
            lineHeight="1.4"
            textAlign="center"
            color="brand.500"
            fontFamily="var(--special-font)"
          >
            Grow your business with us
          </Heading>
          <Text textAlign="center">All the tools you need in one place.</Text>
        </Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          h="100%"
          gap={6}
          mt="48px"
        >
          <GridItem>
            <OfferingBox
              title="Booking & Payment integration"
              icon={<BiFoodMenu />}
              text="We help you to reach out and organize company team building events."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Easy Sharing"
              icon={<RiMailSendLine />}
              text="No more endless forwarding of texts and images whenever customers enquire about your products."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Increase visibility"
              icon={<CgToolbox />}
              text="Gain more visibility from our community who are looking for new activities to explore."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Digital marketing services"
              icon={<BiFoodMenu />}
              text="Strenghten your digital presence on social media platforms with our professional marketing team."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Corporate business"
              icon={<BiFoodMenu />}
              text="We help you to reach out and organize company team building events."
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Offerings;
