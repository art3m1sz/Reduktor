"use client";
import React, { useState } from "react";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Team from "./Team";

const projects = [
  {
    img: "/masapri.jpg",
    name: "Mas Apri",
    bio: "anjay",
  },
  {
    img: "/ultraman.jpg",
    name: "Supartana",
    bio: "anjay",
  },
  {
    img: "/willy.jpg",
    name: "Willy",
    bio: "anjay",
  },
  {
    img: "/masapri.jpg",
    name: "Mas Apri",
    bio: "anjay",
  },
  {
    img: "/sunrise.jpg",
    name: "Bloggify",
    bio: "anjay",
  },
  {
    img: "/sunrise.jpg",
    name: "Sandbox Clone",
    bio: "anjay",
  },
];

const TeamList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
  };

  return (
    <Flex direction={"column"} maxW="6xl" gap="6" px="5" mx="auto" alignItems="center" position="relative">
      <Flex>
        <Text color={"white"} fontWeight={"bold"} fontSize={"40px"} borderBottom={"1px solid red"}>Our Team</Text>
      </Flex>
      <Box pt={"10px"} w={{ lg: "12/13", base: "100%" }} h="full">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{ 
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 30000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          onSlideChange={handleSlideChange}
          initialSlide={1}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <Team {...project} isActive={i === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default TeamList;