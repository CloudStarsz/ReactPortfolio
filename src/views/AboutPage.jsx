import { Box, Stack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import escritoroniImg from "../img/Escritoroni.jpeg";
export default function AboutPage() {
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
                    Sobre Mim
                </Heading>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 16, md: 24, lg: 40 }}
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    gap={{ base: 8, md: 16 }}
                >
                    <Box flexShrink={0} position="relative" mt={{ base: 2, md: 0 }}>
                        <Box
                            position="absolute"
                            top={{ base: "-10px", md: "-15px" }}
                            left={{ base: "-10px", md: "-15px" }}
                            right={{ base: "-10px", md: "-15px" }}
                            bottom={{ base: "-10px", md: "-15px" }}
                            style={{ background: 'linear-gradient(to right, #5a03fc, #3f03ad)' }}
                            borderRadius="full"
                            filter={{ base: "blur(15px)", md: "blur(25px)" }}
                            opacity={{ base: 0.3, md: 0.2 }}
                            zIndex={0}
                        />
                        <Image
                            src={photoUrl}
                            alt="Foto de Raoni Moraes"
                            boxSize={{ base: "150px", sm: "180px", md: "350px" }}
                            objectFit="cover"
                            borderRadius="full"
                            position="relative"
                            zIndex={1}
                            border={{ base: "4px solid rgba(255, 255, 255, 0.1)", md: "6px solid rgba(255, 255, 255, 0.1)" }}
                            boxShadow="2xl"
                        />
                    </Box>

                    <VStack
                        spacing={{ base: 4, md: 6 }}
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        maxW={{ base: "100%", md: "600px" }}
                        bg="rgba(255, 255, 255, 0.03)"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(255, 255, 255, 0.05)"
                        borderRadius={{ base: "3xl", md: "2xl" }}
                        p={{ base: 6, sm: 8, md: 10 }}
                        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                    >
                        <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="medium" color="#e1d8ed">
                            Olá! Sou <span style={{ background: 'linear-gradient(to right, #d6bcfa, #90cdf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', fontSize: '1.2em' }}>Raoni Moraes</span>, <br style={{ display: 'none' }} /> Eng. de Computação e Developer Fullstack.
                        </Text>
                        <Text fontSize={{ base: "xs", md: "lg" }} lineHeight="1.8" color="gray.400">
                            Meu foco é entregar soluções web robustas e escaláveis. Minha especialidade reside na combinação da solidez do <Text as="span" color="#e1d8ed" fontWeight="bold">.NET (C#)</Text> no back-end com a interatividade do <Text as="span" color="#e1d8ed" fontWeight="bold">React</Text> no front-end.
                        </Text>
                        <Text fontSize={{ base: "xs", md: "lg" }} lineHeight="1.8" color="gray.400">
                            Mais do que apenas executar tarefas, meu objetivo é focar na engenharia da solução, aplicando princípios de Clean Code e metodologias ágeis para criar softwares performáticos e fáceis de manter.
                        </Text>
                        <Text color="#d6bcfa" fontSize={{ base: "xs", md: "md" }} fontStyle="italic" mt={2}>
                            Atualmente, desenvolvo sistemas críticos na ECR Engenharia e também possuo vivência em desenvolvimento mobile (Flutter/React Native).
                        </Text>
                    </VStack>
                </Stack>
            </Box>
        </Box>
    );
}