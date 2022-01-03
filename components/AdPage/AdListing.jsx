import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
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
  FaPlusCircle,
  FaRegEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { AD_SPECS, AD_TYPES } from "../../constants/adType";
import { PRIVELAGE_CUSTOMERS } from "../../constants/privelageCustomers";
import NewAdForm from "./NewAdForm";
import PaymentSummary from "./PaymentSummary";
import StandardButton from "../Buttons/StandardButton";

const getCompanyName = (companyId) => {
  var companyName = "Default";

  const obj = PRIVELAGE_CUSTOMERS.find(
    (customer) => customer.companyId === companyId
  );
  if (obj) {
    return obj.companyName;
  }

  return companyName;
};

const AdListing = ({ companyId = "uem_sunrise" }) => {
  const [offer, setOffer] = useState(null);
  const [listing, setListing] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleEdit = (index, ad) => {
    console.log(ad);
  };

  const handleDelete = (index) => {
    const tempList = [...listing];
    tempList.splice(index, 1);
    setListing(tempList);
  };

  return (
    <Box fontSize="sm" position="relative">
      <Stack
        width="100%"
        direction={["column", "column", "row"]}
        spacing={[0, 0, "64px"]}
      >
        <Box width={["100%", "100%", "50%"]}>
          <Text fontWeight="bold">Company</Text>
          <Text fontSize="lg" color="gray.500">
            {getCompanyName(companyId)}
          </Text>
        </Box>
        {/* <Box width="50%">
          <Text fontSize="sm">Add Company logo</Text>
          <IconButton>
            <FaCameraRetro />
          </IconButton>
        </Box> */}
      </Stack>

      <Divider my="32px" />

      <Stack direction={["column", "column", "row"]} spacing="64px">
        <Flex flexDirection="column" width={["100%", "100%", "60%"]}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mb={4}
          >
            <Text fontWeight="bold" fontSize="md">
              Ad Listings
            </Text>
            {listing.length > 0 && (
              <StandardButton
                colorScheme="red"
                size="xs"
                variant="ghost"
                onClick={() => setListing([])}
              >
                Clear all
              </StandardButton>
            )}
          </Flex>
          {listing.length ? (
            <Accordion defaultIndex={[0]} allowMultiple>
              {listing.map((ad, index) => (
                <AccordionItem key={index}>
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
                  <AccordionPanel pb={4} pl="56px" bg="gray.50">
                    {ad.adText ? (
                      <Text>{ad.adText}</Text>
                    ) : (
                      <Text>Description not provided</Text>
                    )}
                    <Flex direction="row" justifyContent="flex-end" mt={2}>
                      {/* <IconButton
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(index, ad)}
                      >
                        <FaRegEdit />
                      </IconButton> */}
                      <IconButton
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => handleDelete(index)}
                      >
                        <FaTrashAlt />
                      </IconButton>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Text>No listing created yet</Text>
          )}

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

        <Box width={["100%", "100%", "40%"]}>
          {listing.length > 0 && (
            <PaymentSummary
              listing={listing}
              companyId={companyId}
              offer={offer}
            />
          )}
        </Box>
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
              handleClose={onClose}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdListing;
