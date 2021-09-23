import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import VerticalImageCard from "../components/Cards/VerticalImageCard";
import img from "../public/static/images/explore.svg";
import img2 from "../public/static/images/coding.svg";
import BackToTop from "../components/Page/BackToTop";
import { BADGES } from "../constants/badges";
import Hero from "../components/Sections/Hero";
import CardCarouselSection from "../components/Sections/CardCarouselSection";
import { SwiperSlide } from "swiper/react";
import Newsletter from "../components/Sections/Newsletter";
import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import Featured from "../components/LandingPage/Featured";
import { GetAllActiveActivities, GetAllPartners } from "../lib/firebase";
import ActivitiesBucket from "../components/Sections/ActivitiesBucket";
import { shuffle } from "../lib/utils";
import LocationBar from "../components/Miscellaneous/LocationBar";
import volunteerImg from "../public/static/images/volunteer.svg";
import workshopImg from "../public/static/images/workshop.svg";
import { ACTIVITY_CATEGORY, ACTIVITY_TYPE } from "../constants/activity";

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
  const router = useRouter();
  const [activities, setActivities] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [communityEvents, setCommunityEvents] = useState([]);

  const activitiesFromServer = JSON.parse(props.activities);
  const partnersFromServer = JSON.parse(props.partners);

  useEffect(() => {
    if (activitiesFromServer.length) {
      setActivities(activitiesFromServer);
      setWorkshops([
        ...shuffle(activitiesFromServer),
        ...shuffle(activitiesFromServer),
      ]);
      setCommunityEvents([...shuffle(activitiesFromServer)]);
    }
  }, []);

  return (
    <Page
      pageMeta={{
        title: "AfterWork - Never miss out on life",
        description: "",
      }}
      autohideNavbar
    >
      <div className={classes.home}>
        <Hero />

        <LocationBar />
        {/* <Featured list={temporaryFeatured} /> */}

        {workshops.length > 0 && (
          <ActivitiesBucket
            tag="WORKSHOPS"
            height="100%"
            header="Develop New Skills or Find a Hobby"
            list={workshops}
            categoryDetails={{
              topic: "Ideas for workshops?",
              image: workshopImg,
              activityType: ACTIVITY_CATEGORY.workshop,
            }}
          />
        )}

        {communityEvents.length > 0 && (
          <ActivitiesBucket
            tag="COMMUNITY EVENTS"
            height="100%"
            header="Be part of a positive change"
            list={communityEvents}
            categoryDetails={{
              topic: "Ideas for community events?",
              image: volunteerImg,
              activityType: ACTIVITY_CATEGORY.community,
            }}
          />
        )}

        {/* <CardCarouselSection
          tag="FITNESS & HEALTH"
          height="100%"
          header="Keep Fit, Stay Active"
        >
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tanaka Satomi"
              image={img}
              subtitle="UI/UX designer"
              badgeType={BADGES.new}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tanaka Satomi"
              image={img2}
              subtitle="UI/UX designer"
              badgeType={BADGES.new}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tanaka Satomi"
              image={img}
              subtitle="UI/UX designer"
              badgeType={BADGES.popular}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tanaka Satomi"
              image={img2}
              subtitle="UI/UX designer"
              badgeType={BADGES.limited}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <VerticalImageCard
              title="Tanaka Satomi"
              image={img}
              subtitle="UI/UX designer"
              badgeType={BADGES.new}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
            />
          </SwiperSlide>
        </CardCarouselSection> */}

        <Newsletter height="600px" bgColor="teal.300" />

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

export const getServerSideProps = async (context) => {
  const partners = await GetAllPartners();
  const activities = await GetAllActiveActivities();

  return {
    props: {
      partners: partners ? JSON.stringify(partners) : null,
      activities: activities ? JSON.stringify(activities) : null,
    },
  };
};
