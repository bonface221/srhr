import { CMS_ASSETS_URL } from "@/config";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import RenderContent from "../common/render-content";

interface Props {
  data: Team;
}

const TeamCard2 = ({ data }: Props) => {
  return (
    <Stack
      gap={3}
      p={4}
      border="1px solid black"
      borderRadius="md"
      h="fit-content"
      transition="all .3s ease-in-out"
      align="center"
      _hover={{
        boxShadow: "0 0 10px 0 #000000",
      }}
    >
      <Box h="15rem">
        <Image
          src={`${CMS_ASSETS_URL}/${data.profile_pic}`}
          alt={data.name}
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            height: "100%",
          }}
        />
      </Box>

      <Heading as="h3" fontSize="3xl">
        {data.name}
      </Heading>
      <Box as="h5" textAlign="center" fontSize="xl" fontWeight="semibold">
        {data.position}
      </Box>
      <Box textAlign="justify">
        <RenderContent content={data.bio} />
      </Box>
    </Stack>
  );
};

export default TeamCard2;
