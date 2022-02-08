import { Flex, Container, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import InformationCard from '../Components/InformationCard';
import React from 'react';
import InstructionCard from '../Components/InstructionCard';

const Index = () => {
  return (
    <Container maxW={'container.xl'} p={0}>
      <Flex h="100vh" py={20}>
        <InformationCard />
        <InstructionCard />
      </Flex>
    </Container>
  );
};

export default Index;
