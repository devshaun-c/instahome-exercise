import { Box, Text } from "@chakra-ui/layout";
import { ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Container from "../components/Page/Container";
import imgHero from "../public/static/images/404-image.svg";
import StandardButton from "../components/Buttons/StandardButton";

export default function FourOhFour() {
  const router = useRouter();

  return (
    <Container>
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
        <Text>
          Uh oh... Looks like this page you are looking for is missing.
        </Text>
        <Text>Check out our Support Page or head back Home to try again</Text>
        <ButtonGroup mt={4}>
          <StandardButton
            colorScheme="brand"
            variant="outline"
            onClick={() => router.push("/support")}
          >
            Support
          </StandardButton>
          <StandardButton colorScheme="brand" onClick={() => router.push("/")}>
            Home
          </StandardButton>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
