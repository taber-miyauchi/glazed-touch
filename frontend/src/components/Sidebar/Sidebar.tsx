import {
  Box,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <>
      <Heading
        as="h4"
        color="appBlue.600"
        fontSize="md"
        fontWeight="bold"
        mt={2}
        mb={4}
        mx={4}
      >
        All Pottery
      </Heading>
      {/* Pottery Categories */}
      <Box mx={4} fontSize="sm">
        <VStack spacing={4} align="initial">
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Bathroom
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Decorative
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Dinnerware
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Garden
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Kitchenware
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Planters
          </Link>
          <Link 
            fontWeight="semibold" 
            color="gray.700" 
            _hover={{ color: "appBlue.600", textDecoration: "underline" }}
          >
            Serveware
          </Link>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;
