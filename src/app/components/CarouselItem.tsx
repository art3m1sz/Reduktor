"use client"
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface CarouselItemProps {
  img: string;
  name: string;
  github_link: string;
  live_link?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = React.memo(({ img, name, github_link, live_link }) => {
  return (
    <Flex direction="column" p="4" backdropBlur={"20%"} borderRadius="xl">
      <Box w="100%" h="356px" borderRadius="lg" overflow="hidden" position="relative">
        <Image src={img} alt={name} layout="fill"
    objectFit="cover" />
      </Box>
      <Text fontSize="xl" my="4" color={"white"} fontWeight="bold">{name}</Text>
      <Flex gap="3">
        <Button as="a" href={github_link} target="_blank" colorScheme="red" variant="solid">
        <Text color={"black"}>Github</Text>
        </Button>
        {live_link && (
          <Button as="a" href={live_link} target="_blank" colorScheme="red" variant="outline">
            <Text>Live</Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
});

export default CarouselItem;
