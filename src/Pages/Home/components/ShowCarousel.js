import { Box, Flex, HStack, Heading, Tag, Text, Button, DarkMode } from '@chakra-ui/react';
import React from 'react'
import { Image, Stack } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowCarousel = ({ shows }) => {
    return (
        <>
            <Carousel>
                {
                    shows.map((item, index) => (
                        <Carousel.Item key={index}>
                            <Box aspectRatio={25 / 9} bg={`url(${item.show.image?.original}) no-repeat center center/cover`} >
                                <Box w={'full'} height={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} background={`linear-gradient(60deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6),  rgba(0, 0, 0, 0.7))`}>

                                    <Flex gap={6} color='whitesmoke'>

                                        {
                                            item.show.image ? <Image src={item.show.image?.medium} rounded={10} w={'full'} loading='lazy'></Image>
                                                : <Box aspectRatio={194.8 / 273.7} bg={'black'} rounded={10}></Box>

                                        }
                                        <Stack >
                                            <Heading size={'lg'}>{item.show.name}</Heading>
                                            <Flex rounded={10} bg={'rgba(0,0,0,0.5)'} p={1.5} color={'whitesmoke'} alignItems={'center'} gap={2} mt={-0.5}>
                                                <FaStar color={'yellow'} />
                                                <Text mb={0}>{item.show.rating.average ? item.show.rating.average + '/10' : ' - /10'}</Text>
                                            </Flex>
                                            <HStack>
                                                <Text size={'sm'} fontWeight={'semibold'} opacity={0.8}>Language:</Text>
                                                <p>{item.show.language}</p>
                                            </HStack>
                                            <DarkMode>
                                                <Flex flexWrap={'wrap'} gap={1}>{item.show.genres.map((item, index) => (<Tag key={index} colorScheme='gray' rounded={'full'}>{item}</Tag>))}</Flex>
                                                <Link to={`/show/${item.show.id}`}>
                                                    <Button colorScheme={'gray'} fontWeight={'normal'} mt={4}>View Details</Button>
                                                </Link>
                                            </DarkMode>

                                        </Stack>
                                    </Flex>
                                    <p></p>
                                </Box>
                            </Box>
                        </Carousel.Item>

                    ))
                }
            </Carousel>
        </>
    )
}

export default ShowCarousel