import { createFileRoute } from "@tanstack/react-router";
import { Soon } from "@/components/soon";

export const Route = createFileRoute("/workspace/chart")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Soon moduleKey="chart" />;
}
