"use client"
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    const handleEmailClick = () => {
        window.location.href = "mailto:reduktorsh@gmail.com";
    };

    const handleWhatsappClick = () => {
        window.location.href = "https://wa.me/6285141039301";
    };

    const handleInstagramClick = () => {
        window.location.href = "https://www.instagram.com/";
    };

    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/";
    };

    return (
        <Flex
            direction={"column"}
            w={"full"}
            align={"center"}
            justify={"center"}
            gap={"80px"}
            textAlign={"center"}>
            <Flex>
                <Text
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"40px"}
                    borderBottom={"1px solid red"}>
                    Contact Us
                </Text>
            </Flex>
            <Flex gap={"80px"} align={"center"} justify={"center"}>
                <Flex direction={"column"} gap={"24px"} align={"center"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        color={"black"}
                        rounded={"full"}
                        aria-label="email"
                        onClick={handleEmailClick}>
                        <MdOutlineMail />
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Email
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"24px"} align={"center"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        color={"black"}
                        rounded={"full"}
                        aria-label="whatsapp"
                        onClick={handleWhatsappClick}>
                        <MdWhatsapp />
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Whatsapp
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"24px"} align={"center"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        color={"black"}
                        rounded={"full"}
                        aria-label="instagram"
                        onClick={handleInstagramClick}>
                        <FaInstagram />
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        Instagram
                    </Text>
                </Flex>
                <Flex direction={"column"} gap={"24px"} align={"center"}>
                    <IconButton
                        border={"2px solid red"}
                        w={"84px"}
                        h={"84px"}
                        fontSize={"42px"}
                        color={"black"}
                        rounded={"full"}
                        aria-label="linkedin"
                        onClick={handleLinkedInClick}>
                        <CiLinkedin />
                    </IconButton>
                    <Text color={"red"} fontWeight={"bold"} fontSize={"20px"}>
                        LinkedIn
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
