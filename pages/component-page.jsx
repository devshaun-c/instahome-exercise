import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  GridItem,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";
import Section from "../components/Sections/Section";
import Sidebar from "../components/Navigations/Sidebar";
import AvatarCard from "../components/Cards/AvatarCard";
import VerticalImageCard from "../components/Cards/VerticalImageCard";
import img from "../public/static/images/newsletter-bg.jpg";
import HorizontalImageCard from "../components/Cards/HorizontalImageCard";
import StandardButton from "../components/Buttons/StandardButton";
import ResponsiveCarousel from "../components/Grouping/ResponsiveCarousel";
import SearchBox from "../components/Controls/SearchBox";
import StandardInput from "../components/Controls/StandardInput";
import { CheckIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import EditableInputBox from "../components/Controls/EditableInputBox";
import BackToTop from "../components/Page/BackToTop";
import SlickCarousel from "../components/Grouping/SlickCarousel";
import { BADGES } from "../constants/badges";

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
      <Section>
        <Heading fontSize="lg" mb="4">
          Cards
        </Heading>

        <SimpleGrid width="100%" spacing={4} columns={1}>
          <AvatarCard
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType={BADGES.popular}
            avatar={img}
          />
          <HorizontalImageCard
            width="800px"
            title="Tanaka Satomi"
            subtitle="UI/UX designer"
            badgeType={BADGES.new}
            // image={img}
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in. Phasellus
              rutrum nisl magna. Etiam sed enim finibus, gravida sapien sed,
              varius velit. Nullam in facilisis ante. Sed nisi felis, sagittis
              at odio at, aliquet placerat eros.
            </Text>
          </HorizontalImageCard>

          <VerticalImageCard
            title="Tanaka Satomi "
            subtitle="UI/UX designer"
            badgeObj={{ color: "purple", text: "new" }}
            width="300px"
            image={img}
            action={() => alert("CLICKED")}
            badgeType={BADGES.popular}
            height="100%"
          >
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              congue bibendum ante, sed imperdiet eros fermentum in.
            </Text>
          </VerticalImageCard>
        </SimpleGrid>
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Button Group
        </Heading>
        <ButtonGroup>
          <StandardButton variant="outline" colorScheme="teal" text="outline" />
          <StandardButton text="primary" colorScheme="teal" />
          <StandardButton variant="ghost" text="ghost" colorScheme="teal" />
          <StandardButton variant="link" text="link" colorScheme="teal" />
        </ButtonGroup>
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Input Types
        </Heading>
        <Stack spacing={8}>
          <StandardInput
            label="Basic Input"
            placeholder="placeholder"
            helperText="Helper text"
          />
          <StandardInput
            label="Input with Left and Right addon"
            leftAddOn="https://"
            rightAddOn=".com"
          />
          <StandardInput
            label="Input with Error"
            errorText="This is an error message"
          />
          <StandardInput
            label="Input with Left and Right Elements"
            leftElement={<PhoneIcon color="gray.300" />}
            rightElement={<CheckIcon color="green.500" />}
          />
          <StandardInput
            label="Input with Inner Icon Button"
            leftElement={<IconButton variant="ghost" icon={<SearchIcon />} />}
            rightElement={
              <IconButton
                variant="solid"
                height="1.75rem"
                marginRight="16px"
                colorScheme="teal"
                icon={<CheckIcon />}
              />
            }
          />
          <EditableInputBox
            label="Editable Input (toggle to edit)"
            handleConfirm={(e) => {
              console.log(e);
            }}
          />
        </Stack>
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Search
        </Heading>
        <SearchBox placeholder="search value" />
        <SearchBox isLoading />
        <SearchBox options={[{ title: "Option 1", value: 1 }]} />
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Image Carousel
        </Heading>
        <ResponsiveCarousel>
          <Box bg="red" h="400px"></Box>
          <Box bg="orange" h="400px"></Box>
          <Box bg="green.400" h="400px"></Box>
        </ResponsiveCarousel>
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Card Carousel
        </Heading>
        <Box>
          <SlickCarousel>
            <Box pr="16px">
              <VerticalImageCard
                title="Tanaka Satomi "
                subtitle="UI/UX designer"
                badgeObj={{ color: "purple", text: "new" }}
                width="300px"
                action={() => alert("CLICKED")}
              >
                <Text fontSize="xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus congue bibendum ante, sed imperdiet eros fermentum
                  in.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus congue bibendum ante, sed imperdiet eros fermentum
                  in.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus congue bibendum ante, sed imperdiet eros fermentum
                  in.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus congue bibendum ante, sed imperdiet eros fermentum
                  in.
                </Text>
              </VerticalImageCard>
            </Box>
          </SlickCarousel>
        </Box>
      </Section>

      <Section bgColor="rgba(100,190,190,0.1)">
        <Heading fontSize="lg" mb="4">
          Section with Background color
        </Heading>
        <Box h="100px"></Box>
      </Section>

      <Section bgImg={img}>
        <Heading fontSize="lg" mb="4" color="white">
          Section with Full Background Image
        </Heading>
        <Box h="100px"></Box>
      </Section>

      <Divider />

      <Section>
        <Heading fontSize="lg" mb="4">
          Sidebar
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={1}>
            <Sidebar
              header="Topics"
              menuItems={[
                {
                  title: "About",
                  icon: null,
                  fcn: () => {
                    alert("About clicked");
                  },
                  nested: [],
                },
                {
                  title: "Category",
                  icon: null,
                  fcn: () => {},
                  nested: [
                    {
                      title: "Books",
                      icon: "",
                      fcn: () => {
                        alert("Books clicked");
                      },
                    },
                    {
                      title: "Shoes",
                      icon: "",
                      fcn: () => {
                        alert("Shoes clicked");
                      },
                    },
                  ],
                },
              ]}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Box bg="whitesmoke" w="100%" height="400px"></Box>
          </GridItem>
        </Grid>
      </Section>

      <Divider />
      <BackToTop show right="5%" />
    </div>
  );
};

export default DemoPage;
