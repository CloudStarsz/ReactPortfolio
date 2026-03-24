import { useTranslation } from 'react-i18next';
import { Flex, Button } from '@chakra-ui/react';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Flex gap={2} ml={4} mr={4} align="center">
      <Button
        size="sm"
        variant={i18n.language === 'pt' ? 'solid' : 'ghost'}
        color={i18n.language === 'pt' ? 'white' : 'gray.400'}
        bg={i18n.language === 'pt' ? 'rgba(90, 3, 252, 0.5)' : 'transparent'}
        _hover={{ bg: 'rgba(90, 3, 252, 0.3)', color: 'white' }}
        borderRadius="full"
        px={3}
        onClick={() => handleLanguageChange('pt')}
      >
        PT
      </Button>
      <Button
        size="sm"
        variant={i18n.language === 'en' ? 'solid' : 'ghost'}
        color={i18n.language === 'en' ? 'white' : 'gray.400'}
        bg={i18n.language === 'en' ? 'rgba(90, 3, 252, 0.5)' : 'transparent'}
        _hover={{ bg: 'rgba(90, 3, 252, 0.3)', color: 'white' }}
        borderRadius="full"
        px={3}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </Button>
    </Flex>
  );
}
