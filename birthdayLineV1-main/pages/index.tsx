import { 
  VStack, 
  Image, 
  Flex, 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  HStack,
  Divider,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const WelcomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ view, setView ] = useState("signup");

  useEffect(() => {
      setView(view);
  }, [view]);

  const handleModalClick = () => {
      onOpen();
      setView("signup")
  }

  return (
      <Flex backgroundImage="url(/images/bgImage.jpg)" bgSize="cover" w="full" h="100vh" alignItems="center" justifyContent="center">
          <VStack>
              <Image 
                  mb={10} 
                  w="50%"
                  src="/images/birthdayLogo.png" 
                  objectFit="contain" 
                  alt="Birthday Line Logo" />
              <Button 
                  onClick={handleModalClick} 
                  textTransform="uppercase" 
                  display="block" 
                  rounded="3xl"
                  bg="#FED333" 
                  size="lg"
                  _hover={{bg: "#FED80C"}}
                  p="4px 3rem" 
                  color="white">
                  Create Account
              </Button>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent bg="white" margin="0 1rem">
                      <ModalCloseButton color="blackAlpha.900" onClick={onClose}/>
                      <VStack pt="2rem">
                        <Image margin="20px auto" w="10%"  src="/images/birthdayLogo.png" alt="Birthday Line Logo" />
                        <Text textAlign="center" m="10px 0" fontSize="2xl" fontWeight="extrabold" color="gray.900" textTransform="uppercase">create account</Text>
                      </VStack>
                      <Text p="0 1rem" textAlign="center" m="10px 0" color="gray.500">
                          By clicking Log in, you agree to our <Link color="gray.700" textDecor="underline">Terms</Link>. Learn how we process your data in our <Link color="gray.700" textDecor="underline">Privacy Policy </Link>
                          and<Link color="gray.700" textDecor="underline"> Cookie Policy</Link>.
                      </Text>
                      <ModalBody>
                          {view === "signup" && (
                          <VStack spacing={5}>
                              <Button
                                  onClick={() => setView("isSignup")}
                                  textTransform="uppercase" 
                                  display="block"
                                  whiteSpace="normal" 
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}}
                                  rounded="3xl"
                                  minH="54px"
                                  border="gray 2px solid"
                                  size="md" 
                                  fontWeight="bold"
                                  color="blackAlpha.700" 
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image w="5" src="/icons/email.png" alt="Email Icon"/>
                                      <Text>sign up with email</Text>
                                  </HStack>
                              </Button>
                              <Button 
                                  textTransform="uppercase"
                                  fontWeight="bold"
                                  display="block"
                                  whiteSpace="normal"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}} 
                                  rounded="3xl"
                                  minH="54px"
                                  border="gray 2px solid" 
                                  size="md" 
                                  color="blackAlpha.700" 
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image src="/icons/facebook.svg" alt="Google Icon"/>
                                      <Text>sign up with facebook</Text>
                                  </HStack>
                              </Button>
                              <Button 
                                  textTransform="uppercase"
                                  fontWeight="bold"
                                  display="block"
                                  whiteSpace="normal"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}} 
                                  rounded="3xl"
                                  minH="54px"
                                  border="gray 2px solid" 
                                  size="md" 
                                  color="blackAlpha.700" 
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image src="/icons/google.svg" alt="Google Icon"/>
                                      <Text>sign up with google</Text>
                                  </HStack>
                              </Button>
                              <HStack>
                                  <Text color="blackAlpha.900">OR</Text>
                              </HStack>
                              <Button  
                                  onClick={() => setView("isLogin")}
                                  textTransform="uppercase"
                                  rounded="3xl"  
                                  h="12"          
                                  display="block"
                                  fontWeight="bold"
                                  size="md" 
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}}
                                  border="gray 2px solid"
                                  color="blackAlpha.700"
                                  p="4px 2rem"                                    
                                  w="80%">
                                  login
                              </Button>
                              <HStack spacing="2">
                                <Text color="blackAlpha.900">Already have an account?</Text>
                                  <Button 
                                    color="blackAlpha.700"
                                    onClick={() => setView("login")}>Sign in</Button>
                                </HStack>
                          </VStack>
                          )}

                          {view === "login" && (
                          <VStack spacing={5}>
                              <Button
                                  onClick={() => setView("isLogin")} 
                                  textTransform="uppercase"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}} 
                                  minH="54px"
                                  display="block" 
                                  whiteSpace="normal"
                                  rounded="3xl" 
                                  size="md" 
                                  color="blackAlpha.700" 
                                  fontWeight="bold"
                                  border="gray 2px solid"
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image w="5" src="/icons/email.png" alt="Mailbox Icon"/>
                                      <Text>login with email</Text>
                                  </HStack>
                              </Button>
                              <Button  
                                  display="block" 
                                  textTransform="uppercase"
                                  minH="54px"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}}
                                  rounded="3xl"                                     
                                  size="md" 
                                  whiteSpace="normal"
                                  color="blackAlpha.700"
                                  fontWeight="bold" 
                                  border="gray 2px solid"
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image src="/icons/facebook.svg" alt="Facebook Icon"/>
                                      <Text>login with Facebook</Text>
                                  </HStack>
                              </Button>
                              <Button  
                                  display="block" 
                                  textTransform="uppercase"
                                  rounded="3xl" 
                                  whiteSpace="normal"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}}
                                  size="md" 
                                  minH="54px"
                                  color="blackAlpha.700" 
                                  fontWeight="bold" 
                                  border="gray 2px solid"
                                  w={{base: "100%", md: "85%"}}>
                                  <HStack spacing={{base: "5", md: "10"}}>
                                      <Image src="/icons/google.svg" alt="Google icon"/>
                                      <Text>LOGIN with GOOGLE</Text>
                                  </HStack>
                              </Button>
                              <HStack>
                                  <Divider bg="blackAlpha.900"/>
                                  <Text>OR</Text>
                                  <Divider />
                              </HStack>
                              <Button 
                                  whiteSpace="normal"
                                  onClick={() => setView("isSignup")}
                                  textTransform="uppercase"
                                  display="block"
                                  size="md" 
                                  fontWeight="bold"
                                  _hover={{borderColor: "blackAlpha.700", color: "blackAlpha.800"}}
                                  rounded="3xl"
                                  color="blackAlpha.700" 
                                  border="gray 2px solid"
                                  h="12"
                                  w="80%">
                                  <Text>create new account</Text>
                              </Button>
                              <HStack spacing="2">
                                <Text color="gray.600">Dont't have an account&#63;</Text>
                                <Button 
                                    color="gray.600"
                                    _hover={{borderColor: "blackAlpha.700"}}
                                    onClick={() => setView("signup")}>Sign Up</Button>
                              </HStack>
                          </VStack>
                          )}

                          {/* The form that will appear if user choose to login with email */}
                          {view === "isLogin" && (
                              <SimpleGrid columns={2} rowGap={6} w="full">
                                  <GridItem colSpan={2}>
                                      <FormControl color="gray.600">
                                          <FormLabel>Email</FormLabel>
                                          <Input borderColor="gray.600" placeholder="Enter your Email Address"/>
                                      </FormControl>
                                  </GridItem>

                                  <GridItem colSpan={2}>
                                      <FormControl color="gray.600">
                                          <FormLabel>Password</FormLabel>
                                          <Input borderColor="gray.600" type="password" placeholder="Enter your Password"/>
                                      </FormControl>
                                  </GridItem>

                                  <GridItem colSpan={2}>
                                  <Button  
                                      textTransform="uppercase"
                                      display="block"
                                      rounded="3xl"
                                      p="4px 2rem"
                                      _hover={{borderColor: "blackAlpha.700"}}
                                      border="gray 2px solid"
                                      size="md" 
                                      color="blackAlpha.900" 
                                      w="80%">
                                      login
                                  </Button>
                                  </GridItem>
                              </SimpleGrid>
                          )}

                          {/* The form that will appear if user choose to sign up with email */}
                          {view === "isSignup" && (
                          <SimpleGrid color="blackAlpha.900" columns={2} rowGap={6} w="full">
                              <GridItem colSpan={2}>
                                  <FormControl borderColor="gray">
                                      <FormLabel>Email</FormLabel>
                                      <Input color="blackAlpha.900" placeholder="Enter your Email Address"/>
                                  </FormControl>
                              </GridItem>

                              <GridItem colSpan={2}>
                                  <FormControl borderColor="gray">
                                      <FormLabel>Password</FormLabel>
                                      <Input type="password" placeholder="Enter your Password"/>
                                  </FormControl>
                              </GridItem>

                              <GridItem colSpan={2}>
                                  <Button  
                                      textTransform="uppercase"
                                      display="inline-block"
                                      rounded="3xl"
                                      border="gray 2px solid"
                                      p="4px 2rem"
                                      size="md" 
                                      color="blackAlpha.900" 
                                      w="80%">
                                      <Text color="blackAlpha.800">create new account</Text>
                                  </Button>
                              </GridItem>
                          </SimpleGrid>
                          )}
                      </ModalBody>
                  </ModalContent>
              </Modal>
          </VStack>
      </Flex>
  )
}

export default WelcomePage;