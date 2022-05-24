import {
    Modal, ModalOverlay, ModalContent, Button, useDisclosure,
    ModalHeader, ModalBody, ModalCloseButton,
} from '@chakra-ui/react'
import SignUpBody from './SignUpBody'

export default function SignUpModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Button variant="solid" colorScheme="blue" onClick={onOpen}>Sign Up</Button>

    <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <SignUpBody />
        </ModalBody>
        </ModalContent>
    </Modal>
    </>
    )
}