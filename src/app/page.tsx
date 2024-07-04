import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Montserrat, Poppins,Inter } from "next/font/google";
import Banner from "./components/Banner";
import Carousel from "./components/CarouselItem";
import Feature from "./components/Feature";
import CarouselList from "./components/CarouselList";
import About from "./components/About";
import Product from "./components/Product";
import Footer from "./Footer";
import TeamList from "./components/TeamList";



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
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                backdropFilter="auto"
                backdropBlur="24px"
                position={"relative"}
                align={"center"}
                justify={"center"}
                w={"full"}
                h={"100vh"}
                backgroundImage="url('/banner4.png')">
                <Banner></Banner>
            </Flex>
            <Flex>
                <About></About>
            </Flex>
            <Flex>
                <Feature></Feature>
            </Flex>
            <Flex position={"relative"} backgroundImage="url('/banner4')"> 
                <CarouselList></CarouselList>
            </Flex>
            <Flex>
                <Product></Product>
            </Flex>
            <Flex>
                <TeamList></TeamList>
            </Flex>
            <Flex pb={"62px"}>
                <Footer></Footer>
            </Flex>
        </Flex>
    );
}
