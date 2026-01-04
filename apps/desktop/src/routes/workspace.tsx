import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/">
        <Button variant="link">go back</Button>
      </Link>
    </div>
  );
}
