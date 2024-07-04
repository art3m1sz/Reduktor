"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaFeatherAlt, FaWordpress, FaCode } from "react-icons/fa";

const Product = () => {
  return (
    <Flex
      gap={"24px"}
      pb={"60px"} /* Increased padding bottom for more space */
      justify={"center"}
      mx={"auto"}
      direction={"column"}
      align={"center"}
    >
      <Text
        fontSize={"40px"}
        borderBottom={"1px solid red"}
        color={"white"}
        fontWeight={"bold"}
      >
        Our Product
      </Text>
      <Flex
        gap={"48px"}
        wrap={"wrap"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        mt={"24px"}
      >
        <Box
          width="300px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          textAlign="center"
          boxShadow="md"
          borderColor="red"
          mb={6} /* Increased margin bottom for more space */
        >
          <Icon as={FaFeatherAlt} w={10} h={10} mb={4} color="red" />
          <Text fontSize="xl" fontWeight="semibold" color="red">
            Static Website
          </Text>
          <Text mt={2} color="white">
            A simple web without dynamic data
          </Text>
        </Box>
        <Box
          width="300px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          textAlign="center"
          boxShadow="md"
          borderColor="red"
          mb={6} /* Increased margin bottom for more space */
        >
          <Icon as={FaWordpress} w={10} h={10} mb={4} color="red" />
          <Text fontSize="xl" fontWeight="semibold" color="red">
            Wordpress 
          </Text>
          <Text mt={2} color="white">
            Website using wordpress base
          </Text>
        </Box>
        <Box
          width="300px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          textAlign="center"
          boxShadow="md"
          borderColor="red"
          mb={6} /* Increased margin bottom for more space */
        >
          <Icon as={FaCode} w={10} h={10} mb={4} color="red" />
          <Text fontSize="xl" fontWeight="semibold" color="red">
            Full Develop Website
          </Text>
          <Text mt={2} color="white">
            A full feature website
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Product;
