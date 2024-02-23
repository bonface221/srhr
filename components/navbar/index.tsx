import { Box } from "@chakra-ui/react";
import MainNav from "./main-nav";
import TopNav from "./top-nav";

const Navbar = () => {
  return (
    <Box>
      <TopNav />
      <MainNav />
    </Box>
  );
};

export default Navbar;
