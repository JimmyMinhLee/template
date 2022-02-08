import React from 'react';
import { Box, VStack, Text, Divider } from '@chakra-ui/react';

const PCRStatus = props => {
  const { recordedDate, occurrence, instructions } = props;

  const colors = {
    red: 'red',
    green: 'green.50',
  };

  return (
    <Box
      maxW="full"
      borderWidth="1px"
      borderRadius="lg"
      border="1px"
      borderColor={'gray'}
      pr={48}
    >
      <VStack alignItems="flex-start" p={6} spacing={2}>
        <Text m="5" mb="0" as="h4" size="md">
          Immunization Status
        </Text>
        <Divider />
        <Text m="5" mb="0" as="h4" size="md">
          Instructions: {instructions}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Recorded Date: {recordedDate}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Occurence: {occurrence}
        </Text>
      </VStack>
    </Box>
  );
};

export default PCRStatus;
