import React from 'react';
import {
    Box,
    DarkMode,
    Flex,
    HStack,
    Heading,
    IconButton,
    useColorMode,
} from '@chakra-ui/react';
import { IoMdMoon, IoMdSettings, IoMdSunny } from 'react-icons/io';
import BookedTickets from '../../components/BookedTickets';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Flex
            justifyContent={'space-between'}
            height={'64px'}
            bg={'slate.900'}
            color={'white'}
            alignItems={'center'}
            px={4}
            position={'sticky'}
            top={0}
            zIndex={999}
        >
            <Box>
                <Heading size={'lg'} mb={0} fontFamily={'cursive'}>TVMAZE</Heading>
            </Box>
            <Box />
            <Box>
                <HStack>
                    <BookedTickets />
                    <DarkMode>

                        <IconButton
                            icon={<IoMdSettings />}
                            colorScheme='whiteAlpha'
                            color={'white'}
                        ></IconButton>
                        <IconButton
                            icon={isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
                            colorScheme='whiteAlpha'
                            color={'white'}
                            onClick={toggleColorMode}
                        ></IconButton>
                    </DarkMode>
                </HStack>
            </Box>
        </Flex>
    );
};

export default Navbar;
