import React from "react";

import {
  chakra, Box, Flex, useColorModeValue, VisuallyHidden,
  HStack, useDisclosure, VStack, IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import SignInModal from "./auth/SignInModal"
import SignUpModal from "./auth/SignUpModal";

import ToggleTheme from "../utils/ToggleTheme";

export default function Navbar() {

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>LOGO</VisuallyHidden>
            </chakra.a>
           <chakra.h1 fontSize="30" fontWeight="medium" ml="2">
              শ্ৰুতLipi
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <ToggleTheme />
              <SignInModal />
            </HStack>
            <SignUpModal />
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <ToggleTheme />
                <SignInModal />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
