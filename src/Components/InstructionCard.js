import React from 'react';
import { VStack, Divider, HStack } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import PCRStatus from '../Components/PCRStatus';
import ImmunizationStatus from '../Components/ImmunizationStatus';

const InstructionCard = props => {
  // Some API call to get the data (or pass it through props)

  const ImmunizationStatusProps = {
    recordedDate: 'some_data',
    occurrence: 'some_data',
    instructions: 'some_data',
  };

  const PCRStatusProps = {
    instructions: 'some_data',
    result: 'some_data',
    samplingDate: 'some_data',
    testDate: 'some_data',
    issueDate: 'some_data',
  };

  const companyLogo = (
    <>
      <HStack>
        <Heading size="2xl">
          <Text>Instruction Card</Text>
        </Heading>
      </HStack>
      <Divider />
    </>
  );

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      border="1px"
      borderColor="gray"
      m="8px"
    >
      {companyLogo}
      <ImmunizationStatus {...ImmunizationStatusProps} />
      <PCRStatus {...PCRStatusProps} />
    </VStack>
  );
};

export default InstructionCard;
