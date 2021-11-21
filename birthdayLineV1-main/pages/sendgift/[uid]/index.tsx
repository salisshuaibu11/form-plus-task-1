import {  
    Box, 
    Text, 
    Button,
    HStack,
    VStack,

    SimpleGrid,
    GridItem,
} from "@chakra-ui/react";
import { ChatAltIcon, GiftIcon, ArrowLeftIcon, } from "@heroicons/react/outline";

import Link from "next/link"
import { useRouter } from "next/router";

import Footer from "../../../components/Footer";
import GoBackToPreviousPage from "../../../components/BackButton";

const Gift = () => {
    const router = useRouter();
    const userId = router.query.uid;
    return (
        <Box w="100%">
            <HStack p="1rem" spacing={40} w="full">
                <GoBackToPreviousPage />
                <Text fontWeight="bold" textTransform="uppercase">Send Gift</Text>
            </HStack>
            <VStack 
                height="85vh" 
                bgImage="/images/profile.png"
                backgroundColor="#544b4b"
                backgroundBlendMode="multiply"
                bgRepeat="no-repeat" 
                bgSize="cover" 
                bgPos="center" 
                spacing={0} 
                alignItems="center"
            > 
                <Box minH="70vh" w="100%" d="flex" alignItems="flex-end">
                   <VStack p="0 1.5rem 1rem 1.5rem" alignItems="flex-start" textAlign="left">
                       <VStack spacing={0} alignItems="flex-start">
                            <Text fontSize="xl" fontWeight="bold">Oluchi Mazi</Text>
                            <Text color="#8F8F90">Birthday: 4th October</Text>
                            <Text fontSize="md">Its my birthday tommorrow and i am super excited to give 50% of my gifts to Ace Orphanage. xoxo!</Text>
                        </VStack>
                       <HStack w="100%" mb="18px" justifyContent="space-between">
                           <Text color="#8F8F90" textTransform="uppercase">126 contacts</Text>
                           <Box>
                                <Text color="#8F8F90" d="block">Oluchi is giving to</Text>
                                <Text d="block" fontSize="md" textTransform="uppercase">ace Orphanage</Text>
                            </Box>
                       </HStack>
                       <SimpleGrid columns={2} rowGap={4} w="full">
                           <GridItem colSpan={2}>
                               <HStack spacing={4}>
                               <ChatAltIcon width={25} />
                                   <Text>237</Text>
                               </HStack>
                           </GridItem>
                           <GridItem colSpan={2}>
                               <Link href={`/sendgift/${1}/send/${2}`} passHref={false}>
                                    <Button w="full" bg="#4653EF" borderRadius="3xl">
                                        <GiftIcon width={25} style={{marginRight: "10px"}}/>
                                        <Text>send a gift</Text>
                                    </Button>
                                </Link>
                           </GridItem>
                       </SimpleGrid>
                   </VStack>
                </Box>
                <Footer />
            </VStack>
        </Box>
    )
}

export default Gift;