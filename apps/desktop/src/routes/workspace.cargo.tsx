import { Soon } from "@/components/soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/cargo")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Soon moduleKey="cargo" />;
}
