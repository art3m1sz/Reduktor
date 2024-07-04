import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Banner (){
    return (
        <Flex zIndex={1} direction={"column"} align={"center"}>
                    <Flex w={"200px"} h={"200px"}>
                    <Image src="/Reduktor-logo-dark2.png" alt="banner" width={1000} height={1000}></Image>
                    </Flex>
                    <Flex direction={"column"} mt={"48px"} align={"center"}>
                      <Text color={"white"} fontSize={"64px"} fontWeight={"bold"}>WELCOME TO REDUKTOR</Text>
                        
                    </Flex>
                </Flex>
    )
}