import { Box, VStack, Text, Heading, Stack } from "@chakra-ui/react";
import Button from '../components/Button.jsx';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

export default function FirstPage() {
  const { t } = useTranslation();
  return (
    <Box
      className='home'
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack className="home-content" spacing={6} textAlign="center" px={4}>
        <Text
          fontSize="clamp(1.15rem, 2.2vw, 1.75rem)"
          fontWeight="100"
          lineHeight="1.2"
          className='presentation-intro'
        >
          {t('home.hello')}
        </Text>

        <Heading
          as="h1"
          fontSize="clamp(3.25rem, 9vw, 7.5rem)"
          fontWeight="800"
          fontStyle="italic"
          lineHeight="1"
          className='presentation-name'
          pb={2}
        >
          {t('home.name')}
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 2, md: 8 }}
          className='presentation-roles'
          color="#b9aecf"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="300"
        >
          <Text className='role'>{t('home.role1')}</Text>
          <Text display={{ base: "none", md: "block" }}>•</Text>
          <Text className='role'>{t('home.role2')}</Text>
          <Text display={{ base: "none", md: "block" }}>•</Text>
          <Text className='role'>{t('home.role3')}</Text>
        </Stack>

        <Box pt={{ base: 5, md: 8 }}>
          <Button 
            texto={t('home.btn_work')} 
            id='visit_my_work-btn' 
            leftIcon={<FaGithub />}
            onClick={() => window.open('https://github.com/CloudStarsz', '_blank', 'noopener,noreferrer')}
          />
        </Box>
      </VStack>
    </Box>
  );
}
