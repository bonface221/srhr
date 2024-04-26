"use client";
import { marginX } from "@/utils/constants";
import Image from "next/image";
import { isValidElement, ReactElement, ReactNode, Fragment } from "react";
import { Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import { Carousel } from "react-responsive-carousel";
import MainHeading from "../common/main-heading";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface RenderItemOptions {
  isSelected: boolean;
  isPrevious: boolean;
}

const SRHRAllianceOnYoutube = () => {
  const customRenderItem = (
    item: ReactNode,
    options?: RenderItemOptions
  ): ReactNode => {
    // Ensure item is a React element before attempting to access its type and props
    if (isValidElement(item)) {
      return <item.type {...item.props} {...options} />;
    }
    // Handle the case where item is not a valid React element
    return null;
  };

  const getVideoThumb = (videoId: string) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url: string) =>
    url.slice("https://www.youtube.com/embed/".length);

  const customRenderThumb = (children: ReactNode[]) =>
    children.map((item, i) => {
      // Type assertion to tell TypeScript that item is a React element with props
      const element = item as ReactElement;
      const videoId = getVideoId(element?.props.url);
      return (
        <Image
          width={200}
          height={200}
          key={i}
          src={getVideoThumb(videoId)}
          alt="image thumbnails"
        />
      );
    });

  return (
    <Stack marginX={marginX} my="4rem" gap={6}>
      <MainHeading text="SRHR Alliance on Youtube" />

      <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
        <YoutubeSlide
          key="youtube-1"
          url="https://www.youtube.com/embed/-QmEu-JUOT0"
        />
        <YoutubeSlide
          key="youtube-2"
          url="https://www.youtube.com/embed/sIUXATYa4AI"
        />
        <YoutubeSlide
          key="youtube-3"
          url="https://www.youtube.com/embed/GwXTQ_rVkEU"
        />
        <YoutubeSlide
          key="youtube-4"
          url="https://www.youtube.com/embed/BVh-c1cGBq8"
        />
        <YoutubeSlide
          key="youtube-5"
          url="https://www.youtube.com/embed/vC0xP3CxVBU"
        />
      </Carousel>
    </Stack>
  );
};

export default SRHRAllianceOnYoutube;

const YoutubeSlide = ({
  url,
  isSelected,
}: {
  url: string;
  isSelected?: boolean;
}) => <ReactPlayer width="100%" height="70vh" url={url} playing={isSelected} />;
