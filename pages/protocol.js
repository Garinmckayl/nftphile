import Image from "next/image";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Center,
} from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Protocol() {
  return (
    <Layout>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Open social graph standard of{" "}
            <Text as={"span"} color={"pink.400"}>
              NFTs
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            NFTPHILE protocol is open protocol based on NFTPHILE platform,
            anyone can build on top of the open protocol.You may smoothly bring
            your followers to any web3 platform using the protocol. As a
            developer, you can utilize the NFTPHILE protocol to import/integrate
            the open graph to your application.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              disabled
              colorScheme={"pink"}
              bg={"pink.400"}
              _hover={{ bg: "orange.500" }}
            >
              Comming Soon
            </Button>
            {/* <Button rounded={"full"} px={6}>
              Learn more
            </Button> */}
          </Stack>
          <Flex w={"full"}>
            <Image
              align={"center"}
              rounded={"md"}
              alt={"feature image"}
              src={"/images/protocol.svg"}
              width={900}
              height={450}
              // layout="responsive"
              objectFit={"cover"}
            />
          </Flex>
        </Stack>
      </Container>
    </Layout>
  );
}
