import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../../../components/Sections/Section";
import Page from "../../../components/Page/Page";
import Newsletter from "../../../components/Sections/Newsletter";
import { useRouter } from "next/router";
import VerticalImageCard from "../../../components/Cards/VerticalImageCard";
import CardCarouselSection from "../../../components/Sections/CardCarouselSection";
import { SwiperSlide } from "swiper/react";
import { BADGES } from "../../../constants/badges";
import img1 from "../../../public/static/images/coding.svg";
import img2 from "../../../public/static/images/explore.svg";
import {
  GetScheduleFromFirebase,
  GetSpecificDocFromFirebase,
  GetAllPartnerSchedules,
  GetAllPartnerActivities,
} from "../../../lib/firebase";
import moment from "moment";
import { GetDurationText } from "../../../lib/utils";
import Header from "../../../components/ActivityPage/Header";
import ImageCarousel from "../../../components/ActivityPage/ImageCarousel";
import AboutActivity from "../../../components/ActivityPage/AboutActivity";
import OrganizerInfo from "../../../components/ActivityPage/OrganizerInfo";
import ActivityDetails from "../../../components/ActivityPage/ActivityDetails";
import Paper from "../../../components/ActivityPage/Paper";
import ScheduleBooking from "../../../components/ActivityPage/ScheduleBooking";

const useStyles = createUseStyles({
  participantSection: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
  },
  swiperSlide: {
    width: "300px",
    padding: "8px",

    "@media screen and (max-width: 1000px)": {
      width: "250px",
    },
  },
});

const ActivityPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  //scheduleId: LQG8kDCKI93wwo5mMm4u
  //templateId: zhfkhyMcDsvxweOLVBFY
  //PartnerId: tomi-build
  //URL format: activity/[partnerId]/[templateId]
  //URL: activity/tomi-build/zhfkhyMcDsvxweOLVBFY

  const { aboutActivity, activityId, activityName, shortSummary } = JSON.parse(
    props.activityData
  );

  const activityDetails = JSON.parse(props.activityData);
  const organizationDetails = JSON.parse(props.partnerData).organizationDetails;
  const orgName = organizationDetails.orgName;

  // const {
  //   price,
  //   priceType,
  //   participantLimit,
  //   locationDescription,
  //   locationMaps,
  //   scheduledStartDate,
  //   scheduledEndDate,
  // } = JSON.parse(props.scheduleData);

  const allSchedules = JSON.parse(props.schedules);

  var otherPartnerActivities = [];
  if (props.activities) {
    const allPartnerActivities = JSON.parse(props.activities);
    otherPartnerActivities = allPartnerActivities.filter(
      (activity) => activity.activityId === activityId
    );
  }

  //TEMPORARY (TO EDIT ONCE TEMPLATE DB IS UPDATED)
  const duration = GetDurationText(
    allSchedules[0].scheduledEndDate,
    allSchedules[0].scheduledStartDate
  );

  const handleCardSelect = (activity) => {
    const { partnerId, activityId } = activity;
    router.push(`/activity/${partnerId}/${activityId}`);
  };

  const handleInterest = () => {};

  return (
    <Page
      pageMeta={{
        title: `${activityName}`,
        description: shortSummary,
      }}
    >
      <Section fullView={false} bgColor="whitesmoke">
        <Header mb={6} title={activityName} />
        <Grid templateColumns="repeat(5, 1fr)" gap="40px">
          <GridItem colSpan={3}>
            <ImageCarousel info={activityDetails} />
            <AboutActivity aboutActivity={aboutActivity} mt={4} />
          </GridItem>

          <GridItem colSpan={2}>
            <Paper>
              <OrganizerInfo info={organizationDetails} />
            </Paper>
            <Paper mt={4}>
              <ActivityDetails
                activityDetails={activityDetails}
                duration={duration}
              />
              <ScheduleBooking
                mt={8}
                info={activityDetails}
                schedules={allSchedules}
              />
            </Paper>
          </GridItem>
        </Grid>
      </Section>

      {otherPartnerActivities.length > 0 && (
        <CardCarouselSection
          tag="MORE ACTIVITIES"
          height="100%"
          header={`Check out more activities by ${orgName}`}
        >
          {otherPartnerActivities.map((activity) => (
            <SwiperSlide
              key={activity.activityId}
              className={classes.swiperSlide}
            >
              <VerticalImageCard
                title={activity.activityName}
                image={activity.coverImage[0].url}
                subtitle=""
                badgeType={activity.type}
                action={() => handleCardSelect(activity)}
                text={activity.shortSummary}
              />
            </SwiperSlide>
          ))}
        </CardCarouselSection>
      )}

      <CardCarouselSection
        tag="POPULAR ACTIVITIES"
        height="100%"
        header="Explore Our Popular Activities"
      >
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            image={img1}
            subtitle="UI/UX designer"
            badgeType={BADGES.new}
            action={() => alert("CLICKED")}
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
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            image={img1}
            subtitle="UI/UX designer"
            badgeType={BADGES.popular}
            action={() => alert("CLICKED")}
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
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <VerticalImageCard
            title="Tanaka Satomi"
            image={img1}
            subtitle="UI/UX designer"
            badgeType={BADGES.new}
            action={() => alert("CLICKED")}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in."
          />
        </SwiperSlide>
      </CardCarouselSection>

      <Newsletter height="400px" bgColor="teal.300" />
    </Page>
  );
};

export const getServerSideProps = async (context) => {
  const { partnerId, templateId } = context.query;

  const activityData = await GetSpecificDocFromFirebase(
    templateId,
    "templates"
  );

  const partnerData = await GetSpecificDocFromFirebase(partnerId, "partners");
  // const scheduleData = await GetScheduleFromFirebase(partnerId, scheduleId);
  const schedules = await GetAllPartnerSchedules(partnerId);
  const allActivities = await GetAllPartnerActivities(partnerId);

  return {
    props: {
      partnerData: JSON.stringify(partnerData),
      activityData: JSON.stringify(activityData),
      // scheduleData: JSON.stringify(scheduleData),
      schedules: schedules ? JSON.stringify(schedules) : null,
      activities: allActivities ? JSON.stringify(allActivities) : null,
    },
  };
};

export default ActivityPage;
