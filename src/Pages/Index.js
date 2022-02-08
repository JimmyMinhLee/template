import { Flex, Container } from '@chakra-ui/react';
import InformationCard from '../Components/InformationCard';
import React from 'react';
import InstructionCard from '../Components/InstructionCard';

const Index = () => {
  // Make API call (or pass in the information however you're routing over)
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

  const InformationCardProps = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: 'XXXX/XX/XX',
    email: 'JohnDoe@gmail.com',
    phoneNumber: 'XXX-XXX-XXXX',
    checkIn: 'XXXX/XX/XX',
    checkOut: 'XXXX/XX/XX',
    memberNumber: 'XXX-XXX-XXX',
  };

  const InstructionCardProps = {
    ImmunizationStatusProps,
    PCRStatusProps,
  };

  return (
    <Container maxW={'container.xl'} p={0}>
      <Flex h="100vh" py={20}>
        <InformationCard {...InformationCardProps} />
        <InstructionCard {...InstructionCardProps} />
      </Flex>
    </Container>
  );
};

export default Index;
