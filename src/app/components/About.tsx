import { Flex, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Flex
            direction={"column"}
            w={"full"}
            align={"center"}
            justify={"center"}
            gap={"24px"}>
            <Text
                fontSize={"40px"}
                borderBottom={"1px solid red"}
                color={"white"}
                fontWeight={"bold"}>
                About Us
            </Text>
            <Flex w={"40%"}>
                <Text color={"white"} align={"center"} fontWeight={"light"} fontSize={"18px"}>
                    <Text as={"span"} display={"inline"}>
                        Selamat datang di
                    </Text>
                    <Text as={"span"} fontWeight={"bold"} color={"red"} display={"inline"}>
                       {""} Reduktor
                    </Text>
                    <Text as={"span"} display={"inline"}>
                        , penyedia jasa pembuatan website profesional yang
                        berdedikasi untuk membantu bisnis Anda tampil menonjol
                        di dunia digital. Kami berkomitmen untuk menghadirkan
                        solusi website yang inovatif, responsif, dan sesuai
                        dengan kebutuhan unik setiap klien kami.
                    </Text>
                </Text>
            </Flex>
        </Flex>
    );
}
