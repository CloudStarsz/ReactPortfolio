import { Box, Heading, Text, Flex, Button as ChakraButton } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function OrcamentoPage() {
    const { t } = useTranslation();
    return (
        <Box className="budget-page" p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" alignItems="center">
            <Box maxW="800px" mx="auto" w="100%">
                <Heading as="h1" mb={{ base: 8, md: 12 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    {t('orcamento.title')}
                </Heading>

                <Box position="relative" mt={{ base: 4, md: 0 }}>
                    <Flex className="budget-card" position="relative" direction="column" align="flex-start" bg="#0b1115" border="1px solid rgba(187, 223, 230, 0.14)" borderRadius="0" p={{ base: 6, md: 12 }} boxShadow="none" textAlign="left">
                        <Text fontSize={{ base: "sm", md: "xl" }} color="#dce8eb" mb={6} lineHeight="1.8">
                            <span dangerouslySetInnerHTML={{ __html: t('orcamento.subtitle1') }}></span> <Text as="span" color="#4de4ff" fontWeight="bold"> contato.raonimoraes@gmail.com </Text>{t('orcamento.subtitle2')}
                        </Text>

                        <Box bg="#071014" p={{ base: 3, md: 4 }} borderRadius="0" border="1px solid rgba(77,228,255,0.24)" mb={8}>
                            <Text fontWeight="bold" color="#75ddef" letterSpacing="wide" fontSize={{ base: "xs", md: "md" }}>{t('orcamento.subject')}</Text>
                        </Box>

                        <Text fontSize={{ base: "xs", md: "md" }} color="gray.400" mb={8} maxW="600px" lineHeight="1.8">
                            {t('orcamento.description')}
                        </Text>

                        <ChakraButton
                            as="a"
                            href="mailto:contato.raonimoraes@gmail.com?subject=Solicitação de orçamento - Desenvolvimento"
                            leftIcon={<FaEnvelope />}
                            size={{ base: "md", md: "lg" }}
                            color="#031115"
                            variant="solid"
                            bg="#4de4ff"
                            _hover={{ bg: "#8ceeff", transform: "translateY(-2px)" }}
                            transition="background-color 0.2s ease, transform 0.2s ease"
                            rounded="sm"
                            px={{ base: 8, md: 10 }}
                            py={{ base: 6, md: 7 }}
                            fontSize={{ base: "md", md: "lg" }}
                        >
                            {t('orcamento.btn_send')}
                        </ChakraButton>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
