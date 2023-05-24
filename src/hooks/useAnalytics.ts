import { isFunction } from "lodash";
import { useEffect } from "react";

export function useAnalytics() {
  const gtag = (data: any) => {
    if (typeof window !== "undefined" && isFunction((window as any).gtag)) {
      (window as any).gtag("event", "click", { ...data });
      alert('send analytics')
    }
  };

  useEffect(() => {
    console.log("tag", (window as any).gtag);
  }, []);

  return {
    gtag,
  };
}
