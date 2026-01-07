import { CircleNotchIcon } from "@phosphor-icons/react";

export function FullLoader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background text-primary">
      <CircleNotchIcon
        color="currentColor"
        size={42}
        className="animate-spin"
      />
    </div>
  );
}
