import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/">go to landing page</Link>
    </div>
  );
}
