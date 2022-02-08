import { Box, HStack, Flex, Text, Heading } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';

function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#fcfcfc', '#20202f');

  return (
    <Flex
      w="100%"
      px="6"
      align="center"
      justify="space-between"
      bg={bg}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      position="static"
    >
      <Heading p={4}>
        <Text> Grand Prince Hotel, Takanawa (Placeholder) </Text>
      </Heading>
      <HStack as="nav" spacing="6">
        <Box>
          <Text>YYYY-MM-DD</Text>
        </Box>
        <Box>
          <Text>Text Two</Text>
        </Box>
        <Button onClick={toggleColorMode} mt={5}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </HStack>
    </Flex>
  );
}

export default NavigationBar;
