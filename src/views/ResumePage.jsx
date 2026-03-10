import { Box, Heading, VStack, Text, Flex } from "@chakra-ui/react";

export default function ResumePage() {
    return (
        <Box p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" overflowY="auto" alignItems="flex-start">
            <Box maxW="1000px" mx="auto" w="100%" pb={20}>
                <Heading as="h1" mb={{ base: 8, md: 12 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    Currículo
                </Heading>

                <Flex direction="column" gap={{ base: 6, md: 8 }}>
                    <Box position="relative">
                        <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #5a03fc, #3f03ad)" borderRadius="2xl" filter={{ base: "blur(15px)", md: "blur(20px)" }} opacity={{ base: 0.2, md: 0.1 }} zIndex={0} />
                        <Box position="relative" zIndex={1} bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)">
                            <Heading as="h2" size={{ base: "sm", md: "md" }} color="#e1d8ed" mb={4} textTransform="uppercase" letterSpacing="wider">Resumo Profissional</Heading>
                            <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                                {/* Escreva aqui o seu resumo profissional */}
                                [Escreva aqui o seu resumo profissional. Ex: Desenvolvedor Fullstack com vasta experiência em...]
                            </Text>
                        </Box>
                    </Box>

                    <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 8 }}>
                        <Box flex="1" position="relative">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #d6bcfa, #5a03fc)" borderRadius="2xl" filter={{ base: "blur(15px)", md: "blur(20px)" }} opacity={{ base: 0.15, md: 0.1 }} zIndex={0} />
                            <Box position="relative" zIndex={1} h="100%" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)">
                                <Heading as="h2" size={{ base: "sm", md: "md" }} color="#e1d8ed" mb={6} textTransform="uppercase" letterSpacing="wider">Experiência Profissional</Heading>
                                <VStack align="stretch" spacing={6}>
                                    <Box>
                                        <Text fontWeight="bold" color="#d6bcfa" fontSize={{ base: "md", md: "lg" }}>Cargo / Função <Text as="span" color="gray.400" fontWeight="normal" display={{ base: "block", md: "inline" }}>- Nome da Empresa</Text></Text>
                                        <Text fontSize="xs" color="gray.500" mb={3} mt={{ base: 1, md: 0 }}>Período (Ex: Jan 2022 - Atual)</Text>
                                        <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
                                            {/* Escreva aqui as responsabilidades */}
                                            [Escreva aqui as responsabilidades e conquistas nesta função principais do seu dia-a-dia...]
                                        </Text>
                                    </Box>

                                    <Box as="hr" borderColor="rgba(255,255,255,0.05)" />

                                    <Box>
                                        <Text fontWeight="bold" color="#d6bcfa" fontSize={{ base: "md", md: "lg" }}>Cargos anteriores... <Text as="span" color="gray.400" fontWeight="normal" display={{ base: "block", md: "inline" }}>- Outra Empresa</Text></Text>
                                        <Text fontSize="xs" color="gray.500" mb={3} mt={{ base: 1, md: 0 }}>Período</Text>
                                        <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
                                            {/* Escreva aqui outras experiências */}
                                            [Escreva aqui...]
                                        </Text>
                                    </Box>
                                </VStack>
                            </Box>
                        </Box>

                        <Box flex="1" position="relative">
                            <Box position="absolute" top="-5px" left="-5px" right="-5px" bottom="-5px" bg="linear-gradient(to right, #90cdf4, #0A66C2)" borderRadius="2xl" filter={{ base: "blur(15px)", md: "blur(20px)" }} opacity={{ base: 0.15, md: 0.1 }} zIndex={0} />
                            <Box position="relative" zIndex={1} h="100%" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)">
                                <Heading as="h2" size={{ base: "sm", md: "md" }} color="#e1d8ed" mb={6} textTransform="uppercase" letterSpacing="wider">Formação Acadêmica</Heading>
                                <VStack align="stretch" spacing={6}>
                                    <Box>
                                        <Text fontWeight="bold" color="#90cdf4" fontSize={{ base: "md", md: "lg" }}>Nome do Curso / Graduação <Text as="span" color="gray.400" fontWeight="normal" display={{ base: "block", md: "inline" }}>- Instituição</Text></Text>
                                        <Text fontSize="xs" color="gray.500" mb={3} mt={{ base: 1, md: 0 }}>Ano de Conclusão</Text>
                                        <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
                                            {/* Escreva detalhes adicionais */}
                                            [Escreva detalhes adicionais acadêmicos aqui se necessário...]
                                        </Text>
                                    </Box>
                                </VStack>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
