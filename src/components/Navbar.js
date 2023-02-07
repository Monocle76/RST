import { Box, Container, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";

export default function Navbar() {
  return (
    <Container mt={7} py={5} maxW={700} borderBottom={"1px solid"} borderColor={"gray.200"}>
      <HStack>
        <Heading fontSize={23}>My App</Heading>
        <Spacer />
        <Box>
          <HStack spacing={7}>
            <Link as={WouterLink} href="/">Home</Link>
          </HStack>
        </Box>
      </HStack>
    </Container>
  )
}