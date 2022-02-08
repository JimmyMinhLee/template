import React from 'react';
import {
  GridItem,
  SimpleGrid,
  VStack,
  Divider,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import PlaceholderImage from '../Images/Placeholder.png';

const InformationCard = props => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    phoneNumber,
    checkIn,
    checkOut,
    memberNumber,
  } = props;
  const memberNameGrid = (
    <SimpleGrid columns={3} columnGap={2} rowGap={6} width={'full'}>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {firstName}
        </Text>
        <Heading fontSize={'sm'}> First Name </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {lastName}
        </Text>
        <Heading fontSize={'sm'}> Last Name </Heading>
      </GridItem>
    </SimpleGrid>
  );

  const imageGrid = (
    <SimpleGrid columns={2} rowGap={2} width="full" spacing={2}>
      <Image src={PlaceholderImage}></Image>
      <Image src={PlaceholderImage}></Image>
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
          {dateOfBirth}
        </Text>
        <Heading fontSize={'sm'}> Date of Birth </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {email}
        </Text>
        <Heading fontSize={'sm'}> Email </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {phoneNumber}
        </Text>
        <Heading fontSize={'sm'}> Phone Number </Heading>
      </GridItem>

      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {checkIn}
        </Text>
        <Heading fontSize={'sm'}> Check In </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {checkOut}
        </Text>
        <Heading fontSize={'sm'}> Check Out </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          fontSize={'md'}
          textDecoration={'underline'}
          textUnderlineOffset={2}
        >
          {memberNumber}
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
      {imageGrid}
    </VStack>
  );
};

export default InformationCard;
