import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { MdDesktopMac } from "react-icons/md";

export default function Feature() {
  return (
    <Flex
      gap={"24px"}
      pb={"36px"}
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
        Features
      </Text>
      <Flex gap="24px" pt={"10px"} justify="center" px="64px" align="center" w="full">
        <Box
          width="300px" /* Fixed width for consistent size */
          borderWidth="1px"
          borderRadius="lg"
          borderColor="red"
          p={5}
          textAlign="center"
        >
          <Text color="white" fontSize="28px" textAlign="center">
            Web Design
          </Text>
        </Box>
        <Box
          width="300px" /* Fixed width for consistent size */
          borderWidth="1px"
          borderRadius="lg"
          borderColor="red"
          p={5}
          textAlign="center"
        >
          <Text color="white" fontSize="28px" textAlign="center">
            Web Development
          </Text>
        </Box>
        <Box
          width="300px" /* Fixed width for consistent size */
          borderWidth="1px"
          borderRadius="lg"
          borderColor="red"
          p={5}
          textAlign="center"
        >
          <Text color="white" fontSize="28px" textAlign="center">
            IT Consultant
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
