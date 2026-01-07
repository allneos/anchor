import { Soon } from "@/components/soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/sonar")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Soon moduleKey="sonar" />;
}
