import React, { useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
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

const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {},
  },
});

const DemoPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <div>
      <Hero
        height="600px"
        bgColor="whitesmoke"
        bgImage=""
        alt=""
        callToAction={() => {}}
        secondaryAction={() => {}}
        primaryButtonText="Call to action"
        secondaryButtonText="Secondary action"
        header="It's a Big World Out There, Go Explore!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
        tag="Hello"
        hasImage
        heroImg={img}
      />

      <Focus
        height="600px"
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
        <HStack spacing="40px">
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
        </HStack>
      </Focus>

      <Focus
        height="600px"
        bgColor="white"
        bgImage=""
        alt=""
        header="What Our Customer Say About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
        tag="OUR EXPERIENCE"
        hasImage
        image={img}
        imageSide="right"
      >
        <Text fontWeight="bold">Tanaka Satomi</Text>
        <Text fontSize="sm" mt="4px">
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
        <Box pr="16px">
          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeObj={{ color: "purple", text: "new" }}
            width="300px"
            action={() => alert("CLICKED")}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </Box>
        <Box pr="16px">
          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeObj={{ color: "purple", text: "new" }}
            width="300px"
            action={() => alert("CLICKED")}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </Box>
        <Box pr="16px">
          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeType="new"
            width="300px"
            action={() => alert("CLICKED")}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </Box>
        <Box pr="16px">
          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeType="popular"
            width="300px"
            action={() => alert("CLICKED")}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </Box>
        <Box pr="16px">
          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeType="featured"
            width="300px"
            action={() => alert("CLICKED")}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </Box>
      </CardCarouselSection>

      <ImageCarouselSection
        height="100%"
        fullView
        autoPlay
        showArrows={false}
        showIndicators={false}
      >
        <Box bg="orange" h="600px"></Box>
        <Box bg="green.400" h="600px"></Box>
        <Box height="600px">
          <Image src={img} layout="fill" objectFit="cover" />
        </Box>
      </ImageCarouselSection>

      <ImageCarouselSection
        tag="ACTIVITY IMAGES"
        height="100%"
        header="Highlights from our recent activities"
      >
        <Box height="500px">
          <Image src={img} layout="fill" objectFit="cover" />
        </Box>
        <Box bg="orange" h="500px"></Box>
        <Box bg="green.400" h="500px"></Box>
      </ImageCarouselSection>

      <BackToTop show right="5%" />
    </div>
  );
};

export default DemoPage;
