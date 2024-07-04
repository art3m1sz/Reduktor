"use client"
import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselItem from "./CarouselItem";


const projects = [
    {
      img: "/deepmind.jpg",
      name: "Netflix Clone",
      github_link: "https://github.com/aryyan0701/Netflix_Clone",
    },
    {
      img: "/project1.jpeg",
      name: "Type Verse (Check your typing speed)",
      github_link: "https://github.com/aryyan0701/type_verse",
      live_link: "https://aryyan0701.github.io/type_verse/",
    },
    {
      img: "/project2.jpeg",
      name: "Currency converter",
      github_link: "https://github.com/aryyan0701/Currency_converter",
    },
    {
      img: "/singer.jpg",
      name: "Quizzify",
      github_link: "https://github.com/aryyan0701/Quizzify",
      live_link: "https://quizzad.netlify.app/",
    },
    {
      img: "/sunrise.jpg",
      name: "Bloggify",
      github_link: "https://github.com/aryyan0701/Bloggify",
      live_link: "https://aryyan0701.github.io/Bloggify/",
    },
    {
      img: "/sunrise.jpg",
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
            pagination={{ clickable: true }}
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
