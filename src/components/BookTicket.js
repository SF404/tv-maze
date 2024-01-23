import { IoTicket } from 'react-icons/io5'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader,  ModalBody, ModalFooter, FormControl, FormLabel, Input, useDisclosure, DarkMode } from '@chakra-ui/react';
import { useState } from 'react';


const BookTicket = ({ show }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numberOfTickets: 1,
        showName: show.show.name,

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const existingBookingData = JSON.parse(localStorage.getItem('bookingFormData')) || [];
        const updatedBookingData = [...existingBookingData, formData];
        localStorage.setItem('bookingFormData', JSON.stringify(updatedBookingData));
        onClose();
        setFormData({
            name: '',
            email: '',
            numberOfTickets: 1,
            showName: show.show.name,
    
        });
    };

    return (
        <>
            <DarkMode>
                <Button leftIcon={<IoTicket />} size='lg' colorScheme={'facebook'} onClick={onOpen}>Book Tickets</Button>
            </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleFormSubmit}>
                        <ModalHeader>Booking tikets for '{show.show.name}' show</ModalHeader>
                        <ModalBody>
                            <FormControl mb={4}>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Number of Tickets</FormLabel>
                                <Input type="number" name="numberOfTickets" value={formData.numberOfTickets} onChange={handleInputChange} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit">
                                Book Tickets
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>

        </>
    )
}

export default BookTicket