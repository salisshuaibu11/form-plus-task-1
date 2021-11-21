import { Box, List, ListItem, VStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { CogIcon, GiftIcon, BellIcon, } from "@heroicons/react/outline";

const Footer = () => {
    return (

        <>
            <Box bg="white" w="full" pos="fixed" bottom="0" style={{boxShadow: "-1px -5px 75px -14px rgb(0 0 0 / 70%)"}}>
                <List 
                    p="0 5px"
                    pt="8px" 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center">
                    <ListItem mr="1" cursor="pointer">
                        <Link href="/claim" passHref={false}>
                            <VStack color="gray.600">
                                <GiftIcon width={30} />
                                <Text fontWeight="bold"  fontSize="md">Claim</Text>
                            </VStack>
                        </Link>
                    </ListItem>
                    <ListItem cursor="pointer" zIndex="1">
                        <Link href="/sendgift" passHref={false}>
                            <VStack color="gray.600">
                                <GiftIcon width={30} />
                                <Text fontWeight="bold"  fontSize="md">Send</Text>
                            </VStack>
                        </Link>
                    </ListItem>
                    <ListItem cursor="pointer">
                        <Image 
                            marginTop="-2.4rem" 
                            marginLeft="-5.2rem"
                            pos="fixed" 
                            src="/icons/footerClip.svg" 
                            alt="Footer Clip" 
                            style={{
                                backfaceVisibility: "hidden",
                                transformStyle: "flat"
                            }}
                        />
                        <Link href="/" passHref={false}>
                            <Box
                                position="relative"
                                top="-1rem"
                                left="1"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                bg="blue.600"
                                p="1.5rem"
                                borderRadius="full"
                                boxSize="70px"
                            >
                                <Image  
                                    src="/images/birthdayLogo.png" 
                                    alt="Birthday Line Logo"
                                    />
                            </Box>
                        </Link>
                    </ListItem>
                    <ListItem mr="1" cursor="pointer" zIndex="1">
                        <Link href="/notifications" passHref={false}>
                            <VStack color="gray.600">
                                <BellIcon width={30} />
                                <Text fontWeight="bold"  fontSize="md">Alerts</Text>
                            </VStack>
                        </Link>
                    </ListItem>
                    <ListItem cursor="pointer">
                        <Link href="/settings" passHref={false}>
                            <VStack color="gray.600">
                                <CogIcon width={30} />
                                <Text fontWeight="bold"  fontSize="md">Settings</Text>
                            </VStack>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default Footer;