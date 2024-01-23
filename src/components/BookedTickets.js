import React, { useState } from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Box, Image, DarkMode } from '@chakra-ui/react';
import ticketImage from '../Assets/ticket.png'

const BookedTickets = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const getBookingDataFromLocalStorage = () => {
        const storedData = localStorage.getItem('bookingFormData');
        return storedData ? JSON.parse(storedData) : null;
    };

    const [bookedTickets, setBookedTickets] = useState(getBookingDataFromLocalStorage());
    const handleMyticket = () => {
        setBookedTickets(getBookingDataFromLocalStorage())
        onOpen();
    }

    return (
        <>
            <DarkMode>
                <Button colorScheme='gray' onClick={handleMyticket}>
                    My tickets
                </Button>
            </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Booked Tickets</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {bookedTickets ? (
                            <Box>
                                {bookedTickets.map((ticket, index) => (
                                    <Box key={index} position="relative" mb={4} >
                                        <Image src={ticketImage} alt="Ticket Image" style={{ boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)' }} rounded={8} />
                                        <Box p={4} bg="transparent" borderRadius="md" position="absolute" top={0} color="darkblue" fontSize="14px" >
                                            <Text fontWeight="bold" fontSize="1.2em" mb={0}>
                                                {ticket.showName} Show
                                            </Text>
                                            <Text mb={0}>{ticket.name}</Text>
                                            <Text mb={0}>Number of Tickets: {ticket.numberOfTickets}</Text>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            <Text>No booked tickets available</Text>
                        )}
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BookedTickets;
