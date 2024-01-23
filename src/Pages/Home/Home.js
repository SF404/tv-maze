import React from 'react'
import { Box, Flex, HStack, Image, SimpleGrid, Stack, Tag, Text } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa";
import ShowCarousel from './components/ShowCarousel';
import { Link } from 'react-router-dom';

const Home = ({ shows }) => {

  return (
    <Box w={'full'}>
      <ShowCarousel shows={shows} />
      <SimpleGrid columns={[1, 2, 3, 4, 5]} w={{ base: 'full', md: '80%' }} mx={'auto'} p={[4, 8]} gap={8}>
        {
          shows.map((item, index) =>
            <Link to={`/show/${item.show.id}`}>
              <Box key={index}
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: 'translateY(-10px)' }}>
                {
                  item.show.image ? <Image src={item.show.image?.medium} roundedTop={10} w={'full'} loading='lazy'></Image>
                    : <Box aspectRatio={194.8 / 273.7} bg={'black'} roundedTop={10}></Box>

                }
                <Flex roundedBottom={10} bg={'black'} p={1.5} color={'whitesmoke'} alignItems={'center'} gap={2} mt={-0.5}>
                  <FaStar color={'yellow'} />
                  <Text mb={0}>{item.show.rating.average ? item.show.rating.average + '/10' : ' - /10'}</Text>
                </Flex>
                <Stack my={2} fontSize={'14px'}>
                  <Text fontSize={'1.2em'} fontWeight={'semibold'} opacity={0.9} mb={0}>{item.show.name}</Text>
                  <HStack>
                    <Text size={'sm'} fontWeight={'semibold'} opacity={0.8} mb={0}>Language:</Text>
                    <Text mb={0}>{item.show.language}</Text>
                  </HStack>
                  <Flex gap={2}>
                    <Text size={'sm'} fontWeight={'semibold'} opacity={0.8} mb={0}>Genres:</Text>
                    <Flex flexWrap={'wrap'} gap={1}>{item.show.genres.map((item, index) => (<Tag key={index} colorScheme='gray' fontWeight={'normal'} rounded={'full'}>{item}</Tag>))}</Flex>
                  </Flex>

                </Stack>
              </Box>
            </Link>

          )}

      </SimpleGrid>

    </Box>
  )
}

export default Home