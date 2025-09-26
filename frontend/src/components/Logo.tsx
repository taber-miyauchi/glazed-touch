import { Box, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box w={{ base: "auto", sm: "auto" }}>
      <Text 
        fontSize={{ base: "xl", sm: "2xl" }}
        fontWeight="bold"
        color="#32469b"
        fontFamily="Helvetica, sans-serif"
        letterSpacing="tight"
      >
        The Glazed Touch
      </Text>
    </Box>
  );
};

export default Logo;
