import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Link,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "../../../components/Sections/Section";
import Page from "../../../components/Page/Page";
import Newsletter from "../../../components/Sections/Newsletter";
import { useRouter } from "next/router";
import img1 from "../../../public/static/images/coding.svg";
import img2 from "../../../public/static/images/explore.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {} from "react-icons";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegClock,
  FaRegEnvelope,
  FaUser,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import CustomSelect from "../../../components/Controls/CustomSelect";
import StandardButton from "../../../components/Buttons/StandardButton";
import TextButton from "../../../components/Buttons/TextButton";
import VerticalImageCard from "../../../components/Cards/VerticalImageCard";
import CardCarouselSection from "../../../components/Sections/CardCarouselSection";
import { SwiperSlide } from "swiper/react";
import { BADGES } from "../../../constants/badges";
import StickyBox from "../../../components/Page/StickyBox";
import Datepicker from "../../../components/Controls/Datepicker";
import CustomInput from "../../../components/Controls/CustomInput";
import {
  GetScheduleFromFirebase,
  GetSpecificDocFromFirebase,
  GetAllPartnerSchedules,
  GetAllPartnerActivities,
} from "../../../lib/firebase";

import { EditorState, convertFromRaw } from "draft-js";
import { convertToHTML } from "draft-convert";
import moment from "moment";
import {
  convertFirebaseTimestamp,
  GetDurationText,
  getTimeDifference,
} from "../../../lib/utils";

const getConfigurableProps = () => {
  return {
    showArrows: true,
    showStatus: false,
    showThumbs: true,
    autoPlay: false,
    showIndicators: true,
    infiniteLoop: true,
    transitionTime: 500,
  };
};

const useStyles = createUseStyles({
  imageCarousel: {
    backgroundColor: "white",
    paddingBottom: "2px",
    borderRadius: "8px",
  },
  organizerDetailsSection: {
    display: "flex",
    padding: "24px 32px",
    background: "white",
    borderRadius: "var(--border-radius)",
  },
  activityDetailsSection: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 32px",
    background: "white",
    borderRadius: "var(--border-radius)",
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey",
    padding: "24px",
    width: "100%",
    borderRadius: "var(--border-radius)",
  },
  aboutSection: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
    // background: "white",
    borderRadius: "var(--border-radius)",
  },
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
  const [images, setImages] = useState([
    { url: img1, name: "" },
    { url: img2, name: "" },
    { url: img1, name: "" },
    { url: img2, name: "" },
    { url: img1, name: "" },
    { url: img2, name: "" },
    { url: img1, name: "" },
    { url: img2, name: "" },
  ]);
  const [selectedDate, setSelectedDate] = useState(null);

  //scheduleId: KHUL1dzh1xmdyXU6znnX
  //PartnerId: FNX70B2LPLUorlmPfup2
  //TemplateId: zhfkhyMcDsvxweOLVBFY
  //URL format: activity/[activityId]/[scheduleId]
  //URL: activity/zhfkhyMcDsvxweOLVBFY/KHUL1dzh1xmdyXU6znnX

  const {
    aboutActivity,
    activityId,
    activityName,
    coverImage,
    imageList,
    type,
    ageRestriction,
  } = JSON.parse(props.activityData);

  const {
    orgName,
    orgContact,
    orgWebsite,
    orgDescription,
    orgInstagram,
    orgFacebook,
    partnerImage,
    publicEmail,
  } = JSON.parse(props.partnerData).organizationDetails;

  var allSchedules = JSON.parse(props.schedules);

  const tempSchedules = [
    {
      scheduledEndDate: { seconds: 1625662800, nanoseconds: 0 },
      scheduledStartDate: { seconds: 1625662800, nanoseconds: 0 },
    },
    {
      scheduledEndDate: { seconds: 1625670000, nanoseconds: 0 },
      scheduledStartDate: { seconds: 1625865500, nanoseconds: 0 },
    },
    {
      scheduledEndDate: { seconds: 1625670000, nanoseconds: 0 },
      scheduledStartDate: { seconds: 1625865500, nanoseconds: 0 },
    },
  ];

  allSchedules = [...allSchedules, ...tempSchedules];

  const {
    price,
    participantLimit,
    locationDescription,
    locationMaps,
    scheduledStartDate,
    scheduledEndDate,
  } = JSON.parse(props.scheduleData);

  const allPartnerActivities = JSON.parse(props.activities);

  var convertedContent = "";
  if (aboutActivity) {
    convertedContent = convertToHTML(
      EditorState.createWithContent(
        convertFromRaw(JSON.parse(aboutActivity))
      ).getCurrentContent()
    );
  }

  var otherPartnerActivities = [];

  if (allPartnerActivities.length) {
    otherPartnerActivities = allPartnerActivities.filter(
      (activity) => activity.activityId !== activityId
    );
  }

  const duration = GetDurationText(scheduledEndDate, scheduledStartDate);

  useEffect(() => {
    if (coverImage.length) {
      setImages(coverImage);
    }
    if (imageList.length) {
      setImages([...images, imageList]);
    }
  }, []);

  const participants = [
    { name: "bob lee" },
    { name: "John smith" },
    { name: "Akira Satomi" },
    { name: "James Bond" },
    { name: "bob lee" },
    { name: "John smith" },
    { name: "Akira Satomi" },
    { name: "James Bond" },
    { name: "bob lee" },
    { name: "John smith" },
    { name: "Akira Satomi" },
    { name: "James Bond" },
    { name: "bob lee" },
    { name: "John smith" },
    { name: "Akira Satomi" },
    { name: "James Bond" },
    { name: "bob lee" },
    { name: "John smith" },
    { name: "Akira Satomi" },
    { name: "James Bond" },
  ];

  return (
    <Page
      pageMeta={{
        title: "",
        description: "",
      }}
    >
      <Section fullView={false} bgColor="whitesmoke">
        <Box mb={6}>
          <Heading fontSize={["x-large", "x-large"]}>
            {activityName || ""}
          </Heading>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap="80px">
          <GridItem colSpan={3}>
            <Box className={classes.imageCarousel}>
              <Carousel {...getConfigurableProps()}>
                {images.map((img, index) => (
                  <Box key={index}>
                    <img
                      src={img.url}
                      alt={img.name}
                      style={{
                        maxHeight: "400px",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <Box className={classes.aboutSection} mt={4}>
              <Text fontSize="md" fontWeight="bold">
                About
              </Text>
              <Box mt={4}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: convertedContent,
                  }}
                />
              </Box>
            </Box>
            {/* <Box className={classes.participantSection} mt={4}>
              <Flex align="center">
                <Text fontSize="md" fontWeight="bold">
                  Participants
                </Text>
                <Text fontSize="md" ml={2}>
                  (24)
                </Text>
              </Flex>

              <AvatarGroup
                mt={4}
                spacing={2}
                max={10}
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                }}
              >
                {participants.map((participant, index) => (
                  <Avatar
                    key={index}
                    bg="teal"
                    name={participant.name}
                    mt={2}
                  />
                ))}
              </AvatarGroup>
            </Box> */}
          </GridItem>

          <GridItem colSpan={2}>
            <Box className={classes.organizerDetailsSection}>
              <Avatar mr={6} size="lg" src={partnerImage} />
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  {orgName}
                </Text>
                <Text fontSize="xs" mt={2} mb={2}>
                  {orgDescription}
                </Text>
                {orgWebsite && (
                  <Text fontSize="xs" mt={1} mb={4}>
                    <Link color="teal.500" href={orgWebsite}>
                      {orgWebsite}
                    </Link>
                  </Text>
                )}
                <HStack color="lightgrey" spacing={3}>
                  {orgContact && (
                    <IconButton
                      variant="ghost"
                      fontSize="24px"
                      icon={<FaWhatsapp />}
                      size="sm"
                    />
                  )}
                  {publicEmail && (
                    <IconButton
                      variant="ghost"
                      fontSize="20px"
                      icon={<FaRegEnvelope />}
                      size="sm"
                    />
                  )}
                  {orgInstagram && (
                    <IconButton
                      variant="ghost"
                      fontSize="24px"
                      icon={<FaInstagram />}
                      size="sm"
                    />
                  )}
                  {orgFacebook && (
                    <IconButton
                      variant="ghost"
                      fontSize="24px"
                      icon={<FaFacebookSquare />}
                      size="sm"
                    />
                  )}
                </HStack>
              </Box>
            </Box>
            <Box className={classes.activityDetailsSection} mt={4}>
              <Text fontSize="md" fontWeight="bold">
                Activity Details
              </Text>
              <Flex align="center" mt={4}>
                <FaRegClock fontSize="24px" color="lightgrey" />
                <Box fontSize="xs" ml={4}>
                  <Text>{duration}</Text>
                  {/* <Text>
                    {`
                    ${
                      moment(
                        convertFirebaseTimestamp(scheduledStartDate)
                      ).format("LT") || "TBC"
                    }
                    to
                    ${
                      moment(convertFirebaseTimestamp(scheduledEndDate)).format(
                        "LT"
                      ) || "TBC"
                    }
                    `}
                  </Text> */}
                </Box>
              </Flex>
              <Flex align="center" mt={4}>
                <FaUsers fontSize="24px" color="lightgrey" />
                <Box fontSize="xs" ml={4}>
                  <Text>
                    {participantLimit > 0
                      ? `Max. participants : ${participantLimit}`
                      : "No participant limit"}
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" mt={4}>
                <FaUser fontSize="24px" color="lightgrey" />
                <Box fontSize="xs" ml={4}>
                  <Text>
                    {ageRestriction > 0
                      ? `Age group : ${ageRestriction} and above`
                      : "No age limit"}
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" mt={4}>
                {type === "inPerson" ? (
                  <>
                    <FaMapMarkerAlt fontSize="24px" color="lightgrey" />
                    <Box fontSize="xs" ml={4}>
                      <Text> {locationDescription || ""}</Text>
                      <Text>{locationMaps || "TBC"}</Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <FaMapMarkerAlt fontSize="24px" color="lightgrey" />
                    <Box fontSize="xs" ml={4}>
                      <Text>Online event</Text>
                    </Box>
                  </>
                )}
              </Flex>

              <Flex direction="column">
                <Text fontSize="md" fontWeight="bold" mt={8}>
                  Upcoming Sessions
                </Text>
                <Flex mt={4} flexDir="column" alignItems="flex-start">
                  {allSchedules.map((schedule, index) => {
                    var isAnotherDay = true;
                    if (index > 0) {
                      const currentDate = moment(
                        convertFirebaseTimestamp(
                          allSchedules[index].scheduledStartDate
                        )
                      ).format("DD MMM, YYYY");

                      const previousDate = moment(
                        convertFirebaseTimestamp(
                          allSchedules[index - 1].scheduledStartDate
                        )
                      ).format("DD MMM, YYYY");

                      if (currentDate === previousDate) {
                        isAnotherDay = false;
                      }
                    }

                    return (
                      <Flex
                        key={index}
                        justify="space-between"
                        fontSize="sm"
                        w="100%"
                        mb={4}
                      >
                        <Box>
                          {isAnotherDay && (
                            <>
                              <Text>
                                {moment(
                                  convertFirebaseTimestamp(
                                    schedule.scheduledStartDate
                                  )
                                ).format("ddd")}
                              </Text>
                              <Text>
                                {moment(
                                  convertFirebaseTimestamp(
                                    schedule.scheduledStartDate
                                  )
                                ).format("DD MMM, YYYY")}
                              </Text>
                            </>
                          )}
                        </Box>
                        <Box>
                          <Text>
                            {`
                        ${
                          moment(
                            convertFirebaseTimestamp(
                              schedule.scheduledStartDate
                            )
                          ).format("LT") || "TBC"
                        }
                          - ${
                            moment(
                              convertFirebaseTimestamp(
                                schedule.scheduledEndDate
                              )
                            ).format("LT") || "TBC"
                          }
                        `}
                          </Text>
                          <Text color="teal.400">5 spots left</Text>
                        </Box>
                      </Flex>
                    );
                  })}
                  <Divider mt={8} />
                  <Box mt={2} w="100%">
                    <Text fontSize="xs">Can't find a suitable date?</Text>
                    <TextButton fontSize="xs" color="teal.500" mt={1}>
                      Follow us
                    </TextButton>
                    <TextButton fontSize="xs" color="teal.500">
                      Request private class
                    </TextButton>
                  </Box>
                </Flex>
              </Flex>

              <Flex align="center" mt={8}>
                <Box fontSize="sm" className={classes.priceBox}>
                  <CustomInput
                    label="Selected date"
                    value={moment(selectedDate).format("ddd - MMM DD, YYYY")}
                  />
                  <Box display="flex" mt={4}>
                    <Box width="100px" mr={4}>
                      <CustomSelect
                        // instanceId="id_price"
                        label="Quantity"
                        defaultValue="1"
                        options={[
                          { value: "1", label: "1" },
                          { value: "2", label: "2" },
                          { value: "3", label: "3" },
                        ]}
                      />
                    </Box>
                    <Flex
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                      w="100%"
                      padding={2}
                      border="1px solid whitesmoke"
                      borderRadius="var(--border-radius)"
                    >
                      {price <= 0 ? (
                        <Text fontSize="lg" fontWeight="bold">
                          FREE
                        </Text>
                      ) : (
                        <Flex flexDir="column">
                          <Text fontSize="sm" mr={1}>
                            RM
                          </Text>
                          <Box display="flex">
                            <Text
                              fontSize="x-large"
                              fontWeight="bold"
                              lineHeight="1.1"
                            >
                              {price}
                            </Text>
                            <Text fontSize="sm" ml={1}>
                              / session
                            </Text>
                          </Box>
                        </Flex>
                      )}
                    </Flex>
                  </Box>
                  <StandardButton mt={4}>Book now</StandardButton>
                </Box>
              </Flex>
            </Box>
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
                badgeType={BADGES.new}
                action={() => alert("CLICKED")}
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
      <StickyBox position="bottom" bg="white">
        <Flex align="center" height="80px">
          <Text>This is a sticky area which ends before the footer</Text>
        </Flex>
      </StickyBox>
    </Page>
  );
};

export const getServerSideProps = async (context) => {
  const { activityId, id } = context.query;
  const activityData = await GetSpecificDocFromFirebase(
    activityId,
    "templates"
  );
  const partnerId = activityData.partnerId;
  const partnerData = await GetSpecificDocFromFirebase(partnerId, "partners");
  const scheduleData = await GetScheduleFromFirebase(partnerId, id);
  const schedules = await GetAllPartnerSchedules(partnerId);
  const allActivities = await GetAllPartnerActivities(partnerId);
  return {
    props: {
      partnerData: JSON.stringify(partnerData),
      activityData: JSON.stringify(activityData),
      scheduleData: JSON.stringify(scheduleData),
      schedules: JSON.stringify(schedules),
      activities: JSON.stringify(allActivities),
    },
  };
};

export default ActivityPage;
