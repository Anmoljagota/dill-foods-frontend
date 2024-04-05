// import { GoThreeBars } from "react-icons/go";
import SidebarItems from "./SidebarItems";
import Home from "./Home";
import { Flex } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'

const Sidebar = () => {
  const nav = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex>
      {nav && <SidebarItems />}
      <Home />
    </Flex>
  );
};

export { Sidebar };
