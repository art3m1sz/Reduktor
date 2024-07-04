import { Flex, IconButton, Text } from "@chakra-ui/react";
import { MdEmail, MdOutlineMail, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    return (
        <Flex
            direction={"column"}
            w={"full"}
            align={"center"}
            justify={"center"}
            gap={"48px"}>
            <Flex>
                <Text
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"40px"}
                    borderBottom={"1px solid red"}>
                    Contact Us
                </Text>
            </Flex>
            <Flex gap={"48px"} align={"center"} >
                <Flex direction={"column"} gap={"8px"} align={"center"} w={""}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        rounded={"full"}
                        aria-label="email">
                        <MdOutlineMail></MdOutlineMail>
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Email
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"semibold"}>
                        reduktor@example.com
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"8px"} align={"center"} w={"180px"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        rounded={"full"}
                        aria-label="email">
                        <MdWhatsapp></MdWhatsapp>
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Whatsapp
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"semibold"}>
                        reduktor@example.com
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"8px"} align={"center"} w={"180px"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        rounded={"full"}
                        aria-label="email">
                        <FaInstagram></FaInstagram>
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Instagram
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"semibold"}>
                        Reduktor
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"8px"} align={"center"} w={"180px"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        rounded={"full"}
                        aria-label="email">
                        <CiLinkedin></CiLinkedin>
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        LinkedIn
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"semibold"}>
                        reduktor@example.com
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
