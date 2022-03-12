/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import MetaMaskAuth from "../components/metamask-auth";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

// const connectMetaMaskWallet = async () => {
//   alert('hello')
// try {
//   const { ethereum } = window;

//   if (!ethereum) {
//     alert("Please install MetaMask!");
//     return;
//   }

//   const accounts = await ethereum.request({
//     method: "eth_requestAccounts",
//   });

//   console.log("Connected", accounts[0]);
// } catch (error) {
//   console.log(error);
// }
// }

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}

// export default function MetaMaskAuth({ onAddressChanged }) {
//   const [userAddress, setUserAddress] = useState("");

//   useEffect(() => {
//     checkIfWalletIsConnected(setUserAddress);
//   }, []);

//   useEffect(() => {
//     onAddressChanged(userAddress);
//   }, [userAddress]);

//   return userAddress ? (
//     <div>
//       Connected with <Address userAddress={userAddress} />
//     </div>
//   ) : (
//      <Connect setUserAddress={setUserAddress}/>
//   );
// }

function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        <button className={styles.button}>Connect to MetaMask</button>
      </a>
    );
  }
}
// export default function connectWalletCard() {
const connectCard = () => (
  <Layout>
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Connect your wallet
            </Heading>
          </Stack>

          {/* <MetaMaskAuth onAddressChanged={address => {}}/> */}

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            MetaMask
          </Button>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            WalletConnect
          </Button>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Phantom
          </Button>

          <Text color={"gray.500"}>
            inlock supports Ethereum, Polygon, Binance, Avalanche, Fantom and
            Solana chains
          </Text>
        </Box>
      </Box>
    </Center>
  </Layout>
);

export default connectCard;
// }
