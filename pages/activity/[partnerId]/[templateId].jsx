import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../../../components/Sections/Section";
import Page from "../../../components/Page/Page";
import Newsletter from "../../../components/Sections/Newsletter";
import { useRouter } from "next/router";
import CardCarouselSection from "../../../components/Sections/CardCarouselSection";
import { SwiperSlide } from "swiper/react";
import {
  GetSpecificDocFromFirebase,
  GetAllPartnerSchedules,
  GetAllPartnerActivities,
} from "../../../lib/firebase";
import Header from "../../../components/ActivityPage/Header";
import ImageCarousel from "../../../components/ActivityPage/ImageCarousel";
import AboutActivity from "../../../components/ActivityPage/AboutActivity";
import OrganizerInfo from "../../../components/ActivityPage/OrganizerInfo";
import ActivityDetails from "../../../components/ActivityPage/ActivityDetails";
import Paper from "../../../components/ActivityPage/Paper";
import ScheduleBooking from "../../../components/ActivityPage/ScheduleBooking";
import ShareBar from "../../../components/Miscellaneous/ShareBar";
import ConductorInfo from "../../../components/ActivityPage/ConductorInfo";
import ActivityCard from "../../../components/Cards/ActivityCard";

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
  const { partnerId, templateId } = router.query;
  const url = `http://localhost:3000/activity/${partnerId}/${templateId}`;

  const CheckValidPartnerAndActivity = () => {
    const activityData = JSON.parse(props.activityData);
    const isActive = activityData.isActive;
    const isByPartner = activityData.partnerId === partnerId;

    return activityData && isActive && isByPartner;
  };

  var activityData = {};
  if (CheckValidPartnerAndActivity()) {
    activityData = JSON.parse(props.activityData);
  } else {
    activityData = { activityName: "Activity Not Found" };
  }

  const activityDetails = JSON.parse(props.activityData) || {};
  const organizationDetails =
    JSON.parse(props.partnerData).organizationDetails || {};
  const allSchedules = JSON.parse(props.schedules) || [];
  const orgName = organizationDetails.orgName;

  const { aboutActivity, activityId, activityName, shortSummary } =
    activityData;

  var otherPartnerActivities = [];
  if (props.activities) {
    const allPartnerActivities = JSON.parse(props.activities);
    otherPartnerActivities = allPartnerActivities.filter(
      (activity) => activity.activityId !== activityId
    );
  }

  return (
    <Page
      pageMeta={{
        title: `${activityName} | AfterWork`,
        description: shortSummary,
      }}
      alwaysShowNav
    >
      {activityName !== "Activity Not Found" ? (
        <Section fullView={false} bgColor="#F9F9F9">
          <Header mb={6} title={activityName} type={activityDetails.category} />
          <Grid templateColumns="repeat(5, 1fr)" gap="56px">
            <GridItem colSpan={3}>
              <ImageCarousel info={activityDetails} />
              {activityDetails.conductorName && (
                <Paper mt={4}>
                  <ConductorInfo
                    conductorName={activityDetails.conductorName}
                    conductorImage={activityDetails.conductorImage}
                    conductorSummary={activityDetails.conductorSummary}
                  />
                </Paper>
              )}
              <AboutActivity aboutActivity={aboutActivity} mt={4} />
            </GridItem>

            <GridItem colSpan={2}>
              <Paper>
                <ShareBar url={url} mb={8} />
                <ActivityDetails activityDetails={activityDetails} />
                <ScheduleBooking
                  mt="56px"
                  info={activityDetails}
                  schedules={allSchedules}
                />
              </Paper>
              <Paper mt={4}>
                <OrganizerInfo info={organizationDetails} />
              </Paper>
            </GridItem>
          </Grid>
        </Section>
      ) : (
        <Section fullView={false}>
          <Flex justify="center" align="center" height="50vh">
            Hmmm.. Looks like this activity does not exist anymore
          </Flex>
        </Section>
      )}
      {otherPartnerActivities.length > 0 && (
        <CardCarouselSection
          tag="MORE ACTIVITIES"
          height="100%"
          header={`Check out more activities by ${orgName}`}
          pagination={otherPartnerActivities.length > 4 ? true : false}
          grabCursor={otherPartnerActivities.length > 4 ? true : false}
          enabled={otherPartnerActivities.length > 1 ? true : false}
        >
          {otherPartnerActivities.map((activity) => (
            <SwiperSlide
              key={activity.activityId}
              className={classes.swiperSlide}
            >
              <ActivityCard activity={activity} />
            </SwiperSlide>
          ))}
        </CardCarouselSection>
      )}

      <Newsletter height="500px" bgColor="teal.300" />
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
  const schedules = await GetAllPartnerSchedules(partnerId, templateId);
  const allActivities = await GetAllPartnerActivities(partnerId);

  return {
    props: {
      partnerData: partnerData ? JSON.stringify(partnerData) : null,
      activityData: activityData ? JSON.stringify(activityData) : null,
      // scheduleData: JSON.stringify(scheduleData),
      schedules: schedules ? JSON.stringify(schedules) : null,
      activities: allActivities ? JSON.stringify(allActivities) : null,
    },
  };
};

export default ActivityPage;
