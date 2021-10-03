import React from "react";
import { Box, Heading, Text, Flex, Avatar } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { getCategory } from "../../constants/activity";
import Container from "../Page/Container";

const useStyles = createUseStyles({
  pageHeader: {},
});

const MainHeader = (props) => {
  const classes = useStyles();
  const { title, category, orgInfo, ...others } = props;

  const {
    orgName,
    orgContact,
    orgWebsite,
    orgDescription,
    partnerImage,
    publicEmail,
  } = orgInfo;

  return (
    <Container>
      <Box mt={5} mb={5}>
        <Text color="primary" fontWeight="bold" fontSize="sm" mb={1}>
          {category ? getCategory(category) : ""}
        </Text>
        <Heading fontSize="lg">{title}</Heading>
        <Flex alignItems="center" mt={5}>
          <Avatar mr={[4, 4, 4]} size="sm" src={partnerImage} />
          <Box>
            <Text fontSize="xs">Organized by:</Text>
            <Text fontSize="sm" fontWeight="bold" mt={1}>
              {orgName}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default MainHeader;
