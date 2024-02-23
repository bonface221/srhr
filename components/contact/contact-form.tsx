import { Button, FormControl, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <Stack gap={5}>
      <FormControl>
        <Input
          type="text"
          placeholder="Name"
          py="1.7rem"
          bg="rgba(33, 115, 41,0.3)"
        />
      </FormControl>
      <FormControl>
        <Input
          type="email"
          placeholder="Email"
          py="1.7rem"
          bg="rgba(33, 115, 41,0.3)"
        />
      </FormControl>
      <FormControl>
        <Input
          type="tel"
          placeholder="Phone Number"
          py="1.7rem"
          bg="rgba(33, 115, 41,0.3)"
        />
      </FormControl>
      <FormControl>
        <Textarea
          height={"150px"}
          placeholder="Write your message"
          py="1.7rem"
          bg="rgba(33, 115, 41,0.3)"
        />
      </FormControl>
      <Button
        type="submit"
        bg="brand.main"
        color="brand.white"
        _hover={{ bg: "rgba(33, 115, 41,0.6)" }}
      >
        Send Message
      </Button>
    </Stack>
  );
};
export default ContactForm;
