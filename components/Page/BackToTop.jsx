import { Button } from "@chakra-ui/button";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const BackToTop = ({ show, right, left }) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible ? (
        <Button
          bg="primary"
          color="white"
          _hover={{}}
          display={["flex", "flex", "flex"]}
          onClick={toTop}
          position="fixed"
          bottom="3%"
          right={right}
          left={left}
          maxWidth="20px"
          minW="20px"
          height="40px"
          zIndex="1000"
          _focus={{ outline: "0" }}
        >
          <ChevronUpIcon fontSize="lg" />
        </Button>
      ) : null}
    </>
  );
};

export default BackToTop;
