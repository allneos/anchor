import { Button } from "@/components/ui/button";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { MODULES } from "@/config/app";
import type { MODULES as ModulesType } from "@/config/app";

type ModuleKey = keyof typeof ModulesType;

interface SoonProps {
  moduleKey: ModuleKey;
}

export function Soon({ moduleKey }: SoonProps) {
  const { t } = useTranslation("common");
  const module = MODULES[moduleKey];
  const IconComponent = module.icon;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-14">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="uppercase text-right leading-none">
            <p className="font-mono">{t("text.soon")}</p>
            <h1 className="font-black text-7xl text-primary">{module.name}</h1>
          </div>
          <div className="bg-primary/21 rounded-3xl flex items-center justify-center text-primary p-5 mb-3">
            <IconComponent color="currentColor" size={42} />
          </div>
        </div>
        <p className="w-1/3 text-center">
          {t(`module.${moduleKey}.long_description` as const)}
        </p>
      </div>
      {module.docsUrl && (
        <a href={module.docsUrl} target="_blank">
          <Button variant="link">
            {t("button.planned_features")}
            <ArrowSquareOutIcon color="currentColor" size={14} />
          </Button>
        </a>
      )}
    </div>
  );
}
