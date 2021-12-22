import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  // Image,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import placeholderImg from "../../public/static/images/business-decision.svg";
import Container from "../Page/Container";
import { useRouter } from "next/router";
import StandardButton from "../Buttons/StandardButton";
import Typewriter from "typewriter-effect";

const PartnerHero = ({ handlePrimary }) => {
  const router = useRouter();

  return (
    <Box position="relative">
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
                fontSize={["32px", "32px", "48px"]}
                fontWeight="bold"
                lineHeight="1.2"
                fontFamily="var(--special-font)"
              >
                We digitalize
              </Heading>
              <Flex alignItems="center">
                <Heading
                  fontSize={["32px", "32px", "48px"]}
                  fontWeight="bold"
                  lineHeight="1.2"
                  fontFamily="var(--special-font)"
                >
                  your
                </Heading>
                <Box
                  ml={2}
                  fontSize={["32px", "32px", "48px"]}
                  fontFamily="var(--special-font)"
                  fontWeight="bold"
                  lineHeight="1.2"
                  textDecoration="underline"
                >
                  <Typewriter
                    options={{
                      strings: ["business", "workshop", "event", "class"],
                      autoStart: true,
                      delay: 50,
                      deleteSpeed: 30,
                      loop: true,
                      pauseFor: 1000,
                    }}
                  />
                </Box>
              </Flex>

              <Heading
                fontSize={["32px", "32px", "48px"]}
                fontWeight="bold"
                lineHeight="1.2"
                fontFamily="var(--special-font)"
              >
                for you.
              </Heading>
              <Box mt={8}>
                <Text fontSize={["sm", "md"]}>
                  Looking to promote your next event or activity?
                </Text>
              </Box>
              <StandardButton
                size="lg"
                colorScheme="brand"
                mt={8}
                onClick={handlePrimary}
              >
                Get started now!
              </StandardButton>
            </Box>
          </Flex>
          <Flex
            w={["100%", "50%", "50%"]}
            alignItems="center"
            justifyContent="center"
          >
            <AspectRatio w="600px" maxW="600px" ratio={1}>
              <Image
                src={placeholderImg}
                alt="after work partner"
                objectFit="cover"
                layout="fill"
                blurDataURL={placeholderImg}
              />
            </AspectRatio>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default PartnerHero;
