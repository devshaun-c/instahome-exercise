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
import { FaBuilding, FaCreditCard, FaRocket, FaStoreAlt } from "react-icons/fa";
import StandardButton from "../Buttons/StandardButton";

const Offerings = () => {
  const OfferingBox = ({ title, icon, text }) => {
    return (
      <Flex p="32px" h={["250px", "300px"]}>
        <Flex flexDir="column">
          <Box fontSize="48px" mb={4} color="secondary">
            {icon}
          </Box>
          <Text fontWeight="bold">{title}</Text>
          <Divider
            mt={2}
            mb={6}
            w="80px"
            borderBottomWidth="2px"
            borderColor="secondary"
          />
          <Text>{text}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box position="relative" mt={["0px", "64px"]} p="64px 0" bg="#eee6ff">
      <Container>
        <Box>
          <Heading
            fontSize="42px"
            fontWeight="bold"
            lineHeight="1.4"
            textAlign="center"
            color="secondary"
            fontFamily="var(--special-font)"
          >
            Grow your business with us
          </Heading>
          <Text textAlign="center" fontSize="sm">
            All the tools you need in one place.
          </Text>
        </Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          h="100%"
          gap={4}
          mt="48px"
        >
          <GridItem>
            <OfferingBox
              title="Free Professional Website"
              icon={<FaStoreAlt />}
              text="Don't spend money on building your own custom site. Create yours with us at no cost."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Increase visibility"
              icon={<FaRocket />}
              text="Gain more traffic to your business from our community who are looking for new activities to explore."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Corporate business"
              icon={<FaBuilding />}
              text="Earn more from company events. We reach out to companies looking to organize team building events."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Easy Sharing"
              icon={<RiMailSendLine />}
              text="Share your new site on your own social media platforms or wherever you promote your business."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Booking & Payment integration"
              icon={<FaCreditCard />}
              text="(COMING SOON) We manage all the hassle of managing your bookings and payments."
            />
          </GridItem>
          <GridItem>
            <OfferingBox
              title="Digital marketing services"
              icon={<BiFoodMenu />}
              text="(COMING SOON) Strenghten your digital presence on social media platforms with our on-demand professional marketing team."
            />
          </GridItem>
        </Grid>
        <Flex justifyContent="center" mt="64px">
          <StandardButton size="lg" colorScheme="brand">
            Register with us now
          </StandardButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default Offerings;
