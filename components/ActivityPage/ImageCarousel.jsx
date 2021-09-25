import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/static/images/placeholder.png";
import Image from "next/image";

const useStyles = createUseStyles({
  imageCarousel: {
    backgroundColor: "white",
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
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([{ url: img1, name: "" }]);

  useEffect(() => {
    var newImages = [];
    if (coverImage.length) {
      newImages = [...coverImage];
    }
    if (imageList.length) {
      newImages = [...newImages, ...imageList];
    }
    setImages([...newImages]);
  }, []);

  return (
    <Box className={classes.imageCarousel} {...others}>
      <Carousel {...getConfigurableProps()}>
        {images.map((img, index) => (
          <Box key={index} borderRadius="8px 8px 0 0" overflow="hidden">
            {isLoading && (
              <Flex height="400px" justifyContent="center" alignItems="center">
                <CircularProgress
                  isIndeterminate
                  size="120px"
                  thickness="4px"
                  color="brand.600"
                >
                  <CircularProgressLabel fontSize="14px">
                    Loading
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
            )}
            <img
              src={img.url}
              alt={img.name}
              style={{
                maxHeight: "400px",
              }}
              onLoad={() => setIsLoading(false)}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
