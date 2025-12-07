import { Box, Stack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import escritoroniImg from "../img/Escritoroni.jpeg";
export default function AboutPage() {
    const photoUrl = escritoroniImg;

    return (
        <Box p={{ base: 6, md: 12 }} className="about-page">
            <Box maxW="1000px" mx="auto">
                <Heading
                    as="h1"
                    mb={{ base: 8, md: 12 }}
                    textAlign={{ base: "center", md: "left" }}
                    fontSize="clamp(2.5rem, 6vw, 72px)"
                    fontWeight="100"
                    fontStyle="italic"
                    lineHeight="1.1"
                >
                    Sobre Mim
                </Heading>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 8, md: 16 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box flexShrink={0}>
                        <Image
                            src={photoUrl}
                            alt="Foto de Raoni Moraes"
                            boxSize={{ base: "200px", md: "350px" }}
                            objectFit="cover"
                            borderRadius="xl"
                            boxShadow="2xl"
                        />
                    </Box>

                    <VStack
                        spacing={5}
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        maxW="100%"
                    >
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
                            Olá! Sou <strong>Raoni Moraes</strong>, Engenheiro de Computação e Desenvolvedor Fullstack.
                        </Text>
                        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                            Meu foco é entregar soluções web robustas e escaláveis. Minha especialidade reside na combinação da solidez do <strong>.NET (C#)</strong> no back-end com a interatividade do <strong>React</strong> no front-end.
                        </Text>
                        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                            Mais do que apenas executar tarefas, meu objetivo é focar na engenharia da solução, aplicando princípios de Clean Code e metodologias ágeis para criar softwares performáticos e fáceis de manter.
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                            Atualmente, desenvolvo sistemas críticos na ECR Engenharia e também possuo vivência versátil em desenvolvimento mobile (Flutter/React Native).
                        </Text>
                    </VStack>
                </Stack>
            </Box>
        </Box>
    );
}