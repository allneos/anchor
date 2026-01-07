import { Soon } from "@/components/soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/horizon")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Soon moduleKey="horizon" />;
}
