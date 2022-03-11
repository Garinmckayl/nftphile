import Link from "next/link";
import { FC, useState } from "react";
import {
  Box,
  Input,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";

// import { Loader, SuplarLogo, SelectAndConnectWalletButton } from "components";
import { NftCard } from "../components/NftCard";
import Layout from "../components/Layout";

import { SearchIcon } from "@chakra-ui/icons";

// import styles from "./index.module.css";
const walletPublicKey = "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy";

export default function GalleryView({}) {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState(walletPublicKey);
  const { publicKey } = useWallet();

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  console.log("nfts", nfts);

  const onChange = (e) => {
    const { value } = e.target;
    setWalletToParsePublicKey(value.trim());
  };

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <Layout>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          //   children={}
        >
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Enter Wallet Address"
          value={walletToParsePublicKey}
          onChange={onChange}
          style={{
            borderRadius:
              "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)",
          }}
        />
      </InputGroup>
      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        {/* <WalletMultiButton className="btn btn-ghost" /> */}

        <div className="text-center pt-2">
          <div className="hero min-h-16 p-0 pt-10">
            <div className="text-center hero-content w-full">
              <div className="w-full">
                <div className="my-10">
                  {error ? (
                    <div>
                      <h1>Error Occures</h1>
                      {error?.message}
                    </div>
                  ) : null}

                  {!error && isLoading ? (
                    <Center bg="#fff" height="100vh" color="white">
                      <Spinner
                        thickness="4px"
                        speed="0.35s"
                        emptyColor="gray.200"
                        color="pink.500"
                        size="xl"
                      />
                    </Center>
                  ) : (
                    <NftList nfts={nfts} error={error} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// type NftListProps = {
//   nfts: NftTokenAccount[];
//   error?: Error;
// };

const NftList = ({ nfts, error }) => {
  if (error) {
    return null;
  }

  if (!nfts?.length) {
    return (
      <div className="text-center text-2xl pt-16">
        No NFTs found in this wallet
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
      <SimpleGrid columns={[2, null, 3]} spacing="10px">
        {nfts?.map((nft) => (
          <NftCard key={nft.mint} details={nft} onSelect={() => {}} />
        ))}
      </SimpleGrid>
    </div>
  );
};
