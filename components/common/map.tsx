import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box h="100%">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7578420144787!2d36.84062357501339!3d-1.3210570986664047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11bc46fe3b17%3A0xfbdfb2a1e4dc6904!2sSouthgate%20Residence%201245!5e0!3m2!1sen!2ske!4v1710250802978!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
