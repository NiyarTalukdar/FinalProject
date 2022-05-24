import {
    Modal, ModalOverlay, ModalContent, Button, useDisclosure,
    ModalHeader, ModalBody, ModalCloseButton,
} from '@chakra-ui/react'
import SignInBody from './SignInBody'

export default function SignInModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Button variant="outline" onClick={onOpen}>Sign In</Button>

    <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Sign In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <SignInBody />
        </ModalBody>
        </ModalContent>
    </Modal>
    </>
    )
}