import React from 'react';
import { Box, VStack, Text, Divider } from '@chakra-ui/react';

const PCRStatus = props => {
  const { result, samplingDate, testDate, issueDate, instructions } = props;

  const colors = {
    red: 'red',
    green: 'green.50',
  };

  return (
    <Box
      maxW="full"
      maxH="full"
      borderWidth="1px"
      borderRadius="lg"
      border="1px"
      borderColor={'gray'}
      pr={48}
    >
      <VStack alignItems="flex-start" p={6} spacing={2}>
        <Text m="5" mb="0" as="h4" size="md">
          PCR Status
        </Text>
        <Divider />
        <Text m="5" mb="0" as="h4" size="md">
          Instructions: {instructions}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Result: {result}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Sampling Date: {samplingDate}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Test Date: {testDate}
        </Text>
        <Text m="5" mb="0" as="h4" size="md">
          Issue Date: {issueDate}
        </Text>
      </VStack>
    </Box>
  );
};

export default PCRStatus;
