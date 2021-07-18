import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalImageCard from "../Cards/VerticalImageCard";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { ClassNames, useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  slider: {
    // padding: "16px",
  },
  sliderStyle: {
    "& .slider-track": { display: "flex" },
    "& .slick-arrow": {},
    "& .button": {
      backgroundColor: "#00558B",
      padding: "10px 20px",
      margin: "0px 20px",
      border: "none",
      color: "white",
      fontSize: "20px",
      borderRadius: "5px",
      minHeight: "45px",
    },
    "& .slick-prev, .slick-next": {
      zIndex: "10",
    },
    "& .slick-prev:before, .slick-next:before": {
      width: "40px",
      height: "40px",
      fontSize: "40px",
      color: "black",
      background: "transparent",
      opacity: "1",
      content: ">",
    },
  },
});

const SlickCarousel = () => {
  const classes = useStyles();
  var settings = {
    // className: "slider variable-width",
    dots: true,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
    // slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay: false,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    // swipeToSlide: true,
    // cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //       arrows: true,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //       arrows: true,
    //     },
    //   },
    // ],
  };

  return (
    <Slider {...settings} className={classes.sliderStyle}>
      <Box p="8px">
        <VerticalImageCard
          title="Tanaka Satomi "
          subtitle="UI/UX designer"
          badgeObj={{ color: "purple", text: "new" }}
          width="300px"
          action={() => alert("CLICKED")}
        >
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue bibendum ante, sed imperdiet eros fermentum in.
          </Text>
        </VerticalImageCard>
      </Box>
      <Box p="8px">
        <VerticalImageCard
          title="Tanaka Satomi "
          subtitle="UI/UX designer"
          badgeObj={{ color: "purple", text: "new" }}
          width="300px"
          action={() => alert("CLICKED")}
        >
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue bibendum ante, sed imperdiet eros fermentum in.
          </Text>
        </VerticalImageCard>
      </Box>
      <Box p="8px">
        <VerticalImageCard
          title="Tanaka Satomi "
          subtitle="UI/UX designer"
          badgeObj={{ color: "purple", text: "new" }}
          width="300px"
          action={() => alert("CLICKED")}
        >
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue bibendum ante, sed imperdiet eros fermentum in.
          </Text>
        </VerticalImageCard>
      </Box>
      <Box p="8px">
        <VerticalImageCard
          title="Tanaka Satomi "
          subtitle="UI/UX designer"
          badgeObj={{ color: "purple", text: "new" }}
          width="300px"
          action={() => alert("CLICKED")}
        >
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue bibendum ante, sed imperdiet eros fermentum in.
          </Text>
        </VerticalImageCard>
      </Box>
      <Box p="8px">
        <VerticalImageCard
          title="Tanaka Satomi "
          subtitle="UI/UX designer"
          badgeObj={{ color: "purple", text: "new" }}
          width="300px"
          action={() => alert("CLICKED")}
        >
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue bibendum ante, sed imperdiet eros fermentum in.
          </Text>
        </VerticalImageCard>
      </Box>
    </Slider>
  );
};

export default SlickCarousel;
