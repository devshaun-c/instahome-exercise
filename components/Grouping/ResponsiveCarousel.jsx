import React from "react";
import { Avatar, Badge, Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  carousel: {
    margin: "24px 0",
  },
  arrowStyles: {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 20px)",
    width: 40,
    height: 40,
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.8)",
    },
  },
});

const carouselDefaultConfiguration = {
  autoPlay: true,
  interval: "3000",
  infiniteLoop: true,
  showArrows: true,
  showStatus: false,
  showThumbs: false,
  showIndicators: true,
  stopOnHover: true,
  width: "100%",
};

const ResponsiveCarousel = ({ children, ...others }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Carousel
      className={classes.carousel}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.arrowStyles}
            style={{ left: 20 }}
          >
            <ChevronLeftIcon />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.arrowStyles}
            style={{ right: 20 }}
          >
            <ChevronRightIcon />
          </button>
        )
      }
      {...carouselDefaultConfiguration}
      {...others}
    >
      {children}
    </Carousel>
  );
};

export default ResponsiveCarousel;
