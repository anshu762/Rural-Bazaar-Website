import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }, 100);
  }, [pathname]);

  return null;
}
