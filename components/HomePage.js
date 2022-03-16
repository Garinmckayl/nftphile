import Image from "next/image";
import {
  Button,
  Flex,
  Heading,
  // Image,
  Stack,
  Text,
  useBreakpointValue,
  Container,
  SimpleGrid,
  StackDivider,
  Icon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoFlowerOutline,
  IoFingerPrintSharp,
  IoSnow,
  IoShapesSharp,
  IoScanCircleSharp,
} from "react-icons/io5";

// import homeart from "../public/images/hom";
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function HomePage() {
  return (
    <Layout>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        maxW={"8xl"}
        mx={"auto"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <div className="col-md-6 carousel-content-wrapper">
            {/* <h1>Get Started Power social proof for your brands.</h1>
                        <p>He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.</p> */}
            <h1 className="leadh1">
              <div className="nth-line-1">
                Home
                <br />
                of
              </div>
              <div className="nth-line-2">nfts</div>
            </h1>
            <Text fontSize="2xl">
              Showcase NFTs across multiple wallets you own and across six
              different chains.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href="/gallery" passHref>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  variant="outline"
                  size="lg"
                  rounded={"full"}
                >
                  Start Exploring
                </Button>
              </Link>
              <Button
                colorScheme="teal"
                disabled
                variant="outline"
                size="lg"
                rounded={"full"}
              >
                Login
              </Button>
            </Stack>
          </div>

          {/* <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. Its
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Project
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack>
          </Stack> */}
        </Flex>
        <Flex flex={1}>
          <Image
            src={"/images/homeart.png"}
            alt="nftfile"
            width="600px"
            height="700px"
          />
          {/* <Image alt={"Login Image"} objectFit={"cover"} src={homeart} /> */}
        </Flex>
      </Stack>

      {/* about container */}

      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>CREATE YOUR GALERIES</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Create your own personalized gallery by selecting from a variety
              of layouts and styles.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={IoFlowerOutline} color={"pink.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={"Follow interesting galleries"}
              />
              <Feature
                icon={
                  <Icon
                    as={IoFingerPrintSharp}
                    color={"pink.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={"Get a personal URL you can embed anywhere"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/images/gridart.png"}
              width={600}
              height={450}
              // layout="responsive"
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      {/* supported chains container */}

      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>Several Wallets and Chains</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Do you have different wallets where you save your NFTs? There is
              no need to be concerned.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={IoSnow} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={"Add NFTs from a variety of wallets and chains"}
              />
              <Feature
                icon={
                  <Icon as={IoShapesSharp} color={"pink.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={"Eth, Solana, Binance, Polygon, and Avalanche Supported"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              width="640px"
              height="340px"
              src={"/images/chains.png"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      {/* animation container */}

      <Container maxW={"8xl"} minH={"100vh"} py={12}>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Connect
            </Text>
            <Heading>Follow Anyone!.</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              NFTPHILE allows you to follow Blockchain addresses and get
              followed back.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={IoShapesSharp} color={"pink.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={"Follow Any Address From Any Chain"}
              />
              <Feature
                icon={
                  <Icon as={IoScanCircleSharp} color={"pink.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("pink.100", "pink.900")}
                text={
                  "Your data will be synced to the NFTPHILE open graph protocol."
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              width="640px"
              height="1240px"
              src={"/images/mock.png"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
