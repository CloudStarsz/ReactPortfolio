import { Box, Heading, VStack, Text, Flex, Icon, SimpleGrid, Badge, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaTools, FaLanguage, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create(Box);

const GlassCard = ({ children, glowColor = "#5a03fc", ...props }) => (
    <Box position="relative" w="100%" {...props}>
        <Box
            position="absolute"
            top="-5px" left="-5px" right="-5px" bottom="-5px"
            bg={`linear-gradient(to right, ${glowColor}, transparent)`}
            borderRadius="2xl"
            filter="blur(20px)"
            opacity={0.1}
            zIndex={0}
        />
        <Box
            position="relative"
            zIndex={1}
            bg="rgba(255, 255, 255, 0.03)"
            backdropFilter="blur(15px)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
            h="100%"
        >
            {children}
        </Box>
    </Box>
);

export default function ResumePage() {
    const { t } = useTranslation();
    const data = t('resume.data', { returnObjects: true });

    return (
        <Box p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" overflowY="auto" alignItems="flex-start">
            <VStack maxW="1100px" mx="auto" w="100%" pb={20} gap={10} align="stretch">
                {/* Header Section */}
                <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "center", md: "flex-end" }} gap={6}>
                        <VStack align={{ base: "center", md: "start" }} gap={2}>
                            <Heading as="h1" fontSize="clamp(2.5rem, 5vw, 60px)" fontWeight="100" fontStyle="italic" color="white">
                                {data.informacoes_pessoais.nome}
                            </Heading>
                            <Text fontSize={{ base: "md", md: "xl" }} color="#d6bcfa" fontWeight="light" letterSpacing="wide">
                                {data.informacoes_pessoais.titulo_profissional}
                            </Text>
                        </VStack>

                        <VStack align={{ base: "center", md: "end" }} gap={2} color="gray.400" fontSize="sm">
                            <Flex align="center" gap={2}>
                                <Text>{data.informacoes_pessoais.localizacao}</Text>
                                <Icon as={FaMapMarkerAlt} color="#5a03fc" />
                            </Flex>
                            <Link href={`https://wa.me/5511967287083`} isExternal _hover={{ color: "white" }}>
                                <Flex align="center" gap={2}>
                                    <Text>{data.informacoes_pessoais.telefone}</Text>
                                    <Icon as={FaPhone} color="#5a03fc" />
                                </Flex>
                            </Link>
                            <Link href={`mailto:${data.informacoes_pessoais.email}`} isExternal _hover={{ color: "white" }}>
                                <Flex align="center" gap={2}>
                                    <Text>{data.informacoes_pessoais.email}</Text>
                                    <Icon as={FaEnvelope} color="#5a03fc" />
                                </Flex>
                            </Link>
                            <Link href={data.informacoes_pessoais.linkedin} isExternal _hover={{ color: "white" }}>
                                <Flex align="center" gap={2}>
                                    <Text>{t('resume.linkedin_btn')}</Text>
                                    <Icon as={FaLinkedin} color="#5a03fc" />
                                </Flex>
                            </Link>
                        </VStack>
                    </Flex>
                </MotionBox>

                {/* Summary Section */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <GlassCard glowColor="#5a03fc">
                        <Text color="gray.300" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" textAlign="justify">
                            {data.resumo}
                        </Text>
                    </GlassCard>
                </MotionBox>

                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, md: 16 }}>
                    {/* Experience Section */}
                    <VStack align="stretch" gap={6}>
                        <Flex align="center" gap={3} mb={2}>
                            <Icon as={FaBriefcase} color="#d6bcfa" boxSize={5} />
                            <Heading as="h2" size="md" color="#e1d8ed" textTransform="uppercase" letterSpacing="widest">{t('resume.section_exp')}</Heading>
                        </Flex>
                        {data.experiencia_profissional.map((exp, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard glowColor="#d6bcfa">
                                    <VStack align="stretch" gap={2}>
                                        <Flex justify="space-between" align="start">
                                            <VStack align="start" gap={0}>
                                                <Text fontWeight="bold" color="#d6bcfa" fontSize="lg">{exp.cargo}</Text>
                                                <Text color="gray.400" fontSize="sm">{exp.empresa}</Text>
                                            </VStack>
                                            <Badge variant="subtle" colorScheme="purple" borderRadius="full" px={3}>
                                                {exp.data_inicio} - {exp.data_fim}
                                            </Badge>
                                        </Flex>
                                        <Text color="gray.400" fontSize="sm" lineHeight="1.6" mb={2}>
                                            {exp.descricao}
                                        </Text>
                                        {exp.tecnologias && (
                                            <Flex wrap="wrap" gap={2}>
                                                {exp.tecnologias.map(tech => (
                                                    <Badge key={tech} variant="outline" fontSize="2xs" color="gray.500" borderColor="gray.700">
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
                                <Heading as="h2" size="md" color="#e1d8ed" textTransform="uppercase" letterSpacing="widest">{t('resume.section_edu')}</Heading>
                            </Flex>
                            <VStack align="stretch" gap={4}>
                                {data.formacao_academica.map((edu, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
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
                                <Heading as="h2" size="md" color="#e1d8ed" textTransform="uppercase" letterSpacing="widest">{t('resume.section_lang')}</Heading>
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
                                <Heading as="h2" size="md" color="#e1d8ed" textTransform="uppercase" letterSpacing="widest">{t('resume.section_highlights')}</Heading>
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Box w="100%">
                        <Flex align="center" gap={3} mb={8}>
                            <Icon as={FaTools} color="#5a03fc" boxSize={5} />
                            <Heading as="h2" size="md" color="#e1d8ed" textTransform="uppercase" letterSpacing="widest">{t('resume.section_skills')}</Heading>
                        </Flex>
                        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={4}>
                            {Object.entries(data.competencias).map(([category, skills], i) => (
                                <GlassCard key={category} glowColor="#5a03fc">
                                    <VStack align="start" gap={4}>
                                        <Text fontWeight="bold" color="#d6bcfa" fontSize="xs" textTransform="uppercase" letterSpacing="tighter">
                                            {category}
                                        </Text>
                                        <Flex wrap="wrap" gap={2}>
                                            {skills.map(skill => (
                                                <Badge
                                                    key={skill}
                                                    variant="solid"
                                                    bg="rgba(90, 3, 252, 0.15)"
                                                    color="#e1d8ed"
                                                    fontSize="xs"
                                                    px={2}
                                                    py={1}
                                                    borderRadius="md"
                                                    border="1px solid rgba(90, 3, 252, 0.3)"
                                                    _hover={{ bg: "rgba(90, 3, 252, 0.3)" }}
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

