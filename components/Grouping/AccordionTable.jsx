import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";

const useStyles = createUseStyles({
  accordion: {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 12%)",
  },
  accordionItem: {
    borderTop: "none",
    borderBottom: "2px solid whitesmoke",
  },
});

const AccordionTable = ({ props, items, ...params }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Accordion className={classes.accordion} allowMultiple {...params}>
      {items.map((item, index) => (
        <AccordionItem key={index} className={classes.accordionItem}>
          <h2>
            <AccordionButton
              pb={4}
              pt={4}
              _focus={{ outline: "none" }}
              _hover={{ bg: "none" }}
            >
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">{item.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={8} pt={4} bg="whitesmoke">
            <Text fontSize="sm">{item.text}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionTable;
