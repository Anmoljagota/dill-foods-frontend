import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Header = ({ items }) => {
    // const Percantage = Math.ceil((+visitors / +target) * 100);
    console.log(items.HeaderVisitors, "items");
  const Percentage=items.HeaderVisitors? Math.ceil(items.HeaderVisitors):""
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
          <Text>
            {items.HeaderVisitors
              ? items.HeaderVisitors[0].title
              : items.HeaderOrders
              ? items.HeaderOrders[0].title
              : items.Headersales[0].title}
          </Text>
          <Text color={"#6e6868"} fontSize={"0.8rem"}>
            Total{" "}
            {items.HeaderVisitors
              ? items.HeaderVisitors[0].title
              : items.HeaderOrders
              ? items.HeaderOrders[0].title
              : items.Headersales[0].title}
          </Text>
          <Text>
            {" "}
            {items.HeaderVisitors
              ? items.HeaderVisitors[0].visitors
              : items.HeaderOrders
              ? items.HeaderOrders[0].totalOrders
              : items.Headersales[0].totalsale}
          </Text>
          <Text>Detail</Text>
        </Flex>
        <CircularProgress
          // value={Percantage}
          color="orange.400"
          thickness={"16px"}
          size={{ base: "50px", md: "70px", lg: "100px" }}
        >
          {/* <CircularProgressLabel>{`${Percantage}%`}</CircularProgressLabel> */}
        </CircularProgress>
      </Flex>
    );
  };
  
  export default Header;
  