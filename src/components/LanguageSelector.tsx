import { useTranslation } from "react-i18next";
import { Button } from "antd";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px", height: 30, backgroundColor: "transparent"}}>
      <Button onClick={() => changeLanguage("en")}>En</Button>
      <Button onClick={() => changeLanguage("ro")}>Ro</Button>
      <Button onClick={() => changeLanguage("ru")}>Ru</Button>
    </div>
  );
};

export default LanguageSelector;
