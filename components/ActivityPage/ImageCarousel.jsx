import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/static/images/coding.svg";
import img2 from "../../public/static/images/explore.svg";

const useStyles = createUseStyles({
  imageCarousel: {
    backgroundColor: "white",
    paddingBottom: "2px",
    borderRadius: "8px",
  },
});

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

const ImageCarousel = (props) => {
  const classes = useStyles();
  const { info, ...others } = props;
  const { coverImage = [], imageList = [] } = info;

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

  useEffect(() => {
    if (coverImage.length) {
      setImages(coverImage);
    }
    if (imageList.length) {
      setImages([...images, imageList]);
    }
  }, []);

  return (
    <Box className={classes.imageCarousel} {...others}>
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
  );
};

export default ImageCarousel;
