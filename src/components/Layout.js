import { Container, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container mt={7} maxW={700}>
        <VStack align={"start"} spacing={5}>
          { children } 
        </VStack>
      </Container>
    </>
  );
}