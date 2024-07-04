"use client";
import { Box, Flex, IconButton, Select, Text } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { LinearGradient } from "react-text-gradients";
import { Montserrat, Poppins, Inter } from "next/font/google";
import { fonts } from "../app/fonts";

export default function Nav({ name }: { name: string }) {
  return (
    <Flex
      as={"nav"}
      px={{ base: "8px", md: "24px", lg: "48px", xl: "48px" }}
      py={"16px"}
      align={"center"}
      zIndex={"99"}
      background={"#111827"}
      position={"fixed"}
      borderBottom={"1px solid red "} //3b3a37
      top={0}
      width={"100vw"}
      shadow={"0px 2px 20px rgba(41,17,0,0.1)"}
      gap={"4px"}
      fontFamily={"Poppins"}
      fontWeight={"bold"}
    >
      <Flex align={"center"} mr={"auto"} gap={"8px"}>
        <Flex gap={"8px"} p={"0px"} mr={"auto"} w={"28px"} h={"28px"}>
          <Image
            src="/Reduktor-logo-dark2.png"
            alt="nav"
            sizes="100vw"
            style={{ width: "100%" }}
            width={500}
            height={500}
          />
        </Flex>
        <Flex mr={"auto"} justify={"center"} align={"center"} gap={"56px"}>
          <Text fontSize={"24px"} color={"white"}>
            <LinearGradient gradient={["to right", "white ,white"]}>
              REDUKTOR
            </LinearGradient>
          </Text>
          <Flex direction={"row"} gap={"24px"}>
            <Text
              _hover={{ color: "red" }}
              fontSize={"13px"}
              color={"grey"}
              whiteSpace={"nowrap"}
            >
              Our Project
            </Text>
            <Text
              _hover={{ color: "red" }}
              fontSize={"13px"}
              color={"grey"}
              whiteSpace={"nowrap"}
            >
              Product
            </Text>
            <Text
              _hover={{ color: "red" }}
              fontSize={"13px"}
              color={"grey"}
              whiteSpace={"nowrap"}
            >
              Contact Us
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex ml={"auto"}>
        <Select
          placeholder="Bahasa Indonesia"
          color={"white"}
          borderColor={"red"}
        >
          <option value="option2">English</option>
        </Select>
      </Flex>
    </Flex>
  );
}
