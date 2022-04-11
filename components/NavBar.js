/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  MenuGroup,
} from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../utils/connectors";

import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Links = ["gallery", "protocol", "faq", "about", "contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    textTransform={"uppercase"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children}
  >
    {children}
  </Link>
);

export default function withAction() {
  const [network, setNetwork] = useState(undefined);

  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    // setMessage("");
    // setSignature("");
    // setVerified(undefined);
  };
  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="/" passHref>
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  mr={4}
                  href={"/"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  NFTPHILE
                </Button>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {!active ? (
              <>
                <Link href="/connectWallet" passHref>
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    mr={4}
                    href={"/connectWallet"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/connectWallet" passHref>
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    mr={4}
                    href={"/connectWallet"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Log In
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    rounded={"full"}
                    minW={30}
                    icon={<IoPersonOutline />}
                    colorScheme="pink"
                  >
                    {/* <Avatar mr={4} size="sm" bg="pink.500" /> */}
                    Profile
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <Link href="/account" passHref>
                        <MenuItem>My Account</MenuItem>
                      </Link>
                      <MenuItem
                        icon={<ExternalLinkIcon />}
                        onClick={disconnect}
                      >
                        Logout{" "}
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                      <MenuItem>Docs</MenuItem>
                      <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </>
            )}

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
