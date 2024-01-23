import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex p={8} bg={'slate.700'} color={'whitesmoke'} flexWrap={'wrap'} gap={8} justifyContent={'space-evenly'} mt={6}>
      <Box span={2} minW={'300px'} flexGrow={1} maxW={'600px'}>
        <Heading fontFamily={'cursive'}>TVMAZE</Heading>
        <Text mt={2} >
          Your TV show information source. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a iste. Reprehenderit eum nesciunt debitis alias? Culpa, exercitationem nemo aspernatur illum reiciendis, ut quos atque distinctio consequuntur natus beatae quasi.
        </Text>
        <Box w={'250px'}>
          <Heading fontSize={'xl'}>Follow Us</Heading>
          <Flex mt={4}>
            <Icon as={FaTwitter} boxSize={6} />
            <Icon as={FaFacebook} boxSize={6} ml={4} />
            <Icon as={FaInstagram} boxSize={6} ml={4} />
          </Flex>
        </Box>
      </Box>

      <Box w={'250px'}>
        <Heading fontSize={'xl'}>Explore</Heading>
        <Text mt={2}>Popular Shows</Text>
        <Text>Top Rated</Text>
        <Text>New Releases</Text>
      </Box>

      <Box w={'250px'}>
        <Heading fontSize={'xl'}>Categories</Heading>
        <Text mt={2}>Action</Text>
        <Text>Drama</Text>
        <Text>Comedy</Text>
      </Box>

    </Flex>
  );
};

export default Footer;
