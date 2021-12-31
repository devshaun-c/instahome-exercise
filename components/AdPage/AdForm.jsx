import React, { useState, useEffect } from "react";
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
  Divider,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import CustomInput from "../Controls/CustomInput";
import {
  FaCameraRetro,
  FaInfoCircle,
  FaPlusCircle,
  FaRegEdit,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import {
  AD_SPECS,
  AD_TYPES,
  PRIVELAGE_CUSTOMERS,
} from "../../constants/adType";
import NewAdForm from "./NewAdForm";
import StandardButton from "../Buttons/StandardButton";

const tempListings = [
  {
    ...AD_SPECS.standard,
    adText: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      charLimit: 150,
    },
  },
  {
    ...AD_SPECS.premium,
    adText: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      charLimit: 150,
    },
  },
];

const AdForm = ({ companyId = "uem_sunrise" }) => {
  const [offer, setOffer] = useState(null);
  const [listing, setListing] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {}, []);

  useEffect(() => {
    //This should be replaced with a REST API to GET customer object
    const specialDeal = PRIVELAGE_CUSTOMERS.find(
      (customer) => customer.companyId === companyId
    );

    if (specialDeal) {
      setOffer(specialDeal.offers);
    } else {
      setOffer(null);
    }
  }, [companyId]);

  console.log(listing);

  return (
    <Box fontSize="sm">
      <Stack width="100%" direction="row" spacing="64px">
        <Box width="50%">
          <CustomInput label="Your company name" disabled value={companyId} />
        </Box>
        <Box width="50%">
          <Text fontSize="sm">Company logo</Text>
          <IconButton>
            <FaCameraRetro />
          </IconButton>
        </Box>
      </Stack>

      <Divider my="32px" />

      <Stack direction={["column", "row"]} spacing="64px">
        <Flex flexDirection="column" width="50%">
          <Flex justifyContent="space-between" alignItems="center" width="50%">
            <Text fontWeight="bold" fontSize="md" mb={4}>
              Ad Listings
            </Text>
          </Flex>
          <Accordion defaultIndex={[0]} allowMultiple>
            {listing.map((ad, index) => (
              <AccordionItem key={ad.adType}>
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
                        <Text>{index + 1}</Text>
                      </Flex>
                      <Text>{AD_TYPES[ad.adType].label}</Text>
                    </Flex>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Stack direction="row" mb={3}>
                    <IconButton size="sm" colorScheme="blue">
                      <FaRegEdit />
                    </IconButton>
                    <IconButton size="sm" colorScheme="red">
                      <FaTrashAlt />
                    </IconButton>
                  </Stack>
                  {ad.adText.text ? (
                    <Text>{ad.adText.text}</Text>
                  ) : (
                    <Text>Description not provided</Text>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Flex
            alignItems="center"
            width="50%"
            mt="32px"
            color="brand.500"
            cursor="pointer"
            ml={4}
            onClick={onOpen}
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

        <Flex flexDirection="column" width="50%">
          <Text fontWeight="bold" fontSize="md" mb={4}>
            Order Payment Summary
          </Text>
          <Text>Standard Ad x 2</Text>
          <Text>Premium Ad x 1</Text>

          <Divider />
          <Text fontWeight="bold">Total</Text>

          <StandardButton colorScheme="brand">Checkout</StandardButton>
          {/* <OrderedList spacing={2}>
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
          </OrderedList> */}
        </Flex>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="md">Create your new Ad Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewAdForm
              offer={offer}
              setListing={setListing}
              listing={listing}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdForm;
