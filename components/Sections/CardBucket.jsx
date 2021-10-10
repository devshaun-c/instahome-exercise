import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import ActivityCard from "../Cards/ActivityCard";
import Image from "next/image";
import img from "../../public/static/images/explore.svg";
import LoadingOverlay from "../Miscellaneous/LoadingOverlay";
import { BADGES } from "../../constants/badges";
import NotFound from "../LandingPage/NotFound";
import { fetchGetJSON } from "../../utils/api-helpers";

const useStyles = createUseStyles({});

const CardBucket = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    tag,
    header,
    height = "600px",
    definedList = [],
    categoryDetails = {
      topic: "Bucket Title",
      image: img,
      activityType: "",
    },
  } = props;
  const { topic, image, activityType } = categoryDetails;
  const [list, setList] = useState(definedList);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (definedList.length > 0) {
      const activities = await GetBucketData(id);
      if (activities) {
        setList(activities);
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  const GetBucketData = async (id) => {
    const data = await fetchGetJSON(`/api/templates/${id}`);
    return data;
  };

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
              onClick={() => console.log(activityType)}
            >
              Let us know
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
          <Text fontSize={["sm", "md"]} mb={[1, 2, 2]}>
            {tag}
          </Text>
        )}
        <Flex justify="space-between" align="center">
          <Heading fontSize={["lg", "xl"]} fontWeight="bold" lineHeight="1.3">
            {header}
          </Heading>
        </Flex>
      </Box>
      {loading ? (
        <Box minH="400px">
          <LoadingOverlay />
        </Box>
      ) : (
        <>
          {list.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={3}
              rowGap={7}
            >
              {list.map((activity) => (
                <ActivityCard
                  key={activity.activityId}
                  activity={activity}
                  badgeType={BADGES.new}
                />
              ))}
              <LastCard />
            </Grid>
          ) : (
            <NotFound image={image} activityType={activityType} />
          )}
        </>
      )}
    </Section>
  );
};

export default CardBucket;
