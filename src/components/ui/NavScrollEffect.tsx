"use client";

import { useEffect } from "react";

/**
 * Adds a `.nav-scrolled` class to the <header> when the user scrolls past 24px.
 * Uses a single passive scroll listener — zero layout thrash, zero re-renders.
 */
export function NavScrollEffect() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    let ticking = false;
    let rafId: number;

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (window.scrollY > 24) {
            header.classList.add("nav-scrolled");
          } else {
            header.classList.remove("nav-scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
