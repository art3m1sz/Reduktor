import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { MdDesktopMac } from "react-icons/md";

export default function Feature() {
    return (
        <Flex
            gap={"24px"}
            pb={"36px"}
            justify={"center"}
            mx={"auto"}
            direction={"column"}
            align={"center"}>
            <Text
                fontSize={"40px"}
                borderBottom={"1px solid red"}
                color={"white"}
                fontWeight={"bold"}>
                Features
            </Text>
            <Flex
                gap="120px"
                justify="center"
                px="64px"
                align="center"
                w="full">
                <Flex flex="1" justify="center">
                    <Text color="white" fontSize="28px" textAlign="center">
                        Desain Dan Pengembangan Web
                    </Text>
                </Flex>
                <Flex flex="1" justify="center">
                    <Text color="white" fontSize="28px" textAlign="center">
                        Pengembangan Aplikasi Web
                    </Text>
                </Flex>
                <Flex flex="1" justify="center">
                    <Text color="white" fontSize="28px" textAlign="center">
                        Konsultan TI
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
