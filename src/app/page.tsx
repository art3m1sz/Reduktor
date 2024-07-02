import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Banner from "./components/Banner";
import Carousel from "./components/CarouselItem";
import Feature from "./components/Feature";
import CarouselList from "./components/CarouselList";
import About from "./components/About";

export default function Home() {
    return (
        <Flex
            background={"black"}
            direction={"column"}
            maxW={"100%"}
            w={{ base: "100vw", lg: "100vw" }}
            gap={"148px"}
            pb={"16px"}>
            <Flex
                backdropFilter="auto"
                backdropBlur="24px"
                position={"relative"}
                align={"center"}
                justify={"center"}
                w={"full"}
                h={"100vh"}
                backgroundImage="url('/banner.jpg')">
                <Banner></Banner>
            </Flex>
            <Flex>
                <About></About>
            </Flex>
            <Flex>
                <Feature></Feature>
            </Flex>
            <Flex position={"relative"} backgroundImage="url('/banner.jpg')">
                <CarouselList></CarouselList>
            </Flex>
        </Flex>
    );
}
