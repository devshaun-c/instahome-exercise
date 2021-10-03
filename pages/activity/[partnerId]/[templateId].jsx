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
} from "../../../utils/firebase";
import MainHeader from "../../../components/ActivityPage/MainHeader";
import ImageCarousel from "../../../components/ActivityPage/ImageCarousel";
import AboutActivity from "../../../components/ActivityPage/AboutActivity";
import OrganizerInfo from "../../../components/ActivityPage/OrganizerInfo";
import ActivityDetails from "../../../components/ActivityPage/ActivityDetails";
import Paper from "../../../components/ActivityPage/Paper";
import ScheduleBooking from "../../../components/ActivityPage/ScheduleBooking";
import ShareBar from "../../../components/Miscellaneous/ShareBar";
import ConductorInfo from "../../../components/ActivityPage/ConductorInfo";
import ActivityCard from "../../../components/Cards/ActivityCard";
import { fetchGetJSON } from "../../../utils/api-helpers";

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

  const url = `${process.env.NEXT_PUBLIC_VERCEL_URL}${router.asPath}`;

  const [schedules, setSchedules] = useState([]);
  const [partnerActivites, setPartnerActivities] = useState([]);

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

  const orgName = organizationDetails.orgName;

  const { aboutActivity, activityId, activityName, shortSummary } =
    activityData;

  useEffect(async () => {
    if (CheckValidPartnerAndActivity()) {
      const scheduleData = await GetSchedule(partnerId, templateId);
      const partnerActivitiesData = await GetPartnerActivities(partnerId);

      if (scheduleData.length) {
        setSchedules(scheduleData);
      }
      if (partnerActivitiesData.length) {
        const otherPartnerActivities = partnerActivitiesData.filter(
          (activity) => activity.activityId !== activityId
        );
        setPartnerActivities(otherPartnerActivities);
      }
    }
  }, []);

  const GetSchedule = async (partnerId, templateId) => {
    const data = await fetchGetJSON(
      `/api/schedules/${partnerId}/${templateId}`
    );
    return data;
  };

  const GetPartnerActivities = async (partnerId) => {
    const data = await fetchGetJSON(`/api/partner_activities/${partnerId}`);
    return data;
  };

  return (
    <Page
      pageMeta={{
        title: `${activityName} | AfterWork`,
        description: shortSummary,
      }}
      alwaysVisible
    >
      <MainHeader
        title={activityName}
        orgInfo={organizationDetails}
        category={activityDetails.category}
      />
      {activityName !== "Activity Not Found" ? (
        <Section fullView={false} bgColor="#F9F9F9">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={[0, 0, "24px"]}
          >
            <GridItem colSpan={[5, 5, 3]} maxW={["100%", "90%"]} mb={10}>
              <ImageCarousel info={activityDetails} />

              <AboutActivity aboutActivity={aboutActivity} />

              {activityDetails.conductorName && (
                <ConductorInfo
                  conductorName={activityDetails.conductorName}
                  conductorImage={activityDetails.conductorImage}
                  conductorSummary={activityDetails.conductorSummary}
                />
              )}

              <OrganizerInfo
                orgInfo={organizationDetails}
                activityInfo={activityData}
              />
            </GridItem>

            <GridItem colSpan={[5, 5, 2]}>
              <Paper>
                <ShareBar url={url} mb={8} />
                <ActivityDetails activityDetails={activityDetails} />
                <ScheduleBooking
                  mt="56px"
                  info={activityDetails}
                  schedules={schedules}
                  handleSchedules={setSchedules}
                />
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
      {partnerActivites.length > 0 && (
        <CardCarouselSection
          // tag={getCategory(activityDetails.category)}
          height="100%"
          header={`See other activites by ${orgName}`}
          pagination={partnerActivites.length > 4 ? true : false}
          grabCursor={partnerActivites.length > 4 ? true : false}
          enabled={partnerActivites.length > 1 ? true : false}
        >
          {partnerActivites.map((activity) => (
            <SwiperSlide
              key={activity.activityId}
              className={classes.swiperSlide}
            >
              <ActivityCard activity={activity} />
            </SwiperSlide>
          ))}
        </CardCarouselSection>
      )}

      <Newsletter />
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

  return {
    props: {
      partnerData: partnerData ? JSON.stringify(partnerData) : null,
      activityData: activityData ? JSON.stringify(activityData) : null,
    },
  };
};

export default ActivityPage;
