import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="h-screen">
      <React.Fragment>
        <Outlet />
      </React.Fragment>
    </div>
  );
}
