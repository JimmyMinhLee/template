import React from 'react';
import {
  GridItem,
  SimpleGrid,
  VStack,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';

const InformationCard = props => {
  const memberNameGrid = (
    <SimpleGrid columns={3} columnGap={2} rowGap={6} width={'full'}>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          John
        </Text>
        <Heading fontSize={'sm'}> First Name </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          Doe
        </Text>
        <Heading fontSize={'sm'}> Last Name </Heading>
      </GridItem>
    </SimpleGrid>
  );

  const memberInformationGrid = (
    <SimpleGrid columns={3} rowGap={6} width={'full'}>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          1234-56-78
        </Text>
        <Heading fontSize={'sm'}> Date of Birth </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          JohnDoe@Gmail.com
        </Text>
        <Heading fontSize={'sm'}> Email </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          123-456-7890
        </Text>
        <Heading fontSize={'sm'}> Phone Number </Heading>
      </GridItem>

      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          1234-56-78
        </Text>
        <Heading fontSize={'sm'}> Check In </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          1234-56-78
        </Text>
        <Heading fontSize={'sm'}> Check Out </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          123-456-7890
        </Text>
        <Heading fontSize={'sm'}> Member Number </Heading>
      </GridItem>
    </SimpleGrid>
  );

  // Use this for the current look, or delete the HStack & Heading -> You'll need to resize the image.
  const companyLogo = (
    <>
      <HStack>
        <Heading size="2xl">
          <Text>Information Card</Text>
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
      border={'1px'}
      borderColor={'gray'}
      m="8px"
    >
      {companyLogo}
      {memberNameGrid}
      {memberInformationGrid}
    </VStack>
  );
};

export default InformationCard;
