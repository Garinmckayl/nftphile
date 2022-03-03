import { SiLinkedin, SiTwitter } from "react-icons/si";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const IMAGE =
  "https://suplar.com/wp-content/uploads/2021/11/ProfilePixNathaniel2-300x300.png";

export default function Faq() {
  return (
    <Layout>
      <Container>
        <Heading
          color={"#ff2975"}
          mb={5}
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Frequently asked questions
        </Heading>
        <Box padding="4" bg="gray.100">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What is NFTPHILE?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                NFTPHILE is the easiest way to showcase your Web3 identity. If
                you own NFTs, you can use NFTphile to create a beautiful and
                personalized gallery showcasing your collection.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Do you support audio and video NFTs?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Yes. NFTPHILE has full support for audio and video NFTs.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Do you support Solana Blockchain?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Yes. NFTPHILE has full support for multiple chains including
                Solana.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </Layout>
  );
}
