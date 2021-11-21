import { 
    Box, 
    Text, 
    Button,
    HStack,
    VStack,

    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../components/Footer";
import GoBackToPreviousPage from "../components/BackButton";
import ButtonComponent from "../components/Button";

export default function Claim() {
  return (
    <Box w="100vw">
      <HStack p="1rem" spacing={20} w="full">
        <GoBackToPreviousPage />
        <Text fontWeight="bold" textTransform="uppercase">Claim</Text>
      </HStack>
      <VStack spacing={0} p=".5rem 0 8rem 0" maxH="100vh">
        <Box color="blackAlpha.600" fontWeight="bold" pb="5rem" bg="#F2F4F8" w="full">
          <HStack p="1rem" justifyContent="space-between">
            <Text fontSize="sm" textTransform="uppercase">john doe</Text>
            <Box w="2px" h="35px" bg="#4F9FFC" borderTopRightRadius="97px" borderTopLeftRadius="16px"></Box>
          </HStack>
          <VStack overflowY="scroll" bg="white">
            <SimpleGrid columns={2} rowGap={6} w="full">
              <GridItem colSpan={2} p="5px 1rem">
                  <FormControl justifyContent="space-between" display="flex" alignItems="center" color="gray.600">
                      <FormLabel fontSize="sm" w="40%" textTransform="uppercase">account</FormLabel>
                      <Input type="text" borderColor="gray.600" placeholder="3125554366"/>
                  </FormControl>
              </GridItem>
              
              <GridItem colSpan={2} p="5px 1rem">
                  <FormControl justifyContent="space-between" display="flex" alignItems="center" color="gray.600">
                      <FormLabel fontSize="sm" w="40%" textTransform="uppercase">bank</FormLabel>
                      <Input type="text" borderColor="gray.600" placeholder="GT Bank Plc"/>
                  </FormControl>
              </GridItem>
            </SimpleGrid>
            <Text color="black" p="1rem 0">Not this bank account <Button>change?</Button></Text>
          </VStack>
          <HStack p="1rem" justifyContent="space-between">
            <Text fontSize="sm" textTransform="uppercase">Wallet</Text>
            <Box w={30} h={30} bg="#4F9FFC"></Box>
          </HStack>
          <VStack spacing={5} pb="3rem" bg="white">
            <HStack w="100%" p="10px 1rem" spacing="4rem" borderBottom="1px solid #cfc6c6">
              <Text>Balance</Text>
              <Text>$5845.00</Text>
            </HStack>
            <HStack w="100%" p="10px 1rem" spacing="5.2rem" borderBottom="1px solid #cfc6c6">
              <Text>claim</Text>
              <Text>$5000.00</Text>
            </HStack>
            <Text textAlign="center" fontSize="sm" color="red">Minimum balance of $20 applies.</Text>
            <ButtonComponent
              radius="3xl"
              width="80%"
              padding="10px 1rem"
              onClick={() => alert("claimed")}
              color="white"
              bgColor="#1ED7A6"
            >
              Claim
            </ButtonComponent>
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </Box>
  )
}