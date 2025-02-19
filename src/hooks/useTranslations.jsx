import { useLanguageStore } from "@/app/store";
import { translations } from "@/utils/translations/translations";

export const useTranslation = () => {
  const { language } = useLanguageStore();
  return translations[language];
};
