import { Button } from "@/components/ui/button";
import { ArrowSquareOutIcon, UsersThreeIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/crew")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-14">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="uppercase text-right leading-none">
            <p className="font-mono ">Coming Soon</p>
            <h1 className="font-black text-7xl text-primary">Crew</h1>
          </div>
          <div className="bg-primary/21 rounded-3xl flex items-center justify-center text-primary p-5 mb-3">
            <UsersThreeIcon color="currentColor" size={42} />
          </div>
        </div>
        <p className="w-1/3 text-center">
          Collaborate with your team easier! Bring your own cloud storage, and
          update your progress with the team using a simplified version control.
        </p>
      </div>
      <a href="https://www.allneos.org/renpy/anchor/crew" target="_blank">
        <Button variant="link">
          View planned features
          <ArrowSquareOutIcon color="currentColor" size={14} />
        </Button>
      </a>
    </div>
  );
}
