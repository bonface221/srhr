"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface Props {
  menuItem: {
    label: string;
    link?: string | undefined;
    subItems?: {
      label: string;
      link: string;
    }[];
  };
}

const MenuDropdown = ({ menuItem }: Props) => {
  const mDropdown = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let dropdownEl = mDropdown.current;
    if (dropdownEl) {
      dropdownEl.addEventListener("mouseover", onOpen);
      dropdownEl.addEventListener("mouseleave", onClose);
    }

    return () => {
      if (dropdownEl) {
        dropdownEl.removeEventListener("mouseover", onOpen);
        dropdownEl.removeEventListener("mouseleave", onClose);
      }
    };
  }, []);

  if (!menuItem.subItems) {
    return (
      <Link href={menuItem.link ? menuItem.link : "/"}>
        <Text fontWeight="semibold" fontSize="lg" color="brand.main">
          {menuItem.label}
        </Text>
      </Link>
    );
  }
  return (
    <Box ref={mDropdown}>
      <Menu
        isOpen={isOpen}
        placement="bottom-start"
        closeOnSelect={true}
        gutter={0}
      >
        <MenuButton
          color="brand.main"
          _active={{
            bg: "none",
            color: "brand.red",
          }}
          _hover={{
            bg: "none",
            color: "brand.red",
          }}
        >
          <Flex align="center" gap={1}>
            <Box
              fontSize="lg"
              _hover={{
                cursor: "pointer",
                color: "brand.main",
              }}
              fontWeight="semibold"
            >
              {menuItem.label}
            </Box>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Flex>
        </MenuButton>

        <MenuList
          zIndex="9999"
          border="none"
          bg="brand.red"
          color="brand.white"
          onMouseLeave={() => {
            isOpen && onClose();
          }}
        >
          {menuItem.subItems.map((s, i) => (
            <MenuItem
              key={i}
              minH="48px"
              bg="brand.blue"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: "brand.black",
              }}
            >
              <Link href={`${s.link}`}>
                <Box as="span">{s.label}</Box>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuDropdown;
