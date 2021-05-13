import { Button } from "@chakra-ui/button";
import { ChevronUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

const BackToTop = ({ show }) => {
  const [visible, setVisible] = useState(false);

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
          bottom="8%"
          right="5%"
          borderRadius="8px"
          width="40px"
          height="40px"
          outline="none"
          color="white"
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
