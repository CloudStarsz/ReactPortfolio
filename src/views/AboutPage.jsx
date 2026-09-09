import { Box, Stack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import escritoroniImg from "../img/Escritoroni.jpeg";
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation();
    const photoUrl = escritoroniImg;

    return (
        <Box p={{ base: 4, md: 12 }} className="about-page" w="100%" h="100%" display="flex" alignItems="center">
            <Box maxW="1300px" mx="auto" w="100%">
                <Heading
                    as="h1"
                    mb={{ base: 8, md: 16 }}
                    textAlign={{ base: "center", md: "center" }}
                    fontSize="clamp(2.5rem, 6vw, 72px)"
                    fontWeight="100"
                    fontStyle="italic"
                    lineHeight="1.1"
                >
                    {t('about.title')}
                </Heading>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 16, md: 24, lg: 40 }}
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    gap={{ base: 8, md: 16 }}
                >
                    <Box className="about-portrait" flexShrink={0} position="relative" mt={{ base: 2, md: 0 }}>
                        <Image
                            src={photoUrl}
                            alt="Foto de Raoni Moraes"
                            boxSize={{ base: "160px", sm: "190px", md: "320px" }}
                            objectFit="cover"
                            borderRadius="0"
                            position="relative"
                            zIndex={1}
                            border="1px solid rgba(77, 228, 255, 0.35)"
                            boxShadow="12px 12px 0 rgba(77, 228, 255, 0.08)"
                        />
                    </Box>

                    <VStack
                        spacing={{ base: 4, md: 6 }}
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        maxW={{ base: "100%", md: "600px" }}
                        className="about-copy"
                        bg="#0b1115"
                        border="1px solid rgba(187, 223, 230, 0.12)"
                        borderRadius="0"
                        p={{ base: 6, sm: 8, md: 10 }}
                        boxShadow="none"
                    >
                        <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="medium" color="#dce8eb">
                            {t('about.hello')}<span style={{ color: '#4de4ff', fontWeight: 'bold', fontSize: '1.2em' }}>Raoni Moraes</span><span dangerouslySetInnerHTML={{ __html: t('about.role') }}></span>
                        </Text>
                        <Text fontSize={{ base: "xs", md: "lg" }} lineHeight="1.8" color="gray.400">
                            {t('about.p1_1')}<Text as="span" color="#dce8eb" fontWeight="bold">.NET (C#)</Text>{t('about.p1_2')}<Text as="span" color="#dce8eb" fontWeight="bold">React</Text>{t('about.p1_3')}
                        </Text>
                        <Text fontSize={{ base: "xs", md: "lg" }} lineHeight="1.8" color="gray.400">
                            {t('about.p2')}
                        </Text>
                        <Text color="#75ddef" fontSize={{ base: "xs", md: "md" }} mt={2}>
                            {t('about.p3')}
                        </Text>
                    </VStack>
                </Stack>
            </Box>
        </Box>
    );
}
