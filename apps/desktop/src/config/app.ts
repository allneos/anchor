import {
  BoatIcon,
  TargetIcon,
  MapTrifoldIcon,
  SunHorizonIcon,
  UsersThreeIcon,
  ShippingContainerIcon,
  GearSixIcon,
  type Icon,
} from "@phosphor-icons/react";

export const APP_NAME = "Anchor";
export const BRAND_NAME = "Allneos";

const BASE_LINK = "https://www.allneos.org/renpy/anchor";
export const LINKS = {
  docs: BASE_LINK + "/docs",
  translate: BASE_LINK + "/translate",
  sonar: BASE_LINK + "/sonar",
  chart: BASE_LINK + "/chart",
  horizon: BASE_LINK + "/horizon",
  crew: BASE_LINK + "/crew",
  cargo: BASE_LINK + "/cargo",
} as const;

export type ModuleKey =
  | "dashboard"
  | "sonar"
  | "chart"
  | "horizon"
  | "crew"
  | "cargo"
  | "settings";

interface Module {
  key: ModuleKey;
  name: string;
  icon: Icon;
  route: string;
  docsUrl?: string;
}

export const MODULES: Record<ModuleKey, Module> = {
  dashboard: {
    key: "dashboard",
    name: "Dashboard",
    icon: BoatIcon,
    route: "/workspace/dashboard",
  },
  sonar: {
    key: "sonar",
    name: "Sonar",
    icon: TargetIcon,
    route: "/workspace/sonar",
    docsUrl: LINKS.sonar,
  },
  chart: {
    key: "chart",
    name: "Chart",
    icon: MapTrifoldIcon,
    route: "/workspace/chart",
    docsUrl: LINKS.chart,
  },
  horizon: {
    key: "horizon",
    name: "Horizon",
    icon: SunHorizonIcon,
    route: "/workspace/horizon",
    docsUrl: LINKS.horizon,
  },
  crew: {
    key: "crew",
    name: "Crew",
    icon: UsersThreeIcon,
    route: "/workspace/crew",
    docsUrl: LINKS.crew,
  },
  cargo: {
    key: "cargo",
    name: "Cargo",
    icon: ShippingContainerIcon,
    route: "/workspace/cargo",
    docsUrl: LINKS.cargo,
  },
  settings: {
    key: "settings",
    name: "Settings",
    icon: GearSixIcon,
    route: "/workspace/settings",
  },
};

export const NAV_MODULES = [
  MODULES.dashboard,
  MODULES.sonar,
  MODULES.chart,
  MODULES.horizon,
  MODULES.crew,
  MODULES.cargo,
];

export const NAV_FOOTER_MODULES = [MODULES.settings];
