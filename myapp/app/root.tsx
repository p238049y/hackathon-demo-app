import "./tailwind.css";
import { Box, Card, CardBody, CardHeader, Center, ChakraProvider, Heading, Text, Stack, StackDivider } from "@chakra-ui/react";


export const App = () => {
  return (
    <ChakraProvider>
      <Center>
        <Card>
          <CardHeader>
            <Heading size='md'>Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </ChakraProvider>
  )
}

export default App;
