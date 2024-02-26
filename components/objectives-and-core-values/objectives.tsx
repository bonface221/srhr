"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import MainHeading from "../common/main-heading";
import { marginX } from "@/utils/constants";

const objectives = [
  {
    id: 1,
    title: "Increase access to comprehensive sexuality education",
    description:
      "To increase access to comprehensive sexuality education and Sexual and Reproductive Health information among young people",
  },
  {
    id: 2,
    title: "Increase demand for and access to quality (SRH) services",
    description:
      "To increase demand for and access to quality sexual and reproductive health (SRH) services",
  },
  {
    id: 3,
    title: "Create an enabling environment ...",
    description:
      "To create an enabling environment for the realization of the sexual and reproductive health and rights of of young people, women and the marginalize",
  },
];

const SRHRObjectives = () => {
  return (
    <Box marginX={marginX} my="4rem">
      <MainHeading text="Our Objectives" />
      <Accordion allowMultiple mt="2rem">
        {objectives.map((s) => (
          <AccordionItem key={s.id} mb="30px" userSelect={"none"}>
            {({ isExpanded }) => (
              <Box
                bg={isExpanded ? "brand.main" : "brand.gray"}
                color={isExpanded ? "brand.white" : "brand.dark"}
                p={{ base: "15px 20px", md: "41px 40px" }}
                border={
                  isExpanded
                    ? "1px solid var(--chakra-colors-brand-main)"
                    : "1px solid var(--chakra-colors-brand-black)"
                }
                borderRadius="45px"
                transition="all 0.3s ease-in-out"
                boxShadow={
                  isExpanded
                    ? "0px 5px 0px 0px var(--chakra-colors-brand-red)"
                    : "0px 5px 0px 0px #191A23"
                }
              >
                <Heading>
                  <AccordionButton
                    _hover={{
                      bg: "none",
                    }}
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Flex
                      align="center"
                      gap={{ base: "15px", sm: "20px", md: "25px" }}
                    >
                      <Box
                        as="span"
                        fontSize={{ base: "35px", md: "60px" }}
                        fontWeight={500}
                      >
                        {s.id}
                      </Box>
                      <Box
                        as="span"
                        fontSize={{
                          base: "18px",
                          sm: "22px",
                          md: "30px",
                        }}
                        fontWeight={500}
                      >
                        {s.title}
                      </Box>
                    </Flex>
                    {isExpanded ? (
                      <Image
                        boxSize={{
                          base: "30px",
                          sm: "40px",
                          md: "58px",
                        }}
                        src="/minus-icon.svg"
                        alt="minus-icon"
                      />
                    ) : (
                      <Image
                        boxSize={{
                          base: "30px",
                          sm: "40px",
                          md: "58px",
                        }}
                        src="/plus-icon.svg"
                        alt="plus-icon"
                      />
                    )}
                  </AccordionButton>
                </Heading>
                {isExpanded && <Divider />}
                <AccordionPanel pb={4}>{s.description}</AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default SRHRObjectives;
