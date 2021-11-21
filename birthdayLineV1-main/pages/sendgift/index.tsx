import { 
    Flex, 
    Box, 
    Text, 
    Button,
    HStack,
    VStack,

    Modal, 
    ModalBody,
    ModalContent,
    ModalCloseButton,
    ModalOverlay,
    useDisclosure,

    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import GoBackToPreviousPage from "../../components/BackButton";

export default function SendGift() {
    const { isOpen, onOpen, onClose, } = useDisclosure();
    const router = useRouter();

    return (
        <Box w="100vw">
            <HStack p="1rem" justifyContent="space-between" w="full">
                <GoBackToPreviousPage />
                <Text fontWeight="bold" textTransform="uppercase">Send Gift</Text>
                <Button onClick={onOpen}>Add new</Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="white" margin="0 1rem">
                        <ModalCloseButton color="blackAlpha.900" onClick={onClose} />
                        <ModalBody p="2rem">
                            <SimpleGrid columns={2} rowGap={6} w="full">
                                <GridItem colSpan={2}>
                                    <FormControl color="gray.600">
                                        <FormLabel>Name</FormLabel>
                                        <Input type="text" borderColor="gray.600" placeholder="Enter Name"/>
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={2}>
                                    <FormControl color="gray.600">
                                        <FormLabel>Date Of Birth</FormLabel>
                                        <Input type="date" borderColor="gray.600" placeholder="Enter DOB"/>
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={2}>
                                  <Button border="2px solid gray" fontSize="lg" color="blackAlpha.600">
                                    Add
                                  </Button>
                                </GridItem>
                            </SimpleGrid>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <VStack spacing={0}>
                <Box color="blackAlpha.600" fontWeight="bold" bg="#F2F4F8" w="full">
                    <HStack p="1rem" justifyContent="space-between">
                        <Text textTransform="uppercase">contact list</Text>
                        <Box w={30} h={30} bg="#4F9FFC"></Box>
                    </HStack>
                    <VStack maxH="100vh" overflowY="scroll" p=".5rem 1rem 4rem 1rem" bg="white">
                        <Link href={`/sendgift/${1}`}>
                            <HStack w="full" justifyContent="space-between">
                                <Text d="inline-block" minW="40%" color="black">Mayme McKinney</Text>
                                <Text d="inline-block" minW="40%" color="#4C5FEF">11 November</Text>
                                <Box 
                                    w="2px"
                                    h="50px" 
                                    bg="#4C5FEF" 
                                    borderTopRightRadius="97px"
                                    borderTopLeftRadius="16px"></Box>
                            </HStack>
                        </Link>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Ethel Frank</Text>
                            <Text d="inline-block" minW="40%" color="#4C5FEF">6 August</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Landan Tate</Text>
                            <Text d="inline-block" minW="40%" color="#4C5FEF">18 May</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Jared Chandler</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">14 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Derek McGee</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">6 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Bertha Daniels</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">9 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Susie Rice</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">14 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Derek McGee</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">15 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Derek McGee</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">15 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                        <HStack pb="2rem" w="full" justifyContent="space-between">
                            <Text d="inline-block" minW="40%" color="black">Derek McGee</Text>
                            <Text d="inline-block" minW="40%" color="#3EDCB2">15 October</Text>
                            <Box 
                                w="2px"
                                h="50px" 
                                bg="#4C5FEF" 
                                borderTopRightRadius="97px"
                                borderTopLeftRadius="16px"></Box>
                        </HStack>
                    </VStack>
                </Box>
                <Footer />
            </VStack>
        </Box>
    )
}