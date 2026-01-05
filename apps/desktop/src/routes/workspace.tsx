import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  AnchorSimpleIcon,
  BoatIcon,
  TargetIcon,
  MapTrifoldIcon,
  SunHorizonIcon,
  UsersThreeIcon,
  ShippingContainerIcon,
  GearSixIcon,
} from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/workspace")({
  component: RouteComponent,
});

const iconSize = 21;
const separator = "-";
const links = [
  {
    to: "/workspace/dashboard",
    icon: <BoatIcon color="currentColor" size={iconSize} />,
    label: `Dashboard ${separator} Quick view of current project`,
  },
  {
    to: "/workspace/sonar",
    icon: <TargetIcon color="currentColor" size={iconSize} />,
    label: `Sonar ${separator} Online choice stats database`,
  },
  {
    to: "/workspace/chart",
    icon: <MapTrifoldIcon color="currentColor" size={iconSize} />,
    label: `Chart ${separator} A visual mapper for your project`,
  },
  {
    to: "/workspace/horizon",
    icon: <SunHorizonIcon color="currentColor" size={iconSize} />,
    label: `Horizon ${separator} A visual board for inspirations`,
  },
  {
    to: "/workspace/crew",
    icon: <UsersThreeIcon color="currentColor" size={iconSize} />,
    label: `Crew ${separator} Collaborate with your team`,
  },
  {
    to: "/workspace/cargo",
    icon: <ShippingContainerIcon color="currentColor" size={iconSize} />,
    label: `Cargo ${separator} Install packages for your project`,
  },
];
const linksFooter = [
  {
    to: "/workspace/settings",
    icon: <GearSixIcon color="currentColor" size={iconSize} />,
    label: `Settings ${separator} Anchor configuration`,
  },
];

function RouteComponent() {
  return (
    <div className="h-full w-full flex">
      <nav className="p-3 flex flex-col gap-3 justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-3 flex items-center justify-center rounded-lg text-primary">
            <AnchorSimpleIcon color="currentColor" size={iconSize} />
          </div>

          {links.map((link) => (
            <NavButton key={link.to} {...link} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {linksFooter.map((link) => (
            <NavButton key={link.to} {...link} />
          ))}
        </div>
      </nav>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

function NavButton(link: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={link.to}
          className="p-3 flex items-center justify-center rounded-lg hover:bg-primary/14 transition-all duration-350"
          activeProps={{ className: "bg-primary/21 text-primary" }}
        >
          {link.icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{link.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
