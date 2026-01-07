import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { RouteTracker } from "@/components/route-tracker";
import { AnchorSimpleIcon } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { NAV_MODULES, NAV_FOOTER_MODULES } from "@/config/app";

export const Route = createFileRoute("/workspace")({
  component: RouteComponent,
});

const iconSize = 21;

function RouteComponent() {
  return (
    <div className="h-full w-full flex">
      <RouteTracker />
      <nav className="p-3 flex flex-col gap-3 justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-3 flex items-center justify-center rounded-lg text-primary">
            <AnchorSimpleIcon color="currentColor" size={iconSize} />
          </div>
          {NAV_MODULES.map((module) => (
            <NavButton key={module.key} module={module} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {NAV_FOOTER_MODULES.map((module) => (
            <NavButton key={module.key} module={module} />
          ))}
        </div>
      </nav>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

function NavButton({ module }: { module: (typeof NAV_MODULES)[number] }) {
  const { t } = useTranslation("common");
  const IconComponent = module.icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={module.route}
          className="p-3 flex items-center justify-center rounded-lg hover:bg-primary/14 transition-all duration-350"
          activeProps={{ className: "bg-primary/21 text-primary" }}
        >
          <IconComponent color="currentColor" size={iconSize} />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>
          {module.name} - {t(`module.${module.key}.short_description` as const)}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
