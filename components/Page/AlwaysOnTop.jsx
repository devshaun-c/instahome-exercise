import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";

const AlwaysOnTop = ({ text, handleClick, right, left, ...others }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? (
        <Button
          onClick={() => alert("HI")}
          position="fixed"
          bottom="5%"
          right={right}
          left={left}
          height="auto"
          zIndex="100"
          borderRadius="8px"
          fontSize="16px"
          outline="none"
          bg="white"
          boxShadow="0 2px 4px 0 rgb(0 0 0 / 12%)"
          padding="8px 20px"
          color="black"
          _hover={{ bg: "" }}
          _focus={{ outline: "0" }}
        >
          {text}
        </Button>
      ) : null}
    </>
  );
};

export default AlwaysOnTop;
