"use client";
import { Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface TeamProps {
  img: string;
  name: string;
  bio: string;
  isActive: boolean;
}

const Team: React.FC<TeamProps> = React.memo(({ img, name, bio, isActive }) => {
  return (
    <Flex direction="column" gap={"12px"} pb="48px" backdropBlur={"20%"} borderRadius="xl" align={"center"} justify={"center"}>
      <Flex
        align={"center"}
        justify={"center"}
        w="full"
        h="full"
        borderRadius="lg"
        overflow="hidden"
        position="relative">
        <Avatar src={img} w={isActive ? "260px" : "200px"} h={isActive ? "260px" : "200px"} transition="width 0.3s, height 0.3s"></Avatar>
      </Flex>
      <Flex direction={"column"} align={"center"} gap={"4px"}>
        <Text fontSize="xl" color={"red"} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="xl" color={"white"} fontWeight="semibold">
          {bio}
        </Text>
      </Flex>
    </Flex>
  );
});
Team.displayName = "Team";

export default Team;