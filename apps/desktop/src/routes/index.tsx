import "../styles.css";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TranslateIcon,
  ArrowSquareOutIcon,
  FolderOpenIcon,
  RadioButtonIcon,
  AnchorSimpleIcon,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full w-full flex flex-col">
      <header className="p-6 flex items-center justify-center gap-4">
        <TranslateIcon color="currentColor" size={21} />
        <p className="text-foreground/21">|</p>
        <p className="cursor-pointer">English</p>
        <p className="text-foreground/21">|</p>
        <a href="https://www.allneos.org/translate/anchor" target="_blank">
          <Button variant="link">
            Help us translate the app
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
          <Link to="/workspace">
            <Button variant="secondary">
              Look around first{" "}
              <RadioButtonIcon color="currentColor" size={14} />
            </Button>
          </Link>
          <Link to="/">
            <Button>
              Open a Ren'Py Project
              <FolderOpenIcon color="currentColor" size={14} />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
