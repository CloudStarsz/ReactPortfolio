import { Box, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
    const { t } = useTranslation();
    return (
        <Box p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" alignItems="center">
            <Box maxW="1000px" mx="auto" w="100%">
                <Heading as="h1" mb={{ base: 8, md: 16 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    {t('contact.title')}
                </Heading>

                <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 8 }} justify="center">
                    {/* LinkedIn */}
                    <Link href="https://www.linkedin.com/in/raonirafimoraes/" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #0A66C2, #4db3ff)" borderRadius="2xl" filter="blur(15px)" opacity={{ base: 0.15, md: 0 }} transition="opacity 0.3s" _groupHover={{ opacity: 0.4 }} zIndex={0} />
                            <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', bg: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(10, 102, 194, 0.6)" }} role="group">
                                <Icon as={FaLinkedin} boxSize={{ base: 10, md: 12 }} color="#0A66C2" mb={4} />
                                <Text fontWeight="bold" color="#e1d8ed" fontSize={{ base: "lg", md: "xl" }}>LinkedIn</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>{t('contact.linkedin_desc')}</Text>
                            </Flex>
                        </Box>
                    </Link>

                    {/* Email */}
                    <Link href="mailto:contato.raonimoraes@gmail.com" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #5a03fc, #3f03ad)" borderRadius="2xl" filter="blur(15px)" opacity={{ base: 0.15, md: 0 }} transition="opacity 0.3s" _groupHover={{ opacity: 0.4 }} zIndex={0} />
                            <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', bg: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(90, 3, 252, 0.6)" }} role="group">
                                <Icon as={FaEnvelope} boxSize={{ base: 10, md: 12 }} color="#90cdf4" mb={4} />
                                <Text fontWeight="bold" color="#e1d8ed" fontSize={{ base: "lg", md: "xl" }}>E-mail</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>{t('contact.email_desc')}</Text>
                            </Flex>
                        </Box>
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}
