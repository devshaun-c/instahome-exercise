import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { createUseStyles } from "react-jss";

import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const useStyles = createUseStyles({
  swiper: {
    paddingBottom: "32px",
    "& .swiper-wrapper": {
      //   paddingLeft: "16px",
    },
    // padding: "16px",
    "& .swiper-button-disabled": {
      display: "none",
    },

    "& .swiper-pagination": {
      bottom: "0px",
    },
  },
});

const Carousel = ({ children, ...others }) => {
  const classes = useStyles();

  return (
    <Swiper
      className={classes.swiper}
      navigation={true}
      pagination={true}
      slidesPerView={1}
      spaceBetween={0}
      grabCursor={true}
      loop={false}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      freeMode={false}
      //   breakpoints={{
      //     640: {
      //       slidesPerView: 2,
      //       spaceBetween: 20,
      //     },
      //     768: {
      //       slidesPerView: 4,
      //       spaceBetween: 40,
      //     },
      //     1024: {
      //       slidesPerView: 5,
      //       spaceBetween: 50,
      //     },
      //   }}
      {...others}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
