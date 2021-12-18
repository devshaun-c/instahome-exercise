import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";
import placeholderImg from "../../public/static/images/partner-hero.svg";
import Container from "../Page/Container";
import { useRouter } from "next/router";
import StandardButton from "../Buttons/StandardButton";

const Hero = () => {
  const router = useRouter();

  return (
    <Box position="relative" bg="brand.50">
      <Container>
        <Stack
          direction={["column", "row", "row"]}
          h="100%"
          p={["64px 0", "64px 0", " 0"]}
        >
          <Flex
            flexDir="column"
            w={["100%", "50%", "50%"]}
            justifyContent="center"
          >
            <Box>
              <Text fontSize="md" mb={2} color="brand.500" fontWeight="bold">
                JOIN FREE TODAY
              </Text>
              <Heading
                fontSize={["32px", "32px", "40px"]}
                fontWeight="bold"
                lineHeight="1.4"
                fontFamily="var(--special-font)"
              >
                Digitalizing your
              </Heading>
              <Heading
                fontSize={["32px", "32px", "40px"]}
                fontWeight="bold"
                lineHeight="1.4"
                fontFamily="var(--special-font)"
              >
                <u>business</u>
              </Heading>
              <Heading
                fontSize={["32px", "32px", "40px"]}
                fontWeight="bold"
                lineHeight="1.4"
                fontFamily="var(--special-font)"
              >
                for you.
              </Heading>
              <StandardButton
                size="lg"
                colorScheme="brand"
                mt={8}
                onClick={() => router.push("/store/register")}
              >
                Get Started now!
              </StandardButton>
            </Box>
          </Flex>
          <Flex
            w={["100%", "50%", "50%"]}
            alignItems="center"
            justifyContent="center"
          >
            <AspectRatio w="600px" maxW="600px" ratio={1}>
              <Image src={placeholderImg} alt="foodprint" objectFit="cover" />
            </AspectRatio>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
