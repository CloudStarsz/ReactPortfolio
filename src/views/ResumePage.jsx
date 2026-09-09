import { Box, Heading, VStack, Text, Flex, Icon, SimpleGrid, Badge, Link } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaTools, FaLanguage, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create(Box);

const GlassCard = ({ children, glowColor = "#4de4ff", ...props }) => (
    <Box
        w="100%"
        bg="#0b1115"
        border="1px solid rgba(187, 223, 230, 0.12)"
        borderTopColor={glowColor}
        borderRadius="0"
        p={{ base: 6, md: 8 }}
        boxShadow="none"
        h="100%"
        {...props}
    >
        {children}
    </Box>
);

export default function ResumePage() {
    const { t } = useTranslation();
    const data = t('resume.data', { returnObjects: true });
    const reduceMotion = useReducedMotion();

    return (
        <Box className="resume-page" p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" overflowY="auto" alignItems="flex-start">
            <VStack maxW="1100px" mx="auto" w="100%" pb={20} gap={10} align="stretch">
                {/* Header Section */}
                <MotionBox
                    initial={reduceMotion ? false : { opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.5 }}
                >
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "center", md: "flex-end" }} gap={6}>
                        <VStack align={{ base: "center", md: "start" }} gap={2}>
                            <Heading as="h1" fontSize="clamp(2.5rem, 5vw, 60px)" fontWeight="100" fontStyle="italic" color="white">
                                {data.informacoes_pessoais.nome}
                            </Heading>
                            <Text fontSize={{ base: "md", md: "xl" }} color="#75ddef" fontWeight="light" letterSpacing="wide">
                                {data.informacoes_pessoais.titulo_profissional}
                            </Text>
                        </VStack>

                        <VStack align={{ base: "center", md: "end" }} gap={2} color="gray.400" fontSize="sm">
                            <Flex align="center" gap={2}>
                                <Text>{data.informacoes_pessoais.localizacao}</Text>
                                <Icon as={FaMapMarkerAlt} color="#4de4ff" />
                            </Flex>
                            <Link href={data.informacoes_pessoais.linkedin} isExternal _hover={{ color: "white" }}>
                                <Flex align="center" gap={2}>
                                    <Text>{t('resume.linkedin_btn')}</Text>
                                    <Icon as={FaLinkedin} color="#4de4ff" />
                                </Flex>
                            </Link>
                        </VStack>
                    </Flex>
                </MotionBox>

                {/* Summary Section */}
                <MotionBox
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                    viewport={{ once: true }}
                >
                    <GlassCard glowColor="#4de4ff">
                        <Text color="gray.300" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" textAlign="justify">
                            {data.resumo}
                        </Text>
                    </GlassCard>
                </MotionBox>

                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, md: 16 }}>
                    {/* Experience Section */}
                    <VStack align="stretch" gap={6}>
                        <Flex align="center" gap={3} mb={2}>
                            <Icon as={FaBriefcase} color="#75ddef" boxSize={5} />
                            <Heading as="h2" size="md" color="#dce8eb" textTransform="uppercase" letterSpacing="widest">{t('resume.section_exp')}</Heading>
                        </Flex>
                        {data.experiencia_profissional.map((exp, index) => (
                            <MotionBox
                                key={index}
                                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard glowColor="#4de4ff">
                                    <VStack align="stretch" gap={2}>
                                        <Flex justify="space-between" align="start">
                                            <VStack align="start" gap={0}>
                                                <Text fontWeight="bold" color="#75ddef" fontSize="lg">{exp.cargo}</Text>
                                                <Text color="gray.400" fontSize="sm">{exp.empresa}</Text>
                                            </VStack>
                                            <Badge variant="subtle" colorPalette="cyan" borderRadius="sm" px={3}>
                                                {exp.data_inicio} - {exp.data_fim}
                                            </Badge>
                                        </Flex>
                                        <Text color="gray.400" fontSize="sm" lineHeight="1.6" mb={2}>
                                            {exp.descricao}
                                        </Text>
                                        {exp.tecnologias && (
                                            <Flex wrap="wrap" gap={2}>
                                                {exp.tecnologias.map(tech => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        fontSize="xs"
                                                        color="gray.300"
                                                        borderColor="gray.600"
                                                        px={2}
                                                        py={1}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </Flex>
                                        )}
                                    </VStack>
                                </GlassCard>
                            </MotionBox>
                        ))}
                    </VStack>

                    {/* Education & Languages Section */}
                    <VStack align="stretch" gap={8}>
                        {/* Education */}
                        <Box>
                            <Flex align="center" gap={3} mb={6}>
                                <Icon as={FaGraduationCap} color="#90cdf4" boxSize={6} />
                                <Heading as="h2" size="md" color="#dce8eb" textTransform="uppercase" letterSpacing="widest">{t('resume.section_edu')}</Heading>
                            </Flex>
                            <VStack align="stretch" gap={4}>
                                {data.formacao_academica.map((edu, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: reduceMotion ? 0 : 0.35 }}
                                        viewport={{ once: true }}
                                    >
                                        <GlassCard glowColor="#90cdf4">
                                            <VStack align="start" gap={1}>
                                                <Text fontWeight="bold" color="#90cdf4" fontSize="md">{edu.curso} ({edu.tipo})</Text>
                                                <Text color="gray.400" fontSize="sm">{edu.instituicao}</Text>
                                                <Flex justify="space-between" w="100%" align="center">
                                                    <Text fontSize="xs" color="gray.500">{edu.data_inicio} - {edu.data_fim}</Text>
                                                    <Badge colorScheme={edu.status === "Concluído" ? "green" : "blue"} variant="subtle" fontSize="2xs">
                                                        {edu.status}
                                                    </Badge>
                                                </Flex>
                                            </VStack>
                                        </GlassCard>
                                    </MotionBox>
                                ))}
                            </VStack>
                        </Box>

                        {/* Languages */}
                        <Box>
                            <Flex align="center" gap={3} mb={4}>
                                <Icon as={FaLanguage} color="#f6ad55" boxSize={6} />
                                <Heading as="h2" size="md" color="#dce8eb" textTransform="uppercase" letterSpacing="widest">{t('resume.section_lang')}</Heading>
                            </Flex>
                            <VStack align="stretch" gap={4}>
                                {data.idiomas.map((lang, index) => (
                                    <GlassCard key={index} glowColor="#f6ad55">
                                        <Flex justify="space-between" align="center">
                                            <VStack align="start" gap={0}>
                                                <Text fontWeight="bold" color="#f6ad55">{lang.idioma}</Text>
                                                <Text fontSize="xs" color="gray.500">{lang.observacao}</Text>
                                            </VStack>
                                            <Badge colorScheme="orange" variant="outline" borderRadius="full" px={4}>
                                                {lang.nivel}
                                            </Badge>
                                        </Flex>
                                    </GlassCard>
                                ))}
                            </VStack>
                        </Box>

                        {/* Soft Skills & Highlights */}
                        <Box mt={4}>
                            <Flex align="center" gap={3} mb={4}>
                                <Icon as={FaLightbulb} color="#ecb144" boxSize={6} />
                                <Heading as="h2" size="md" color="#dce8eb" textTransform="uppercase" letterSpacing="widest">{t('resume.section_highlights')}</Heading>
                            </Flex>
                            <VStack align="stretch" gap={4}>
                                {data.destaques.map((destaque, index) => (
                                    <GlassCard key={index} glowColor="#ecb144">
                                        <VStack align="start" gap={1}>
                                            <Text fontWeight="bold" color="#ecb144" fontSize="sm">{destaque.titulo}</Text>
                                            <Text color="gray.400" fontSize="xs" lineHeight="1.6">
                                                {destaque.descricao}
                                            </Text>
                                        </VStack>
                                    </GlassCard>
                                ))}
                            </VStack>
                        </Box>
                    </VStack>
                </SimpleGrid>

                {/* Skills Section */}
                <MotionBox
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                    viewport={{ once: true }}
                >
                    <Box w="100%">
                        <Flex align="center" gap={3} mb={8}>
                            <Icon as={FaTools} color="#4de4ff" boxSize={5} />
                            <Heading as="h2" size="md" color="#dce8eb" textTransform="uppercase" letterSpacing="widest">{t('resume.section_skills')}</Heading>
                        </Flex>
                        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={4}>
                            {Object.entries(data.competencias).map(([category, skills]) => (
                                <GlassCard key={category} glowColor="#4de4ff">
                                    <VStack align="start" gap={4}>
                                        <Text fontWeight="bold" color="#75ddef" fontSize="xs" textTransform="uppercase" letterSpacing="tighter">
                                            {category}
                                        </Text>
                                        <Flex wrap="wrap" gap={2}>
                                            {skills.map(skill => (
                                                <Badge
                                                    key={skill}
                                                    variant="solid"
                                                    bg="rgba(77, 228, 255, 0.07)"
                                                    color="#dce8eb"
                                                    fontSize="xs"
                                                    px={2}
                                                    py={1}
                                                    borderRadius="md"
                                                    border="1px solid rgba(77, 228, 255, 0.22)"
                                                    _hover={{ bg: "rgba(77, 228, 255, 0.14)" }}
                                                    transition="all 0.2s"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </Flex>
                                    </VStack>
                                </GlassCard>
                            ))}
                        </SimpleGrid>
                    </Box>
                </MotionBox>
            </VStack>
        </Box>
    );
}
