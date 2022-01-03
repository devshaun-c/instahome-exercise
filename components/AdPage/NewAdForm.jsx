import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  ListItem,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import CustomSelect from "../Controls/CustomSelect";
import { AD_SPECS, AD_DEFAULT_PRICING } from "../../constants/adType";
import StandardButton from "../Buttons/StandardButton";

const NewAdForm = ({ offer, setListing, listing, handleClose }) => {
  const [formValues, setFormValues] = useState({ adType: "", adText: "" });
  const [specialPrice, setSpecialPrice] = useState(-1);

  useEffect(() => {}, []);

  const handleAdTypeChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (!offer || !(value in offer)) {
      setSpecialPrice(-1);
    } else {
      if (Object.keys(offer[value]).includes("pricePerAd")) {
        setSpecialPrice(offer[value].pricePerAd);
      }
    }
  };

  const handleAdTextChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempListing = [...listing];
    tempListing.push(formValues);

    setListing(tempListing);
    handleClose();
  };

  return (
    <Box fontSize="sm">
      <form onSubmit={handleSubmit}>
        <CustomSelect
          name="adType"
          options={[
            { label: "Select Ad Type", value: "" },
            { label: "Standard Ad", value: "standard" },
            { label: "Featured Ad", value: "featured" },
            { label: "Premium Ad", value: "premium" },
          ]}
          onChange={handleAdTypeChange}
          required
        />

        {formValues.adType && (
          <>
            <Box mt={2} fontSize="xs" ml={4}>
              <UnorderedList color="gray.500">
                {AD_SPECS[formValues.adType]?.adSpecs.map((ad, index) => (
                  <ListItem key={index}>{ad}</ListItem>
                ))}
              </UnorderedList>
            </Box>

            <Text fontSize="xs" mb={1} mt={6}>{`Ad Text (${
              AD_SPECS[formValues.adType]?.adText.charLimit
            } character limit)`}</Text>
            <Textarea
              name="adText"
              placeholder="Type your ad text here"
              fontSize="sm"
              required
              onChange={handleAdTextChange}
              maxLength={AD_SPECS[formValues.adType]?.adText.charLimit}
            />

            <Box mt={4}>
              <Text>Price Per Ad</Text>
              {specialPrice != -1 && (
                <Text fontSize="xs" color="gray.400">
                  {`Your company qualifies for a special discount for ${formValues.adType} ads`}
                </Text>
              )}
              <Flex mt={2}>
                <Text mr={2}>RM</Text>
                <Box>
                  <Text as={specialPrice != -1 ? "s" : "p"}>
                    {AD_DEFAULT_PRICING[formValues.adType]}
                  </Text>
                  {specialPrice != -1 && (
                    <Text fontSize="md" color="red">
                      {specialPrice}
                    </Text>
                  )}
                </Box>
              </Flex>
            </Box>
          </>
        )}

        <Flex mt={4} justifyContent="flex-end">
          <StandardButton colorScheme="brand" mr={3} type="submit">
            Create
          </StandardButton>
        </Flex>
      </form>
    </Box>
  );
};

export default NewAdForm;
