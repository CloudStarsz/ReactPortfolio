import { Box, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
    const { t } = useTranslation();
    return (
        <Box className="contact-page" p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" alignItems="center">
            <Box className="route-content" maxW="1000px" mx="auto" w="100%">
                <Heading as="h1" mb={{ base: 8, md: 16 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    {t('contact.title')}
                </Heading>

                <Flex className="contact-grid" direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 8 }} justify="center">
                    {/* LinkedIn */}
                    <Link className="contact-card-link" href="https://www.linkedin.com/in/raonirafimoraes/" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Flex className="contact-card" position="relative" direction="column" align="flex-start" bg="#0b1115" border="1px solid rgba(187, 223, 230, 0.12)" borderRadius="0" p={{ base: 6, md: 8 }} boxShadow="none" transition="border-color 0.2s ease, transform 0.2s ease" _hover={{ transform: 'translateY(-3px)', bg: "#0f181d", borderColor: "rgba(77, 228, 255, 0.6)" }} role="group">
                                <Icon as={FaLinkedin} boxSize={{ base: 10, md: 12 }} color="#0A66C2" mb={4} />
                                <Text fontWeight="bold" color="#dce8eb" fontSize={{ base: "lg", md: "xl" }}>LinkedIn</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>{t('contact.linkedin_desc')}</Text>
                            </Flex>
                        </Box>
                    </Link>

                    {/* Email */}
                    <Link className="contact-card-link" href="mailto:contato.raonimoraes@gmail.com" isExternal _hover={{ textDecoration: 'none' }} w={{ base: "100%", md: "auto" }}>
                        <Box position="relative" w="100%">
                            <Flex className="contact-card" position="relative" direction="column" align="flex-start" bg="#0b1115" border="1px solid rgba(187, 223, 230, 0.12)" borderRadius="0" p={{ base: 6, md: 8 }} boxShadow="none" transition="border-color 0.2s ease, transform 0.2s ease" _hover={{ transform: 'translateY(-3px)', bg: "#0f181d", borderColor: "rgba(77, 228, 255, 0.6)" }} role="group">
                                <Icon as={FaEnvelope} boxSize={{ base: 10, md: 12 }} color="#4de4ff" mb={4} />
                                <Text fontWeight="bold" color="#dce8eb" fontSize={{ base: "lg", md: "xl" }}>E-mail</Text>
                                <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>{t('contact.email_desc')}</Text>
                            </Flex>
                        </Box>
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}
