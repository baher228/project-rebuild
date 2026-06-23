"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
        .forEach((element) => element.classList.add("visible"));
      return;
    }

    const observed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    const observeReveals = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };

    const frame = window.requestAnimationFrame(observeReveals);
    const mutationObserver = new MutationObserver(observeReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
