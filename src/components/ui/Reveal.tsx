"use client";

import { useEffect, useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function reveal() {
      if (!node) return;
      node.classList.add("revealed");
    }

    // Bail out if IO not available and reveal immediately
    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      {
        // Fire the moment the element peeks 80px above the viewport bottom
        // Negative bottom margin = "shrink the detection zone from the bottom"
        rootMargin: "0px 0px -80px 0px",
        threshold: 0,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-dir={direction}
      className={`reveal ${className ?? ""}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
