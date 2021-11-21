import {  
    Box, 
    Text, 
    Input,
    FormControl,
    FormLabel,
    VStack,
    HStack,

    Divider,
} from "@chakra-ui/react";

import Footer from "../../../../components/Footer";
import Button from "../../../../components/Button";


const Send = () => {
    return (
        <Box w="100%" bg="white" h="100vh">
            <VStack spacing={0} w="full">
                <Box borderBottom="1px solid #e2e2e5" color="black" w="full" p="1rem">
                    <Text fontWeight="bold">Oluchi Machi</Text>
                </Box>
                <HStack borderBottom="1px solid #e2e2e5" w="full" p="1rem">
                    <FormControl d="flex" alignItems="center" borderColor="gray.300">
                        <FormLabel color="#8F8F90" textTransform="uppercase">amount:</FormLabel>
                        <Input width="70%" color="blackAlpha.900" type="text" placeholder="55.00" border="1px solid #8F8F90"/>
                    </FormControl>
                </HStack>

                <VStack w="full" p="3rem 0">
                    <Button 
                        onClick={() => console.log("Send from wallet")}
                        bgColor="#4C5FEF"
                        color="white"
                        fontWeight="light"
                        radius="3xl"
                        width="80%"
                        padding="25px 0"
                    >
                        SEND FROM WALLET
                    </Button>
                    <Button 
                        onClick={() => console.log("Go to payments")}
                        bgColor="#1ED7A6"
                        color="white"
                        fontWeight="light"
                        radius="3xl"
                        width="80%"
                        padding="25px 0"
                    >
                        GO TO PAYMENTS
                    </Button>
                </VStack>
            </VStack>
            <VStack spacing={0} alignItems="center"> 
                <Footer />
            </VStack>
        </Box>
    )
}

export default Send;