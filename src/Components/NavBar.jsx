import React from "react";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Avatar,
  AvatarBadge,
  Image,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";

const NavBar = () => {
  const ShowOrNot = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      justifyContent={"flex-start"}
      background="var(--primary-bg)"
      boxShadow="var(primary-bs)"
      backdropFilter={"--bg-filter"}
      p={2}
      w={"100%"}
      borderRadius={5}
    >
      <Flex justifyContent={"space-between"} px={10} w={"100%"}>
        {!ShowOrNot && (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  bg={"none"}
                  border={"none"}
                >
                  <HamburgerIcon color={"white"} />
                </MenuButton>
                <MenuList>
                  <MenuItem bg={"black"} color={"#FFFFFF"}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Products
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Members
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Sales
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        )}

        {ShowOrNot && (
          <Image
            src={
              "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/glfxm8pjygdmogygwxpt"
            }
          />
        )}
        <HStack>
          <Avatar size="sm" src="https://bit.ly/dan-abramov">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Text color={"#9B8C8D"}>Johnson Smith</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
