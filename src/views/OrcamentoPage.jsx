import { Box, Heading, Text, Flex, Button as ChakraButton } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

export default function OrcamentoPage() {
    return (
        <Box p={{ base: 4, md: 12 }} w="100%" h="100%" display="flex" alignItems="center">
            <Box maxW="800px" mx="auto" w="100%">
                <Heading as="h1" mb={{ base: 8, md: 12 }} textAlign="center" fontSize="clamp(2.5rem, 6vw, 72px)" fontWeight="100" fontStyle="italic">
                    Fazer Orçamento
                </Heading>
                
                <Box position="relative" mt={{ base: 4, md: 0 }}>
                    <Box
                        position="absolute"
                        top={{ base: "-10px", md: "-15px" }}
                        left={{ base: "-10px", md: "-15px" }}
                        right={{ base: "-10px", md: "-15px" }}
                        bottom={{ base: "-10px", md: "-15px" }}
                        style={{ background: 'linear-gradient(to right, #5a03fc, #3f03ad)' }}
                        borderRadius="3xl"
                        filter={{ base: "blur(20px)", md: "blur(30px)" }}
                        opacity={{ base: 0.3, md: 0.2 }}
                        zIndex={0}
                    />
                    
                    <Flex position="relative" zIndex={1} direction="column" align="center" bg="rgba(255, 255, 255, 0.03)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.05)" borderRadius="3xl" p={{ base: 6, md: 12 }} boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)" textAlign="center">
                        <Text fontSize={{ base: "sm", md: "xl" }} color="#e1d8ed" mb={6} lineHeight="1.8">
                            Tem um projeto em mente? <br/>
                            Envie um e-mail para <Text as="span" style={{ background: 'linear-gradient(to right, #d6bcfa, #90cdf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}> {/* Preencha seu email aqui */} [Escreva seu e-mail aqui] </Text> com o seguinte assunto:
                        </Text>
                        
                        <Box bg="rgba(0,0,0,0.3)" p={{ base: 3, md: 4 }} borderRadius="xl" border="1px solid rgba(255,255,255,0.1)" mb={8}>
                            <Text fontWeight="bold" color="#90cdf4" letterSpacing="wide" fontSize={{ base: "xs", md: "md" }}>Solicitação de orçamento - Desenvolvimento</Text>
                        </Box>

                        <Text fontSize={{ base: "xs", md: "md" }} color="gray.400" mb={8} maxW="600px" lineHeight="1.8">
                            E com a mensagem descrevendo a sua ideia e contatos. Em breve entraremos em contato com você para alinharmos as necessidades do seu projeto!
                        </Text>

                        <ChakraButton 
                            as="a" 
                            href="mailto:/*Preencher email aqui*/?subject=Solicitação de orçamento - Desenvolvimento" 
                            leftIcon={<FaEnvelope />} 
                            size={{ base: "md", md: "lg" }}
                            color="white"
                            variant="solid" 
                            bg="linear-gradient(to right, #5a03fc, #3f03ad)" 
                            _hover={{ bg: "linear-gradient(to right, #6a1dfa, #4e11bd)", transform: "scale(1.05)" }}
                            transition="all 0.3s"
                            rounded="full"
                            px={{ base: 8, md: 10 }}
                            py={{ base: 6, md: 7 }}
                            fontSize={{ base: "md", md: "lg" }}
                        >
                            Enviar E-mail
                        </ChakraButton>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
