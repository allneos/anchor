import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/sonar")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div></div>;
}
