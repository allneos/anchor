import { createFileRoute } from "@tanstack/react-router";
import { MapTrifoldIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/workspace/chart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-14">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="uppercase text-right leading-none">
            <p className="font-mono ">Coming Soon</p>
            <h1 className="font-black text-7xl text-primary">Chart</h1>
          </div>
          <div className="bg-primary/21 rounded-3xl flex items-center justify-center text-primary p-5 mb-3">
            <MapTrifoldIcon color="currentColor" size={42} />
          </div>
        </div>
        <p className="w-1/3 text-center">
          A visual mapper for Ren'Py assets, characters, scenes, scripts, and
          more.
        </p>
      </div>
      <a href="https://www.allneos.org/renpy/anchor/chart" target="_blank">
        <Button variant="link">
          View planned features
          <ArrowSquareOutIcon color="currentColor" size={14} />
        </Button>
      </a>
    </div>
  );
}
