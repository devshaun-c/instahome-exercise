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
          onClick={toTop}
          position="fixed"
          bottom="5%"
          right={right}
          left={left}
          borderRadius="8px"
          width="40px"
          height="40px"
          outline="none"
          color="white"
          zIndex="1000"
          bg={theme.colors.primary}
          _hover={{ bg: "" }}
          _focus={{ outline: "0" }}
        >
          <ChevronUpIcon fontSize="xl" />
        </Button>
      ) : null}
    </>
  );
};

export default BackToTop;
