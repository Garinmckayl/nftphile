import { SiLinkedin, SiTwitter } from "react-icons/si";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const IMAGE =
  "https://suplar.com/wp-content/uploads/2021/11/ProfilePixNathaniel2-300x300.png";

export default function About() {
  return (
    <Layout>
      <Heading
        color={"#ff2975"}
        mb={5}
        textAlign={"center"}
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        About the team
      </Heading>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            ></Text>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Natnael
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {/* @lindsey_jam3s */}
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Programmer, inventor, entrepreneur, composer and artist. PM for
              inquires.
            </Text>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Link
              w={"full"}
              maxW={"md"}
              href="https://twitter.com/Zea1shama"
              passHref
            >
              <Button
                w={"full"}
                maxW={"md"}
                colorScheme={"twitter"}
                href={"https://twitter.com/Zea1shama"}
                leftIcon={<SiTwitter />}
              ></Button>
            </Link>
            <Link
              w={"full"}
              maxW={"md"}
              href="https://www.linkedin.com/in/natnaelgetenew/"
              passHref
            >
              <Button
                w={"full"}
                maxW={"md"}
                colorScheme={"linkedin"}
                leftIcon={<SiLinkedin />}
              ></Button>
            </Link>
          </Stack>
        </Box>
      </Center>
    </Layout>
  );
}
