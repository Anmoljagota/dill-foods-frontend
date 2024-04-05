import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Header = ({ title, total, target }) => {
  const Percantage = Math.ceil((+total / +target) * 100);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"#FFFFFF"}
      background="var(--primary-bg)"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      backdropFilter={"--bg-filter"}
      p={"1rem"}
      borderRadius={"10px"}
    >
      <Flex direction={"column"} gap={"5px"}>
        <Text>{title}</Text>

        <Text color={"#6e6868"} fontSize={"0.8rem"}>
          total {title}
        </Text>
        <Text>{total}</Text>
        <Text>Detail</Text>
      </Flex>
      <CircularProgress
        value={Percantage}
        color={
          title === "Visits"
            ? "orange.400"
            : title === "Orders"
            ? "green.400"
            : "#B794F4"
        }
        thickness={"16px"}
        size={{ base: "50px", md: "70px", lg: "100px" }}
      >
        <CircularProgressLabel>{`${Percantage}%`}</CircularProgressLabel>
      </CircularProgress>
    </Flex>
  );
};

export default Header;
