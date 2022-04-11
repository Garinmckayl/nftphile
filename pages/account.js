import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderPage from "../components/HomePage";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import { SmallCloseIcon } from "@chakra-ui/icons";
import EditProfile from "../components/account/editProfile";
export default function Account() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Tabs isFitted variant="soft-rounded" colorScheme="pink">
          <TabList mb="1em">
            <Tab>Profile</Tab>
            <Tab>Gallery</Tab>
            <Tab>Wallet</Tab>
            <Tab>Inbox</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EditProfile />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>wallet!</p>
            </TabPanel>
            <TabPanel>
              <p>inbox!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Layout>
    </div>
  );
}
