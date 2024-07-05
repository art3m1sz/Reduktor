"use client"
import React, { CSSProperties } from "react";
import { Flex, Box, Text, color } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselItem from "./CarouselItem";


const projects = [
    {
      img: "/Reduktor-logo-dark.png",
      name: "Netflix Clone",
      github_link: "https://github.com/aryyan0701/Netflix_Clone",
    },
    {
      img: "/Reduktor-logo-dark.png",
      name: "Type Verse (Check your typing speed)",
      github_link: "https://github.com/aryyan0701/type_verse",
      live_link: "https://aryyan0701.github.io/type_verse/",
    },
    {
      img: "/Reduktor-logo-dark.png",
      name: "Currency converter",
      github_link: "https://github.com/aryyan0701/Currency_converter",
    },
    {
      img: "/Reduktor-logo-dark.png",
      name: "Quizzify",
      github_link: "https://github.com/aryyan0701/Quizzify",
      live_link: "https://quizzad.netlify.app/",
    },
    {
      img: "/Reduktor-logo-dark.png",
      name: "Bloggify",
      github_link: "https://github.com/aryyan0701/Bloggify",
      live_link: "https://aryyan0701.github.io/Bloggify/",
    },
    {
      img: "/Reduktor-logo-dark.png",
      name: "Sandbox Clone",
      github_link: "https://github.com/aryyan0701/sandbox_clone",
      live_link: "https://aryyan0701.github.io/sandbox_clone/",
    },
  ];

const CarouselList: React.FC = () => {
  return (
      <Flex direction={"column"} maxW="6xl" gap="24px" px="5" mx="auto" alignItems="center" position="relative">
        <Flex>
          <Text color={"white"} fontWeight={"bold"} fontSize={"40px"} borderBottom={"1px solid red"}>Our Project</Text>
        </Flex>
        <Box pt={"10px"} w={{ lg: "12/13", base: "100%" }} h="full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true}}
            style={{
              "--swiper-pagination-color": "red",
              "--swiper-pagination-bullet-inactive-color": "red",
            } as CSSProperties}
            modules={[Pagination]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <CarouselItem {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
  );
};

export default CarouselList;
