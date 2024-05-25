"use client";
import { navData } from "@/utils/constants";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  function navigateTo(url: string) {
    router.push(url);
    onClose();
  }
  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        as={RxHamburgerMenu}
        onClick={onOpen}
        boxSize={9}
        bg="none"
        _hover={{ background: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.red">
          <DrawerCloseButton
            color="brand.black"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              color="brand.white"
            >
              {navData.map((item, i) => (
                <Accordion allowToggle color="brand.white" key={i} w="100%">
                  <AccordionItem border="none" mb="3">
                    {({ isExpanded }) => (
                      <Stack>
                        <Stack
                          bg={isExpanded ? "brand.main" : "brand.black"}
                          transition="all .3s ease"
                          borderRadius="md"
                        >
                          {item.subItems ? (
                            <AccordionButton
                              _active={{
                                bg: "none",
                              }}
                            >
                              <Box
                                as="span"
                                flex="1"
                                fontWeight="bold"
                                textAlign="left"
                                fontSize="xl"
                              >
                                {item.label}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          ) : (
                            <AccordionButton
                              as="button"
                              onClick={() => navigateTo(item.link)}
                            >
                              <Box
                                as="span"
                                flex="1"
                                fontWeight="bold"
                                textAlign="left"
                                fontSize="xl"
                              >
                                {item.label}
                              </Box>
                            </AccordionButton>
                          )}
                        </Stack>
                        {item.subItems && (
                          <AccordionPanel pb={4} bg="brand.black">
                            <Stack gap={3}>
                              {item.subItems?.map((s, i) => (
                                <Flex
                                  gap={2}
                                  key={i}
                                  fontSize="xl"
                                  align="center"
                                  onClick={() => navigateTo(s.link)}
                                >
                                  <Box as="span">{s.label}</Box>
                                </Flex>
                              ))}
                            </Stack>
                          </AccordionPanel>
                        )}
                      </Stack>
                    )}
                  </AccordionItem>
                </Accordion>
              ))}

              <Button
                bg="brand.black"
                p="20px"
                w="100%"
                borderRadius="none"
                color="brand.white"
                transition="all 0.3s ease-in-out"
                _hover={{
                  bg: "brand.white",
                  color: "brand.black",
                }}
                fontSize="xl"
                onClick={() => navigateTo("/contact-us")}
              >
                Contact Us
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
