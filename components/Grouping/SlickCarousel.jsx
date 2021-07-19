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
    "& .slick-track": { padding: "16px" },
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
    "& .slick-disabled.slick-prev:before": {
      background: "transparent !important",
      color: "transparent !important",
    },
    "& .slick-disabled.slick-next:before": {
      background: "transparent !important",
      color: "transparent !important",
    },
  },
});

const SlickCarousel = (props) => {
  const { dots = true, infinite = false, arrows = true, children } = props;
  const classes = useStyles();
  var settings = {
    dots: dots,
    infinite: infinite,
    arrows: arrows,
    speed: 500,
    slidesToScroll: 1,
    // slidesToShow: 3,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // pauseOnHover: true,
    swipeToSlide: true,
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
      {children}
    </Slider>
  );
};

export default SlickCarousel;
