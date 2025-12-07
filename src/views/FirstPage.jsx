import { Box, VStack, Text, Heading, Stack } from "@chakra-ui/react";
import Button from '../components/Button.jsx'; // Mantendo seu botão original

export default function FirstPage() {
  return (
    <Box
      className='home'
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} textAlign="center" px={4}>

        <Text
          fontSize="clamp(2rem, 5vw, 96px)"
          fontWeight="100"
          lineHeight="1"
          className='presentation-intro'
        >
          Olá, sou o
        </Text>

        <Heading
          as="h1"
          fontSize="clamp(3rem, 10vw, 120px)"
          fontWeight="800"
          fontStyle="italic"
          lineHeight="1"
          className='presentation-name'
          pb={4}
        >
          Raoni Moraes
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 2, md: 12 }}
          className='presentation-roles'
          color="#b9aecf"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="300"
        >
          <Text className='role'>Fullstack Developer</Text>
          <Text display={{ base: "none", md: "block" }}>•</Text>
          <Text className='role'>Desenvolvedor Web</Text>
          <Text display={{ base: "none", md: "block" }}>•</Text>
          <Text className='role'>Desenvolvedor Mobile</Text>
        </Stack>

        <Box pt={10}>
          <Button texto='Conhecer meu trabalho' id='visit_my_work-btn' />
        </Box>

      </VStack>
    </Box>
  );
}