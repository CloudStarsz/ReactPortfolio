import { Box, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    return (
        <Box p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" alignItems="center">
            <Box maxW="1000px" mx="auto" w="100%">
                <Heading as="h1" mb={{ base: 8, md: 16 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    Contato
                </Heading>
                
                <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 8 }} justify="center">
                    {/* LinkedIn */}
                    <Link href="https://www.linkedin.com/in/raonirafimoraes/" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #0A66C2, #4db3ff)" borderRadius="2xl" filter="blur(15px)" opacity={{ base: 0.15, md: 0 }} transition="opacity 0.3s" _groupHover={{ opacity: 0.4 }} zIndex={0} />
                            <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', bg: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(10, 102, 194, 0.6)" }} role="group">
                                <Icon as={FaLinkedin} boxSize={{ base: 10, md: 12 }} color="#0A66C2" mb={4} />
                                <Text fontWeight="bold" color="#e1d8ed" fontSize={{ base: "lg", md: "xl" }}>LinkedIn</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>Conecte-se comigo</Text>
                            </Flex>
                        </Box>
                    </Link>

                    {/* WhatsApp */}
                    <Link href="https://wa.me/5511967287083" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #25D366, #5ffc95)" borderRadius="2xl" filter="blur(15px)" opacity={{ base: 0.15, md: 0 }} transition="opacity 0.3s" _groupHover={{ opacity: 0.4 }} zIndex={0} />
                            <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', bg: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(37, 211, 102, 0.6)" }} role="group">
                                <Icon as={FaWhatsapp} boxSize={{ base: 10, md: 12 }} color="#25D366" mb={4} />
                                <Text fontWeight="bold" color="#e1d8ed" fontSize={{ base: "lg", md: "xl" }}>WhatsApp</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>(11) 967287083</Text>
                            </Flex>
                        </Box>
                    </Link>

                    {/* Email */}
                    <Link href="mailto:/*Preencher email aqui*/" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #5a03fc, #d6bcfa)" borderRadius="2xl" filter="blur(15px)" opacity={{ base: 0.15, md: 0 }} transition="opacity 0.3s" _groupHover={{ opacity: 0.4 }} zIndex={0} />
                            <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', bg: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(214, 188, 250, 0.6)" }} role="group">
                                <Icon as={FaEnvelope} boxSize={{ base: 10, md: 12 }} color="#d6bcfa" mb={4} />
                                <Text fontWeight="bold" color="#e1d8ed" fontSize={{ base: "lg", md: "xl" }}>E-mail</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>/* Preencha aqui seu email */</Text>
                            </Flex>
                        </Box>
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}
