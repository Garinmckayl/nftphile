import { FC, useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  HStack,
  Divider,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import useSWR from "swr";
// import { EyeOffIcon } from "@heroicons/react/outline";

import { fetcher } from "../utils/fetcher";

// type Props = {
//   details: any;
//   onSelect: (id: string) => void;
//   onTokenDetailsFetched?: (props: any) => unknown;
// };

export const NftCard = ({
  details,
  onSelect,
  onTokenDetailsFetched = () => {},
}) => {
  const textColor = "#8BACD9";
  const cyan = "#00FFF8";
  const [fallbackImage, setFallbackImage] = useState(false);
  const { name, uri } = details?.data ?? {};

  const { data, error } = useSWR(
    // uri || url ? getMetaUrl(details) : null,
    uri,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  // console.log("data", data);

  useEffect(() => {
    if (!error && !!data) {
      onTokenDetailsFetched(data);
    }
  }, [data, error]);

  const onImageError = () => setFallbackImage(true);
  const { image } = data ?? {};

  return (
    <div className={`card bordered max-w-xs compact rounded-md`}>
      <Center bg="" h="100vh">
        <Box bg="#15263F" color="white" borderRadius="2xl" p={6} w={350}>
          <Box position="relative">
            <Image
              src={image}
              borderRadius="8px"
              marginBottom={2}
              cursor="pointer"
              alt="NFT image"
              zIndex="2"
            ></Image>
            <Box
              zIndex="1"
              position="absolute"
              backgroundColor={cyan}
              width="100%"
              height="100%"
              top="0"
              borderRadius="8px"
              opacity="0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                opacity: "50%",
              }}
            >
              <Image src={image} height="48px" width="48px"></Image>
            </Box>
          </Box>
          <Heading
            as="h2"
            fontSize="22px"
            mb={4}
            cursor="pointer"
            _hover={{
              color: "#00FFF8",
            }}
          >
            {name}
          </Heading>
          <Text color={textColor} mb={6} fontSize="18px">
            Our Equilibrium collection promotes balance and calm.
          </Text>
          <HStack justify="space-between">
            <Flex align="center">
              <Image
                src={image}
                marginRight="6px"
                height="18px"
                alt="ETH logo"
              ></Image>
              <Text color="#00FFF8" fontWeight="bold">
                0.041 ETH
              </Text>
            </Flex>
            <Flex align="center">
              <Image
                src={image}
                marginRight="6px"
                height="16px"
                alt="clock icon"
              ></Image>
              <Text color={textColor}>3 days left</Text>
            </Flex>
          </HStack>
          <Divider borderColor="#2E405A" mt={6} mb={4} />
          <Flex>
            <Image
              border="1px"
              borderColor="white"
              borderRadius="50px"
              boxSize="30px"
              objectFit="cover"
              src={image}
              alt="Profile Picture"
              marginRight={4}
            />
            <Text color={textColor}>
              Creation of{" "}
              <Link
                color="white"
                href="#"
                _hover={{
                  color: "#00FFF8",
                }}
              >
                Jules Wyvern
              </Link>
            </Text>
          </Flex>
        </Box>
      </Center>

      {/* <figure className="min-h-16 animation-pulse-color">
        {!fallbackImage || !error ? (
          <img
            src={image}
            onError={onImageError}
            className="bg-gray-800 object-cover"
          />
        ) : (
          // Fallback when preview isn't available
          // This could be broken image, video, or audio
          <div className="w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40">
            {/* <EyeOffIcon className="h-16 w-16 text-white-500" /> *
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm text-left">{name}</h2>
      </div> */}
    </div>
  );
};
