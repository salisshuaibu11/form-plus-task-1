import { 
    Container, 
    Image, 
    VStack,
    Box, 
    Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Box>
            <VStack 
                backgroundImage="url(/images/homepageImage.png)"
                bgPos="center" 
                bgSize="cover"
                bgRepeat="no-repeat" 
                h="100vh" 
                w="full" 
                justifyContent="space-between">
                <Image pt="1rem" src="/images/logo.png" alt="Home page logo" w={24}/>
                <Footer />
            </VStack>
        </Box>
    )
}

export default Home;