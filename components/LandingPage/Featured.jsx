import React, { useState, useEffect } from "react";
import { Box, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";
import Focus from "../../components/Sections/Focus";
import Section from "../../components/Sections/Section";
import StandardButton from "../Buttons/StandardButton";

const useStyles = createUseStyles({});

const Featured = (props) => {
  const { list = [], ...others } = props;
  const classes = useStyles();
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (list.length > 1) {
      const indexToShow = getRandomInt(0, list.length - 1);
      setCurrent(indexToShow);
    }
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nextFeatured = () => {
    if (list.length !== current + 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const {
    title,
    description,
    coverImage,
    children,
    partnerId,
    orgName,
    activityId,
  } = list[current];

  return (
    <Section {...others}>
      <Focus
        height={["100%", "500px"]}
        // bgColor="none"
        bgImage=""
        alt=""
        header={title}
        description={description}
        tag="FEATURED THIS WEEK"
        hasImage
        image={coverImage}
        imageSide="right"
      >
        {children}
        <Text fontSize="sm" color="gray.400">{`By ${orgName}`}</Text>
        <ButtonGroup mt={4}>
          <StandardButton
            colorScheme="teal"
            onClick={() => router.push(`/activity/${partnerId}/${activityId}`)}
          >
            Read more
          </StandardButton>
          <StandardButton
            colorScheme="teal"
            variant="outline"
            onClick={nextFeatured}
          >
            Next
          </StandardButton>
        </ButtonGroup>
      </Focus>
    </Section>
  );
};

export default Featured;
