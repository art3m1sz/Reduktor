// components/Footer.tsx

import { Flex, Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex
            px={{ base: "8px", md: "24px", lg: "48px", xl: "48px" }}
            py={"24px"}
            align={"center"}
            zIndex={"99"}
            bg={"#111827"}
            borderTop={"1px solid red"}
            width={"100%"}
            shadow={"0px 2px 20px rgba(41, 17, 0, 0.1)"}
            gap={"4px"}
            fontWeight={"bold"}
            position="absolute" // Set position to relative
            bottom={0} // Ensure it's at the bottom
            mt="auto" // Push to bottom of its container
        >
            <Box flex="1" color={"gray"} textAlign="center">
                <Text fontSize="sm">
                    &copy; 2024{" "}
                    <Text
                        as={"span"}
                        display={"inline"}
                        _hover={{ color: "red" }}>
                        REDUKTOR.
                    </Text>{" "}
                    All rights reserved.
                </Text>
            </Box>

        </Flex>
    );
};

export default Footer;
