import "../styles.css";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  TranslateIcon,
  ArrowSquareOutIcon,
  BookOpenIcon,
  BoatIcon,
  AnchorSimpleIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useSettings } from "@/stores/settings";
import { FullLoader } from "@/components/full-loader";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const locales = [
  { id: "en", label: "English" },
  { id: "tl", label: "Tagalog" },
];

function RouteComponent() {
  const { t, i18n } = useTranslation("common");
  const { setLanguage } = useSettings();
  const [isNavigating, setIsNavigating] = useState(false);
  const lastRoute = useSettings((state) => state.lastRoute);
  const navigate = useNavigate();

  useEffect(() => {
    const isReturningUser = lastRoute && lastRoute !== "/";
    if (isReturningUser) {
      setIsNavigating(true);
      navigate({ to: lastRoute });
    }
  }, [lastRoute, navigate]);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  if (isNavigating) {
    return <FullLoader />;
  }

  return (
    <div className="h-full w-full flex flex-col">
      <header className="p-6 flex items-center justify-center gap-4">
        <TranslateIcon color="currentColor" size={21} />
        <p className="text-foreground/21">|</p>
        <ul className="flex items-center gap-4">
          {locales.map((locale) => (
            <React.Fragment key={locale.id}>
              <li>
                <Button
                  variant="link"
                  isActive={i18n.language === locale.id}
                  onClick={() => handleChangeLanguage(locale.id)}
                >
                  {locale.label}
                </Button>
              </li>
              <p className="text-foreground/21">|</p>
            </React.Fragment>
          ))}
        </ul>
        <a
          href="https://www.allneos.org/renpy/anchor/translate"
          target="_blank"
        >
          <Button variant="link">
            {t("button.help")}
            <ArrowSquareOutIcon color="currentColor" size={14} />
          </Button>
        </a>
      </header>

      <main className="h-full w-full flex flex-col justify-center items-center gap-4 p-6 pb-24">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="uppercase text-right leading-none">
            <p className="font-mono ">Allneos</p>
            <h1 className="font-black text-7xl text-primary">Anchor</h1>
          </div>
          <div className="bg-primary/21 rounded-3xl flex items-center justify-center text-primary p-5 mb-3">
            <AnchorSimpleIcon color="currentColor" size={42} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <a href="https://www.allneos.org/renpy/anchor/docs" target="_blank">
            <Button variant="secondary">
              {t("button.tutorial")}
              <BookOpenIcon color="currentColor" size={14} />
            </Button>
          </a>
          <Link to="/workspace/dashboard">
            <Button>
              {t("button.start")}
              <BoatIcon color="currentColor" size={14} />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
