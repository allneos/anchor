import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { useSettings } from "@/stores/settings";

export function RouteTracker() {
  const location = useLocation();
  const setLastRoute = useSettings((state) => state.setLastRoute);

  useEffect(() => {
    // Don't save settings route
    if (!location.pathname.includes("/workspace/settings")) {
      setLastRoute(location.pathname);
    }
  }, [location.pathname, setLastRoute]);

  return null;
}
