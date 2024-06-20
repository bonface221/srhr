"use client";
import { handleFormSubmissionAction } from "@/app/actions";
import { FormData, schema } from "@/schema";
import {
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

let formStyles = {
  bg: "primary.200",
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const res = await handleFormSubmissionAction(data);

    setIsLoading(false);
    if (res.status === 200) {
      reset();
      toast({
        title: res.body.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: res.body.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <Stack gap={2} as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired isInvalid={!!errors.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Name"
          {...formStyles}
          {...register("name")}
        />
        {errors.name && (
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.name.message}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          {...formStyles}
          {...register("email")}
        />
        {errors.email && (
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.email.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!!errors.subject}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          placeholder="Subject"
          {...formStyles}
          {...register("subject")}
        />
        {errors.subject && (
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.subject.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!!errors.phoneNumber}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          placeholder="Phone Number"
          {...formStyles}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.phoneNumber.message}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired isInvalid={!!errors.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          height={"150px"}
          placeholder="Write your message"
          {...formStyles}
          {...register("message")}
        />
        {errors.message && (
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.message.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <Button
        type="submit"
        colorScheme="primary"
        isLoading={isLoading}
        isDisabled={!isValid || isLoading}
      >
        Send Message
      </Button>
    </Stack>
  );
};
export default ContactForm;
