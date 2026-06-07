import { useEffect } from "react";

/**
 * Activates `.reveal` -> `.reveal.visible` animations on scroll.
 * Mounted once per page; observes any current `.reveal:not(.visible)` nodes.
 */
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
