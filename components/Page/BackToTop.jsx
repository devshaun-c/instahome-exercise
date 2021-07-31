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
          colorScheme="brand"
          display={["none", "flex", "flex"]}
          onClick={toTop}
          position="fixed"
          bottom="3%"
          right={right}
          left={left}
          width="40px"
          height="40px"
          zIndex="1000"
          _focus={{ outline: "0" }}
        >
          <ChevronUpIcon fontSize="xl" />
        </Button>
      ) : null}
    </>
  );
};

export default BackToTop;
