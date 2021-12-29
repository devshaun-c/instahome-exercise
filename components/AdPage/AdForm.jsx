import React from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  Grid,
  GridItem,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";
import { FaCameraRetro, FaPlusCircle } from "react-icons/fa";
import CustomSelect from "../Controls/CustomSelect";

const AdForm = () => {
  return (
    <Box fontSize="sm">
      <Stack width="100%" direction="row" spacing="64px">
        <Box width="50%">
          <CustomInput label="Your company name" disabled />
        </Box>
        <Box width="50%">
          <Text fontSize="sm">Company logo</Text>
          <IconButton>
            <FaCameraRetro />
          </IconButton>
        </Box>
      </Stack>

      <Stack direction="row" spacing="64px" mt="64px">
        <Flex flexDirection="column" width="50%">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton fontSize="sm">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  w="100%"
                >
                  <Flex>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      minW="24px"
                      minH="24px"
                      maxW="24px"
                      maxH="24px"
                      border="1px solid black"
                      borderRadius="50%"
                      mr={4}
                    >
                      <Text>1</Text>
                    </Flex>
                    <Text>Standard Ad</Text>
                  </Flex>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Flex
            alignItems="center"
            width="50%"
            mt="32px"
            color="brand.500"
            cursor="pointer"
            ml={4}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              minW="24px"
              minH="24px"
              maxW="24px"
              maxH="24px"
              mr={4}
              fontSize="24px"
            >
              <FaPlusCircle />
            </Flex>
            <Text fontSize="sm">Add another</Text>
          </Flex>
        </Flex>
        <Box width="50%">
          <OrderedList spacing={2}>
            <ListItem>
              <Text>
                <b>Standard Ad</b>
              </Text>
              <Text>Offers the most basic level of advertisement</Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Featured Ad</b>
              </Text>
              <Text>
                Allows advertisers to use a company logo and use a longer
                presentation text
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <b>Premium Ad</b>
              </Text>
              <Text>
                Same benefits as Featured Ad, but also puts the advertisement at
                the top of the results, allowing higher visibility
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
      </Stack>

      <Box mt="100px">
        <form>
          <CustomSelect
            options={[
              { label: "Select Ad Type", value: "" },
              { label: "Standard Ad", value: "standard" },
              { label: "Featured Ad", value: "featured" },
              { label: "Premium Ad", value: "premium" },
            ]}
          />
        </form>
      </Box>
    </Box>
  );
};

export default AdForm;
