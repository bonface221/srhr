"use client";

import { CustomImage, images } from "@/utils/images";
import { Heading, Stack } from "@chakra-ui/react";

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const OurGalleryResource = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Stack mx={{ base: "2%", sm: "5%", md: "10%" }} gap={6} my="5rem">
      <Heading as="h1" textAlign="center" color="brand.black">
        SRHR Photo Gallery
      </Heading>

      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={300}
          margin={5}
          thumbnailStyle={{
            borderRadius: "20px",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </Stack>
  );
};

export default OurGalleryResource;
