import React, { useState, useEffect } from "react";
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
    "& .swiper-wrapper": {},
    "& .swiper-button-disabled": {
      display: "none",
    },
    "& .swiper-button-next": {
      right: "-5px",
      background: "rgba(255,255,255,1)",
      width: "50px",
      height: "100%",
      top: "0",
      borderRadius: (props) => (props.loop ? "none" : "50% 0 0 50%"),
      "&:hover": {
        background: "rgba(255,255,255,0.8)",
      },

      "@media screen and (max-width: 1000px)": {
        display: "none",
      },
    },

    "& .swiper-button-next::after": {
      fontSize: "24px",
      fontWeight: "bold",
    },

    "& .swiper-button-prev": {
      left: "-5px",
      background: "rgba(255,255,255,1)",
      width: "50px",
      height: "100%",
      top: "0",
      borderRadius: (props) => (props.loop ? "none" : "0 50% 50% 0"),
      "&:hover": {
        background: "rgba(255,255,255,0.8)",
      },

      "@media screen and (max-width: 1000px)": {
        display: "none",
      },
    },

    "& .swiper-button-prev::after": {
      fontSize: "24px",
      fontWeight: "bold",
    },

    "& .swiper-pagination": {
      bottom: "0px",
    },
  },
});

const Carousel = ({ children, ...params }) => {
  const classes = useStyles(params);

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
      {...params}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
