import React from "react";
import { Box, Button, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import { useTheme } from "@emotion/react";
import ActivityCard from "../Cards/ActivityCard";
import Image from "next/image";
import img from "../../public/static/images/explore.svg";
import { BADGES } from "../../constants/badges";

const useStyles = createUseStyles({});

const ActivitiesBucket = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    bgImg,
    tag,
    header,
    children,
    height = "600px",
    list,
  } = props;

  const LastCard = () => {
    return (
      <Flex
        borderRadius="var(--border-radius)"
        justifyContent="space-between"
        flexDirection="column"
        bg="brand.800"
        boxShadow="var(--card-shadow)"
      >
        <Flex flexDirection="column" p={4} mt={4}>
          <Text fontSize="sm" fontWeight="bold" color="white">
            Tell us what you love
          </Text>
          <Box mt={2}>
            <Button size="sm" fontSize="14px" colorScheme="teal">
              Get started
            </Button>
          </Box>
        </Flex>
        <Box
          minH="200px"
          width="100%"
          overflow="hidden"
          borderRadius="8px 8px 0 0"
          position="relative"
        >
          <Image src={img} layout="fill" objectFit="cover" />
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
      <Box mb={8}>
        {tag && (
          <Text fontSize={["xs", "xs"]} mb={[1, 2, 2]}>
            {tag}
          </Text>
        )}
        <Flex justify="space-between" align="center">
          <Heading
            fontSize={["md", "x-large"]}
            fontWeight="bold"
            lineHeight="1.3"
          >
            {header}
          </Heading>

          {/* <Link fontSize="md">See all</Link> */}
        </Flex>
      </Box>
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
        {list.length > 0 &&
          list.map((workshop) => (
            <ActivityCard
              key={workshop.activityId}
              activity={workshop}
              badgeType={BADGES.new}
            />
          ))}
        <LastCard />
      </Grid>
    </Section>
  );
};

export default ActivitiesBucket;
