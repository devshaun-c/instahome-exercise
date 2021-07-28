import React, { useState } from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import VerticalImageCard from "../components/Cards/VerticalImageCard";
import img from "../public/static/images/newsletter-bg.jpg";
import BackToTop from "../components/Page/BackToTop";
import { BADGES } from "../constants/badges";
import Hero from "../components/Sections/Hero";
import Focus from "../components/Sections/Focus";
import CardCarouselSection from "../components/Sections/CardCarouselSection";
import ImageCarouselSection from "../components/Sections/ImageCarouselSection";
import { StarIcon } from "@chakra-ui/icons";
import Image from "next/image";
import StackGroup from "../components/Sections/StackGroup";
import SquareCard from "../components/Cards/SquareCard";
import StandardButton from "../components/Buttons/StandardButton";
import Headliner from "../components/Sections/Headliner";
import PricingPlans from "../components/Sections/PricingPlans";
import Offerings from "../components/Sections/Offerings";
import { SwiperSlide } from "swiper/react";
import Footer from "../components/Sections/Footer";
import Newsletter from "../components/Sections/Newsletter";

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {},
  },
  swiperSlide: {
    width: "300px",
    paddingRight: "8px",
    paddingLeft: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
    },
  },
});

const SectionsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <div>
      <Hero
        height={["100%", "500px", "600px"]}
        bgColor="whitesmoke"
        bgImage=""
        alt=""
        callToAction={() => {}}
        secondaryAction={() => {}}
        primaryButtonText="Get Started Today"
        secondaryButtonText="See Schedule"
        header="It's a Big World Out There, Go Explore!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
        hasImage
        heroImg={img}
      />

      <Focus
        height={["100%", "50vh", "600px"]}
        bgColor="white"
        bgImage=""
        alt=""
        header="With Our Experience We Will Serve You"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
        tag="OUR EXPERIENCE"
        hasImage
        image=""
        imageSide="left"
      >
        <Stack direction={["column", "row", "row"]} spacing="40px">
          <Box display="flex" flexDir="column">
            <Text fontWeight="bold" fontSize="lg">
              20+
            </Text>
            <Text fontSize="x-small" width="90px" color="grey">
              partner companies
            </Text>
          </Box>
          <Box display="flex" flexDir="column">
            <Text fontWeight="bold" fontSize="lg">
              800+
            </Text>
            <Text fontSize="x-small" width="90px" color="grey">
              activities completed
            </Text>
          </Box>
          <Box display="flex" flexDir="column">
            <Text fontWeight="bold" fontSize="lg">
              20K+
            </Text>
            <Text fontSize="x-small" width="90px" color="grey">
              happy employees
            </Text>
          </Box>
        </Stack>
      </Focus>

      <Focus
        height="600px"
        bgColor="white"
        bgImage=""
        alt=""
        header="What Our Customer Say About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
        tag="CUSTOMER FEEDBACK"
        hasImage
        image={img}
        imageSide="right"
      >
        <Text fontWeight="bold" fontSize={["sm", "md"]}>
          Tanaka Satomi
        </Text>
        <Text fontSize={["xs", "sm"]} mt="4px">
          - Best customer service ever
        </Text>
        <HStack mt="16px">
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
        </HStack>
      </Focus>

      <CardCarouselSection
        tag="POPULAR ACTIVITIES"
        height="100%"
        header="Explore Our Popular Activities"
      >
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType="new"
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType="new"
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType="new"
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType="new"
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType="new"
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
      </CardCarouselSection>

      <ImageCarouselSection fullView pagination={false}>
        <SwiperSlide>
          <Box bg="orange" h="600px"></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="green.400" h="600px"></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="600px">
            <Image src={img} layout="fill" objectFit="cover" />
          </Box>
        </SwiperSlide>
      </ImageCarouselSection>

      <ImageCarouselSection
        tag="ACTIVITY IMAGES"
        header="Highlights from our recent activities"
        navigation={true}
        autoplay={false}
      >
        <SwiperSlide>
          <Box bg="orange" h={["300px", "600px"]}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bg="green.400" h={["300px", "600px"]}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h={["300px", "600px"]}>
            <Image src={img} layout="fill" objectFit="cover" />
          </Box>
        </SwiperSlide>
      </ImageCarouselSection>

      <StackGroup height="100%" bgColor="gray.100">
        <Box
          w="100%"
          h="100%"
          p="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="32px" color="lightgrey" fontWeight="bold">
            Simon Build
          </Text>
        </Box>
        <Box
          w="100%"
          h="100%"
          p="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="32px" color="lightgrey" fontWeight="bold">
            Just Dance
          </Text>
        </Box>
        <Box
          w="100%"
          h="100%"
          p="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="32px" color="lightgrey" fontWeight="bold">
            HoolaHoo
          </Text>
        </Box>
        <Box
          w="100%"
          h="100%"
          p="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="32px" color="lightgrey" fontWeight="bold">
            AfterWork
          </Text>
        </Box>
      </StackGroup>

      <StackGroup height="100%" bgColor="blue.500">
        <SquareCard>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
            Meals
          </Text>
          <Text fontSize="sm" color="grey" textAlign="center" mb={4}>
            Highlights from our recent activities
          </Text>
          <StandardButton
            variant="link"
            size="sm"
            colorScheme="teal"
            onClick={() => {}}
          >
            learn more
          </StandardButton>
        </SquareCard>
        <SquareCard>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
            Fitness
          </Text>
          <Text fontSize="sm" color="grey" textAlign="center" mb={4}>
            Highlights from our recent activities
          </Text>
          <StandardButton variant="link" size="sm" colorScheme="teal">
            learn more
          </StandardButton>
        </SquareCard>
        <SquareCard>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
            Entertainment
          </Text>
          <Text fontSize="sm" color="grey" textAlign="center" mb={4}>
            Highlights from our recent activities
          </Text>
          <StandardButton variant="link" size="sm" colorScheme="teal">
            learn more
          </StandardButton>
        </SquareCard>
        <SquareCard>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
            Academy
          </Text>
          <Text fontSize="sm" color="grey" textAlign="center" mb={4}>
            Highlights from our recent activities
          </Text>
          <StandardButton variant="link" size="sm" colorScheme="teal">
            learn more
          </StandardButton>
        </SquareCard>
      </StackGroup>

      <Headliner
        header="A Big Headliner to Highlight a Message"
        description="This is used to get attention of a visitor to send a key message about the product, sign-up for newsletters, or redirect to a particular page"
        textColor="white"
        height="100%"
        bgColor="teal.700"
        bgImg=""
        buttonLabel="See All"
        handleClick={() => {}}
      />

      <PricingPlans
        header="Market and sell from one place"
        description="Plans that start free and grow with you. "
        bgColor="whitesmoke"
        textColor="black"
        plans={[
          {
            name: "Essentials",
            highlight: false,
            description:
              "All the tools you need to start promoting your activites and events.",
            price: "7.99",
            fcn: () => {},
            list: [
              {
                text: "Included in suscriber newsletter",
                included: true,
              },
              { text: "Scheduling", included: true },
              { text: "Two (2) activity templates", included: true },
              {
                text: "Corporate connection",
                included: false,
                info: "Gain visibility and business from our growing corporate partners",
              },
              {
                text: "Built-in payment and booking system",
                included: false,
                info: "Additional transaction fees apply for online payments",
              },
              {
                text: "Support team members",
                included: false,
                info: "Add co-organizers who can help you in organizing your activities",
              },
              {
                text: "Featured weekly",
                included: false,
                info: "Your organization will be featured on our main website every week",
              },
              { text: "24/7 priority support", included: false },
              { text: "Digital marketing tools", included: false },
            ],
          },
          {
            name: "Standard",
            highlight: true,
            description:
              "All the tools you need to start promoting your activites and events.",
            price: "18.99",
            fcn: () => {},
            list: [
              { text: "Included in suscriber newsletter", included: true },
              { text: "Scheduling", included: true },
              { text: "Four (4) activity templates", included: true },
              {
                text: "Corporate connection",
                included: true,
                info: "Gain visibility and business from our growing corporate partners",
              },
              {
                text: "Built-in payment gateway and booking system",
                included: true,
                info: "Additional transaction fees apply for online payments",
              },
              {
                text: "Support team members",
                included: true,
                info: "Add co-organizers who can help you in organizing your activities",
              },
              {
                text: "Featured weekly",
                included: false,
                info: "Your organization will be featured on our main website every week",
              },
              { text: "24/7 priority support", included: false },
              { text: "Digital marketing tools", included: false },
            ],
          },
          {
            name: "Plus",
            highlight: false,
            description:
              "All the tools you need to start promoting your activites and events.",
            price: "34.99",
            fcn: () => {},
            list: [
              { text: "Included in suscriber newsletter", included: true },
              { text: "Scheduling", included: true },
              { text: "Eight (8) activity templates", included: true },
              {
                text: "Corporate connection",
                included: true,
                info: "Gain visibility and business from our growing corporate partners",
              },
              {
                text: "Built-in payment gateway and booking system",
                included: true,
                info: "Additional transaction fees apply for online payments",
              },
              {
                text: "Support team members",
                included: true,
                info: "Add co-organizers who can help you in organizing your activities",
              },
              {
                text: "Featured weekly",
                included: true,
                info: "Your organization will be featured on our main website every week",
              },
              { text: "24/7 priority support", included: true },
              { text: "Digital marketing tools", included: true },
            ],
          },
        ]}
      />

      <Offerings
        header="Market and sell from one place"
        description="Plans that start free and grow with you"
      />

      <Newsletter height="600px" bgColor="teal.300" />

      <Footer bgColor="whitesmoke" />

      <BackToTop show right="5%" />
    </div>
  );
};

export default SectionsPage;
