import React from 'react';
import { Box, Flex, Heading, Text, Image, Stack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import BookTicket from '../../components/BookTicket';


const ShowView = ({ shows }) => {
    const { showId } = useParams();
    const selectedShow = shows.find((item) => item.show.id.toString() === showId);

    if (!selectedShow) {
        return <div>Show not found</div>;
    }

    return (
        <>
            <Box w={{ base: 'full', md: '80%' }} mx={'auto'} p={6} minH={'100vh'}>
                <Box w={'full'} height={'full'} display={'flex'} alignItems={'center'}>
                    <Flex gap={6} flexDirection={{base:'column', md:'row'}} w={{base:'full', md:'fit-content'}}>
                        {selectedShow.show.image ? (
                            <Image src={selectedShow.show.image?.medium} rounded={10} w={'full'} loading='lazy'></Image>
                        ) : (
                            <Box aspectRatio={194.8 / 273.7} bg={'black'} rounded={10}></Box>
                        )}
                        <Stack w={'full'}>
                            <Box w={'full'}>
                                <Heading size={'lg'}>{selectedShow.show.name}</Heading>
                                <Flex rounded={10} p={1.5} alignItems={'center'} gap={2} mt={-0.5}>
                                    <FaStar color={'yellow'} />
                                    <Text mb={0}>{selectedShow.show.rating?.average ? selectedShow.show.rating.average + '/10' : ' - /10'}</Text>
                                </Flex>
                            </Box>
                            <Box mt={4}>
                                <BookTicket show={selectedShow} />
                            </Box>
                        </Stack>
                    </Flex>
                </Box>
                <Text dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }} mt={4} />
                <Box mt={4}>
                    <Heading size="md" my={4}>Show Details</Heading>
                    <Flex mt={2}>
                        <Text fontWeight="bold" minWidth="120px">
                            Type:
                        </Text>
                        <Text>{String(selectedShow.show.type)}</Text>
                    </Flex>
                    <Flex mt={2}>
                        <Text fontWeight="bold" minWidth="120px">
                            Language:
                        </Text>
                        <Text>{String(selectedShow.show.language)}</Text>
                    </Flex>
                    <Flex mt={2}>
                        <Text fontWeight="bold" minWidth="120px">
                            Genres:
                        </Text>
                        <Text>{String(selectedShow.show.genres)}</Text>
                    </Flex>
                    <Flex mt={2}>
                        <Text fontWeight="bold" minWidth="120px">
                            Premiered:
                        </Text>
                        <Text>{String(selectedShow.show.premiered)}</Text>
                    </Flex>
                    {/* {renderDetails()} */}
                </Box>
            </Box>
        </>
    );
};

export default ShowView;
