"use client";
import { marginX } from "@/utils/constants";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import YouTube, { YouTubeProps } from "react-youtube";

const youtubeVideos = [
  {
    title: "SRHR Alliance Kenya",
    videoId: "-QmEu-JUOT0",
  },
  {
    title: "SRHR Alliance Kenya",
    videoId: "sIUXATYa4AI",
  },
  {
    title: "SRHR Alliance Kenya",
    videoId: "GwXTQ_rVkEU",
  },
];

const SRHRAllianceOnYoutube = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <Box marginX={marginX} my="4rem">
      <MainHeading text="SRHR Alliance on Youtube" />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt="2rem">
        {youtubeVideos.map((d) => (
          <Box key={d.videoId}>
            <YouTube loading="lazy" videoId={d.videoId} opts={opts} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SRHRAllianceOnYoutube;
