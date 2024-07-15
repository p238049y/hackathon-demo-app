import {
  Outlet,
} from "@remix-run/react";
import "./tailwind.css";
import { Box, Center, ChakraProvider, HStack, VStack } from "@chakra-ui/react";


export const App = () => {
  return (
    <ChakraProvider>
        <Center>
          <HStack>
            <VStack>
              <Box bg="red.700" w="40px" h="40px" />
              <Box bg="red.500" w="40px" h="40px" />
              <Box bg="red.300" w="40px" h="40px" />
            </VStack>
            <VStack>
              <Box bg="yellow.700" w="40px" h="40px" />
              <Box bg="yellow.500" w="40px" h="40px" />
              <Box bg="yellow.300" w="40px" h="40px" />
            </VStack>
            <VStack>
              <Box bg="blue.700" w="40px" h="40px" />
              <Box bg="blue.500" w="40px" h="40px" />
              <Box bg="blue.300" w="40px" h="40px" />
            </VStack>
          </HStack>
      </Center>
    </ChakraProvider>
  )
}

export default App;
