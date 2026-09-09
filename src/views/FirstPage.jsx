import { Box, Text, Heading } from "@chakra-ui/react";
import Button from '../components/Button.jsx';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

export default function FirstPage() {
  const { t } = useTranslation();
  const [firstName, ...lastName] = t('home.name').split(' ');

  return (
    <Box className="home" h="100%" display="flex" alignItems="center">
      <div className="home-content">
        <aside className="hero-index" aria-hidden="true">
          <span>01</span>
          <i />
          <span>04</span>
        </aside>

        <div className="hero-copy">
          <Text className="presentation-intro">
            <span aria-hidden="true">&gt;_</span> {t('home.hello')}
          </Text>
          <Heading as="h1" className="presentation-name">
            <span>{firstName}</span>
            <span>{lastName.join(' ')}</span>
          </Heading>
          <div className="presentation-roles">
            <Text className="role">{t('home.role1')}</Text>
            <Text className="role">{t('home.role2')}</Text>
            <Text className="role">{t('home.role3')}</Text>
          </div>
          <Box className="hero-action">
          <Button
            texto={t('home.btn_work')}
            id="visit_my_work-btn"
            leftIcon={<FaGithub />}
            onClick={() => window.open('https://github.com/CloudStarsz', '_blank', 'noopener,noreferrer')}
          />
          </Box>
        </div>

        <aside className="hero-note">
          <span>FULL-STACK / SP</span>
          <p>.NET / React<br />Web / Mobile</p>
        </aside>
      </div>
    </Box>
  );
}
