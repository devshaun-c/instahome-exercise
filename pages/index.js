import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import VerticalImageCard from "../components/Cards/VerticalImageCard";
import img from "../public/static/images/explore.svg";
import img2 from "../public/static/images/coding.svg";
import BackToTop from "../components/Page/BackToTop";
import Hero from "../components/Sections/Hero";
import CardCarouselSection from "../components/Sections/CardCarouselSection";
import { SwiperSlide } from "swiper/react";
import Newsletter from "../components/Sections/Newsletter";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import Featured from "../components/LandingPage/Featured";
import { GetActiveActivities, GetAllPartners } from "../utils/firebase";
import ActivitiesBucket from "../components/Sections/ActivitiesBucket";
import { shuffle } from "../utils/functions";
import LocationBar from "../components/Miscellaneous/LocationBar";
import volunteerImg from "../public/static/images/volunteer.svg";
import workshopImg from "../public/static/images/workshop.svg";
import { ACTIVITY_CATEGORY, ACTIVITY_TYPE } from "../constants/activity";
import ActivitiesPlaceholder from "../components/Sections/ActivitesPlaceholder";
import TabsPanel from "../components/Grouping/TabsPanel";
import StickyBox from "../components/Page/StickyBox";
import ActivitiesCarousel from "../components/Sections/ActivitiesCarousel";
import { fetchGetJSON } from "../utils/api-helpers";
import NoActivities from "../components/LandingPage/NoActivities";

const useStyles = createUseStyles({
  home: {
    position: "relative",
  },
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
    },
  },
});

const temporaryFeatured = [
  {
    title: "Learn Woodworking with Tomi",
    orgName: "Art Matrix",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
    coverImage:
      "https://firebasestorage.googleapis.com/v0/b/after-work-73b2f.appspot.com/o/R2b2xwxpchxjGktnS61O%2Fimglist-1.jpg?alt=media&token=c1c2cd85-db6a-45c8-b495-c4eba96fa80b",
    partnerId: "art-matrix",
    activityId: "eu55lY0rGxSca3pnfY8H",
    children: (
      <Box>
        {/* <Text fontWeight="bold" fontSize={["sm", "md"]}>
          Tanaka Satomi
        </Text>
        <Text fontSize={["xs", "sm"]} mt="4px">
          - A great introduction to woodworking. Tomi's workshop has been
          nothing but fun and inspirational.
        </Text>
        <HStack mt="16px">
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
          <StarIcon color="gold" />
        </HStack> */}
      </Box>
    ),
  },
  {
    title: "Learn Woodworking with Mike",
    orgName: "Art Matrix",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in.",
    coverImage:
      "https://firebasestorage.googleapis.com/v0/b/after-work-73b2f.appspot.com/o/R2b2xwxpchxjGktnS61O%2Fimglist-woodwork2.jpg?alt=media&token=8eeb5331-562c-4beb-854e-16e5aabbe648",
    partnerId: "art-matrix",
    activityId: "eu55lY0rGxSca3pnfY8H",
  },
];

const Home = (props) => {
  const classes = useStyles();
  const scrollRef = useRef();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [communityActivities, setCommunityActivities] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const eventsFromServer = JSON.parse(props.events);
  const workshopsFromServer = JSON.parse(props.workshops);
  const communityActivitiesFromServer = JSON.parse(props.communityActivities);
  const partnersFromServer = JSON.parse(props.partners);

  useEffect(() => {
    if (workshopsFromServer) {
      setWorkshops([...shuffle(workshopsFromServer)]);
    }
    if (communityActivitiesFromServer) {
      setCommunityActivities([...shuffle(communityActivitiesFromServer)]);
    }
    if (eventsFromServer) {
      setEvents([...shuffle(eventsFromServer)]);
    }
  }, []);

  const handleTabChange = (id) => {
    setTabIndex(id);
    scrollToPos();
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [tabIndex]);

  const scrollToPos = () => scrollRef.current.scrollIntoView();

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Never miss out on life",
        description: "",
      }}
      alwaysVisible
    >
      <div className={classes.home}>
        <Hero />

        {workshops.length > 0 ||
        communityActivities.length > 0 ||
        events.length > 0 ? (
          <>
            <div ref={scrollRef}></div>
            <LocationBar />
            <StickyBox onTopAll>
              <TabsPanel
                handleTabChange={handleTabChange}
                tabIndex={tabIndex}
              ></TabsPanel>
            </StickyBox>

            {tabIndex == 0 && (
              <>
                {events.length > 0 && (
                  <ActivitiesCarousel
                    tag="UPCOMING EVENTS"
                    height="100%"
                    header="Don't miss out on these exciting events"
                    list={events}
                    handleViewAll={handleTabChange}
                    tabIndex={1}
                    categoryDetails={{
                      topic: "Looking for more events to fill up your week?",
                      image: volunteerImg,
                      activityType: ACTIVITY_CATEGORY.community,
                    }}
                    isLoading={isLoading}
                  />
                )}

                {workshops.length > 0 && (
                  <ActivitiesCarousel
                    tag="WORKSHOPS"
                    height="100%"
                    header="Develop Your Skills, Discover New Hobbies"
                    list={workshops}
                    handleViewAll={handleTabChange}
                    tabIndex={2}
                    categoryDetails={{
                      topic: "Fun-filled and interesting workshops",
                      image: workshopImg,
                      activityType: ACTIVITY_CATEGORY.workshop,
                    }}
                    isLoading={isLoading}
                  />
                )}

                {communityActivities.length > 0 && (
                  <ActivitiesCarousel
                    tag="COMMUNITY ACTIVITIES"
                    height="100%"
                    header="Volunteer, Bring Positive Change"
                    list={communityActivities}
                    handleViewAll={handleViewAll}
                    tabIndex={3}
                    categoryDetails={{
                      topic: "Have great ideas for community activities?",
                      image: volunteerImg,
                      activityType: ACTIVITY_CATEGORY.community,
                    }}
                    isLoading={isLoading}
                  />
                )}
              </>
            )}

            {tabIndex == 1 && (
              <ActivitiesBucket
                tag="UPCOMING EVENTS"
                height="100%"
                header="Don't miss out on these exciting events"
                categoryDetails={{
                  topic: "Have new ideas for events?",
                  image: workshopImg,
                  activityType: ACTIVITY_CATEGORY.event,
                }}
              />
            )}

            {tabIndex == 2 && (
              <ActivitiesBucket
                tag="WORKSHOPS"
                height="100%"
                header="Develop Your Skills, Discover New Hobbies"
                categoryDetails={{
                  topic: "Have new ideas for workshops?",
                  image: workshopImg,
                  activityType: ACTIVITY_CATEGORY.workshop,
                }}
              />
            )}

            {tabIndex == 3 && (
              <ActivitiesBucket
                tag="COMMUNITY ACTIVITIES"
                height="100%"
                header="Volunteer, Bring Positive Change"
                categoryDetails={{
                  topic: "Have great ideas for community activities?",
                  image: volunteerImg,
                  activityType: ACTIVITY_CATEGORY.community,
                }}
              />
            )}
          </>
        ) : (
          <ActivitiesPlaceholder />
        )}

        <Newsletter />

        <CardCarouselSection
          tag="PARTNERS"
          height="100%"
          header="Who are our partners?"
        >
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tomi Workshop"
              image={img}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Art Matrix"
              image={img2}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tomi Workshop"
              image={img}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Art Matrix"
              image={img2}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tomi Workshop"
              image={img}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Art Matrix"
              image={img2}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
        </CardCarouselSection>
      </div>

      <BackToTop show right="5%" />
    </Page>
  );
};

export default Home;

//Changed from getServerSideProps 26/09/2021
export const getStaticProps = async (context) => {
  const maxDataLimit = 8;
  const partners = await GetAllPartners();
  const events = await GetActiveActivities("1", maxDataLimit);
  const workshops = await GetActiveActivities("2", maxDataLimit);
  const communityActivities = await GetActiveActivities("3", maxDataLimit);

  return {
    props: {
      partners: partners ? JSON.stringify(partners) : null,
      workshops: workshops ? JSON.stringify(workshops) : null,
      events: events ? JSON.stringify(events) : null,
      communityActivities: communityActivities
        ? JSON.stringify(communityActivities)
        : null,
    },
  };
};
