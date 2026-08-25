import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector" aria-label="Language selector">
      <button
        type="button"
        className={i18n.language === 'pt' ? 'is-active' : ''}
        aria-pressed={i18n.language === 'pt'}
        onClick={() => handleLanguageChange('pt')}
      >
        PT
      </button>
      <button
        type="button"
        className={i18n.language === 'en' ? 'is-active' : ''}
        aria-pressed={i18n.language === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
    </div>
  );
}
