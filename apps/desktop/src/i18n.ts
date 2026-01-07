import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { locale } from "@tauri-apps/plugin-os";
import { useSettings } from "./stores/settings";

const initI18n = async () => {
  const systemLocale = await locale();
  const systemLang = systemLocale?.split("-")[0] || "en";

  const storedLanguage = useSettings.getState().language;

  if (!storedLanguage || storedLanguage === "en") {
    useSettings.getState().setLanguage(systemLang);
  }

  await i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: storedLanguage || systemLang,
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      interpolation: { escapeValue: false },
      react: {
        useSuspense: true,
      },
    });
};

initI18n();

export default i18n;
