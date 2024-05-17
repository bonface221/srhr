"use client";
import { Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.scss";

const PageLoading = () => {
  return (
    <AnimatePresence>
      <Stack
        as={motion.div}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 100 }}
        align="center"
        justify="center"
        minH="100vh"
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={9999}
        w="100vw"
        bg="var(--chakra-colors-brand-green)"
      >
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Stack>
    </AnimatePresence>
  );
};

export default PageLoading;
