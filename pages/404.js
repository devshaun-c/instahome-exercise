import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
import ContentContainer from "../components/ContentContainer";
import imgHero from "../public/static/images/404-image.svg";

export default function FourOhFour() {
  return (
    <ContentContainer>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box width="100%" maxWidth="500px">
          <img src={imgHero} />
        </Box>
        <Text>Uh oh... Looks like this page is not ready yet :(</Text>
        <Text>
          But no worries! Subscribe to us and we will keep you updated
        </Text>
      </Box>
    </ContentContainer>
  );
}
