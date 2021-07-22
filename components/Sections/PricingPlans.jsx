import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import Section from "./Section";
import StandardButton from "../Buttons/StandardButton";
import { useTheme } from "@emotion/react";
import { CheckIcon, MinusIcon, QuestionOutlineIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  header: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px",
    marginBottom: "40px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 6px 0 rgb(0 0 0 / 20%)",
    borderRadius: "8px",
    padding: "32px",
    "&:hover": {
      boxShadow: "0 20px 24px 0 rgb(0 0 0 / 20%)",
    },
  },
});

const PricingPlans = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const {
    bgColor,
    textColor,
    bgImg,
    height = "100%",
    header,
    description,
    plans = [],
  } = props;

  var columnSpan = 12 / plans.length;
  if (columnSpan > 4) {
    columnSpan = 4;
  }

  return (
    <Section
      bgColor={bgColor}
      color={textColor}
      backgroundImage={bgImg}
      h={height}
      position="relative"
    >
      <div className={classes.header}>
        <Heading fontSize={["lg", "lg", "xx-large"]} textAlign="center">
          {header}
        </Heading>
        <Text
          textAlign="center"
          fontSize={["md", "md", "lg"]}
          mt={2}
          color="grey"
        >
          {description}
        </Text>
      </div>
      <Grid templateColumns="repeat(12, 1fr)" height="100%" gap={10}>
        {plans.map((plan, index) => (
          <GridItem
            key={index}
            colSpan={columnSpan}
            className={classes.gridItem}
            bg={plan.highlight ? "blue.800" : "white"}
            color={plan.highlight ? "white" : "black"}
          >
            <Box>
              <Text fontSize="xx-large" fontWeight="bold">
                {plan.name}
              </Text>
              <Text fontSize="sm" mt={4} mb={6}>
                {plan.description}
              </Text>
              <Box mb={8}>
                <Text fontSize="sm">Starts at</Text>
                <Box display="flex" mt={2}>
                  <Text fontSize="sm" mr={1}>
                    RM
                  </Text>
                  <Text fontSize="xx-large" fontWeight="bold" lineHeight="1.1">
                    {plan.price}
                  </Text>
                  <Text fontSize="sm" ml={1}>
                    /month
                  </Text>
                </Box>
              </Box>
              <StandardButton
                colorScheme="teal"
                text="Select"
                onClick={plan.fcn}
                isFullWidth
              />
              <Box mt={8}>
                <List spacing={5}>
                  {plan.list.map((item, index) => (
                    <ListItem
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center">
                        <ListIcon fontSize="18px" mr={3}>
                          {item.included ? (
                            <CheckIcon color="green.500" />
                          ) : (
                            <MinusIcon color="gray.500" />
                          )}
                        </ListIcon>
                        <Text fontSize="sm" fontWeight="bold">
                          {item.text}
                        </Text>
                      </Box>
                      {item.info && (
                        <Tooltip hasArrow label={item.info}>
                          <QuestionOutlineIcon
                            fontSize="16px"
                            color="grey.100"
                          />
                        </Tooltip>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Text textAlign="center" fontSize="sm" mt="40px">
        *All Online transaction fees will be charged to you on a per transaction
        basis based on the total order value (minus promotions and discounts,
        plus tax and shipping) for each transaction. These transaction fees are
        non-refundable. You will also be charged fees by Stripe. See Stripe.com
        for details about Stripe fees.
      </Text>
    </Section>
  );
};

export default PricingPlans;
