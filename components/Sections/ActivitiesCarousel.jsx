import React from "react";
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import Carousel from "../Grouping/Carousel";
import ActivityCard from "../Cards/ActivityCard";
import { BADGES } from "../../constants/badges";
import { SwiperSlide } from "swiper/react";
import placeholderImg from "../../public/static/images/explore.svg";
import Image from "next/image";
import LoadingOverlay from "../Miscellaneous/LoadingOverlay";
import TextButton from "../Buttons/TextButton";

const useStyles = createUseStyles({
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "300px",
    },
  },
});

const ActivitiesCarousel = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    tag,
    header,
    children,
    isLoading = false,
    pagination = false,
    grabCursor = true,
    enabled = true,
    height = "600px",
    list,
    tabIndex,
    handleViewAll,
    categoryDetails = {
      topic: "Looking for more activities?",
      image: placeholderImg,
      category: "",
    },
    ...others
  } = props;

  const { topic, image, category } = categoryDetails;

  const LastCard = () => {
    return (
      <Flex
        borderRadius="var(--border-radius)"
        justifyContent="space-between"
        flexDirection="column"
        bg="secondary"
        boxShadow="var(--card-shadow)"
        h={["380px", "420px"]}
      >
        <Flex flexDirection="column" p={4} mt={2}>
          <Text fontSize="sm" fontWeight="bold" color="white">
            {topic}
          </Text>
          <Box mt={4}>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="whiteAlpha"
              onClick={() => handleViewAll(tabIndex)}
            >
              View all
            </Button>
          </Box>
        </Flex>
        <Box
          minH="200px"
          height="100%"
          width="100%"
          overflow="hidden"
          borderRadius="8px 8px 0 0"
          position="relative"
        >
          <Image src={image} layout="fill" objectFit="contain" />
        </Box>
      </Flex>
    );
  };

  return (
    <Section
      bgColor={bgColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <Box mb={8} mt={8}>
        {tag && (
          <Text fontSize="md" mb={[1, 2, 2]}>
            {tag}
          </Text>
        )}
        <Flex justify="space-between" align="center">
          <Heading fontSize="xl" fontWeight="bold" lineHeight="1.3">
            {header}
          </Heading>
          {list.length > 5 && (
            <TextButton onClick={() => handleViewAll(tabIndex)}>
              View all
            </TextButton>
          )}
        </Flex>
      </Box>
      <Box>
        <Carousel
          slidesPerView={"auto"}
          freeMode={true}
          pagination={pagination}
          grabCursor={grabCursor}
          enabled={enabled}
          {...others}
        >
          {list.length > 0 &&
            list.map((workshop) => (
              <SwiperSlide
                className={classes.swiperSlide}
                key={workshop.activityId}
              >
                <ActivityCard activity={workshop} badgeType={BADGES.new} />
              </SwiperSlide>
            ))}
          <SwiperSlide className={classes.swiperSlide}>
            <LastCard />
          </SwiperSlide>
        </Carousel>
      </Box>

      {isLoading && <LoadingOverlay />}
    </Section>
  );
};

export default ActivitiesCarousel;
